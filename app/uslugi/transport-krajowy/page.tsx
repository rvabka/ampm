import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import PageHero from '@/components/shared/PageHero';
import { Truck, CheckCircle2, Clock, Users, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Transport Krajowy – Przewóz Towarów Polska | AMPM Sp. z o.o.',
  description:
    'Profesjonalny transport krajowy na terenie całej Polski. Terminowe i bezpieczne dostawy dla firm z każdej branży. Obsługujemy zlecenia jednorazowe i stałe kontrakty logistyczne.',
  keywords: [
    'transport krajowy',
    'przewóz towarów Polska',
    'firma transportowa Polska',
    'transport całej Polski',
    'spedycja krajowa',
    'transport drogowy Lublin',
    'przewozy krajowe',
    'dostawa towarów Polska',
    'logistyka krajowa',
    'transport FTL LTL Polska',
    'firma transportowa Lublin',
    'transport dla firm',
  ],
  alternates: { canonical: '/uslugi/transport-krajowy' },
  openGraph: {
    title: 'Transport Krajowy – AMPM Sp. z o.o.',
    description:
      'Świadczymy usługi transportu na terenie całej Polski. Terminowe dostawy, nowoczesna flota i elastyczna obsługa stałych kontraktów logistycznych.',
    url: '/uslugi/transport-krajowy',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Transport Krajowy – AMPM Spedition' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transport Krajowy – AMPM Sp. z o.o.',
    description: 'Profesjonalny transport towarów na terenie całej Polski. Terminowość i bezpieczeństwo gwarantowane.',
    images: ['/og-image.jpg'],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Transport Krajowy',
  description:
    'Świadczymy usługi transportu na terenie całej Polski, gwarantując terminowe i bezpieczne dostawy. Obsługujemy zarówno pojedyncze zlecenia, jak i stałe kontrakty logistyczne dla firm z różnych branż.',
  provider: { '@type': 'Organization', name: 'AMPM Sp. z o.o.', url: 'https://ampm.com.pl' },
  areaServed: { '@type': 'Place', name: 'Polska' },
  serviceType: 'Transport Krajowy',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Strona Główna', item: 'https://ampm.com.pl/' },
    { '@type': 'ListItem', position: 2, name: 'Usługi', item: 'https://ampm.com.pl/uslugi' },
    { '@type': 'ListItem', position: 3, name: 'Transport Krajowy', item: 'https://ampm.com.pl/uslugi/transport-krajowy' },
  ],
};

const features = [
  { icon: MapPin, title: 'Zasięg ogólnopolski', desc: 'Obsługujemy transport do każdego zakątka Polski – od dużych miast po mniejsze miejscowości i odleglejsze lokalizacje.' },
  { icon: Truck, title: 'Nowoczesna flota', desc: 'Dysponujemy flotą pojazdów dostosowanych do różnych rodzajów ładunków, od małych przesyłek po pełne załadunki zestawów ciężarowych.' },
  { icon: Clock, title: 'Terminowość dostaw', desc: 'Dotrzymywanie ustalonych terminów to nasz priorytet. Stały nadzór nad każdym zleceniem gwarantuje realizację na czas.' },
  { icon: Users, title: 'Stały opiekun zlecenia', desc: 'Dedykowany spedytor do Twojej dyspozycji. Bieżący kontakt i informacje o statusie dostawy na każdym etapie realizacji.' },
];

export default function TransportKrajowyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="Nasze Usługi"
          titleFirst="Transport"
          titleHighlight="Krajowy"
          description="Świadczymy usługi transportu na terenie całej Polski. Terminowość, bezpieczeństwo i elastyczność – w każdym zleceniu."
          breadcrumb={[
            { label: 'Strona Główna', href: '/' },
            { label: 'Usługi', href: '/uslugi' },
            { label: 'Transport Krajowy' },
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
                  Niezawodny transport<br />
                  <span className="text-primary">w każdy zakątek Polski</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Świadczymy usługi transportu na terenie całej Polski, gwarantując terminowe i bezpieczne dostawy. Dzięki nowoczesnej flocie oraz doświadczonym kierowcom jesteśmy w stanie obsługiwać zarówno pojedyncze zlecenia, jak i stałe kontrakty logistyczne dla firm z różnych branż.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Niezależnie od tego, czy potrzebujesz przewieźć jedną paletę, czy pełny zestaw ciężarowy, dopasowujemy rozwiązanie do Twoich potrzeb. Oferujemy elastyczne podejście do harmonogramów dostaw oraz stały kontakt ze spedytorem na każdym etapie realizacji.
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
              <span className="text-primary font-semibold tracking-wider uppercase text-xs">Dlaczego my</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { num: '01', title: 'Elastyczność i skalowalność', desc: 'Obsługujemy zarówno małe firmy z jednostkowymi zleceniami, jak i duże przedsiębiorstwa wymagające regularnych dostaw w całej Polsce.' },
                { num: '02', title: 'Przejrzyste warunki współpracy', desc: 'Jasne zasady, rzetelna wycena i brak ukrytych opłat. Stawiamy na długoterminowe partnerstwo oparte na wzajemnym zaufaniu.' },
                { num: '03', title: 'Doświadczeni kierowcy', desc: 'Nasi kierowcy to profesjonaliści z wieloletnim doświadczeniem, posiadający wymagane uprawnienia i dbający o powierzone ładunki.' },
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
            <h2 className="text-3xl font-display font-bold text-white mb-4">Potrzebujesz transportu w Polsce?</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Skontaktuj się z nami i uzyskaj indywidualną wycenę. Obsługujemy zlecenia jednorazowe i stałe kontrakty logistyczne.
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
