import SiteHeader from '../components/layout/SiteHeader'
import BannerHero from '../components/home/BannerHero'
import ProductGrid from '../components/home/ProductGrid'
import Footer from '../components/layout/Footer'
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
  const streaming = platforms.filter((p) => p.category === 'Streaming')
  const ai = platforms.filter((p) => p.category === 'AI Tools')
  const toProductItems = (list: Platform[], icon: string) =>
    list.map((p) => ({
      title: p.name,
      description: p.description ?? '',
      price: p.price_monthly ?? '¥—/月',
      icon,
      link: p.affiliate_link ?? '#'
    }))

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <SiteHeader />
      <BannerHero />
      <div className="container mx-auto px-4 py-12 space-y-12">
        <ProductGrid title="热门流媒体" products={toProductItems(streaming, '🎬')} />
        <ProductGrid title="AI 生产力工具" products={toProductItems(ai, '🤖')} />
      </div>
      <Footer />
    </main>
  )
}
