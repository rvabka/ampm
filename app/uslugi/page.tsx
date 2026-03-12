import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import PageHero from '@/components/shared/PageHero';
import { Globe, Truck, Bus, Snowflake, AlertTriangle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Usługi Spedycyjne – Transport Krajowy i Międzynarodowy | AMPM Sp. z o.o.',
  description:
    'Kompleksowe usługi spedycyjne: transport krajowy, międzynarodowy, ekspresowy, chłodniczy i ADR. Doświadczeni spedytorzy, nowoczesna flota i szeroka sieć partnerów. Zaufaj AMPM Sp. z o.o.',
  keywords: [
    'usługi spedycyjne',
    'spedycja transport',
    'firma spedycyjna',
    'transport towarów',
    'spedycja krajowa',
    'spedycja międzynarodowa',
    'logistyka transport',
    'spedytor Lublin',
    'transport drogowy',
    'usługi transportowe',
    'kompleksowa logistyka',
    'AMPM usługi',
  ],
  alternates: { canonical: '/uslugi' },
  openGraph: {
    title: 'Usługi Spedycyjne – AMPM Sp. z o.o.',
    description:
      'Kompleksowa organizacja transportu krajowego i międzynarodowego. Doświadczeni spedytorzy i nowoczesne systemy logistyczne.',
    url: '/uslugi',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Usługi AMPM Spedition' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Usługi Spedycyjne – AMPM Sp. z o.o.',
    description: 'Transport krajowy, międzynarodowy, ekspresowy, chłodniczy i ADR. Profesjonalna spedycja.',
    images: ['/og-image.jpg'],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Strona Główna', item: 'https://ampm.com.pl/' },
    { '@type': 'ListItem', position: 2, name: 'Usługi', item: 'https://ampm.com.pl/uslugi' },
  ],
};

const services = [
  {
    icon: Globe,
    title: 'Transport Międzynarodowy',
    desc: 'Realizujemy transport towarów na terenie całej Europy oraz poza jej granicami. Zapewniamy pełną obsługę logistyczną, w tym planowanie tras, dokumentację transportową oraz stały monitoring przesyłek.',
    href: '/uslugi/transport-miedzynarodowy',
    popular: true,
  },
  {
    icon: Truck,
    title: 'Transport Krajowy',
    desc: 'Świadczymy usługi transportu na terenie całej Polski, gwarantując terminowe i bezpieczne dostawy. Obsługujemy zarówno pojedyncze zlecenia, jak i stałe kontrakty logistyczne.',
    href: '/uslugi/transport-krajowy',
  },
  {
    icon: Bus,
    title: 'Transport Ekspresowy',
    desc: 'Transport ekspresowy to rozwiązanie dla przesyłek wymagających natychmiastowej realizacji. Szybki przewóz towarów z krótkim czasem dostawy i bezpośrednim transportem door-to-door.',
    href: '/uslugi/transport-ekspresowy',
  },
  {
    icon: Snowflake,
    title: 'Transport Chłodniczy',
    desc: 'Zapewniamy specjalistyczny transport towarów wymagających kontrolowanej temperatury, takich jak żywność, produkty farmaceutyczne czy chemiczne.',
    href: '/uslugi/transport-chlodniczy',
  },
  {
    icon: AlertTriangle,
    title: 'Transport ADR',
    desc: 'Specjalizujemy się w przewozie materiałów niebezpiecznych zgodnie z konwencją ADR. Certyfikowani przewoźnicy, przystosowane pojazdy i pełna zgodność z przepisami.',
    href: '/uslugi/transport-adr',
  },
];

export default function UslugiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="Nasze Możliwości"
          titleFirst="Profesjonalne Usługi"
          titleHighlight="Spedycyjne"
          titleBreak
          description="Oferujemy kompleksową organizację transportu krajowego i międzynarodowego. Doświadczeni spedytorzy, nowoczesne systemy logistyczne i szeroka sieć partnerów."
          layout="split"
          breadcrumb={[
            { label: 'Strona Główna', href: '/' },
            { label: 'Usługi' },
          ]}
        />

        <section className="py-24 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-primary" aria-hidden="true" />
              <span className="text-primary font-semibold tracking-wider uppercase text-xs">Pełna oferta</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <h2 className="text-3xl font-display font-bold text-secondary max-w-xl leading-snug">
                Wybierz usługę dopasowaną<br />
                <span className="text-primary">do Twoich potrzeb</span>
              </h2>
              <p className="text-gray-500 max-w-md text-sm leading-relaxed">
                Nasz zespół doświadczonych spedytorów planuje, monitoruje i optymalizuje każdy etap przewozu, zapewniając bezpieczeństwo ładunku oraz terminowość dostaw.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(({ icon: Icon, title, desc, href, popular }) => (
                <article
                  key={title}
                  className="group relative bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition duration-300 flex flex-col"
                >
                  {popular && (
                    <span className="absolute top-6 right-6 bg-primary px-3 py-1 rounded-full text-xs font-bold text-white">
                      Popularne
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{desc}</p>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                    aria-label={`Dowiedz się więcej: ${title}`}
                  >
                    Dowiedz się więcej
                    <ArrowRight size={16} />
                  </Link>
                </article>
              ))}

              <div className="bg-secondary rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-8 bg-primary" aria-hidden="true" />
                    <span className="text-primary font-semibold tracking-wider uppercase text-xs">Zapytaj nas</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Nie widzisz tego, czego szukasz?</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Skontaktuj się z nami. Dopasujemy rozwiązanie do specyfiki Twojego ładunku i wymagań logistycznych.
                  </p>
                </div>
                <Link
                  href="/wycena"
                  className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full transition text-sm"
                >
                  Zapytaj o wycenę
                  <ArrowRight size={16} />
                </Link>
              </div>
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
            <h2 className="text-3xl font-display font-bold text-white mb-4">Gotowy na sprawdzoną spedycję?</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Skontaktuj się z naszym zespołem i uzyskaj indywidualną wycenę. Realizujemy zlecenia jednorazowe i stałe kontrakty logistyczne.
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
