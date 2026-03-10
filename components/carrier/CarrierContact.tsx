import ContactForm, { type FormField } from '@/components/shared/ContactForm';

const fields: FormField[] = [
  {
    id: 'name',
    label: 'Imię i Nazwisko',
    type: 'text',
    placeholder: 'Jan Kowalski',
    required: true,
  },
  {
    id: 'email',
    label: 'Adres e-mail',
    type: 'email',
    placeholder: 'jan@przyklad.pl',
    required: true,
  },
  {
    id: 'phone',
    label: 'Telefon',
    type: 'tel',
    placeholder: '+48 000 000 000',
    required: true,
  },
  {
    id: 'company',
    label: 'Nazwa firmy',
    type: 'text',
    placeholder: 'Pełna nazwa firmy',
    required: true,
  },
  {
    id: 'fleet_count',
    label: 'Liczba pojazdów',
    type: 'select',
    placeholder: 'Wybierz przedział',
    options: [
      { value: '1-3', label: '1–3 pojazdy' },
      { value: '4-10', label: '4–10 pojazdów' },
      { value: '11-50', label: '11–50 pojazdów' },
      { value: '50+', label: 'Powyżej 50 pojazdów' },
    ],
  },
  {
    id: 'fleet_details',
    label: 'Typ pojazdu / preferowane trasy',
    type: 'text',
    placeholder: 'np. ciągnik siodłowy, trasy międzynarodowe',
  },
  {
    id: 'message',
    label: 'Wiadomość',
    type: 'textarea',
    placeholder: 'Napisz, co możemy dla Ciebie zrobić...',
    required: true,
    colSpan: 2,
    rows: 4,
  },
];

export default function CarrierContact() {
  return (
    <section
      id="formularz"
      className="py-24 px-6 lg:px-8 bg-background-light"
      aria-labelledby="carrier-contact-heading"
    >
      <div className="max-w-4xl mx-auto">

        {/* CTA intro */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-primary" aria-hidden="true" />
            <span className="text-primary font-semibold tracking-wider uppercase text-xs">
              Postaw na sprawdzoną spedycję
            </span>
            <div className="h-px w-10 bg-primary" aria-hidden="true" />
          </div>
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            Skontaktuj się
          </span>
          <h2
            id="carrier-contact-heading"
            className="text-3xl md:text-4xl font-display font-bold text-secondary"
          >
            Gotowy do współpracy?
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            W AMPM stawiamy na jasne zasady, partnerskie relacje i profesjonalną organizację
            transportu. Współpracując z nami, zyskujesz nie tylko zlecenia, ale także wsparcie
            i stabilność. Skontaktuj się z nami już dziś i przekonaj się, dlaczego warto z nami
            współpracować.
          </p>
          <p className="text-gray-500 mt-3">
            Wypełnij formularz, a my skontaktujemy się z Tobą.
          </p>
        </div>

        <ContactForm
          fields={fields}
          submitLabel="Wyślij zgłoszenie"
          endpoint="/api/carrier"
        />

        <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
          Administratorem danych osobowych jest AMPM Sp. z o.o. Dane wpisane w formularzu
          będą przetwarzane w celu udzielenia odpowiedzi na przesłane zgłoszenie zgodnie
          z{' '}
          <a
            href="/polityka-prywatnosci"
            className="hover:text-primary underline underline-offset-2 transition-colors"
          >
            polityką prywatności
          </a>
          .
        </p>
      </div>
    </section>
  );
}
