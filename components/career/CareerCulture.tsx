import { CheckCircle2 } from 'lucide-react';

const points = [
  'Szybkie procesy decyzyjne',
  'Bezpośredni kontakt z zarządem',
  'Realny wpływ na rozwój firmy',
];

export default function CareerCulture() {
  return (
    <section
      className="py-24 px-6 lg:px-8 bg-white"
      aria-labelledby="career-culture-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-primary" aria-hidden="true" />
            <span className="text-primary font-semibold tracking-wider uppercase text-xs">
              Kultura pracy
            </span>
          </div>
          <h2
            id="career-culture-heading"
            className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6"
          >
            Nie działamy korporacyjnie
          </h2>
          <div className="space-y-5 text-gray-500 leading-relaxed mb-8">
            <p>
              Wierzymy w płaską strukturę i bezpośrednią komunikację. U nas drzwi są zawsze
              otwarte, a każdy pomysł wart jest wysłuchania. Zamiast skomplikowanych procedur
              stawiamy na zdrowy rozsądek i elastyczność.
            </p>
            <p>
              Cenimy samodzielność i odpowiedzialność. Tworzymy miejsce, w którym każdy czuje
              się częścią zespołu, a nie trybikiem w maszynie.
            </p>
          </div>
          <ul className="space-y-3" aria-label="Wartości kultury pracy">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-secondary font-medium">
                <CheckCircle2 size={20} className="text-primary shrink-0" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden bg-background-light aspect-[4/3]"
          role="presentation"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,0,0,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.4) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute top-10 right-10 w-56 h-56 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-secondary/8 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
