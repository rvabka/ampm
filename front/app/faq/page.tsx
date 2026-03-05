import type { Metadata } from 'next';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import FaqHero from '@/components/faq/FaqHero';
import FaqList from '@/components/faq/FaqList';
import FaqContact from '@/components/faq/FaqContact';
import { FAQ_ITEMS } from '@/components/faq/faq-data';

export const metadata: Metadata = {
  title: 'FAQ – Pytania o Transport i Spedycję',
  description:
    'Odpowiedzi na najważniejsze pytania dotyczące transportu drogowego, floty EURO 6, ubezpieczenia OCP, dokumentów CMR i warunków płatności w AMPM Spedition.',
  keywords: [
    'FAQ transport',
    'pytania spedycja',
    'ubezpieczenie OCP',
    'dokumenty CMR',
    'terminy płatności przewoźnicy',
    'transport ciężarowy pytania',
    'flota EURO 6',
  ],
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ – AMPM Spedition',
    description:
      'Znajdź odpowiedzi na pytania o transport drogowy, flotę EURO 6, ubezpieczenie OCP i warunki współpracy z AMPM Spedition.',
    url: '/faq',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FAQ – Pytania o Transport i Spedycję – AMPM Spedition',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ – Pytania o Transport i Spedycję',
    description:
      'Odpowiedzi na pytania o transport drogowy, flotę EURO 6, ubezpieczenie OCP, dokumenty CMR i warunki współpracy z AMPM Spedition.',
    images: ['/og-image.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <FaqHero />
        <FaqList />
        <FaqContact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
