import Link from 'next/link'
import { Search, ArrowUpRight } from 'lucide-react'
import { cn } from '../../lib/utils'

export default function Header() {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-neutral-800',
        'bg-neutral-950/60 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/40'
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-xl font-bold tracking-tight text-white">NexPick Select</div>
          </div>

          <div className="hidden md:block flex-1 px-6">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                aria-label="Search products"
                placeholder="Search platforms, categories, deals…"
                className={cn(
                  'w-full rounded-md bg-neutral-900/60 pl-10 pr-4 h-10',
                  'text-sm text-neutral-200 placeholder:text-neutral-500',
                  'border border-neutral-800 outline-none',
                  'focus:border-violet-500/70 focus:ring-1 focus:ring-violet-500/40'
                )}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/submit"
              className={cn(
                'inline-flex items-center gap-1 rounded-md border border-neutral-800 px-3 py-2',
                'text-sm text-white hover:border-violet-600 hover:bg-violet-600/10'
              )}
            >
              Submit Product
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/blog"
              className={cn(
                'inline-flex items-center gap-1 rounded-md border border-neutral-800 px-3 py-2',
                'text-sm text-white hover:border-emerald-600 hover:bg-emerald-600/10'
              )}
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <input
            aria-label="Search products"
            placeholder="Search platforms, categories, deals…"
            className={cn(
              'w-full rounded-md bg-neutral-900/60 pl-10 pr-4 h-10',
              'text-sm text-neutral-200 placeholder:text-neutral-500',
              'border border-neutral-800 outline-none',
              'focus:border-violet-500/70 focus:ring-1 focus:ring-violet-500/40'
            )}
          />
        </div>
      </div>
    </header>
  )
}

