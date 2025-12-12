import HeaderCompare from '../components/layout/HeaderCompare'
import HeroSearch from '../components/home/HeroSearch'
import RankingList from '../components/home/RankingList'
import ComparisonTable from '../components/home/ComparisonTable'
import Footer from '../components/layout/Footer'
import { platforms } from '../lib/data'

export default async function Page() {

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <HeaderCompare />
      <HeroSearch />
      <div className="container mx-auto px-4 py-12 space-y-12">
        <RankingList />
        <ComparisonTable />
      </div>
      <Footer />
    </main>
  )
}
