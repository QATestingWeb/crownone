'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      render: (
        container: HTMLElement,
        parameters: {
          sitekey: string;
          callback?: (token: string) => void;
          'expired-callback'?: () => void;
          'error-callback'?: () => void;
        }
      ) => number;
      reset: (widgetId?: number) => void;
    };
  }
}

export type RecaptchaHandle = {
  reset: () => void;
};

type RecaptchaProps = {
  onChange: (token: string | null) => void;
  siteKey?: string;
};

const Recaptcha = forwardRef<RecaptchaHandle, RecaptchaProps>(function Recaptcha(
  { onChange, siteKey = SITE_KEY },
  ref
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetIdRef.current === null || !window.grecaptcha) {
        return;
      }

      try {
        window.grecaptcha.reset(widgetIdRef.current);
      } catch {
        // Widget may already be gone after a remount.
      }
      onChangeRef.current(null);
    },
  }));

  useEffect(() => {
    if (!siteKey) {
      return;
    }

    let cancelled = false;

    const renderWidget = () => {
      if (cancelled || !containerRef.current || !siteKey || !window.grecaptcha?.ready) {
        return;
      }

      window.grecaptcha.ready(() => {
        if (cancelled || !containerRef.current || widgetIdRef.current !== null) {
          return;
        }

        if (containerRef.current.childElementCount > 0) {
          return;
        }

        try {
          widgetIdRef.current = window.grecaptcha!.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => onChangeRef.current(token),
            'expired-callback': () => onChangeRef.current(null),
            'error-callback': () => onChangeRef.current(null),
          });
        } catch {
          // Google throws if this container was already rendered.
        }
      });
    };

    const scriptSelector = 'script[src*="google.com/recaptcha/api.js"]';
    const existingScript = document.querySelector<HTMLScriptElement>(scriptSelector);

    if (window.grecaptcha?.ready) {
      renderWidget();
    } else if (existingScript) {
      existingScript.addEventListener('load', renderWidget);
    } else {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.onload = renderWidget;
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
      widgetIdRef.current = null;
    };
  }, [siteKey]);

  if (!siteKey) {
    return null;
  }

  return (
    <div className="mb-6 flex min-h-[78px] justify-center overflow-visible">
      <div ref={containerRef} />
    </div>
  );
});

export default Recaptcha;
