// src/app/_app.tsx

import { useEffect } from 'react';
import './globals.css';
import type { AppProps } from 'next/app';
// import AOS from 'aos';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // AOS.init({
    //   duration: 1000,
    //   once: true,
    // });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;