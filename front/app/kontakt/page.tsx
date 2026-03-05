import type { Metadata } from 'next';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactMap from '@/components/contact/ContactMap';

export const metadata: Metadata = {
  title: 'Kontakt – Napisz lub Zadzwoń do AMPM Spedition',
  description:
    'Skontaktuj się z AMPM Spedition. Biuro w Lublinie, telefon 24/7, e-mail dla zapytań i rekrutacji. Odpowiadamy w ciągu 24 godzin.',
  keywords: [
    'kontakt AMPM Spedition',
    'biuro spedycja Lublin',
    'telefon transport drogowy',
    'zapytanie ofertowe transport',
    'email spedycja',
  ],
  alternates: {
    canonical: '/kontakt',
  },
  openGraph: {
    title: 'Kontakt – AMPM Spedition',
    description:
      'Biuro w Lublinie, serwis telefoniczny 24/7, formularz kontaktowy. Skontaktuj się z naszym zespołem logistycznym.',
    url: '/kontakt',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kontakt – AMPM Spedition, biuro Lublin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt – Napisz lub Zadzwoń do AMPM Spedition',
    description:
      'Biuro w Lublinie, telefon 24/7, e-mail dla zapytań. Skontaktuj się z AMPM Spedition – odpowiadamy w ciągu 24 godzin.',
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
      name: 'Kontakt',
      item: 'https://ampm.com.pl/kontakt',
    },
  ],
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: 'AMPM Full Time Spedition',
  url: 'https://ampm.com.pl',
  logo: 'https://ampm.com.pl/logo.webp',
  image: 'https://ampm.com.pl/logo.webp',
  description:
    'Profesjonalny transport drogowy ciężarowy i dostawczy na terenie całej Europy.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Zemborzycka 53b',
    addressLocality: 'Lublin',
    postalCode: '20-445',
    addressCountry: 'PL',
  },
  telephone: '+48570112512',
  email: 'biuro@ampm.com.pl',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://facebook.com',
    'https://linkedin.com',
    'https://instagram.com',
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <ContactHero />
        <ContactInfo />
        <ContactFormSection />
        <ContactMap />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
