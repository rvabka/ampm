import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import PageHero from '@/components/shared/PageHero';
import { AlertTriangle, Shield, FileCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Transport ADR – Przewóz Materiałów Niebezpiecznych | AMPM Sp. z o.o.',
  description:
    'Specjalistyczny transport ADR materiałów niebezpiecznych zgodnie z konwencją ADR. Certyfikowani przewoźnicy, przystosowane pojazdy i pełna zgodność z przepisami. Bezpieczeństwo na każdym etapie.',
  keywords: [
    'transport ADR',
    'przewóz materiałów niebezpiecznych',
    'spedycja ADR',
    'transport chemikaliów',
    'firma ADR',
    'przewóz substancji niebezpiecznych',
    'transport towarów niebezpiecznych',
    'logistyka ADR',
    'certyfikat ADR transport',
    'transport paliw',
    'transport gazów',
    'konwencja ADR przewóz',
  ],
  alternates: { canonical: '/uslugi/transport-adr' },
  openGraph: {
    title: 'Transport ADR – AMPM Sp. z o.o.',
    description:
      'Przewóz materiałów niebezpiecznych zgodnie z konwencją ADR. Certyfikowani przewoźnicy, specjalistyczne pojazdy i najwyższe standardy bezpieczeństwa.',
    url: '/uslugi/transport-adr',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Transport ADR – AMPM Spedition' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transport ADR – AMPM Sp. z o.o.',
    description: 'Bezpieczny przewóz materiałów niebezpiecznych. Pełna zgodność z konwencją ADR i najwyższe standardy.',
    images: ['/og-image.jpg'],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Transport ADR',
  description:
    'Specjalizujemy się w przewozie materiałów niebezpiecznych zgodnie z międzynarodową konwencją ADR. Nasi przewoźnicy posiadają odpowiednie uprawnienia, a pojazdy są przystosowane do bezpiecznego transportu tego typu ładunków.',
  provider: { '@type': 'Organization', name: 'AMPM Sp. z o.o.', url: 'https://ampm.com.pl' },
  serviceType: 'Transport ADR',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Strona Główna', item: 'https://ampm.com.pl/' },
    { '@type': 'ListItem', position: 2, name: 'Usługi', item: 'https://ampm.com.pl/uslugi' },
    { '@type': 'ListItem', position: 3, name: 'Transport ADR', item: 'https://ampm.com.pl/uslugi/transport-adr' },
  ],
};

const features = [
  { icon: Award, title: 'Certyfikowani przewoźnicy', desc: 'Wszyscy nasi kierowcy posiadają aktualne świadectwa ADR i przeszli specjalistyczne szkolenia z przewozu materiałów niebezpiecznych.' },
  { icon: Shield, title: 'Przystosowane pojazdy', desc: 'Flota pojazdów wyposażona zgodnie z wymogami ADR – odpowiednie oznakowanie, wyposażenie ratunkowe i systemy zabezpieczające ładunek.' },
  { icon: FileCheck, title: 'Kompletna dokumentacja', desc: 'Przygotowujemy i weryfikujemy całą wymaganą dokumentację przewozową – deklaracje, listy przewozowe i dokumenty bezpieczeństwa.' },
  { icon: AlertTriangle, title: 'Najwyższe standardy', desc: 'Pełna zgodność z konwencją ADR i przepisami krajowymi. Regularne audyty i szkolenia gwarantują utrzymanie najwyższego poziomu bezpieczeństwa.' },
];

export default function TransportADRPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="Nasze Usługi"
          titleFirst="Transport"
          titleHighlight="ADR"
          description="Bezpieczny przewóz materiałów niebezpiecznych zgodnie z konwencją ADR. Certyfikowani kierowcy, przystosowane pojazdy i pełna zgodność z przepisami."
          breadcrumb={[
            { label: 'Strona Główna', href: '/' },
            { label: 'Usługi', href: '/uslugi' },
            { label: 'Transport ADR' },
          ]}
        />

        <section className="py-24 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-primary" aria-hidden="true" />
                  <span className="text-primary font-semibold tracking-wider uppercase text-xs">O usłudze</span>
                </div>
                <h2 className="text-3xl font-display font-bold text-secondary mb-6 leading-snug">
                  Bezpieczeństwo<br />
                  <span className="text-primary">ponad wszystko</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Specjalizujemy się w przewozie materiałów niebezpiecznych zgodnie z międzynarodową konwencją ADR. Nasi przewoźnicy posiadają odpowiednie uprawnienia, a pojazdy są przystosowane do bezpiecznego transportu tego typu ładunków.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Zapewniamy pełną zgodność z przepisami oraz najwyższe standardy bezpieczeństwa na każdym etapie przewozu. Obsługujemy transport materiałów z różnych klas ADR – od substancji łatwopalnych, przez gazy, po materiały żrące i toksyczne. Każde zlecenie realizowane jest z zachowaniem wszelkich wymagań formalnych i bezpieczeństwa.
                </p>
                <Link
                  href="/wycena"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full transition shadow-lg shadow-primary/25"
                >
                  Zapytaj o wycenę
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {features.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-md transition duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-secondary mb-2 text-sm">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-primary" aria-hidden="true" />
              <span className="text-primary font-semibold tracking-wider uppercase text-xs">Klasy towarów</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { num: '01', title: 'Materiały zapalne i wybuchowe', desc: 'Transport materiałów klasy 1–3 ADR: materiały wybuchowe, gazy łatwopalne, ciecze i ciała stałe zapalne. Pełne wyposażenie i procedury bezpieczeństwa.' },
                { num: '02', title: 'Substancje toksyczne i żrące', desc: 'Przewóz substancji klasy 6 i 8 ADR: trucizny, materiały zakaźne, substancje żrące. Hermetyczne opakowania i procedury awaryjne.' },
                { num: '03', title: 'Inne materiały niebezpieczne', desc: 'Materiały utleniające, radioaktywne, różne materiały niebezpieczne. Każda klasa transportowana z zachowaniem dedykowanych wymogów ADR.' },
              ].map(({ num, title, desc }) => (
                <div key={num} className="flex gap-5">
                  <span className="text-4xl font-display font-black text-primary/20 leading-none shrink-0">{num}</span>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-8 bg-secondary">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-primary" aria-hidden="true" />
              <span className="text-primary font-semibold tracking-wider uppercase text-xs">Zaczynamy?</span>
              <div className="h-px w-10 bg-primary" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Potrzebujesz transportu ADR?</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Skontaktuj się z nami i opisz swoje wymagania. Zapewnimy bezpieczny i zgodny z przepisami transport materiałów niebezpiecznych.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/wycena"
                className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full transition shadow-lg"
              >
                Uzyskaj wycenę
              </Link>
              <Link
                href="/kontakt"
                className="px-8 py-3.5 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-full transition"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
