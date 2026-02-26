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
    id: 'subject',
    label: 'Temat',
    type: 'text',
    placeholder: 'Czego dotyczy Twoja wiadomość?',
    colSpan: 2,
  },
  {
    id: 'message',
    label: 'Wiadomość',
    type: 'textarea',
    placeholder: 'Treść wiadomości...',
    required: true,
    colSpan: 2,
    rows: 5,
  },
];

export default function ContactFormSection() {
  return (
    <section
      className="py-24 px-6 lg:px-8 bg-background-light border-t border-gray-100"
      aria-labelledby="contact-form-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            Formularz kontaktowy
          </span>
          <h2
            id="contact-form-heading"
            className="text-3xl md:text-4xl font-display font-bold text-secondary"
          >
            Wyślij nam wiadomość
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Masz pytanie, ofertę lub chcesz nawiązać współpracę? Napisz do nas
            — odpowiemy w ciągu 24 godzin.
          </p>
        </div>

        <ContactForm fields={fields} submitLabel="Wyślij wiadomość" />

        <p className="text-xs text-gray-400 text-center mt-4">
          Wysyłając formularz akceptujesz naszą{' '}
          <a
            href="/polityka-prywatnosci"
            className="hover:text-primary underline underline-offset-2 transition-colors"
          >
            politykę prywatności
          </a>
          .
        </p>
      </div>
    </section>
  );
}
