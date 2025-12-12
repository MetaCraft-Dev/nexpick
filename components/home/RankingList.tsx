'use client'

import { platforms } from '../../lib/data'
import { cn } from '../../lib/utils'

function formatMinPrice(name: string) {
  const list = platforms.map((p) => {
    const item = p.products.find((x) => x.name === name)
    return item ? item.price : Infinity
  })
  const min = Math.min(...list)
  if (!isFinite(min)) return '—'
  return `¥${min} 起`
}

export default function RankingList() {
  return (
    <section className="mx-auto max-w-7xl">
      <h2 className="text-xl font-bold text-white">平台比价排行榜</h2>
      <div className="mt-4 divide-y divide-neutral-800 rounded-lg border border-neutral-800 bg-neutral-900/60">
        {platforms
          .slice()
          .sort((a, b) => b.rating - a.rating)
          .map((p, idx) => (
            <div key={p.id} className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="text-xs text-neutral-400">#{idx + 1}</div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800 text-xl">{p.logo}</div>
                <div>
                  <div className="text-sm font-semibold text-white">{p.name}</div>
                  <div className="mt-0.5 text-[11px] text-emerald-400">官方认证</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border border-neutral-800 px-2 py-1 text-[11px] text-neutral-300">{t}</span>
                ))}
                <button
                  onClick={() => navigator.clipboard.writeText(p.coupon)}
                  className={cn('rounded-md border border-violet-600 bg-violet-600/10 px-2 py-1 text-[11px] text-violet-300 hover:bg-violet-600/20')}
                >
                  优惠码 {p.coupon}（{p.discount}）复制
                </button>
              </div>
              <div className="flex items-center gap-3 md:min-w-[220px] md:justify-end">
                <div className="text-sm text-neutral-300">热门：Netflix {formatMinPrice('Netflix')}</div>
                <a
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className={cn('rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-500')}
                >
                  直达官网
                </a>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

