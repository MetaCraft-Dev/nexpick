import type { Platform } from '../../types'
import PlatformCard from './PlatformCard'

interface PlatformGridProps {
  platforms: Platform[]
}

export default function PlatformGrid({ platforms }: PlatformGridProps) {
  const sorted = [...platforms].sort((a, b) => {
    if (a.is_sponsored && !b.is_sponsored) return -1
    if (!a.is_sponsored && b.is_sponsored) return 1
    if ((b.trust_score ?? 0) !== (a.trust_score ?? 0)) {
      return (b.trust_score ?? 0) - (a.trust_score ?? 0)
    }
    return a.name.localeCompare(b.name)
  })

  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((p) => (
          <PlatformCard key={p.id} platform={p} />
        ))}
      </div>
    </section>
  )
}

