import { cn } from '../../lib/utils'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className={cn(
            'absolute left-1/2 top-[-100px] h-[360px] w-[360px] -translate-x-1/2 rounded-full',
            'bg-gradient-to-br from-violet-600/40 via-fuchsia-500/20 to-emerald-500/40 blur-3xl'
          )}
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Stop Overpaying for Digital Subscriptions.
        </h1>
        <p className="mt-4 text-base md:text-lg text-neutral-300">
          Compare 100+ Verified Sellers for AI, Streaming, & Software.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/40 px-4 py-3 text-sm text-neutral-300">
          <span className="text-emerald-400">✓</span>
          Trusted listings, transparent pricing, and curated sponsored deals.
        </div>
      </div>
    </section>
  )
}

