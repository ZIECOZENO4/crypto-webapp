import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: ' Bitcoin and Crypto  website',
  description: 'The home of coin traders',
  icons: ''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Providers>
            {children}  
        </Providers>
    
        
        </body>
    </html>
  )
} 
