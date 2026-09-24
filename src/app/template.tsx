"use client"
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

let isFirstLoad = true;

// Re-mounts on every navigation, so each page slides in. Skipped on first load to avoid hiding server-rendered content.
export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isFirstLoad) {
      isFirstLoad = false;
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.from(ref.current, { autoAlpha: 0, y: 40, duration: 0.8, ease: 'power3.out', clearProps: 'all' });
  });

  return <div ref={ref}>{children}</div>;
}
