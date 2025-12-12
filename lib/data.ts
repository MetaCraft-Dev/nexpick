export type Platform = {
  id: string
  name: string
  logo: string
  rating: number
  tags: string[]
  coupon: string
  discount: string
  affiliateUrl: string
  products: {
    name: string
    price: number
    period: string
  }[]
}

export const platforms: Platform[] = [
  {
    id: 'yinhe',
    name: '银河录像局',
    logo: '🛰️',
    rating: 9.7,
    tags: ['翻车包赔', '秒发货', '老牌商家'],
    coupon: 'xmpick',
    discount: '95折',
    affiliateUrl: 'https://yinhe.example.com',
    products: [
      { name: 'Netflix', price: 17, period: '/月' },
      { name: 'ChatGPT Plus', price: 28, period: '/月' },
      { name: 'YouTube Premium', price: 12, period: '/月' }
    ]
  },
  {
    id: 'naifei',
    name: '奈飞小铺',
    logo: '🎬',
    rating: 9.5,
    tags: ['合租车丰富', '价格稳定'],
    coupon: 'nexpick',
    discount: '9折',
    affiliateUrl: 'https://naifei.example.com',
    products: [
      { name: 'Netflix', price: 15, period: '/月' },
      { name: 'Disney+', price: 13, period: '/月' },
      { name: 'Spotify', price: 10, period: '/月' }
    ]
  },
  {
    id: 'mitang',
    name: '蜜糖商店',
    logo: '🍬',
    rating: 9.2,
    tags: ['客服响应快', '活动多'],
    coupon: 'sweet',
    discount: '95折',
    affiliateUrl: 'https://mitang.example.com',
    products: [
      { name: 'ChatGPT Plus', price: 26, period: '/月' },
      { name: 'YouTube Premium', price: 11, period: '/月' },
      { name: 'Netflix', price: 16, period: '/月' }
    ]
  },
  {
    id: 'metashop',
    name: 'Metashop',
    logo: '🛒',
    rating: 9.0,
    tags: ['库存充足', '渠道多'],
    coupon: 'meta5',
    discount: '95折',
    affiliateUrl: 'https://meta.example.com',
    products: [
      { name: 'Netflix', price: 18, period: '/月' },
      { name: 'Disney+', price: 12, period: '/月' },
      { name: 'Spotify', price: 9, period: '/月' }
    ]
  },
  {
    id: 'huanqiu',
    name: '环球巴士',
    logo: '🚌',
    rating: 8.9,
    tags: ['全球区域', '售后负责'],
    coupon: 'bus8',
    discount: '92折',
    affiliateUrl: 'https://bus.example.com',
    products: [
      { name: 'Netflix', price: 19, period: '/月' },
      { name: 'ChatGPT Plus', price: 27, period: '/月' },
      { name: 'YouTube Premium', price: 12, period: '/月' }
    ]
  }
]

