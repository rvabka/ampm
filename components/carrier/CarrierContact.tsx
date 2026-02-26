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
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            Skontaktuj się
          </span>
          <h2
            id="carrier-contact-heading"
            className="text-3xl md:text-4xl font-display font-bold text-secondary"
          >
            Zostań naszym partnerem
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Wypełnij krótki formularz, a nasz zespół skontaktuje się z Tobą,
            aby przedstawić szczegóły współpracy.
          </p>
        </div>

        <ContactForm
          fields={fields}
          submitLabel="Wyślij zgłoszenie"
        />

        <p className="text-xs text-gray-400 text-center mt-4">
          Wysyłając formularz akceptujesz naszą{' '}
          <a href="/polityka-prywatnosci" className="hover:text-primary underline underline-offset-2 transition-colors">
            politykę prywatności
          </a>
          .
        </p>
      </div>
    </section>
  );
}
