import Image from 'next/image';

export default function AboutHistory() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 relative">
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="aspect-[4/3] w-full overflow-hidden shadow-2xl rounded-2xl">
              <Image
                src="/image5.webp"
                alt="Nowoczesne centrum logistyczne"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary hidden lg:block -z-10 rounded-lg"
              aria-hidden="true"
            />
          </div>

          <div className="w-full lg:w-1/2 lg:-ml-12 z-20 mt-8 lg:mt-0">
            <div className="bg-white p-8 lg:p-12 shadow-xl border-t-4 border-secondary rounded-2xl">
              <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">
                Kim jesteśmy
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary leading-tight mb-6">
                Spedycja to nasza pasja i zobowiązanie
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Jesteśmy zespołem specjalistów, dla których transport i spedycja
                to nie tylko branża – to codzienna pasja i zobowiązanie wobec
                klientów i partnerów. AMPM Sp. z o.o. to firma spedycyjna
                specjalizująca się w transporcie drogowym na terenie Polski i
                całej Unii Europejskiej.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Działamy jako firma spedycyjna i realizujemy transporty przy
                współpracy z siecią sprawdzonych podwykonawców – przewoźników
                drogowych. Dzięki temu jesteśmy elastyczni, szybko reagujemy na
                zmieniające się potrzeby i obsługujemy zlecenia o różnym
                charakterze i skali.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
