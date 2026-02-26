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
    'Skontaktuj się z AMPM Spedition. Biuro w Warszawie, telefon 24/7, e-mail dla zapytań i rekrutacji. Odpowiadamy w ciągu 24 godzin.',
  keywords: [
    'kontakt AMPM Spedition',
    'biuro spedycja Warszawa',
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
      'Biuro w Warszawie, serwis telefoniczny 24/7, formularz kontaktowy. Skontaktuj się z naszym zespołem logistycznym.',
    url: '/kontakt',
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
      name: 'Kontakt',
      item: 'https://ampmspedition.pl/kontakt',
    },
  ],
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: 'AMPM Full Time Spedition',
  url: 'https://ampmspedition.pl',
  logo: 'https://ampmspedition.pl/logo.webp',
  image: 'https://ampmspedition.pl/logo.webp',
  description:
    'Profesjonalny transport drogowy ciężarowy i dostawczy na terenie całej Europy.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Logistyczna 12/4',
    addressLocality: 'Warszawa',
    postalCode: '00-001',
    addressCountry: 'PL',
  },
  telephone: '+48123456789',
  email: 'office@ampmspedition.pl',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
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
