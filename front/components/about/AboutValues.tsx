'use client';

import { Clock, ShieldCheck, Handshake, TrendingUp } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface Value {
  icon: LucideIcon;
  title: string;
  stat: string;
  statLabel: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Clock,
    title: 'Terminowość',
    stat: '98.5%',
    statLabel: 'dostaw na czas',
    description:
      'Każde zlecenie traktujemy priorytetowo. Dzięki zaawansowanemu systemowi planowania tras i monitoringowi w czasie rzeczywistym zapewniamy terminową dostawę niemal każdego ładunku.',
  },
  {
    icon: ShieldCheck,
    title: 'Bezpieczeństwo',
    stat: '0',
    statLabel: 'tolerancji dla ryzyka',
    description:
      'Bezpieczeństwo ładunku i kierowców to nasz priorytet nr 1. Pełne ubezpieczenie OCP, monitoring GPS 24/7 i regularne szkolenia personelu gwarantują spokój naszych klientów.',
  },
  {
    icon: Handshake,
    title: 'Partnerstwo',
    stat: '85%',
    statLabel: 'klientów wraca do nas',
    description:
      'Budujemy długoterminowe relacje oparte na zaufaniu. Nasi spedytorzy znają potrzeby każdego klienta i proaktywnie proponują optymalne rozwiązania logistyczne.',
  },
  {
    icon: TrendingUp,
    title: 'Rozwój',
    stat: '30%',
    statLabel: 'wzrostu rok do roku',
    description:
      'Nieustannie inwestujemy w flotę, technologię i ludzi. Nasz dynamiczny rozwój to dowód na to, że jakość usług przekłada się na realne wyniki biznesowe.',
  },
];

export default function AboutValues() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            Fundament Działania
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">
            Nasze Wartości
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Każda decyzja, którą podejmujemy, opiera się na czterech filarach.
            Najedź, by poznać szczegóły.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="group [perspective:1000px] h-[320px] cursor-pointer"
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 [backface-visibility:hidden] bg-background-light border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <v.icon size={32} className="text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4">
                    {v.title}
                  </h3>
                  <div className="text-4xl font-display font-black text-secondary">
                    {v.stat}
                  </div>
                  <span className="text-gray-500 text-sm mt-1">{v.statLabel}</span>
                </div>

                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-secondary rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                  <v.icon
                    size={24}
                    className="text-primary mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-bold text-white mb-4">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
