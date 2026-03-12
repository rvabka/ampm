import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import PageHero from '@/components/shared/PageHero';
import { Snowflake, Thermometer, Shield, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Transport Chłodniczy – Przewóz w Kontrolowanej Temperaturze | AMPM Sp. z o.o.',
  description:
    'Specjalistyczny transport chłodniczy dla żywności, leków i produktów farmaceutycznych. Kontrolowana temperatura przez cały czas przewozu, certyfikowane pojazdy chłodnicze. Sprawdź naszą ofertę.',
  keywords: [
    'transport chłodniczy',
    'przewóz w kontrolowanej temperaturze',
    'transport żywności',
    'transport farmaceutyczny',
    'chłodnia transport',
    'transport produktów mrożonych',
    'logistyka chłodnicza',
    'transport leków',
    'przewóz towarów wymagających chłodzenia',
    'flota chłodnicza',
    'HACCP transport',
    'transport temperaturowy',
  ],
  alternates: { canonical: '/uslugi/transport-chlodniczy' },
  openGraph: {
    title: 'Transport Chłodniczy – AMPM Sp. z o.o.',
    description:
      'Specjalistyczny transport towarów wymagających kontrolowanej temperatury. Żywność, leki, produkty chemiczne – dostarczamy bezpiecznie i zgodnie z normami.',
    url: '/uslugi/transport-chlodniczy',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Transport Chłodniczy – AMPM Spedition' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transport Chłodniczy – AMPM Sp. z o.o.',
    description: 'Kontrolowana temperatura przez cały czas przewozu. Specjalistyczna logistyka dla wymagających ładunków.',
    images: ['/og-image.jpg'],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Transport Chłodniczy',
  description:
    'Zapewniamy specjalistyczny transport towarów wymagających kontrolowanej temperatury, takich jak żywność, produkty farmaceutyczne czy chemiczne. Nasze pojazdy chłodnicze wyposażone są w nowoczesne systemy utrzymujące stałą temperaturę podczas całego transportu.',
  provider: { '@type': 'Organization', name: 'AMPM Sp. z o.o.', url: 'https://ampm.com.pl' },
  serviceType: 'Transport Chłodniczy',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Strona Główna', item: 'https://ampm.com.pl/' },
    { '@type': 'ListItem', position: 2, name: 'Usługi', item: 'https://ampm.com.pl/uslugi' },
    { '@type': 'ListItem', position: 3, name: 'Transport Chłodniczy', item: 'https://ampm.com.pl/uslugi/transport-chlodniczy' },
  ],
};

const features = [
  { icon: Thermometer, title: 'Stała kontrola temperatury', desc: 'Nowoczesne agregaty chłodnicze z możliwością regulacji zakresu temperatur. Parametry są monitorowane i rejestrowane przez cały czas przewozu.' },
  { icon: Snowflake, title: 'Szeroki zakres temperatur', desc: 'Obsługujemy transport w zakresie od -25°C do +25°C. Dostosowujemy warunki do specyfiki każdego ładunku – mrożonki, schłodzone, ambient.' },
  { icon: Shield, title: 'Zgodność z normami', desc: 'Spełniamy wymagania norm ATP, HACCP i GDP. Pojazdy posiadają odpowiednie certyfikaty, a kierowcy przeszli szkolenia z obsługi ładunków wrażliwych.' },
  { icon: CheckCircle2, title: 'Ładunki wrażliwe', desc: 'Żywność, leki, kosmetyki, produkty chemiczne – posiadamy doświadczenie w transporcie towarów wymagających szczególnej troski i specjalistycznych warunków.' },
];

export default function TransportChlodniczyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="Nasze Usługi"
          titleFirst="Transport"
          titleHighlight="Chłodniczy"
          description="Specjalistyczny przewóz towarów wrażliwych na temperaturę. Kontrolowane warunki przez cały czas transportu – od załadunku do rozładunku."
          breadcrumb={[
            { label: 'Strona Główna', href: '/' },
            { label: 'Usługi', href: '/uslugi' },
            { label: 'Transport Chłodniczy' },
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
                  Idealne warunki<br />
                  <span className="text-primary">dla wrażliwych ładunków</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Zapewniamy specjalistyczny transport towarów wymagających kontrolowanej temperatury, takich jak żywność, produkty farmaceutyczne czy chemiczne. Nasze pojazdy chłodnicze wyposażone są w nowoczesne systemy utrzymujące stałą temperaturę podczas całego transportu.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Realizujemy przewozy zarówno na terenie Polski, jak i za granicą. Dbamy o zachowanie ciągłości łańcucha chłodniczego, co jest kluczowe dla bezpieczeństwa i jakości transportowanych towarów. Nasi kierowcy posiadają stosowne szkolenia z zakresu obsługi ładunków wrażliwych temperaturowo.
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
              <span className="text-primary font-semibold tracking-wider uppercase text-xs">Co transportujemy</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { num: '01', title: 'Produkty spożywcze', desc: 'Mięso, nabiał, owoce, warzywa, mrożonki, wyroby cukiernicze. Realizujemy transport z zachowaniem wymogów sanitarnych i norm HACCP.' },
                { num: '02', title: 'Produkty farmaceutyczne', desc: 'Leki, suplementy diety, szczepionki i inne produkty wymagające transportu GDP. Pełna dokumentacja i weryfikacja warunków temperatury.' },
                { num: '03', title: 'Produkty chemiczne', desc: 'Chemikalia i kosmetyki wymagające określonego zakresu temperatury. Dobieramy odpowiednie warunki przewozu do charakteru każdego ładunku.' },
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
            <h2 className="text-3xl font-display font-bold text-white mb-4">Transportujemy Twój ładunek w idealnych warunkach</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Skontaktuj się z nami i opisz swoje wymagania. Dopasujemy rozwiązanie do specyfiki Twojego towaru.
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
