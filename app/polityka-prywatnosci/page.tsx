import type { Metadata } from 'next';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';

export const metadata: Metadata = {
  title: 'Polityka Prywatności – Am Pm sp. z o.o.',
  description:
    'Informacje o przetwarzaniu danych osobowych przez Am Pm sp. z o.o. zgodnie z rozporządzeniem RODO.',
  alternates: {
    canonical: '/polityka-prywatnosci',
  },
  robots: {
    index: false,
    follow: true,
  },
};

const sections = [
  {
    heading: 'Administrator danych',
    content: (
      <>
        <p>
          Administratorem Pani/Pana danych osobowych jest <strong>Am Pm sp. z o.o.</strong> z
          siedzibą w Lublinie, adres: ul. Zemborzycka 53 B, 20-445 Lublin
          („Administrator").
        </p>
      </>
    ),
  },
  {
    heading: 'Podmioty danych',
    content: (
      <>
        <p className="mb-4">
          Administrator przetwarza dane osobowe podmiotów odwiedzających stronę internetową
          Administratora <strong>https://ampmspedition.pl/</strong>, podmiotów korzystających z
          formularza kontaktowego zamieszczonego na stronie internetowej oraz podmiotów
          kontaktujących się z Administratorem.
        </p>
        <p className="mb-4">Przetwarzane przez Administratora dane osobowe obejmują:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            dane osobowe osób kontaktujących się z Administratorem poprzez formularz kontaktowy
            lub drogą mailową: imię i nazwisko, adres e-mail, IP komputera, numer telefonu,
            firma oraz inne dane osobowe zawarte w treści zapytania;
          </li>
          <li>dane osobowe odwiedzających strony internetowe: numer IP komputera;</li>
          <li>
            poprzez formularze kontaktowe zbieramy następujące dane: imię i nazwisko, adres
            e-mail, numer telefonu, nazwa firmy (opcjonalnie), NIP (w formularzu wyceny),
            treść wiadomości.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: 'Cele i podstawy prawne przetwarzania danych osobowych',
    content: (
      <>
        <p className="mb-4">Dane osobowe będą przetwarzane w celach:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            składania osobom zainteresowanym indywidualnych ofert — art. 6 ust. 1 lit. f) RODO,
            tj. prawnie uzasadniony interes Administratora,
          </li>
          <li>
            marketingowych — art. 6 ust. 1 lit. f) RODO, tj. prawnie uzasadniony interes
            Administratora,
          </li>
          <li>
            kontaktu z osobami kierującymi zapytania lub wiadomości do Administratora za pomocą
            formularza kontaktowego lub drogą mailową — art. 6 ust. 1 lit. f) RODO, tj. prawnie
            uzasadniony interes Administratora,
          </li>
          <li>
            kontaktu za pośrednictwem formularza kontaktowego — przetwarzanie danych odbywa się
            na podstawie Twojej zgody w zakresie udzielonym na podstawie art. 6 ust. 1 lit. a
            RODO.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: 'Odbiorcy danych osobowych',
    content: (
      <p>
        Pani / Pana dane osobowe mogą być udostępnione podmiotom upoważnionym na podstawie
        przepisów powszechnie obowiązującego prawa, w szczególności instytucjom uprawnionym do
        kontroli działalności Administratora lub instytucjom uprawnionym do uzyskania danych
        osobowych na podstawie przepisów prawa, a także podmiotom świadczącym na rzecz
        Administratora usługi z zakresu outsourcingu procesów księgowych, audytorom, doradcom
        prawnym lub podatkowym oraz dostawcom usług IT. Pani / Pana dane osobowe będziemy
        przechowywać do upływu okresu przedawnienia roszczeń.
      </p>
    ),
  },
  {
    heading: 'Źródło pochodzenia danych osobowych',
    content: (
      <p>
        Podanie danych osobowych jest dobrowolne, ale niezbędne do skontaktowania się z
        Administratorem. Konsekwencją niepodania danych osobowych będzie brak możliwości
        kontaktu z Administratorem. Pani / Pana dane osobowe zostały udostępnione
        Administratorowi w związku z odwiedzeniem strony internetowej lub przesłaniem
        formularza kontaktowego.
      </p>
    ),
  },
  {
    heading: 'Prawa związane z przetwarzaniem danych osobowych',
    content: (
      <p>
        W związku z przetwarzaniem danych osobowych przysługują Pani / Panu następujące prawa
        do: dostępu do danych, sprostowania danych, usunięcia danych, ograniczenia
        przetwarzania danych oraz prawo do sprzeciwu wobec przetwarzania danych. Prawa te
        przysługują Pani/Panu w przypadkach i w zakresie przewidzianym przez obowiązujące
        przepisy prawa. W związku z przetwarzaniem danych przysługuje również prawo do
        wniesienia skargi do organu nadzorczego – Prezes Urzędu Ochrony Danych Osobowych
        (ul. Stawki 2, 00-193 Warszawa).
      </p>
    ),
  },
  {
    heading: 'Zabezpieczenia',
    content: (
      <p>
        Administrator podejmuje odpowiednie działania techniczne i organizacyjne w celu ochrony
        Państwa danych osobowych. Państwa dane osobowe są dostępne tylko dla osób, które
        potrzebują ich do celów i zadań opisanych w niniejszej polityce prywatności (np.
        pracownicy działu kadr, administratorzy systemów informatycznych). Wszystkie te osoby
        są zobowiązane do traktowania danych osobowych w sposób poufny i wyłącznie zgodnie z
        obowiązującymi przepisami i regulacjami w zakresie ochrony danych osobowych. Dane są
        nam przekazywane w formie niezaszyfrowanej, za pomocą otwartej, transgranicznej sieci
        dostępnej dla każdego. Jednakże Administrator wdrożył środki bezpieczeństwa w celu
        ochrony danych przed nieuprawnionym dostępem oraz zapewnienia autentyczności strony
        internetowej, integralności danych oraz poufności danych przekazywanych za
        pośrednictwem sieci wewnętrznej firmy.
      </p>
    ),
  },
  {
    heading: 'Przekazywanie danych osobowych do państw trzecich i organizacji międzynarodowych',
    content: (
      <p>
        Administrator przechowuje Pani / Pana dane w infrastrukturze informatycznej
        dostarczanej przez podmioty zewnętrzne, w tym w skrzynkach mailowych, których serwery
        mogą być zlokalizowane poza Europejskim Obszarem Gospodarczym, a tym samym przekazuje
        dane osobowe do odbiorców mających siedzibę poza Europejskim Obszarem Gospodarczym.
        Administrator przekazuje dane osobowe wykorzystując mechanizmy zgodne z obowiązującym
        prawem, w szczególności zgodnie z wymogami RODO, zawartymi m.in. w art. 46 RODO, w
        szczególności na podstawie standardowych klauzul umownych. Więcej informacji o
        istniejących zabezpieczeniach wdrożonych przez Administratora w celu zapewnienia
        przetwarzania danych osobowych zgodnie z obowiązującymi przepisami oraz o
        możliwościach uzyskania kopii danych lub o miejscu i sposobie udostępnienia danych
        można uzyskać kontaktując się z Administratorem w sposób wskazany w niniejszej
        klauzuli.
      </p>
    ),
  },
  {
    heading: 'Zautomatyzowane podejmowanie decyzji, w tym profilowanie',
    content: (
      <p>
        Administrator nie podejmuje decyzji opartych na zautomatyzowanym przetwarzaniu, w tym
        profilowaniu w oparciu o Pani/Pana dane osobowe.
      </p>
    ),
  },
  {
    heading: 'Dane Kontaktowe',
    content: (
      <>
        <p className="mb-4">
          W sprawach dotyczących przetwarzania danych osobowych może Pani / Pan skontaktować
          się z Administratorem:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            kierując korespondencję tradycyjną na adres siedziby Administratora lub
          </li>
          <li>
            za pośrednictwem dedykowanego adresu e-mail:{' '}
            <a
              href="mailto:biuro@ampm.com.pl"
              className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors"
            >
              biuro@ampm.com.pl
            </a>
          </li>
        </ul>
        <p className="mt-4">
          Osoba, która złożyła wniosek lub żądanie dotyczące przetwarzania jej danych
          osobowych, w ramach korzystania z przysługujących jej praw, może zostać poproszona o
          odpowiedź na pytania, które umożliwią weryfikację jej tożsamości.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
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
              <span className="text-primary">Prywatności</span>
            </h1>
            <p className="text-gray-400 mt-4 text-lg leading-relaxed max-w-2xl">
              Zgodnie z art. 13 oraz art. 14 rozporządzenia Parlamentu Europejskiego i Rady
              (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO) informujemy o zasadach
              przetwarzania Pani/Pana danych osobowych.
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
