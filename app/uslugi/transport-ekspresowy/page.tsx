import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import PageHero from '@/components/shared/PageHero';
import { Zap, Clock, ArrowRight, Shield, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Transport Ekspresowy – Pilne Dostawy | Am Pm sp. z o.o.',
  description:
    'Transport ekspresowy dla pilnych przesyłek wymagających natychmiastowej realizacji. Obsługujemy klientów z Lublina, Warszawy i całej Polski. Bezpośredni przewóz door-to-door, krótki czas dostawy i stały monitoring.',
  keywords: [
    'transport ekspresowy',
    'pilny transport',
    'dostawa ekspresowa',
    'transport door-to-door',
    'przesyłki pilne',
    'ekspresowa spedycja',
    'transport na cito',
    'szybka dostawa towarów',
    'transport pilnych przesyłek',
    'kurierski transport towarów',
    'ekspresowy przewóz towarów',
    'transport 24h',
    'transport ekspresowy Lublin',
    'transport ekspresowy Warszawa',
    'pilna dostawa Lublin',
    'pilna dostawa Warszawa',
  ],
  alternates: { canonical: '/uslugi/transport-ekspresowy' },
  openGraph: {
    title: 'Transport Ekspresowy – Am Pm sp. z o.o.',
    description:
      'Pilne przesyłki wymagające natychmiastowej realizacji. Bezpośredni transport door-to-door z krótkim czasem dostawy i stałym monitoringiem.',
    url: '/uslugi/transport-ekspresowy',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Transport Ekspresowy – Am Pm sp. z o.o.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transport Ekspresowy – Am Pm sp. z o.o.',
    description: 'Pilne przesyłki zrealizowane w rekordowym czasie. Transport door-to-door dla ładunków o wysokim priorytecie.',
    images: ['/og-image.jpg'],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Transport Ekspresowy',
  description:
    'Transport ekspresowy to rozwiązanie dla przesyłek wymagających natychmiastowej realizacji. Oferujemy szybki przewóz towarów z krótkim czasem dostawy oraz bezpośrednim transportem od nadawcy do odbiorcy.',
  provider: { '@type': 'Organization', name: 'Am Pm sp. z o.o.', url: 'https://ampm.com.pl' },
  serviceType: 'Transport Ekspresowy',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Strona Główna', item: 'https://ampm.com.pl/' },
    { '@type': 'ListItem', position: 2, name: 'Usługi', item: 'https://ampm.com.pl/uslugi' },
    { '@type': 'ListItem', position: 3, name: 'Transport Ekspresowy', item: 'https://ampm.com.pl/uslugi/transport-ekspresowy' },
  ],
};

const features = [
  { icon: Zap, title: 'Natychmiastowa reakcja', desc: 'Błyskawiczne przyjęcie zlecenia i organizacja transportu w trybie pilnym. Kontaktujemy się z Tobą w ciągu minut od zgłoszenia.' },
  { icon: ArrowRight, title: 'Transport door-to-door', desc: 'Bezpośredni odbiór od nadawcy i dostarczenie do odbiorcy bez zbędnych przeładunków. Minimalizujemy czas i ryzyko uszkodzenia ładunku.' },
  { icon: Clock, title: 'Krótki czas dostawy', desc: 'Priorytetowa realizacja zlecenia. Planujemy najkrótszą możliwą trasę i najszybszy dostępny środek transportu drogowego.' },
  { icon: Shield, title: 'Pełne bezpieczeństwo', desc: 'Stały monitoring przesyłki i bieżące informowanie klienta o statusie dostawy. Twój ładunek jest pod naszą opieką przez całą dobę.' },
];

export default function TransportEkspressowyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="Nasze Usługi"
          titleFirst="Transport"
          titleHighlight="Ekspresowy"
          description="Pilne przesyłki zrealizowane bez kompromisów. Bezpośredni transport door-to-door, natychmiastowa reakcja i pełna kontrola nad przesyłką."
          breadcrumb={[
            { label: 'Strona Główna', href: '/' },
            { label: 'Usługi', href: '/uslugi' },
            { label: 'Transport Ekspresowy' },
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
                  Gdy czas to<br />
                  <span className="text-primary">najwyższy priorytet</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Transport ekspresowy to rozwiązanie dla przesyłek wymagających natychmiastowej realizacji. Oferujemy szybki przewóz towarów z krótkim czasem dostawy oraz bezpośrednim transportem od nadawcy do odbiorcy. Idealnie sprawdza się w przypadku pilnych dostaw i ładunków o wysokim priorytecie.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Dysponujemy flotą busów do 3,5 t, które umożliwiają szybką reakcję i elastyczne terminy odbioru. Obsługujemy klientów z Lublina, Warszawy i całej Polski. Nasi dyspozytorzy są dostępni, aby zaplanować transport natychmiast po złożeniu zlecenia – bez zbędnych formalności i opóźnień.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/wycena"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full transition shadow-lg shadow-primary/25"
                  >
                    Zapytaj o wycenę
                  </Link>
                  <a
                    href="tel:+48570112512"
                    className="inline-flex items-center gap-2 px-8 py-3.5 border border-gray-200 text-secondary hover:bg-gray-50 font-semibold rounded-full transition"
                  >
                    <Phone size={16} />
                    Zadzwoń teraz
                  </a>
                </div>
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
              <span className="text-primary font-semibold tracking-wider uppercase text-xs">Kiedy warto wybrać ekspres</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { num: '01', title: 'Awaria linii produkcyjnej', desc: 'Gdy brakujący komponent zatrzymuje produkcję, liczy się każda godzina. Transport ekspresowy zapewnia dostawę w możliwie najkrótszym czasie.' },
                { num: '02', title: 'Pilne dostawy dla klientów', desc: 'Gdy standardowy czas dostawy nie wchodzi w grę, a klient oczekuje towaru natychmiast – transport ekspresowy to Twój as w rękawie.' },
                { num: '03', title: 'Ładunki o wysokiej wartości', desc: 'Bezpośredni transport door-to-door minimalizuje ryzyko uszkodzenia i kradzieży ładunków o wysokiej wartości lub wrażliwych towarów.' },
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
              <span className="text-primary font-semibold tracking-wider uppercase text-xs">Działamy natychmiast</span>
              <div className="h-px w-10 bg-primary" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Masz pilne zlecenie?</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Zadzwoń do nas lub wyślij zapytanie – zorganizujemy transport ekspresowy tak szybko, jak to możliwe.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/wycena"
                className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full transition shadow-lg"
              >
                Uzyskaj wycenę
              </Link>
              <a
                href="tel:+48570112512"
                className="px-8 py-3.5 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-full transition"
              >
                +48 570 112 512
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
