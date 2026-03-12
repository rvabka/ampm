import { Users, Headphones, Truck, BarChart3 } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface TeamDept {
  icon: LucideIcon;
  name: string;
  role: string;
  description: string;
}

const departments: TeamDept[] = [
  {
    icon: BarChart3,
    name: 'Zarząd',
    role: 'Strategia i Rozwój',
    description:
      'Doświadczony zarząd z wieloletnim stażem w branży TSL, odpowiedzialny za wyznaczanie kierunków rozwoju firmy i budowanie relacji z kluczowymi partnerami.'
  },
  {
    icon: Headphones,
    name: 'Dział Spedycji',
    role: 'Koordynacja Transportów',
    description:
      'Wykwalifikowani spedytorzy, którzy każdego dnia koordynują setki zleceń. Znajomość rynków europejskich i języków obcych to nasz standard.'
  },
  {
    icon: Truck,
    name: 'Dział Operacyjny',
    role: 'Logistyka i Flota',
    description:
      'Specjaliści odpowiedzialni za zarządzanie flotą, planowanie tras i monitorowanie realizacji zleceń w czasie rzeczywistym.'
  },
  {
    icon: Users,
    name: 'Obsługa Klienta',
    role: 'Relacje i Wsparcie',
    description:
      'Dedykowany zespół dbający o każdego klienta. Szybka komunikacja, proaktywne rozwiązywanie problemów i indywidualne podejście.'
  }
];

export default function AboutTeam() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            Nasz Zespół
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">
            Ludzie, którzy napędzają AMPM
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Za każdym sprawnie zrealizowanym transportem stoją ludzie z pasją i
            doświadczeniem. Poznaj nasze działy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map(dept => (
            <div
              key={dept.name}
              className="group bg-background-light border border-gray-100 rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <dept.icon
                    size={28}
                    className="text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-bold text-secondary">
                      {dept.name}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-400 mb-3">
                    {dept.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {dept.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-secondary rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Users size={24} className="text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">
                Zgrany zespół z pasją do logistyki
              </p>
            </div>
          </div>
          <div
            className="h-px sm:h-10 sm:w-px w-full bg-gray-700"
            aria-hidden="true"
          />
          <p className="text-gray-300 text-sm max-w-md text-center sm:text-left">
            Każdy członek naszego zespołu przechodzi kompleksowy program
            onboardingu i regularne szkolenia branżowe, abyśmy mogli gwarantować
            najwyższy standard usług.
          </p>
        </div>
      </div>
    </section>
  );
}
