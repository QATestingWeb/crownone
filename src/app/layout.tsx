// app/layout.tsx
import React from 'react';
import '../app/globals.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SmoothScroll from '../../components/SmoothScroll/SmoothScroll';
import GsapAnimations from '../../components/Animations/GsapAnimations';
import GoogleAnalytics from '@/utils/GoogleAnalytics';

// Hides animated elements before first paint so they don't flash before GSAP runs.
// The class is removed after 4s as a safety net in case scripts fail to load.
const animReadyScript = `
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('anim-ready');
  setTimeout(function () { document.documentElement.classList.remove('anim-ready'); }, 4000);
}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='w-full' suppressHydrationWarning>
      <head>
        <title>Crown One</title>
        <script dangerouslySetInnerHTML={{ __html: animReadyScript }} />
      </head>
      <body>
      <Header />
      <SmoothScroll >
        {children}
        </SmoothScroll>
        <Footer />
        <GsapAnimations />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
