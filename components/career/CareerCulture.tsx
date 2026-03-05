import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const points = [
  'Szybkie decyzje i konkretna komunikacja',
  'Wzajemne wsparcie w zespole',
  'Liczy się wynik, zaangażowanie i profesjonalizm'
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
              Stawiamy na samodzielność, odpowiedzialność i efektywność. Nie
              działamy korporacyjnie — cenimy szybkie decyzje, konkretną
              komunikację i wzajemne wsparcie w zespole.
            </p>
            <p>
              W AMPM liczy się wynik, zaangażowanie i profesjonalne podejście do
              klienta oraz przewoźnika.
            </p>
          </div>
          <ul className="space-y-3" aria-label="Wartości kultury pracy">
            {points.map(point => (
              <li
                key={point}
                className="flex items-center gap-3 text-secondary font-medium"
              >
                <CheckCircle2
                  size={20}
                  className="text-primary shrink-0"
                  aria-hidden="true"
                />
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
          <Image
            src="/image6.webp"
            alt="Zespół pracowników AMPM podczas spotkania biznesowego"
            fill
            className="object-cover object-bottom"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}
