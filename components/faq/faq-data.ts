export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: 'klienci' | 'przewoznicy' | 'dokumenty';
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: 'Na jakim terenie realizujecie usługi transportowe - czy obejmują one całą Unię Europejską?',
    answer:
      'Tak, realizujemy usługi transportowe na terenie całej Unii Europejskiej. Obsługujemy zarówno transport krajowy po Polsce, jak i przewozy międzynarodowe do wszystkich krajów UE. Nasze główne kierunki to Niemcy, Francja, Benelux, kraje skandynawskie oraz Europa Środkowa i Wschodnia.',
    category: 'klienci',
  },
  {
    id: 2,
    question: 'Jakie typy pojazdów mogą podjąć z Wami współpracę?',
    answer:
      'Zapraszamy do współpracy przewoźników posiadających: busy do 3,5 t, solówki, zestawy 13,6 m (firanka, plandeka), chłodnie oraz pojazdy przystosowane do transportu specjalistycznego. Flota powinna spełniać aktualne normy techniczne i posiadać ważne dokumenty rejestracyjne oraz ubezpieczeniowe.',
    category: 'przewoznicy',
  },
  {
    id: 3,
    question: 'Jak przebiega proces przypisania dedykowanego spedytora do klienta lub przewoźnika?',
    answer:
      'Po nawiązaniu współpracy każdy klient i przewoźnik otrzymuje przydzielonego spedytora, który staje się jego głównym punktem kontaktu. Spedytor zapoznaje się ze specyfiką Twoich potrzeb i dba o sprawną organizację kolejnych zleceń — bez zbędnego pośrednictwa i biurokracji.',
    category: 'klienci',
  },
  {
    id: 4,
    question: 'Czy zapewniacie pomoc w przypadku nieprzewidzianych sytuacji w trakcie realizacji transportu?',
    answer:
      'Tak. Jesteśmy w stałym kontakcie z przewoźnikami realizującymi zlecenia. W razie awarii, opóźnienia lub innych nieprzewidzianych zdarzeń nasz spedytor niezwłocznie reaguje i poszukuje najlepszego rozwiązania — zarówno dla klienta, jak i dla przewoźnika.',
    category: 'klienci',
  },
  {
    id: 5,
    question: 'Jak długo trzeba czekać na otrzymanie pierwszego zlecenia?',
    answer:
      'Po zakończeniu formalności rejestracyjnych pierwsze zlecenie można otrzymać bardzo szybko — często jeszcze tego samego lub następnego dnia roboczego. Czas zależy od aktualnej dostępności ładunków i Twojej dyspozycyjności.',
    category: 'przewoznicy',
  },
  {
    id: 6,
    question: 'Jakie ładunki znajdują się w zakresie obsługi Waszej firmy?',
    answer:
      'Obsługujemy szeroki zakres ładunków — od palet i kartonów, przez towary przemysłowe i chemiczne, aż po ładunki wymagające kontrolowanej temperatury. Realizujemy zarówno transporty całopojazdowe (FTL), jak i częściowe (LTL). Szczegóły ładunku prosimy podać przy składaniu zapytania.',
    category: 'klienci',
  },
  {
    id: 7,
    question: 'W jaki sposób wygląda komunikacja z przydzielonym spedytorem?',
    answer:
      'Komunikacja odbywa się bezpośrednio z dedykowanym spedytorem — głównie telefonicznie i mailowo. Spedytor jest dostępny w godzinach pracy biura (Pon–Pt, 07:00–15:00) i dba o to, by wszelkie informacje dotyczące zlecenia trafiały do Ciebie szybko i kompletnie.',
    category: 'klienci',
  },
  {
    id: 8,
    question: 'Jak szybko można rozpocząć współpracę z Waszą firmą?',
    answer:
      'Proces nawiązania współpracy jest krótki i przejrzysty. Po kontakcie z naszym zespołem wystarczy przesłać wymagane dokumenty, a po ich weryfikacji podpisujemy umowę i przystępujemy do realizacji zleceń. Całość może zająć zaledwie kilka dni roboczych.',
    category: 'przewoznicy',
  },
  {
    id: 9,
    question: 'Czy oferujecie możliwość pracy w modelu hybrydowym?',
    answer:
      'Tak, w wybranych stanowiskach oferujemy możliwość pracy hybrydowej. Szczegółowe informacje dotyczące modelu pracy znajdziesz na stronie Kariera lub możesz zapytać bezpośrednio nasz dział HR pod adresem biuro@ampm.com.pl.',
    category: 'przewoznicy',
  },
  {
    id: 10,
    question: 'Czym wyróżnia się AMPM na tle innych firm z branży TSL?',
    answer:
      'AMPM wyróżnia przede wszystkim indywidualne podejście do każdego klienta i przewoźnika, bezpośrednia komunikacja z dedykowanym spedytorem oraz transparentne zasady współpracy. Stawiamy na partnerskie, długofalowe relacje — a nie jednorazowe transakcje.',
    category: 'klienci',
  },
  {
    id: 11,
    question: 'Czy istnieje możliwość pracy całkowicie zdalnej?',
    answer:
      'W wybranych przypadkach i na określonych stanowiskach praca zdalna jest możliwa. Zapraszamy do zapoznania się z ofertami na stronie Kariera lub do kontaktu z naszym działem HR: biuro@ampm.com.pl.',
    category: 'przewoznicy',
  },
  {
    id: 12,
    question: 'Jakie formalności i dokumenty są wymagane przy rozpoczęciu współpracy z firmą spedycyjną?',
    answer:
      'Od przewoźników wymagamy m.in.: aktualnego wypisu z CEIDG lub KRS, licencji na transport drogowy, polisy OCP oraz dokumentów rejestracyjnych pojazdu. Nasz zespół pomaga przez cały proces i wskaże dokładnie, jakie dokumenty są potrzebne.',
    category: 'dokumenty',
  },
  {
    id: 13,
    question: 'Czy gwarantujecie terminowe regulowanie należności?',
    answer:
      'Tak. Terminowe płatności to jeden z fundamentów naszej współpracy z przewoźnikami. Rozliczamy się zgodnie z ustalonym terminem po otrzymaniu kompletu dokumentów potwierdzających wykonanie zlecenia. Szanujemy płynność finansową naszych partnerów.',
    category: 'przewoznicy',
  },
  {
    id: 14,
    question: 'Jak wyglądają zasady rozliczeń oraz ustalane terminy płatności?',
    answer:
      'Warunki finansowe są każdorazowo określone w zleceniu transportowym. Płatności realizujemy przelewem bankowym w uzgodnionym terminie po dostarczeniu prawidłowo wystawionych dokumentów (faktura + CMR). Szczegóły dotyczące ewentualnych opcji szybszej płatności ustalamy indywidualnie.',
    category: 'dokumenty',
  },
  {
    id: 15,
    question: 'Czy przewoźnicy mogą liczyć na regularne i stałe zlecenia?',
    answer:
      'Tak. Dbamy o to, aby nasi partnerzy mieli zapewnioną ciągłość zleceń. Dla regularnych przewoźników staramy się planować ładunki z wyprzedzeniem i optymalizować trasy, aby maksymalnie wykorzystać potencjał floty.',
    category: 'przewoznicy',
  },
  {
    id: 16,
    question: 'Jaki jest główny zakres działalności firmy AMPM?',
    answer:
      'AMPM Sp. z o.o. to firma zajmująca się transportem i spedycją drogową na terenie Polski i Unii Europejskiej. Organizujemy przewozy ładunków w systemie FTL i LTL, zarządzamy siecią sprawdzonych podwykonawców i zapewniamy kompleksową obsługę logistyczną dla klientów z różnych branż.',
    category: 'klienci',
  },
  {
    id: 17,
    question: 'Czy współpraca wymaga podpisania umowy?',
    answer:
      'Tak, każdą współpracę formalizujemy umową, która jasno określa warunki zleceń, zasady rozliczeń, terminy płatności oraz prawa i obowiązki obu stron. Umowa stanowi zabezpieczenie zarówno dla nas, jak i dla naszych partnerów.',
    category: 'dokumenty',
  },
  {
    id: 18,
    question: 'Czy obsługujecie transporty ekspresowe lub pilne?',
    answer:
      'Tak, realizujemy transporty ekspresowe i pilne. Dzięki sieci sprawdzonych podwykonawców jesteśmy w stanie szybko zorganizować transport nawet w trybie natychmiastowym. Skontaktuj się z nami telefonicznie pod numerem +48 570 112 512, aby omówić szczegóły.',
    category: 'klienci',
  },
  {
    id: 19,
    question: 'Jak wygląda procedura reklamacyjna w przypadku szkody lub opóźnienia?',
    answer:
      'W przypadku szkody lub opóźnienia należy niezwłocznie poinformować naszego spedytora i sporządzić protokół zdarzenia przy odbiorze towaru. Dalsze postępowanie odbywa się zgodnie z Konwencją CMR oraz warunkami polisy OCP. Nasz dział obsługi pomaga prowadzić sprawę krok po kroku.',
    category: 'dokumenty',
  },
  {
    id: 20,
    question: 'Czy mogę liczyć na zlecenia powrotne?',
    answer:
      'Staramy się planować trasy tak, aby przewoźnicy mogli korzystać ze zleceń powrotnych i unikać pustych przebiegów. Nie możemy zagwarantować powrotu na każdej trasie, jednak w miarę dostępności ładunków aktywnie szukamy rozwiązań korzystnych dla obu stron.',
    category: 'przewoznicy',
  },
  {
    id: 21,
    question: 'Jakie są najczęstsze wymagania dotyczące wyposażenia pojazdów?',
    answer:
      'Najczęściej wymagamy sprawnego GPS, ważnych dokumentów rejestracyjnych i ubezpieczeniowych oraz aktualnego przeglądu technicznego. W zależności od rodzaju ładunku mogą być wymagane dodatkowe certyfikaty — np. ATP dla chłodni lub certyfikat ADR dla materiałów niebezpiecznych.',
    category: 'przewoznicy',
  },
  {
    id: 22,
    question: 'Czy posiadacie swoją flotę?',
    answer:
      'AMPM działa jako firma spedycyjna i realizuje transporty głównie przy współpracy z siecią sprawdzonych podwykonawców — przewoźników drogowych. Dzięki temu jesteśmy elastyczni, szybko reagujemy na zmieniające się potrzeby klientów i możemy obsłużyć zlecenia o różnym charakterze i skali.',
    category: 'klienci',
  },
];

export const FAQ_CATEGORIES = [
  { id: 'all', label: 'Wszystkie' },
  { id: 'klienci', label: 'Dla Klientów' },
  { id: 'przewoznicy', label: 'Dla Przewoźników' },
  { id: 'dokumenty', label: 'Płatności i Dokumenty' },
] as const;

export type FaqCategoryId = (typeof FAQ_CATEGORIES)[number]['id'];
