import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import PageHero from '@/components/shared/PageHero';
import { Globe, CheckCircle2, Clock, FileText, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Transport Międzynarodowy – Spedycja Europa | AMPM Sp. z o.o.',
  description:
    'Profesjonalny transport międzynarodowy na terenie całej Europy i poza jej granicami. Pełna obsługa logistyczna, dokumentacja, monitoring przesyłek. Zaufaj doświadczonej firmie spedycyjnej z Lublina.',
  keywords: [
    'transport międzynarodowy',
    'spedycja europejska',
    'przewóz towarów Europa',
    'transport UE firma',
    'spedycja międzynarodowa Lublin',
    'transport towarów Niemcy',
    'transport towarów Francja',
    'transport towarów Czechy',
    'firma transportowa Europa',
    'logistyka międzynarodowa',
    'transport drogowy TIR',
    'przewozy międzynarodowe',
  ],
  alternates: { canonical: '/uslugi/transport-miedzynarodowy' },
  openGraph: {
    title: 'Transport Międzynarodowy – AMPM Sp. z o.o.',
    description:
      'Realizujemy transport towarów na terenie całej Europy i poza jej granicami. Stały monitoring, dokumentacja transportowa i dedykowany spedytor.',
    url: '/uslugi/transport-miedzynarodowy',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Transport Międzynarodowy – AMPM Spedition' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transport Międzynarodowy – AMPM Sp. z o.o.',
    description: 'Profesjonalny transport towarów na terenie całej Europy. Zaufaj sprawdzonej firmie spedycyjnej.',
    images: ['/og-image.jpg'],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Transport Międzynarodowy',
  description:
    'Realizujemy transport towarów na terenie całej Europy oraz poza jej granicami. Zapewniamy pełną obsługę logistyczną, w tym planowanie tras, dokumentację transportową oraz stały monitoring przesyłek.',
  provider: {
    '@type': 'Organization',
    name: 'AMPM Sp. z o.o.',
    url: 'https://ampm.com.pl',
  },
  areaServed: { '@type': 'Place', name: 'Europa' },
  serviceType: 'Transport Międzynarodowy',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Strona Główna', item: 'https://ampm.com.pl/' },
    { '@type': 'ListItem', position: 2, name: 'Usługi', item: 'https://ampm.com.pl/uslugi' },
    { '@type': 'ListItem', position: 3, name: 'Transport Międzynarodowy', item: 'https://ampm.com.pl/uslugi/transport-miedzynarodowy' },
  ],
};

const features = [
  { icon: Globe, title: 'Zasięg ogólnoeuropejski', desc: 'Transport do wszystkich krajów UE oraz poza granice Unii. Kompleksowa obsługa tras wschód–zachód i północ–południe.' },
  { icon: Clock, title: 'Stały monitoring 24/7', desc: 'Śledzenie przesyłki w czasie rzeczywistym. Dedykowany spedytor do kontaktu na każdym etapie przewozu.' },
  { icon: FileText, title: 'Pełna dokumentacja', desc: 'Obsługa dokumentacji CMR, listów przewozowych, zgłoszeń celnych oraz wszelkich formalności eksportowo-importowych.' },
  { icon: MapPin, title: 'Optymalizacja tras', desc: 'Planowanie optymalnych tras z uwzględnieniem kosztów, czasu przejazdu i specyfiki ładunku.' },
];

export default function TransportMiedzynarodowyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="Nasze Usługi"
          titleFirst="Transport"
          titleHighlight="Międzynarodowy"
          description="Realizujemy transport towarów na terenie całej Europy oraz poza jej granicami. Twój ładunek – nasza odpowiedzialność."
          breadcrumb={[
            { label: 'Strona Główna', href: '/' },
            { label: 'Usługi', href: '/uslugi' },
            { label: 'Transport Międzynarodowy' },
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
                  Kompleksowa spedycja<br />
                  <span className="text-primary">na skalę europejską</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Realizujemy transport towarów na terenie całej Europy oraz poza jej granicami. Nasz zespół doświadczonych spedytorów zapewnia pełną obsługę logistyczną – od planowania trasy, przez dokumentację transportową, aż po stały monitoring przesyłki w czasie rzeczywistym.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Nasze rozwiązania pozwalają na szybkie i bezpieczne dostarczanie ładunków między krajami, niezależnie od ich charakteru i gabarytów. Dzięki szerokiej sieci partnerów logistycznych w całej Europie gwarantujemy terminowość i bezpieczeństwo każdego zlecenia.
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
                { num: '01', title: 'Doświadczony zespół', desc: 'Nasi spedytorzy znają europejskie przepisy transportowe i posiadają wieloletnie doświadczenie w obsłudze ładunków krajowych i zagranicznych.' },
                { num: '02', title: 'Nowoczesne systemy', desc: 'Korzystamy z zaawansowanych narzędzi do planowania i monitorowania transportu, co przekłada się na pełną transparentność dla klienta.' },
                { num: '03', title: 'Sieć partnerów', desc: 'Szeroka sieć sprawdzonych partnerów logistycznych w Europie umożliwia nam realizację zleceń nawet do najmniej dostępnych lokalizacji.' },
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
            <h2 className="text-3xl font-display font-bold text-white mb-4">Potrzebujesz transportu za granicę?</h2>
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
