import Link from 'next/link'
import { cn } from '../../lib/utils'

export default function HeaderCompare() {
  return (
    <header className={cn('sticky top-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-neutral-800')}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="text-lg font-bold text-white">NexPick 比价</div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="text-neutral-300 hover:text-white">首页</Link>
            <Link href="/ranking" className="text-neutral-300 hover:text-white">平台排行榜</Link>
            <Link href="/coupons" className="text-neutral-300 hover:text-white">优惠码大全</Link>
            <Link href="/guide" className="text-neutral-300 hover:text-white">避坑指南</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/submit" className={cn('rounded-md px-3 py-2 text-sm font-medium', 'bg-emerald-600 text-white hover:bg-emerald-500')}>提交收录</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

