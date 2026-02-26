import type { Metadata } from 'next';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import CarrierHero from '@/components/carrier/CarrierHero';
import CarrierBenefits from '@/components/carrier/CarrierBenefits';
import CarrierFleet from '@/components/carrier/CarrierFleet';
import CarrierStats from '@/components/carrier/CarrierStats';
import CarrierContact from '@/components/carrier/CarrierContact';

export const metadata: Metadata = {
  title: 'Dla Przewoźnika – Współpraca i Zlecenia Transportowe',
  description:
    'Dołącz do sieci partnerów AMPM Spedition. Oferujemy terminowe płatności (skonto 14 dni), stałe zlecenia w całej Europie, wsparcie spedytora 24/7 i przejrzyste warunki umowy.',
  keywords: [
    'praca dla przewoźnika',
    'zlecenia transportowe',
    'współpraca spedycja',
    'terminowe płatności przewoźnik',
    'partner transportowy',
    'zlecenia TIR Europa',
    'skonto przewoźnik',
    'AMPM Spedition przewoźnik',
  ],
  alternates: {
    canonical: '/dla-przewoznika',
  },
  openGraph: {
    title: 'Dla Przewoźnika – AMPM Spedition',
    description:
      'Stabilne zlecenia, terminowe płatności i wsparcie 24/7. Zostań partnerem AMPM Spedition i rozwijaj swój biznes transportowy w całej Europie.',
    url: '/dla-przewoznika',
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
      item: 'https://ampmspedition.pl/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Dla Przewoźnika',
      item: 'https://ampmspedition.pl/dla-przewoznika',
    },
  ],
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Współpraca z Przewoźnikami – AMPM Spedition',
  description:
    'Program partnerski dla przewoźników drogowych. Stałe zlecenia transportowe, terminowe płatności z opcją skonto, wsparcie spedytora 24/7 i uczciwe warunki współpracy.',
  provider: {
    '@type': 'Organization',
    name: 'AMPM Full Time Spedition',
    url: 'https://ampmspedition.pl',
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
        <CarrierStats />
        <CarrierContact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
