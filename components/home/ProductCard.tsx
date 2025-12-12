import Link from 'next/link'
import { cn } from '../../lib/utils'

export interface ProductItem {
  title: string
  description: string
  price: string
  icon?: string
  link?: string
}

export default function ProductCard({ title, description, price, icon = '🎬', link = '#' }: ProductItem) {
  return (
    <div className={cn('rounded-xl border border-neutral-800 bg-neutral-900/60 p-4')}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800 text-2xl">{icon}</div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="mt-0.5 text-xs text-neutral-400">{description}</div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-lg font-bold text-red-500">{price}</div>
        <Link href={link} target="_blank" className={cn('rounded-md border border-neutral-800 bg-violet-600 px-3 py-2 text-sm font-medium text-white hover:bg-violet-500')}>立即购买</Link>
      </div>
    </div>
  )
}

