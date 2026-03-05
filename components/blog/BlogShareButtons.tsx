'use client';

import { useState } from 'react';
import { Link2, Check } from 'lucide-react';

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface BlogShareButtonsProps {
  url: string;
  title: string;
}

export default function BlogShareButtons({ url, title }: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: do nothing
    }
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-gray-500">Udostępnij:</span>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Udostępnij na Facebooku"
        className="w-9 h-9 rounded-full bg-[#1877f2] text-white flex items-center justify-center hover:opacity-90 transition"
      >
        <FacebookIcon />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Udostępnij na LinkedIn"
        className="w-9 h-9 rounded-full bg-[#0a66c2] text-white flex items-center justify-center hover:opacity-90 transition"
      >
        <LinkedInIcon />
      </a>
      <button
        onClick={copyLink}
        aria-label="Kopiuj link"
        className={`w-9 h-9 rounded-full flex items-center justify-center transition ${
          copied ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        {copied ? <Check size={15} /> : <Link2 size={15} />}
      </button>
    </div>
  );
}
