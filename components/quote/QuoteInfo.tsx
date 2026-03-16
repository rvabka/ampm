import { CheckCircle2, Phone, Mail, FileText } from 'lucide-react';

const checkItems = [
  'miejsce załadunku i rozładunku',
  'termin realizacji',
  'rodzaj towaru',
  'waga i wymiary ładunku',
  'typ transportu (FTL / LTL)',
  'ewentualne wymagania specjalne',
];

const benefits = [
  'Szybka odpowiedź na zapytanie',
  'Konkurencyjne stawki rynkowe',
  'Transparentne warunki współpracy',
  'Brak ukrytych kosztów',
  'Dedykowany spedytor od pierwszego kontaktu',
];

const contactOptions = [
  { icon: Phone, label: 'Telefonicznie', href: 'tel:+48570112512', value: '+48 570 112 512' },
  { icon: Mail, label: 'Mailowo', href: 'mailto:biuro@ampm.com.pl', value: 'biuro@ampm.com.pl' },
  { icon: FileText, label: 'Formularz', href: '#formularz', value: 'Formularz na stronie' },
];

export default function QuoteInfo() {
  return (
    <section
      className="py-24 px-6 lg:px-8 bg-white"
      aria-labelledby="quote-info-heading"
    >
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Intro */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-primary" aria-hidden="true" />
            <span className="text-primary font-semibold tracking-wider uppercase text-xs">
              Jak to działa
            </span>
          </div>
          <p className="text-gray-500 text-lg leading-relaxed">
            Każde zapytanie analizujemy indywidualnie, biorąc pod uwagę kluczowe parametry
            logistyczne, aby zaproponować optymalne i konkurencyjne rozwiązanie.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Co uwzględniamy */}
          <div>
            <h2
              id="quote-info-heading"
              className="text-2xl md:text-3xl font-display font-bold text-secondary mb-3"
            >
              Co uwzględniamy w wycenie?
            </h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Aby przygotować dokładną kalkulację, potrzebujemy podstawowych informacji:
            </p>
            <ul className="space-y-3" aria-label="Parametry wyceny">
              {checkItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <span
                    className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-sm mt-6 leading-relaxed">
              Na tej podstawie dobieramy odpowiedni środek transportu oraz planujemy
              najefektywniejszą trasę.
            </p>
          </div>

          {/* Dlaczego warto */}
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary mb-3">
              Dlaczego warto wysłać zapytanie?
            </h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Stawiamy na indywidualne podejście i pełną transparentność:
            </p>
            <ul className="space-y-4" aria-label="Zalety współpracy z Am Pm sp. z o.o.">
              {benefits.map((item) => (
                <li key={item} className="flex items-center gap-3 text-secondary font-medium">
                  <CheckCircle2 size={20} className="text-primary shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-sm mt-6 leading-relaxed">
              Naszym celem jest nie tylko przedstawienie ceny, ale zaproponowanie rozwiązania,
              które będzie bezpieczne, terminowe i korzystne biznesowo.
            </p>
          </div>
        </div>

        {/* Jak uzyskać wycenę */}
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary mb-3">
            Jak uzyskać wycenę?
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Możesz skontaktować się z nami w wybrany sposób — odpowiemy tak szybko, jak to
            możliwe i przedstawimy szczegółową ofertę dopasowaną do Twoich potrzeb.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactOptions.map(({ icon: Icon, label, href, value }) => (
              <a
                key={label}
                href={href}
                className="bg-background-light border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 hover:border-primary hover:shadow-md transition-all duration-200 group"
                aria-label={`${label}: ${value}`}
              >
                <div
                  className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center group-hover:border-primary/30 transition-colors"
                  aria-hidden="true"
                >
                  <Icon size={22} className="text-secondary group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-gray-400 tracking-wider block mb-1">
                    {label}
                  </span>
                  <span className="text-sm font-semibold text-secondary">{value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
