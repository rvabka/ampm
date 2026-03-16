import { BadgeCheck, Shield, UserCheck, Phone } from 'lucide-react';

const guarantees = [
  {
    icon: BadgeCheck,
    title: 'Indywidualna oferta',
    description:
      'Każde zapytanie rozpatrujemy osobno. Oferta jest przygotowywana przez spedytora, który zna realia tras i rynku.',
  },
  {
    icon: Shield,
    title: 'Brak ukrytych kosztów',
    description:
      'Przedstawiamy transparentne warunki współpracy. Cena w ofercie to cena ostateczna — bez niespodzianek.',
  },
  {
    icon: UserCheck,
    title: 'Dedykowany spedytor',
    description:
      'Od pierwszego kontaktu opiekuje się Tobą jeden spedytor, który zna Twoje potrzeby i historię zleceń.',
  },
];

export default function QuoteSidebar() {
  return (
    <aside className="w-full lg:w-1/3" aria-label="Informacje dodatkowe">
      <div className="sticky top-32 space-y-6">

        
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-lg font-bold text-secondary mb-6">
            Dlaczego warto zapytać?
          </h2>
          <ul className="space-y-6" aria-label="Gwarancje jakości">
            {guarantees.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary text-sm mb-1">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="bg-secondary p-8 rounded-2xl shadow-lg relative overflow-hidden">
          <div
            className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <Phone
              size={24}
              className="text-primary mb-4"
              aria-hidden="true"
            />
            <h3 className="text-white font-bold text-lg mb-1">
              Wolisz kontakt bezpośredni?
            </h3>
            <p className="text-gray-400 text-sm mb-2 leading-relaxed">
              Zadzwoń do nas — chętnie odpowiemy na wszystkie pytania.
            </p>
            <p className="text-gray-500 text-xs mb-5">Pon – Pt: 07:00–15:00</p>
            <a
              href="tel:+48570112512"
              className="inline-flex items-center gap-2 text-primary hover:text-white text-xl font-black transition-colors"
              aria-label="Skontaktuj się z Am Pm sp. z o.o.: +48 570 112 512"
            >
              +48 570 112 512
            </a>
          </div>
        </div>

      </div>
    </aside>
  );
}
