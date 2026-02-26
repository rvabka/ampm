import { Shield, Eye, Satellite, Leaf } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import FeatureCard from '@/components/shared/FeatureCard';

interface Standard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const standards: Standard[] = [
  {
    icon: Shield,
    title: 'Ubezpieczenie OCP',
    description:
      'Pełna ochrona przewożonego towaru dzięki rozszerzonemu pakietowi ubezpieczeń OCP na każdy transport.',
  },
  {
    icon: Eye,
    title: 'Monitoring 24/7',
    description:
      'Ciągły nadzór nad realizacją zleceń przez nasz dział operacyjny, dostępny dla Ciebie całą dobę.',
  },
  {
    icon: Satellite,
    title: 'System GPS',
    description:
      'Zaawansowana telematyka pozwalająca na precyzyjne śledzenie każdej ciężarówki w czasie rzeczywistym.',
  },
  {
    icon: Leaf,
    title: 'Norma Euro 6',
    description:
      'Dbamy o środowisko, korzystając wyłącznie z najnowocześniejszych pojazdów spełniających rygorystyczne normy emisji.',
  },
];

export default function AboutStandards() {
  return (
    <section className="py-24 px-8 bg-background-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            Gwarancja Jakości
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">
            Bezpieczeństwo i Standardy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {standards.map((item) => (
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
