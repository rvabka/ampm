import { Truck, Package, Snowflake } from 'lucide-react';

const fleetTypes = [
  {
    icon: Truck,
    title: 'Ciężarowe powyżej 3.5t',
    description: 'Ciągniki siodłowe, zestawy, solówki.',
  },
  {
    icon: Package,
    title: 'Transport lekki do 3.5t',
    description: 'Busy, plandeki, kontenery.',
  },
  {
    icon: Snowflake,
    title: 'Specjalistyczne',
    description: 'Chłodnie, izotermy, ADR.',
  },
];

export default function CarrierFleet() {
  return (
    <section
      className="py-24 px-6 lg:px-8 bg-background-light overflow-hidden"
      aria-labelledby="fleet-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div
            className="w-full lg:w-1/2 shrink-0"
            aria-hidden="true"
          >
            <div className="relative grid grid-cols-2 gap-4">
              
              <div className="space-y-4 mt-12">
                <div className="bg-secondary rounded-2xl p-8 flex flex-col justify-end h-56">
                  <span className="text-5xl font-extrabold text-white leading-none">100+</span>
                  <span className="text-primary text-sm font-semibold mt-2 uppercase tracking-wider">Partnerów</span>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 h-40 flex flex-col justify-center shadow-sm">
                  <span className="text-4xl font-extrabold text-secondary leading-none">24/7</span>
                  <span className="text-gray-400 text-sm mt-2">Wsparcie spedytora</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 h-40 flex flex-col justify-center shadow-sm">
                  <span className="text-4xl font-extrabold text-secondary leading-none">EU</span>
                  <span className="text-gray-400 text-sm mt-2">Zasięg całej Europy</span>
                </div>
                <div className="bg-primary rounded-2xl p-8 flex flex-col justify-end h-56">
                  <span className="text-5xl font-extrabold text-white leading-none">14 dni</span>
                  <span className="text-white/80 text-sm font-semibold mt-2 uppercase tracking-wider">Szybka płatność</span>
                </div>
              </div>

              
              <div className="absolute -z-10 inset-0 bg-primary/5 rounded-3xl blur-3xl scale-110" />
            </div>
          </div>

          
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              Flota
            </div>

            <h2
              id="fleet-heading"
              className="text-3xl md:text-4xl font-display font-bold text-secondary leading-tight mb-6"
            >
              Współpracujemy z{' '}
              <span className="text-primary">różnorodnymi flotami</span>
            </h2>

            <p className="text-gray-500 leading-relaxed mb-10 text-lg">
              Nasze rozwiązania są skalowalne. Obsługujemy zarówno pojedynczych
              przewoźników, jak i duże przedsiębiorstwa transportowe
              dysponujące rozbudowaną flotą.
            </p>

            <ul className="space-y-6" aria-label="Typy floty">
              {fleetTypes.map(item => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center">
                      <Icon size={20} className="text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
