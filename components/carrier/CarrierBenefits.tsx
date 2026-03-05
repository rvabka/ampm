import { CalendarCheck, CreditCard, Headphones, Globe, ShieldCheck } from 'lucide-react';
import FeatureCard from '@/components/shared/FeatureCard';

const benefits = [
  {
    icon: CalendarCheck,
    title: 'Stałe i regularne zlecenia',
    description:
      'Oferujemy zarówno pojedyncze ładunki, jak i możliwość stałej współpracy. Dbamy o ciągłość zleceń i optymalne planowanie tras.',
  },
  {
    icon: CreditCard,
    title: 'Terminowe płatności',
    description:
      'Gwarantujemy przejrzyste warunki rozliczeń oraz dotrzymywanie ustalonych terminów płatności. Szanujemy Twoją pracę.',
  },
  {
    icon: Headphones,
    title: 'Dedykowany spedytor',
    description:
      'Współpracujesz z jednym spedytorem, który zna Twoje możliwości transportowe. Szybka komunikacja, bez zbędnej biurokracji.',
  },
  {
    icon: Globe,
    title: 'Transport międzynarodowy',
    description:
      'Realizujemy przewozy na terenie całej Unii Europejskiej. Ładunki dopasowane do różnych typów pojazdów — od busów po zestawy 13,6 m.',
  },
  {
    icon: ShieldCheck,
    title: 'Wsparcie w trasie',
    description:
      'W przypadku nieprzewidzianych sytuacji jesteśmy w stałym kontakcie i reagujemy szybko, aby znaleźć najlepsze rozwiązanie.',
  },
];

export default function CarrierBenefits() {
  return (
    <section
      className="py-24 px-6 lg:px-8 bg-background-light"
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            Dlaczego warto?
          </span>
          <h2
            id="benefits-heading"
            className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4"
          >
            Dlaczego warto z nami współpracować?
          </h2>
          <p className="text-gray-500">
            Wiemy, że solidny przewoźnik to fundament sprawnie działającej spedycji — dlatego
            stawiamy na uczciwe warunki, stały kontakt i realne wsparcie w codziennej pracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.slice(0, 3).map(benefit => (
            <FeatureCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 lg:w-2/3 mx-auto">
          {benefits.slice(3).map(benefit => (
            <FeatureCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
