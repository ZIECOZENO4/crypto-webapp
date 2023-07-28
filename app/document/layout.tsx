
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: ' Bitcoin and Crypto  Documents',
  description: 'TLearn about crypto first',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/path/to/your/icon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
