'use client'

import { cn } from '../../lib/utils'

export default function HeroSearch() {
  return (
    <section className={cn('bg-neutral-950')}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-white">全网流媒体合租平台价格监控与评测</h1>
        <h2 className="mt-3 text-neutral-300 md:text-lg">收录 20+ 优质服务商，实时比价 Netflix, ChatGPT, YouTube 会员</h2>
        <div className="mx-auto mt-8 max-w-2xl">
          <input
            aria-label="搜索全网最低价"
            placeholder="输入 'Netflix' 查看全网最低价..."
            className={cn(
              'w-full h-12 rounded-lg border border-neutral-700 bg-neutral-900/60 px-4',
              'text-neutral-200 placeholder:text-neutral-500',
              'focus:border-violet-500 focus:ring-1 focus:ring-violet-500'
            )}
          />
        </div>
      </div>
    </section>
  )
}

