export type Category = 'Streaming' | 'AI Tools' | 'Software' | 'Gaming'

export interface Platform {
  id: string
  created_at: string
  name: string
  slug: string
  category: Category
  description: string | null
  price_monthly: string | null
  original_price: string | null
  affiliate_link: string | null
  trust_score: number
  tags: string[]
  is_sponsored: boolean
  region: string | null
  logo_url: string | null
}

export interface Post {
  id: string
  title: string
  slug: string
  content: string
  is_sponsored: boolean
  published: boolean
}

