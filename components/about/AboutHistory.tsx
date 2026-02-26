import Image from 'next/image';

export default function AboutHistory() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 relative">
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="aspect-[4/3] w-full overflow-hidden shadow-2xl rounded-2xl">
              <Image
                src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
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
                Nasza Historia
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary leading-tight mb-6">
                Doświadczenie, na którym możesz polegać
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Od ponad dekady AMPM Spedition wyznacza standardy w transporcie
                drogowym na terenie całej Europy. Nasza podróż rozpoczęła się od
                jednego zestawu ciężarowego i wizji stworzenia firmy
                spedycyjnej, która stawia na relacje równie mocno, co na
                logistykę.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dziś jesteśmy dumni, że możemy obsługiwać setki klientów,
                dostarczając tysiące ładunków miesięcznie. Nie jesteśmy tylko
                przewoźnikiem; jesteśmy strategicznym partnerem, który dba o
                płynność Twojego łańcucha dostaw.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
