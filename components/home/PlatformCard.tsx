import Image from 'next/image'
import { cn } from '../../lib/utils'
import type { Platform } from '../../types'

interface PlatformCardProps {
  platform: Platform
}

function extractPriceNumber(price: string | null): string | null {
  if (!price) return null
  const match = price.replace(/,/g, '').match(/(\d+(?:\.\d+)?)/)
  return match ? match[1] : null
}

function resolveCurrency(region: string | null): string {
  if (!region) return 'USD'
  if (region === 'CN') return 'CNY'
  if (region === 'US') return 'USD'
  return 'USD'
}

export default function PlatformCard({ platform }: PlatformCardProps) {
  const price = extractPriceNumber(platform.price_monthly)
  const currency = resolveCurrency(platform.region)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: platform.name,
    sku: platform.slug,
    brand: platform.name,
    offers: {
      '@type': 'Offer',
      priceCurrency: currency,
      price: price ?? undefined,
      url: platform.affiliate_link ?? undefined,
      availability: 'https://schema.org/InStock',
    },
  }

  const sponsoredRing = platform.is_sponsored
    ? 'ring-1 ring-transparent bg-gradient-to-b from-yellow-500/20 to-violet-500/20'
    : 'ring-1 ring-neutral-800'

  return (
    <div
      className={cn(
        'relative rounded-xl',
        'bg-neutral-900/60 backdrop-blur',
        'p-4',
        sponsoredRing
      )}
    >
      {platform.is_sponsored && (
        <div className="absolute -top-2 -left-2 rounded-md bg-gradient-to-r from-yellow-500/80 to-violet-500/80 px-2 py-0.5 text-[11px] font-semibold text-black">
          Featured
        </div>
      )}

      <div className="flex items-center gap-3">
        {platform.logo_url ? (
          <div className="relative h-10 w-10 overflow-hidden rounded-md border border-neutral-800">
            <Image
              src={platform.logo_url}
              alt={`${platform.name} logo`}
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
        ) : (
          <div className="h-10 w-10 rounded-md border border-neutral-800 bg-neutral-800" />
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-white">{platform.name}</h3>
            <span className="text-[11px] text-neutral-400">{platform.category}</span>
          </div>
          {platform.description && (
            <p className="mt-0.5 text-xs text-neutral-400 line-clamp-2">{platform.description}</p>
          )}
        </div>
        <div className="text-right">
          {platform.original_price && (
            <div className="text-xs text-neutral-500 line-through">{platform.original_price}</div>
          )}
          <div className="text-sm font-bold text-emerald-400">{platform.price_monthly ?? '—'}</div>
          <div className="mt-1 inline-flex items-center rounded-md border border-neutral-800 px-1.5 py-0.5 text-[11px] text-neutral-300">
            Trust {platform.trust_score ?? 0}
          </div>
        </div>
      </div>

      {platform.tags && platform.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {platform.tags.map((t) => (
            <span key={t} className="rounded-md border border-neutral-800 px-1.5 py-0.5 text-[11px] text-neutral-300">
              {t}
            </span>
          ))}
        </div>
      )}

      {platform.affiliate_link && (
        <a
          href={platform.affiliate_link}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'mt-3 inline-flex w-full items-center justify-center rounded-md',
            'border border-neutral-800 bg-neutral-800/50 px-3 py-2 text-sm',
            'text-white hover:border-violet-500 hover:bg-violet-500/10'
          )}
        >
          View Offer
        </a>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}

