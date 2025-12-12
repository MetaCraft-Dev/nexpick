import Link from 'next/link'
import { cn } from '../../lib/utils'

export default function BannerHero() {
  return (
    <section className={cn('bg-gradient-to-r from-violet-700 to-blue-700')}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white">一站式数字订阅服务平台</h1>
        <p className="mt-4 text-neutral-200 md:text-lg">Netflix, ChatGPT, YouTube Premium 等会员合租，低至 2 折</p>
        <div className="mt-8">
          <Link href="/products" className={cn('inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-100')}>查看所有产品</Link>
        </div>
      </div>
    </section>
  )
}

