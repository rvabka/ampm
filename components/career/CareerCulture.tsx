import { Users, Clock, Laptop, TrendingUp, Leaf, type LucideIcon } from 'lucide-react';
import Image from 'next/image';

const points: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Users,
    title: 'Przyjazna atmosfera',
    desc: 'Tworzymy środowisko oparte na partnerskich relacjach i swobodnej komunikacji. Stawiamy na współpracę, a nie sztywną hierarchię.',
  },
  {
    icon: Clock,
    title: 'Elastyczne godziny pracy',
    desc: 'Rozumiemy, że każdy ma swój rytm dnia. Dlatego umożliwiamy rozpoczęcie pracy w elastycznym przedziale godzin.',
  },
  {
    icon: Laptop,
    title: 'Nowoczesne technologie',
    desc: 'Korzystamy z nowoczesnych narzędzi i systemów, które usprawniają codzienną pracę oraz komunikację w zespole.',
  },
  {
    icon: TrendingUp,
    title: 'Rozwój zawodowy',
    desc: 'Oferujemy szkolenia, mentoring oraz możliwość zdobywania nowych kompetencji w dynamicznie rozwijającej się branży logistycznej.',
  },
  {
    icon: Leaf,
    title: 'Odpowiedzialność i środowisko',
    desc: 'Dbamy o zrównoważony rozwój oraz odpowiedzialne podejście do biznesu i środowiska.',
  },
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
            className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4"
          >
            Jak wygląda praca w naszej firmie?
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Stawiamy na otwartość, rozwój i dobrą atmosferę. Wierzymy, że komfort pracy przekłada się na efektywność całego zespołu.
          </p>
          <ul className="space-y-5" aria-label="Wartości kultury pracy">
            {points.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={17} className="text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-secondary text-sm mb-0.5">{title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
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
