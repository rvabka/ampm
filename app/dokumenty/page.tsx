import type { Metadata } from 'next';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import DocumentsHero from '@/components/documents/DocumentsHero';
import DocumentsList from '@/components/documents/DocumentsList';
import DocumentsCta from '@/components/documents/DocumentsCta';
import { DOCUMENT_CATEGORIES } from '@/components/documents/documents-data';

export const metadata: Metadata = {
  title: 'Dokumenty – Licencje, Certyfikaty i Polisy',
  description:
    'Pobierz dokumenty AMPM Spedition: licencja transportowa, certyfikat ISO 9001, normy Euro 6, polisa OCP przewoźnika do 300 000 EUR oraz ubezpieczenie kabotażowe.',
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
    title: 'Dokumenty – AMPM Spedition',
    description:
      'Licencje, certyfikaty i polisy ubezpieczeniowe AMPM Spedition. Transparentność i pełna dokumentacja naszej działalności.',
    url: '/dokumenty',
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
      name: 'Dokumenty',
      item: 'https://ampmspedition.pl/dokumenty',
    },
  ],
};

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Dokumenty AMPM Spedition',
  description:
    'Licencje, certyfikaty i polisy ubezpieczeniowe dostępne do pobrania.',
  numberOfItems: DOCUMENT_CATEGORIES.flatMap(c => c.documents).length,
  itemListElement: DOCUMENT_CATEGORIES.flatMap((cat, catIdx) =>
    cat.documents.map((doc, docIdx) => ({
      '@type': 'ListItem',
      position: catIdx * 10 + docIdx + 1,
      name: doc.title,
      description: doc.description,
    }))
  ),
};

export default function DocumentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
