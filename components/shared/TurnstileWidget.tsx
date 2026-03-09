'use client';

import { useEffect, useRef, useCallback } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    turnstile: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      remove: (widgetId: string) => void;
    };
    onloadTurnstileCallback: () => void;
  }
}

interface TurnstileWidgetProps {
  onSuccess: (token: string) => void;
  onExpired?: () => void;
  onError?: () => void;
}

export default function TurnstileWidget({ onSuccess, onExpired, onError }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !window.turnstile) return;
    if (widgetIdRef.current !== null) return;

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: onSuccess,
      'expired-callback': onExpired,
      'error-callback': onError,
      theme: 'light',
      language: 'pl',
    });
  }, [siteKey, onSuccess, onExpired, onError]);

  useEffect(() => {
    if (window.turnstile) {
      renderWidget();
    } else {
      window.onloadTurnstileCallback = renderWidget;
    }

    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        try { window.turnstile.remove(widgetIdRef.current); } catch {}
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback&render=explicit"
        strategy="lazyOnload"
      />
      <div ref={containerRef} />
    </>
  );
}
