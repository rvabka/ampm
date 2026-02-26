import { Phone, Mail } from 'lucide-react';

export default function FaqContact() {
  return (
    <section
      className="py-20 px-6 lg:px-8 bg-white border-t border-gray-200"
      aria-labelledby="faq-contact-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
          Pomoc
        </span>
        <h2
          id="faq-contact-heading"
          className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4"
        >
          Nadal masz pytania?
        </h2>
        <p className="text-gray-500 mb-12 max-w-lg mx-auto">
          Jeśli nie znalazłeś odpowiedzi na swoje pytanie w naszej bazie
          wiedzy, skontaktuj się z nami bezpośrednio.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+48123456789"
            className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-gray-200 hover:border-primary/40 hover:bg-primary/5 transition-all"
            aria-label="Zadzwoń do AMPM Spedition: +48 123 456 789"
          >
            <Phone size={18} className="text-primary shrink-0" aria-hidden="true" />
            <div className="text-left">
              <p className="text-xs text-gray-400 leading-none mb-0.5">Telefon</p>
              <span className="text-sm font-semibold text-secondary group-hover:text-primary transition-colors">
                +48 123 456 789
              </span>
            </div>
          </a>

          <a
            href="mailto:kontakt@ampm-spedition.pl"
            className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-gray-200 hover:border-primary/40 hover:bg-primary/5 transition-all"
            aria-label="Napisz do AMPM Spedition: kontakt@ampm-spedition.pl"
          >
            <Mail size={18} className="text-primary shrink-0" aria-hidden="true" />
            <div className="text-left">
              <p className="text-xs text-gray-400 leading-none mb-0.5">E-mail</p>
              <span className="text-sm font-semibold text-secondary group-hover:text-primary transition-colors">
                kontakt@ampm-spedition.pl
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
