import Image from 'next/image';

const vehicles = [
  {
    title: 'Ciągniki Siodłowe + Naczepy',
    specs: ['Ładowność do 24t', 'Plandeki, Firanki, Mega'],
    image:
      '/image11.webp',
    alt: 'Ciągnik siodłowy z naczepą na autostradzie',
  },
  {
    title: 'Chłodnie i Izotermy',
    specs: ['Kontrola temperatury', 'Transport żywności i leków'],
    image:
      '/image12.webp',
    alt: 'Samochód chłodnia do transportu żywności',
  },
  {
    title: 'Busy do 3.5t',
    specs: ['Ekspresowe dostawy', 'Winda załadowcza'],
    image:
      '/image13.webp',
    alt: 'Samochód dostawczy do 3.5 tony',
  },
];

export default function AboutFleet() {
  return (
    <section className="py-24 px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
              Tabor i Możliwości
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">
              Nowoczesna Flota
            </h2>
          </div>
          <p className="text-gray-500 max-w-md mt-4 md:mt-0">
            Elastyczność to nasza domena. Dysponujemy zróżnicowaną flotą
            dostosowaną do każdego rodzaju ładunku.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.title}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100"
            >
              <Image
                src={vehicle.image}
                alt={vehicle.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {vehicle.title}
                  </h3>
                  {vehicle.specs.map((spec) => (
                    <p key={spec} className="text-gray-300 text-sm mb-1">
                      <span className="text-primary font-bold">•</span> {spec}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
