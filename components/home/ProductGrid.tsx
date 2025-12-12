import ProductCard, { ProductItem } from './ProductCard'

interface ProductGridProps {
  title: string
  products: ProductItem[]
}

export default function ProductGrid({ title, products }: ProductGridProps) {
  return (
    <section className="mx-auto max-w-7xl">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        {products.map((p, i) => (
          <ProductCard key={`${p.title}-${i}`} {...p} />
        ))}
      </div>
    </section>
  )
}

