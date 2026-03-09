'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, Cookie } from 'lucide-react';
import Button from '@/components/shared/Button';

const STORAGE_KEY = 'ampm_cookie_consent';

type ConsentValue = 'accepted' | 'rejected';

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    try {
      return !localStorage.getItem(STORAGE_KEY);
    } catch {
      return true;
    }
  });

  function handleConsent(value: ConsentValue) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // storage unavailable
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal={false}
      aria-label="Informacja o plikach cookies"
      className="fixed bottom-0 left-0 right-0 z-9999 p-4 md:p-6"
    >
      <div className="max-w-4xl mx-auto bg-[#111827] border border-gray-700 rounded-2xl shadow-2xl p-5 md:p-6 flex flex-col md:flex-row gap-4 md:items-center">
        <div className="shrink-0 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
          <Cookie size={20} />
        </div>

        <div className="flex-1 text-sm text-gray-400 leading-relaxed">
          <p>
            <span className="text-white font-semibold">Używamy plików cookies.</span>{' '}
            Nasza strona wykorzystuje niezbędne pliki cookies zapewniające prawidłowe działanie
            serwisu oraz usługę Cloudflare Turnstile chroniącą formularze przed spamem.
            Szczegóły znajdziesz w{' '}
            <Link
              href="/polityka-cookies"
              className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
            >
              Polityce Cookies
            </Link>
            .
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleConsent('rejected')}
            className="text-gray-400! hover:text-white! border border-gray-600 hover:border-gray-400 rounded-lg!"
          >
            Odrzuć
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => handleConsent('accepted')}
            className="rounded-lg!"
          >
            Akceptuj
          </Button>
          <button
            onClick={() => handleConsent('rejected')}
            aria-label="Zamknij"
            className="p-1.5 text-gray-500 hover:text-white transition-colors duration-200"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
