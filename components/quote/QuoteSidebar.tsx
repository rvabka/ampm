import { BadgeCheck, Shield, MapPin, Phone } from 'lucide-react';

const guarantees = [
  {
    icon: BadgeCheck,
    title: 'Indywidualna oferta',
    description:
      'Każde zapytanie rozpatrujemy osobno. Oferta jest przygotowywana przez spedytora, który zna realia tras i rynku.',
  },
  {
    icon: Shield,
    title: 'Ubezpieczenie OCP',
    description:
      'Każdy ładunek objęty jest ubezpieczeniem odpowiedzialności cywilnej przewoźnika do 300 000 EUR.',
  },
  {
    icon: MapPin,
    title: 'Śledzenie GPS',
    description:
      'Monitorujemy każdy pojazd w czasie rzeczywistym. Na życzenie informujemy o aktualnej lokalizacji przesyłki.',
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
              Wolisz zadzwonić?
            </h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              Nasi spedytorzy są dostępni w dni robocze od 8:00 do 18:00.
              Chętnie odpowiemy na pytania przed wysłaniem zapytania.
            </p>
            <a
              href="tel:+48123456789"
              className="inline-flex items-center gap-2 text-primary hover:text-white text-xl font-black transition-colors"
              aria-label="Zadzwoń do AMPM Spedition: +48 123 456 789"
            >
              +48 123 456 789
            </a>
          </div>
        </div>

      </div>
    </aside>
  );
}
