import {
  ShieldCheck,
  Banknote,
  Laptop,
  TrendingUp,
  Users,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react';

const benefits: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ShieldCheck,
    title: 'Stabilne warunki',
    description:
      'Umowa o pracę lub B2B, jasna ścieżka kariery i bezpieczeństwo zatrudnienia w firmie o ugruntowanej pozycji.',
  },
  {
    icon: Banknote,
    title: 'System wynagrodzeń',
    description:
      'Atrakcyjna podstawa oraz przejrzysty system premiowy uzależniony od wyników i zaangażowania.',
  },
  {
    icon: Laptop,
    title: 'Narzędzia pracy',
    description:
      'Nowoczesny sprzęt, profesjonalne oprogramowanie i flota samochodowa dla stanowisk mobilnych.',
  },
  {
    icon: TrendingUp,
    title: 'Wpływ na zarobki',
    description:
      'Twoje wyniki mają bezpośrednie przełożenie na wysokość premii. Doceniamy skuteczność.',
  },
  {
    icon: Users,
    title: 'Atmosfera',
    description:
      'Zgrany zespół, brak korporacyjnego sztywniactwa, imprezy integracyjne i wspólne cele.',
  },
  {
    icon: GraduationCap,
    title: 'Rozwój',
    description:
      'Szkolenia wewnętrzne i zewnętrzne, kursy językowe oraz możliwość awansu w strukturach firmy.',
  },
];

export default function CareerBenefits() {
  return (
    <section
      className="py-24 px-6 lg:px-8 bg-background-light"
      aria-labelledby="career-benefits-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            Benefity
          </span>
          <h2
            id="career-benefits-heading"
            className="text-3xl md:text-4xl font-display font-bold text-secondary"
          >
            Co oferujemy?
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Zapewniamy środowisko pracy sprzyjające rozwojowi i satysfakcji zawodowej.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="w-14 h-14 bg-gray-100 flex items-center justify-center rounded-xl mb-6"
                aria-hidden="true"
              >
                <Icon size={26} className="text-secondary" />
              </div>
              <h3 className="text-xl font-display font-bold text-secondary mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-3">
            {[
              { color: 'bg-green-500', label: 'Praca stacjonarna' },
              { color: 'bg-blue-500', label: 'Praca hybrydowa' },
              { color: 'bg-purple-500', label: 'Praca zdalna' },
            ].map(({ color, label }) => (
              <span
                key={label}
                className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 flex items-center gap-2"
              >
                <span className={`w-2 h-2 rounded-full ${color}`} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
