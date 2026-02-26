import { CreditCard, CalendarCheck, Headphones, Handshake } from 'lucide-react';
import FeatureCard from '@/components/shared/FeatureCard';

const benefits = [
  {
    icon: CreditCard,
    title: 'Terminowe Płatności',
    description:
      'Szybkie przelewy i gwarancja płynności finansowej. Oferujemy opcję skonto dla zainteresowanych.',
  },
  {
    icon: CalendarCheck,
    title: 'Stałe Zlecenia',
    description:
      'Zapewniamy ciągłość pracy przez cały rok, niezależnie od sezonu. Regularne trasy i ładunki.',
  },
  {
    icon: Headphones,
    title: 'Wsparcie 24/7',
    description:
      'Dedykowany spedytor jest do Twojej dyspozycji całą dobę. Pomoc w każdej sytuacji na drodze.',
  },
  {
    icon: Handshake,
    title: 'Przejrzyste Zasady',
    description:
      'Uczciwe stawki rynkowe i brak ukrytych opłat. Jasna umowa i partnerskie relacje.',
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
            Twoje Korzyści
          </h2>
          <p className="text-gray-500">
            Współpraca z AMPM Spedition to gwarancja stabilności i rozwoju
            Twojej firmy transportowej.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map(benefit => (
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
