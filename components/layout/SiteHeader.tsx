import Link from 'next/link'
import { Search } from 'lucide-react'
import { cn } from '../../lib/utils'

export default function SiteHeader() {
  return (
    <header className={cn('sticky top-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-neutral-800')}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="text-lg font-bold text-white">NexPick</div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="text-neutral-300 hover:text-white">首页</Link>
            <Link href="/categories/streaming" className="text-neutral-300 hover:text-white">流媒体</Link>
            <Link href="/categories/ai-tools" className="text-neutral-300 hover:text-white">AI工具</Link>
            <Link href="/categories/software" className="text-neutral-300 hover:text-white">办公软件</Link>
            <Link href="/blog" className="text-neutral-300 hover:text-white">博客</Link>
          </nav>
          <div className="flex items-center gap-3">
            <button aria-label="Search" className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-700 bg-neutral-900/60 text-neutral-300 hover:text-white">
              <Search className="h-4 w-4" />
            </button>
            <Link href="/auth" className={cn('rounded-md px-3 py-2 text-sm font-medium', 'bg-violet-600 text-white hover:bg-violet-500')}>登录/注册</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

