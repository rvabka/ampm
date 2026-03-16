import type { Metadata } from 'next';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import QuoteHero from '@/components/quote/QuoteHero';
import QuoteInfo from '@/components/quote/QuoteInfo';
import QuoteForm from '@/components/quote/QuoteForm';
import QuoteSidebar from '@/components/quote/QuoteSidebar';
import QuoteCta from '@/components/quote/QuoteCta';

export const metadata: Metadata = {
  title: 'Wycena Transportu – Bezpłatna Oferta',
  description:
    'Zapytaj o bezpłatną wycenę transportu drogowego. Podaj trasę, rodzaj towaru i wagę — przygotujemy ofertę dopasowaną do Twoich potrzeb. Transport krajowy i międzynarodowy.',
  keywords: [
    'wycena transportu',
    'zapytanie ofertowe transport',
    'darmowa wycena spedycja',
    'oferta transport drogowy',
    'wycena TIR',
    'transport ciężarowy cena',
    'wycena fracht',
  ],
  alternates: {
    canonical: '/wycena',
  },
  openGraph: {
    title: 'Wycena Transportu – Am Pm sp. z o.o.',
    description:
      'Bezpłatne zapytanie ofertowe o transport drogowy. Opisz trasę i ładunek — przygotujemy indywidualną ofertę.',
    url: '/wycena',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wycena Transportu – Bezpłatna Oferta Am Pm sp. z o.o.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wycena Transportu – Bezpłatna Oferta',
    description:
      'Zapytaj o bezpłatną wycenę transportu drogowego. Podaj trasę, rodzaj towaru i wagę — przygotujemy ofertę na miarę.',
    images: ['/og-image.jpg'],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Strona Główna',
      item: 'https://ampm.com.pl/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Wycena',
      item: 'https://ampm.com.pl/wycena',
    },
  ],
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Wycena Transportu Drogowego',
  description:
    'Bezpłatna wycena transportu drogowego krajowego i międzynarodowego. Oferujemy przewozy FTL, LTL, express oraz transport specjalistyczny ADR.',
  provider: {
    '@type': 'Organization',
    name: 'Am Pm sp. z o.o.',
    url: 'https://ampm.com.pl',
  },
  areaServed: { '@type': 'Place', name: 'Europa' },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'PLN',
    description: 'Bezpłatna wycena transportu',
  },
};

export default function QuotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <QuoteHero />
        <QuoteInfo />

        <section
          id="formularz"
          className="py-20 px-6 lg:px-8 bg-background-light"
          aria-labelledby="quote-section-heading"
        >
          <h2 id="quote-section-heading" className="sr-only">
            Formularz wyceny transportu
          </h2>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-2/3">
              <QuoteForm />
            </div>
            <QuoteSidebar />
          </div>
        </section>

        <QuoteCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
