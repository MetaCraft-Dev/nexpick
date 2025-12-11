'use client'

import { cn } from '../../lib/utils'

interface TickerProps {
  items?: string[]
}

export default function Ticker({ items = [
  '🔥 Live Deals: Netflix -30% at Metashop',
  '⚡ ChatGPT Plus stock low…',
  '💻 Microsoft 365 promo available',
  '🎮 Xbox Game Pass discount'
] }: TickerProps) {
  const content = items.join(' • ')

  return (
    <div className={cn('border-b border-neutral-800 bg-neutral-950/40')}
         aria-label="Live deals ticker">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/10 to-emerald-500/0" />
        <div className="py-2">
          <div className="whitespace-nowrap text-sm text-neutral-300">
            <div className="ticker-marquee inline-block">
              {content}
            </div>
            <div className="ticker-marquee inline-block" aria-hidden="true">
              {'   ' + content}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .ticker-marquee {
          padding-left: 100%;
          animation: marquee 22s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  )
}

