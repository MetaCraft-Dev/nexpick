import { platforms } from '../../lib/data'

const products = ['Netflix', 'ChatGPT Plus', 'Disney+', 'Spotify']
const platformNames = ['银河录像局', '奈飞小铺', '蜜糖商店']

function getPrice(platform: string, product: string): string {
  const p = platforms.find((x) => x.name === platform)
  const item = p?.products.find((y) => y.name === product)
  return item ? `¥${item.price}` : '—'
}

function getLowest(product: string): string {
  let best = { name: '', price: Infinity }
  for (const p of platforms) {
    const item = p.products.find((x) => x.name === product)
    if (item && item.price < best.price) best = { name: p.name, price: item.price }
  }
  return best.price === Infinity ? '—' : `${best.name} ¥${best.price}`
}

export default function ComparisonTable() {
  return (
    <section className="mx-auto max-w-7xl">
      <h2 className="text-xl font-bold text-white">热门产品比价表格</h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-neutral-800">
        <table className="min-w-full text-sm">
          <thead className="bg-neutral-900/60 text-neutral-300">
            <tr>
              <th className="px-4 py-3 text-left">产品名称</th>
              {platformNames.map((name) => (
                <th key={name} className="px-4 py-3 text-left">{name}</th>
              ))}
              <th className="px-4 py-3 text-left">最低价推荐</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod} className="border-t border-neutral-800">
                <td className="px-4 py-3 text-white">{prod}</td>
                {platformNames.map((name) => (
                  <td key={`${prod}-${name}`} className="px-4 py-3 text-neutral-200">{getPrice(name, prod)}</td>
                ))}
                <td className="px-4 py-3 font-semibold text-emerald-400">{getLowest(prod)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

