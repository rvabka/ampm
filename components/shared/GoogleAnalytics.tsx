'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { getConsent, CONSENT_EVENT } from '@/lib/consent';

const GA_ID = 'G-KD62TSY04K';

export default function GoogleAnalytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(getConsent() === 'accepted');

    function onConsent(e: Event) {
      setAllowed((e as CustomEvent<string>).detail === 'accepted');
    }

    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  if (!allowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
