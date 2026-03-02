import type { Metadata } from 'next';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import CareerHero from '@/components/career/CareerHero';
import CareerAbout from '@/components/career/CareerAbout';
import CareerBenefits from '@/components/career/CareerBenefits';
import CareerCulture from '@/components/career/CareerCulture';
import CareerHRContact from '@/components/career/CareerHRContact';
import CareerApplicationForm from '@/components/career/CareerApplicationForm';

export const metadata: Metadata = {
  title: 'Kariera – Dołącz do Zespołu AMPM Sp. z o.o.',
  description:
    'Szukamy pasjonatów logistyki. Dołącz do zespołu AMPM w Lublinie — spedytorzy, koordynatorzy, kierowcy. Stabilne warunki, system premiowy i realne możliwości rozwoju.',
  keywords: [
    'praca AMPM Lublin',
    'praca spedytor Lublin',
    'oferty pracy transport logistyka',
    'kariera spedycja',
    'praca kierowca TIR Lublin',
  ],
  alternates: {
    canonical: '/kariera',
  },
  openGraph: {
    title: 'Kariera – AMPM Sp. z o.o.',
    description:
      'Dołącz do dynamicznego zespołu AMPM. Oferujemy stabilne warunki, system premiowy i realne możliwości rozwoju w branży TSL.',
    url: '/kariera',
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
      item: 'https://ampmspedition.pl/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Kariera',
      item: 'https://ampmspedition.pl/kariera',
    },
  ],
};

const jobPostingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Spedytor / Pracownik działu logistyki',
  description:
    'AMPM Sp. z o.o. poszukuje kandydatów do pracy w branży TSL na terenie Lublina i okolic. Oferujemy stabilne zatrudnienie, atrakcyjne wynagrodzenie i realne możliwości awansu.',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'AMPM Sp. z o.o.',
    sameAs: 'https://ampmspedition.pl',
    logo: 'https://ampmspedition.pl/logo.webp',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ul. Zemborzycka 53b',
      addressLocality: 'Lublin',
      postalCode: '20-445',
      addressCountry: 'PL',
    },
  },
  employmentType: ['FULL_TIME', 'CONTRACTOR'],
  datePosted: '2026-01-01',
  validThrough: '2026-12-31',
  workHours: 'Poniedziałek–Piątek 07:00–15:00',
};

export default function CareerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <CareerHero />
        <CareerAbout />
        <CareerBenefits />
        <CareerCulture />
        <CareerHRContact />
        <CareerApplicationForm />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
