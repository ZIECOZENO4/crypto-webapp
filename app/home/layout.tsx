import React, { ReactNode } from 'react';
import Head from 'next/head';
import '../../app/globals.css';
import Providers from '../components/Providers';

interface SideLayoutProps {
  children: ReactNode;
}

const SideLayout: React.FC<SideLayoutProps> = ({ children }) => (
  <html lang="en">
    <Head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <body> 
        <Providers>
            {children}              
        </Providers>
        
        </body>
  </html>
);

export default SideLayout;
