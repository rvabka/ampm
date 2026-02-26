export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: 'klienci' | 'przewoznicy' | 'dokumenty';
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: 'Jakie rodzaje pojazdów posiadacie w swojej flocie?',
    answer:
      'Dysponujemy szeroką gamą pojazdów, w tym busami do 3.5t (8–10 palet), solówkami, oraz zestawami ciężarowymi typu ciągnik siodłowy z naczepą (standard, mega, chłodnia). Każdy pojazd jest wyposażony w system GPS i spełnia normy EURO 6.',
    category: 'klienci',
  },
  {
    id: 2,
    question: 'W jakich krajach realizujecie transporty?',
    answer:
      'Obsługujemy całą Unię Europejską oraz kraje strefy Schengen. Nasze główne kierunki to Niemcy, Francja, Hiszpania, Włochy, kraje Beneluksu oraz Skandynawia. Realizujemy również transporty krajowe na terenie Polski.',
    category: 'klienci',
  },
  {
    id: 3,
    question: 'Czy oferujecie ubezpieczenie przewożonego towaru?',
    answer:
      'Tak, każdy transport realizowany przez AMPM Spedition jest objęty ubezpieczeniem OCP (Odpowiedzialność Cywilna Przewoźnika) na kwotę do 300 000 EUR. Istnieje możliwość dodatkowego doubezpieczenia ładunków o wysokiej wartości (Cargo) na życzenie klienta.',
    category: 'klienci',
  },
  {
    id: 4,
    question: 'Jakie dokumenty są potrzebne do zlecenia transportu?',
    answer:
      'Podstawą jest zlecenie transportowe przesłane drogą mailową, zawierające dane załadunku i rozładunku, specyfikację towaru (waga, wymiary, ilość palet) oraz ustaloną stawkę. Nasi spedytorzy służą pomocą w przygotowaniu niezbędnej dokumentacji, w tym listów przewozowych CMR.',
    category: 'dokumenty',
  },
  {
    id: 5,
    question: 'Jaki jest czas oczekiwania na podstawienie auta?',
    answer:
      'W przypadku transportów ekspresowych (busy) jesteśmy w stanie podstawić auto nawet w ciągu 2–4 godzin od otrzymania zlecenia na terenie większości krajów UE. Dla transportów całopojazdowych (FTL) standardowy czas to 24–48 godzin, jednak zawsze staramy się dopasować do potrzeb klienta.',
    category: 'klienci',
  },
  {
    id: 6,
    question: 'Jak wygląda proces śledzenia przesyłki?',
    answer:
      'Każdy pojazd w naszej flocie wyposażony jest w GPS, dzięki czemu nasi spedytorzy monitorują trasę w czasie rzeczywistym. Na życzenie klienta przekazujemy bieżące informacje o lokalizacji ładunku i przewidywanym czasie dostawy.',
    category: 'klienci',
  },
  {
    id: 7,
    question: 'Jakie są terminy płatności dla przewoźników?',
    answer:
      'Standardowy termin płatności dla naszych podwykonawców to 45 dni od otrzymania kompletu poprawnie wystawionych dokumentów. Oferujemy również usługę skonta (szybszej płatności) – 7 dni (–3%) lub 14 dni (–2%).',
    category: 'przewoznicy',
  },
  {
    id: 8,
    question: 'Jakie dokumenty musi dostarczyć przewoźnik po realizacji zlecenia?',
    answer:
      'Po zakończeniu transportu przewoźnik zobowiązany jest do dostarczenia: oryginalnego listu przewozowego CMR z potwierdzeniem odbioru, faktury VAT wystawionej zgodnie ze zleceniem oraz protokołu szkodowego (jeśli wystąpiły uszkodzenia). Dokumenty należy przesłać na adres biura lub drogą elektroniczną.',
    category: 'przewoznicy',
  },
  {
    id: 9,
    question: 'Jak wygląda fakturowanie i rozliczenie zlecenia?',
    answer:
      'Faktury są wystawiane po dostarczeniu kompletu dokumentów potwierdzających wykonanie usługi. Płatności realizujemy przelewem bankowym w ustalonym terminie. Wszystkie warunki finansowe są precyzyjnie określone w zleceniu transportowym przed rozpoczęciem kursu.',
    category: 'dokumenty',
  },
  {
    id: 10,
    question: 'Czy AMPM Spedition oferuje transport towarów niebezpiecznych (ADR)?',
    answer:
      'Tak, realizujemy transporty towarów klasyfikowanych zgodnie z przepisami ADR. Nasi kierowcy posiadają aktualne zaświadczenia ADR, a pojazdy są odpowiednio oznakowane i wyposażone. Prosimy o wcześniejsze poinformowanie o charakterze ładunku podczas składania zlecenia.',
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
