import type { Metadata } from 'next';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';

export const metadata: Metadata = {
  title: 'Polityka Cookies – AMPM Sp. z o.o.',
  description:
    'Informacje o plikach cookies i technologiach śledzących stosowanych przez AMPM Sp. z o.o.',
  alternates: {
    canonical: '/polityka-cookies',
  },
  robots: {
    index: false,
    follow: true,
  },
};

const sections = [
  {
    heading: 'Czym są pliki cookies?',
    content: (
      <p>
        Pliki cookies (ciasteczka) to małe pliki tekstowe, które są zapisywane na Twoim urządzeniu
        podczas odwiedzania naszej strony internetowej. Służą one do prawidłowego funkcjonowania
        strony, zapewnienia bezpieczeństwa oraz analizy ruchu.
      </p>
    ),
  },
  {
    heading: 'Zarządzanie plikami cookies',
    content: (
      <>
        <p className="mb-4">
          Do zarządzania plikami cookie i podobnymi wykorzystywanymi technologiami nasza strona
          wykorzystuje pliki cookies oraz inne technologie śledzące w następujących celach:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Cloudflare Turnstile</strong> – wykorzystujemy usługę Cloudflare Turnstile w
            celu ochrony formularzy przed spamem i nadużyciami. Turnstile zbiera minimalne
            informacje niezbędne do weryfikacji, chroniąc Twoją prywatność. Dane te podlegają
            Polityce prywatności Cloudflare.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: 'Podstawa prawna',
    content: (
      <p>
        Podstawą prawną przetwarzania danych osobowych w tym kontekście jest art. 6 ust. 1 lit. c
        RODO oraz art. 6 ust. 1 lit. f RODO. Naszym uzasadnionym interesem jest zarządzanie
        plikami cookie i podobnymi wykorzystywanymi technologiami oraz związanymi z nimi zgodami.
      </p>
    ),
  },
  {
    heading: 'Dobrowolność podania danych',
    content: (
      <p>
        Podanie danych osobowych nie jest wymagane umownie ani konieczne do zawarcia umowy. Nie są
        Państwo zobowiązani do podania danych osobowych. Jeśli nie podadzą Państwo danych
        osobowych, nie będziemy mogli zarządzać Państwa zgodami.
      </p>
    ),
  },
  {
    heading: 'Rodzaje wykorzystywanych cookies',
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Cookies niezbędne</strong> – wymagane do prawidłowego funkcjonowania strony
          internetowej, nie można ich wyłączyć.
        </li>
        <li>
          <strong>Cookies funkcjonalne</strong> – umożliwiają zapamiętanie wybranych przez Ciebie
          ustawień i personalizację interfejsu.
        </li>
        <li>
          <strong>Cookies bezpieczeństwa</strong> – wykorzystywane przez Cloudflare Turnstile do
          ochrony formularzy przed spamem i nadużyciami.
        </li>
      </ul>
    ),
  },
  {
    heading: 'Jak zarządzać cookies?',
    content: (
      <>
        <p className="mb-4">
          Możesz samodzielnie zarządzać plikami cookies poprzez ustawienia swojej przeglądarki
          internetowej. Możesz zablokować lub usunąć cookies, jednak może to wpłynąć na
          funkcjonalność strony.
        </p>
        <p className="mb-3">Instrukcje zarządzania cookies w popularnych przeglądarkach:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/pl/kb/ciasteczka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-cookie-w-przegl%C4%85darce-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: 'Kontakt',
    content: (
      <>
        <p className="mb-4">
          W sprawach związanych z polityką cookies prosimy o kontakt:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>AMPM Sp. z o.o.</strong>, ul. Zemborzycka 53B, 20-445 Lublin
          </li>
          <li>
            E-mail:{' '}
            <a
              href="mailto:biuro@ampm.com.pl"
              className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors"
            >
              biuro@ampm.com.pl
            </a>
          </li>
          <li>
            E-mail:{' '}
            <a
              href="mailto:spedycja@ampm.com.pl"
              className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors"
            >
              spedycja@ampm.com.pl
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: 'Zmiany w polityce cookies',
    content: (
      <p>
        Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce cookies. O wszelkich
        zmianach będziemy informować poprzez aktualizację treści na tej stronie.
      </p>
    ),
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Header */}
        <header className="bg-secondary pt-40 pb-16 px-6 lg:px-8 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            aria-hidden="true"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          <div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
            aria-hidden="true"
          />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-primary" aria-hidden="true" />
              <span className="text-primary font-semibold tracking-wider uppercase text-xs">
                Dokumenty prawne
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Polityka{' '}
              <span className="text-primary">Cookies</span>
            </h1>
            <p className="text-gray-400 mt-4 text-lg leading-relaxed max-w-2xl">
              Informacje o plikach cookies i technologiach śledzących stosowanych przez{' '}
              <strong className="text-gray-300">AMPM Sp. z o.o.</strong>
            </p>
          </div>
        </header>

        {/* Content */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {sections.map(({ heading, content }, index) => (
                <div key={heading} className="pb-12 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="flex items-start gap-4 mb-4">
                    <span
                      className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <h2 className="text-xl font-display font-bold text-secondary">
                      {heading}
                    </h2>
                  </div>
                  <div className="ml-12 text-gray-500 leading-relaxed text-sm">
                    {content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
