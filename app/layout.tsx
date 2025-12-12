import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NexPick 比价'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'NexPick 比价',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              url: 'https://nexpick.cc',
              description: '流媒体账号合租比价聚合平台，收录 20+ 服务商，实时比价与评测，含优惠码与直达链接。'
            })
          }}
        />
      </body>
    </html>
  )
}
