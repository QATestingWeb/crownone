// app/layout.tsx
import React from 'react';
import '../app/globals.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SmoothScroll from '../../components/SmoothScroll/SmoothScroll';
import ClientWrapper from '@/utils/clientWrapper';
import GoogleAnalytics from '@/utils/GoogleAnalytics';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='w-full'>
      <head>
        <title>Crown One</title>
      </head>
      <body>
      <Header />
      <SmoothScroll >
        <ClientWrapper>{children}</ClientWrapper>
        </SmoothScroll>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}