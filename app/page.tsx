import Header from '../components/layout/Header'
import Ticker from '../components/home/Ticker'
import Hero from '../components/home/Hero'
import PlatformGrid from '../components/home/PlatformGrid'
import type { Platform } from '../types'
import { supabaseServer } from '../lib/supabase'

export default async function Page() {
  const supabase = supabaseServer()
  const { data } = await supabase
    .from('platforms')
    .select('*')
    .order('is_sponsored', { ascending: false })
    .order('trust_score', { ascending: false })

  const platforms: Platform[] = (data ?? []) as Platform[]

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <Ticker />
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <PlatformGrid platforms={platforms} />
      </div>
    </main>
  )
}

