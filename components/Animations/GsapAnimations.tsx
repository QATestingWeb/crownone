"use client"
import React, { useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/*
 * Page-wide animation engine. Markup opts in with data attributes:
 *   data-aos / data-aos-desktop / data-aos-mobile="fade-up"  3D scroll reveal (existing AOS names)
 *   data-aos-duration="1500"                                  reveal duration in ms
 *   data-split                                                 per-character 3D heading reveal
 *   data-count                                                 count up to the element's number ("100,000+")
 *   data-tilt="8"                                              3D tilt towards the pointer (max degrees)
 *   data-parallax="0.2"                                        scroll parallax speed
 */

const REVEAL_SELECTOR = '[data-aos], [data-aos-desktop], [data-aos-mobile]';
const DONE = 'data-anim-done';

const REVEALS: Record<string, gsap.TweenVars> = {
  'fade-up': { y: 80, rotateX: -25 },
  'fade-down': { y: -80, rotateX: 25 },
  'fade-left': { x: 100, rotateY: -20 },
  'fade-right': { x: -100, rotateY: 20 },
  'fade-in': { filter: 'blur(12px)' },
  'zoom-in': { scale: 0.6 },
  'zoom-out': { scale: 1.25 },
  'zoom-in-up': { scale: 0.6, y: 80 },
  'zoom-in-down': { scale: 0.6, y: -80 },
  'flip-left': { rotateY: -90 },
};

const isMobile = () => window.innerWidth <= 768;
const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// Finds unprocessed matches inside root (including root itself) and marks them as processed.
function claim(root: Element | Document, selector: string) {
  const found = Array.from(root.querySelectorAll<HTMLElement>(selector));
  if (root instanceof HTMLElement && root.matches(selector)) found.unshift(root);
  const fresh = found.filter((el) => !el.hasAttribute(DONE));
  fresh.forEach((el) => el.setAttribute(DONE, ''));
  return fresh;
}

function setupReveals(root: Element | Document) {
  const elements = claim(root, REVEAL_SELECTOR).filter((el) => {
    const name = isMobile() ? el.dataset.aosMobile : el.dataset.aosDesktop;
    const from = REVEALS[name ?? el.dataset.aos ?? ''];
    if (!from) return false;
    gsap.set(el, { ...from, autoAlpha: 0, transformPerspective: 1000 });
    return true;
  });
  if (!elements.length) return;

  ScrollTrigger.batch(elements, {
    start: 'top 90%',
    once: true,
    onEnter: (batch) => {
      (batch as HTMLElement[]).forEach((el, i) => {
        gsap.to(el, {
          x: 0, y: 0, rotateX: 0, rotateY: 0, scale: 1, filter: 'blur(0px)', autoAlpha: 1,
          duration: Math.min(Number(el.dataset.aosDuration) / 1000 || 1.1, 1.6),
          delay: i * 0.12,
          ease: 'expo.out',
          // Parallax elements keep their transform so the scrubbed offset isn't wiped.
          clearProps: el.hasAttribute('data-parallax') ? 'filter,opacity,visibility' : 'transform,filter,opacity,visibility',
        });
      });
    },
  });
}

function setupSplitHeadings(root: Element | Document) {
  claim(root, '[data-split]').forEach((el) => {
    const split = SplitText.create(el, { type: 'words,chars' });
    gsap.set(el, { perspective: 800 });
    gsap.from(split.chars, {
      yPercent: 120,
      rotateX: -90,
      autoAlpha: 0,
      transformOrigin: '50% 100%',
      stagger: 0.025,
      duration: 1,
      ease: 'back.out(1.7)',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onComplete: () => split.revert(),
    });
  });
}

function setupCounters(root: Element | Document) {
  claim(root, '[data-count]').forEach((el) => {
    const match = el.textContent?.trim().match(/^([\d.,]+)(.*)$/);
    if (!match) return;
    const [, numberText, suffix] = match;
    const target = parseFloat(numberText.replace(/,/g, ''));
    const decimals = (numberText.split('.')[1] ?? '').length;
    const format = (value: number) =>
      (numberText.includes(',')
        ? value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
        : value.toFixed(decimals)) + suffix;

    const counter = { value: 0 };
    el.textContent = format(0);
    gsap.to(counter, {
      value: target,
      duration: 2.2,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => { el.textContent = format(counter.value); },
      onComplete: () => { el.textContent = format(target); },
    });
  });
}

function setupParallax(root: Element | Document) {
  claim(root, '[data-parallax]').forEach((el) => {
    const speed = Number(el.dataset.parallax) || 0.2;
    gsap.fromTo(el, { yPercent: -speed * 50 }, {
      yPercent: speed * 50,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
}

function setupTilt(root: Element | Document, cleanups: (() => void)[]) {
  claim(root, '[data-tilt]').forEach((el) => {
    if (!canHover()) return;
    const max = Number(el.dataset.tilt) || 8;
    gsap.set(el, { transformPerspective: 900 });
    const rotateX = gsap.quickTo(el, 'rotationX', { duration: 0.5, ease: 'power3.out' });
    const rotateY = gsap.quickTo(el, 'rotationY', { duration: 0.5, ease: 'power3.out' });

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      rotateY(((e.clientX - rect.left) / rect.width - 0.5) * max * 2);
      rotateX(-((e.clientY - rect.top) / rect.height - 0.5) * max * 2);
    };
    const onLeave = () => { rotateX(0); rotateY(0); };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    cleanups.push(() => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    });
  });
}

const GsapAnimations: React.FC = () => {
  const pathname = usePathname();
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cleanups: (() => void)[] = [];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const process = (root: Element | Document) => {
      if (reducedMotion) {
        claim(root, `${REVEAL_SELECTOR}, [data-split]`);
        return;
      }
      setupSplitHeadings(root);
      setupReveals(root);
      setupCounters(root);
      setupParallax(root);
      setupTilt(root, cleanups);
    };

    process(document);

    if (!reducedMotion) {
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
      });
    }

    // Pick up elements rendered after the initial pass (menus, sliders, lazy content).
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((m) => m.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) process(node);
      }));
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Images loading in change the page height, so trigger positions need recalculating.
    let refreshId: ReturnType<typeof setTimeout>;
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(refreshId);
      refreshId = setTimeout(() => ScrollTrigger.refresh(), 200);
    });
    resizeObserver.observe(document.body);

    return () => {
      mutationObserver.disconnect();
      resizeObserver.disconnect();
      clearTimeout(refreshId);
      cleanups.forEach((fn) => fn());
    };
  }, { dependencies: [pathname], revertOnUpdate: true });

  return (
    <div
      ref={progressRef}
      className='fixed top-0 left-0 w-full h-[3px] origin-left pointer-events-none'
      style={{ transform: 'scaleX(0)', zIndex: 10000, background: 'linear-gradient(90deg, #ff7438, #fe4f11)' }}
    />
  );
};

export default GsapAnimations;
