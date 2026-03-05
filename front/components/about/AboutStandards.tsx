import { Clock, ShieldCheck, FileText, Headphones, Zap } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import FeatureCard from '@/components/shared/FeatureCard';

interface Priority {
  icon: LucideIcon;
  title: string;
  description: string;
}

const priorities: Priority[] = [
  {
    icon: Clock,
    title: 'Terminowa realizacja zleceń',
    description:
      'Dotrzymywanie uzgodnionych terminów to fundament naszej pracy. Spedytor monitoruje każde zlecenie i niezwłocznie reaguje w przypadku nieprzewidzianych sytuacji.',
  },
  {
    icon: ShieldCheck,
    title: 'Bezpieczeństwo przewożonych towarów',
    description:
      'Każdy transport objęty jest ubezpieczeniem OCP. Współpracujemy wyłącznie ze sprawdzonymi podwykonawcami, którzy spełniają aktualne normy techniczne i posiadają ważne dokumenty.',
  },
  {
    icon: FileText,
    title: 'Przejrzyste warunki współpracy',
    description:
      'Każdą współpracę formalizujemy umową jasno określającą warunki zleceń, zasady rozliczeń i terminy płatności. Żadnych ukrytych kosztów ani niejasnych zapisów.',
  },
  {
    icon: Headphones,
    title: 'Szybka i sprawna komunikacja',
    description:
      'Każdy klient i przewoźnik ma przydzielonego dedykowanego spedytora – główny punkt kontaktu dostępny w godzinach pracy biura (Pon–Pt, 07:00–15:00).',
  },
  {
    icon: Zap,
    title: 'Elastyczność w działaniu',
    description:
      'Realizujemy zarówno regularne zlecenia cykliczne, jak i transporty ekspresowe. Szybko organizujemy przewóz nawet w trybie natychmiastowym dzięki sieci sprawdzonych partnerów.',
  },
];

export default function AboutStandards() {
  return (
    <section className="py-24 px-8 bg-background-light" aria-labelledby="priorities-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            Co nas wyróżnia
          </span>
          <h2
            id="priorities-heading"
            className="text-3xl md:text-4xl font-display font-bold text-secondary"
          >
            Naszym priorytetem jest
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Każde zlecenie realizujemy z myślą o tych pięciu wartościach, które
            stanowią podstawę każdej współpracy z AMPM.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {priorities.slice(0, 3).map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 lg:w-2/3 mx-auto">
          {priorities.slice(3).map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
