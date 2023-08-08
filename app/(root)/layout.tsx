import { Metadata } from 'next';
import '../globals.css'
import { Inter } from 'next/font/google';
import React, { ReactNode } from 'react';

export const metadata: Metadata= {
    title: "The Bitcoin Threads",
    description: "Enter the crypto world"
}

interface RootLayoutProps {
  children: ReactNode;
}
const inter = Inter({subsets: ['latin']})
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>
 {children}  

        
        </body>
  </html>
);

export default RootLayout;
