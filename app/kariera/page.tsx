import type { Metadata } from 'next';
import { Suspense } from 'react';
import { client } from '@/src/sanity/client';
import { jobsQuery } from '@/src/sanity/queries';
import type { Job } from '@/src/sanity/types';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import CareerHero from '@/components/career/CareerHero';
import CareerAbout from '@/components/career/CareerAbout';
import CareerBenefits from '@/components/career/CareerBenefits';
import CareerCulture from '@/components/career/CareerCulture';
import CareerHRContact from '@/components/career/CareerHRContact';
import CareerApplicationForm from '@/components/career/CareerApplicationForm';
import CareerJobsSection from '@/components/career/CareerJobsSection';

export const revalidate = 3600;

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
    canonical: 'https://ampm.com.pl/kariera',
  },
  openGraph: {
    title: 'Kariera – AMPM Sp. z o.o.',
    description:
      'Dołącz do dynamicznego zespołu AMPM. Oferujemy stabilne warunki, system premiowy i realne możliwości rozwoju w branży TSL.',
    url: 'https://ampm.com.pl/kariera',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kariera – Dołącz do Zespołu AMPM Sp. z o.o.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kariera – Dołącz do Zespołu AMPM Sp. z o.o.',
    description:
      'Szukamy spedytorów, koordynatorów i kierowców w Lublinie. Stabilne warunki, system premiowy i realne możliwości rozwoju.',
    images: ['/og-image.jpg'],
  },
};

const HIRING_ORG = {
  '@type': 'Organization',
  name: 'AMPM Sp. z o.o.',
  sameAs: 'https://ampm.com.pl',
  logo: 'https://ampm.com.pl/logo.webp',
};

const JOB_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'ul. Zemborzycka 53b',
  addressLocality: 'Lublin',
  postalCode: '20-445',
  addressCountry: 'PL',
};

const TYPE_SCHEMA_MAP: Record<string, string> = {
  'full-time': 'FULL_TIME',
  'part-time': 'PART_TIME',
  contract: 'CONTRACTOR',
  b2b: 'CONTRACTOR',
  internship: 'INTERN',
};

function buildJobPostingJsonLd(job: Job) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    hiringOrganization: HIRING_ORG,
    jobLocation: {
      '@type': 'Place',
      address: JOB_ADDRESS,
    },
    employmentType: TYPE_SCHEMA_MAP[job.type] ?? 'OTHER',
    datePosted: job.publishedAt ?? new Date().toISOString().slice(0, 10),
    directApply: true,
    url: `https://ampm.com.pl/kariera?position=${encodeURIComponent(job.title)}#aplikuj`,
  };
}

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
      name: 'Kariera',
      item: 'https://ampm.com.pl/kariera',
    },
  ],
};

export default async function CareerPage() {
  const jobs = await client.fetch<Job[]>(jobsQuery);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {jobs.map(job => (
        <script
          key={job._id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJobPostingJsonLd(job)) }}
        />
      ))}
      <Navbar />
      <main id="main-content">
        <CareerHero />
        <CareerAbout />
        <CareerBenefits />
        <CareerJobsSection jobs={jobs} />
        <CareerCulture />
        <CareerHRContact />
        <Suspense>
          <CareerApplicationForm />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
