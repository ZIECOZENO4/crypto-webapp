import React, { ReactNode } from 'react';
import Head from 'next/head';
import '../../app/globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <Head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
