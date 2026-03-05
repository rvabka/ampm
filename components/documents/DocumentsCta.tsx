import { Mail, Phone } from 'lucide-react';

export default function DocumentsCta() {
  return (
    <section
      className="py-24 px-6 lg:px-8 bg-white border-t border-gray-100"
      aria-labelledby="docs-cta-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
          Administracja
        </span>
        <h2
          id="docs-cta-heading"
          className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4"
        >
          Nie znalazłeś potrzebnego dokumentu?
        </h2>
        <p className="text-gray-500 mb-12 max-w-xl mx-auto">
          Skontaktuj się z naszym działem administracji. Prześlemy wymagane
          dokumenty bezpośrednio na Twój adres e-mail.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:biuro@ampm.com.pl"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-secondary text-white rounded-full font-semibold hover:bg-secondary-light transition shadow-lg"
            aria-label="Napisz do AMPM Spedition: biuro@ampm.com.pl"
          >
            <Mail size={16} aria-hidden="true" />
            Napisz do nas
          </a>
          <a
            href="tel:+48570112512"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-secondary text-secondary rounded-full font-semibold hover:bg-gray-50 transition"
            aria-label="Zadzwoń do AMPM Spedition: +48 570 112 512"
          >
            <Phone size={16} aria-hidden="true" />
            Zadzwoń
          </a>
        </div>
      </div>
    </section>
  );
}
