import type { Metadata } from 'next';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import CarrierHero from '@/components/carrier/CarrierHero';
import CarrierBenefits from '@/components/carrier/CarrierBenefits';
import CarrierFleet from '@/components/carrier/CarrierFleet';
import CarrierProcess from '@/components/carrier/CarrierProcess';
import CarrierStats from '@/components/carrier/CarrierStats';
import CarrierContact from '@/components/carrier/CarrierContact';

export const metadata: Metadata = {
  title: 'Dla Przewoźnika – Zlecenia i Współpraca',
  description:
    'Dołącz do sieci partnerów Am Pm sp. z o.o.. Oferujemy terminowe płatności (skonto 14 dni), stałe zlecenia w całej Europie, wsparcie spedytora 24/7 i przejrzyste warunki umowy.',
  keywords: [
    'praca dla przewoźnika',
    'zlecenia transportowe',
    'współpraca spedycja',
    'terminowe płatności przewoźnik',
    'partner transportowy',
    'zlecenia TIR Europa',
    'skonto przewoźnik',
    'Am Pm sp. z o.o. przewoźnik',
  ],
  alternates: {
    canonical: '/dla-przewoznika',
  },
  openGraph: {
    title: 'Dla Przewoźnika – Am Pm sp. z o.o.',
    description:
      'Stabilne zlecenia, terminowe płatności i wsparcie 24/7. Zostań partnerem Am Pm sp. z o.o. i rozwijaj swój biznes transportowy w całej Europie.',
    url: '/dla-przewoznika',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dla Przewoźnika – Zlecenia i Współpraca z Am Pm sp. z o.o.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dla Przewoźnika – Zlecenia i Współpraca',
    description:
      'Dołącz do sieci partnerów Am Pm sp. z o.o.. Terminowe płatności, stałe zlecenia w całej Europie i wsparcie spedytora 24/7.',
    images: ['/og-image.jpg'],
  },
};

const jsonLd = {
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
      name: 'Dla Przewoźnika',
      item: 'https://ampm.com.pl/dla-przewoznika',
    },
  ],
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Współpraca z Przewoźnikami – Am Pm sp. z o.o.',
  description:
    'Program partnerski dla przewoźników drogowych. Stałe zlecenia transportowe, terminowe płatności z opcją skonto, wsparcie spedytora 24/7 i uczciwe warunki współpracy.',
  provider: {
    '@type': 'Organization',
    name: 'Am Pm sp. z o.o.',
    url: 'https://ampm.com.pl',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Europa',
  },
  serviceType: 'Transport i spedycja drogowa',
  offers: {
    '@type': 'Offer',
    description: 'Zlecenia transportowe FTL i LTL na terenie całej Europy',
  },
};

export default function CarrierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <CarrierHero />
        <CarrierBenefits />
        <CarrierFleet />
        <CarrierProcess />
        <CarrierStats />
        <CarrierContact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
