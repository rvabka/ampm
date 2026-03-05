import type { Metadata } from 'next';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import AboutHero from '@/components/about/AboutHero';
import AboutHistory from '@/components/about/AboutHistory';
import AboutMission from '@/components/about/AboutMission';
import AboutStats from '@/components/about/AboutStats';
import AboutStandards from '@/components/about/AboutStandards';
import AboutFleet from '@/components/about/AboutFleet';
import AboutMap from '@/components/about/AboutMap';
import AboutValues from '@/components/about/AboutValues';
import AboutTeam from '@/components/about/AboutTeam';

export const metadata: Metadata = {
  title: 'O Nas – Firma Spedycyjna z Lublina',
  description:
    'Poznaj AMPM Sp. z o.o. – firmę spedycyjną z Lublina specjalizującą się w transporcie drogowym FTL i LTL na terenie Polski i całej Unii Europejskiej. Dowiedz się, kim jesteśmy i co nas wyróżnia.',
  keywords: [
    'AMPM spedycja',
    'firma spedycyjna Lublin',
    'transport drogowy Polska UE',
    'spedycja FTL LTL',
    'transport międzynarodowy',
    'o nas AMPM',
    'spedytor Lublin',
    'przewozy drogowe Europa',
    'transport towarów Niemcy Francja',
    'firma TSL Lublin',
  ],
  alternates: {
    canonical: '/o-nas',
  },
  openGraph: {
    title: 'O Nas – AMPM Sp. z o.o. Firma Spedycyjna',
    description:
      'Jesteśmy zespołem specjalistów z Lublina specjalizujących się w transporcie drogowym FTL i LTL na terenie Polski i całej Unii Europejskiej. Poznaj nasze priorytety i sposób pracy.',
    url: '/o-nas',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'O Nas – AMPM Sp. z o.o. Firma Spedycyjna z Lublina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O Nas – AMPM Sp. z o.o. Firma Spedycyjna',
    description:
      'Poznaj AMPM Sp. z o.o. – firmę spedycyjną z Lublina specjalizującą się w transporcie drogowym FTL i LTL na terenie Polski i UE.',
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
      name: 'O Nas',
      item: 'https://ampm.com.pl/o-nas',
    },
  ],
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://ampm.com.pl/#organization',
  name: 'AMPM Sp. z o.o.',
  alternateName: 'AMPM Full Time Spedition',
  url: 'https://ampm.com.pl',
  logo: 'https://ampm.com.pl/logo.png',
  description:
    'Firma spedycyjna z Lublina specjalizująca się w transporcie drogowym FTL i LTL na terenie Polski i całej Unii Europejskiej. Obsługujemy transport krajowy i międzynarodowy do wszystkich krajów UE.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Zemborzycka 53b',
    addressLocality: 'Lublin',
    postalCode: '20-445',
    addressCountry: 'PL',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+48-570-112-512',
    contactType: 'customer service',
    availableLanguage: ['Polish'],
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '15:00',
    },
  },
  email: 'biuro@ampm.com.pl',
  areaServed: {
    '@type': 'Place',
    name: 'Unia Europejska',
  },
  knowsAbout: [
    'transport drogowy',
    'spedycja FTL',
    'spedycja LTL',
    'transport międzynarodowy',
    'logistyka',
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <AboutHero />
        <AboutHistory />
        <AboutMission />
        <AboutStats />
        <AboutStandards />
        <AboutFleet />
        <AboutValues />
        <AboutMap />
        <AboutTeam />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
