import type { Metadata } from 'next';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import DocumentsHero from '@/components/documents/DocumentsHero';
import DocumentsList from '@/components/documents/DocumentsList';
import DocumentsCta from '@/components/documents/DocumentsCta';
import { client } from '../../src/sanity/client';
import { documentsQuery } from '../../src/sanity/queries';
import type { CompanyDocument } from '../../src/sanity/types';

export const metadata: Metadata = {
  title: 'Dokumenty – Licencje, Certyfikaty i Polisy',
  description:
    'Pobierz dokumenty Am Pm sp. z o.o.: licencja transportowa, certyfikat ISO 9001, normy Euro 6, polisa OCP przewoźnika do 300 000 EUR oraz ubezpieczenie kabotażowe.',
  keywords: [
    'dokumenty transportowe',
    'licencja przewoźnika',
    'certyfikat ISO 9001',
    'normy Euro 6',
    'polisa OCP',
    'ubezpieczenie kabotaż',
    'dokumenty spedycja',
  ],
  alternates: {
    canonical: '/dokumenty',
  },
  openGraph: {
    title: 'Dokumenty – Am Pm sp. z o.o.',
    description:
      'Licencje, certyfikaty i polisy ubezpieczeniowe Am Pm sp. z o.o.. Transparentność i pełna dokumentacja naszej działalności.',
    url: '/dokumenty',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dokumenty – Licencje, Certyfikaty i Polisy Am Pm sp. z o.o.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dokumenty – Licencje, Certyfikaty i Polisy',
    description:
      'Pobierz dokumenty Am Pm sp. z o.o.: licencja transportowa, certyfikat ISO 9001, normy Euro 6 i polisa OCP do 300 000 EUR.',
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
      name: 'Dokumenty',
      item: 'https://ampm.com.pl/dokumenty',
    },
  ],
};

export default async function DocumentsPage() {
  const docs: CompanyDocument[] = await client.fetch(
    documentsQuery,
    {},
    { next: { revalidate: 3600 } },
  );

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Dokumenty Am Pm sp. z o.o.',
    description: 'Licencje, certyfikaty i polisy ubezpieczeniowe dostępne do pobrania.',
    numberOfItems: docs.length,
    itemListElement: docs.map((doc, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: doc.title,
      description: doc.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <DocumentsHero />
        <DocumentsList />
        <DocumentsCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
