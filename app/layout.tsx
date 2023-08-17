import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './components/Providers'
import { ClerkProvider } from '@clerk/nextjs'
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
    <ClerkProvider>
    <html lang="en">
      <body >
        <Providers>
            {children}  
        </Providers>
    
        
        </body>
    </html>

    </ClerkProvider>

  )
} 
