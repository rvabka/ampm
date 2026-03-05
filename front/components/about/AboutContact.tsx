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
    label: 'Adres Email',
    type: 'email',
    placeholder: 'jan@przyklad.pl',
    required: true,
  },
  {
    id: 'subject',
    label: 'Temat',
    type: 'text',
    placeholder: 'Czego dotyczy Twoje pytanie?',
    colSpan: 2,
  },
  {
    id: 'message',
    label: 'Wiadomość',
    type: 'textarea',
    placeholder: 'Treść wiadomości...',
    colSpan: 2,
    rows: 4,
    required: true,
  },
];

export default function AboutContact() {
  return (
    <section id="formularz" className="py-24 px-8 bg-background-light border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">
            Zadaj nam pytanie
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Masz pytania dotyczące naszej floty lub oferty? Napisz do nas, a
            nasz zespół skontaktuje się z Tobą tak szybko, jak to możliwe.
          </p>
        </div>

        <ContactForm fields={fields} submitLabel="Wyślij" />

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
