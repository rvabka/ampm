import Image from 'next/image';

export default function AboutMission() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-0 relative">
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="aspect-[4/3] w-full overflow-hidden shadow-2xl rounded-2xl">
              <Image
                src="/image1.webp"
                alt="Kierowca sprawdzający ładunek ciężarówki"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -top-4 -left-4 w-20 h-20 bg-secondary hidden lg:block -z-10 rounded-lg"
              aria-hidden="true"
            />
          </div>

          <div className="w-full lg:w-1/2 lg:-mr-12 z-20 mt-8 lg:mt-0">
            <div className="bg-white p-8 lg:p-12 shadow-xl border-t-4 border-primary rounded-2xl">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-4 block">
                Czym się zajmujemy
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary leading-tight mb-6">
                Transport drogowy FTL i LTL po całej Europie
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Specjalizujemy się w organizacji przewozów całopojazdowych (FTL)
                i częściowych (LTL). Obsługujemy transport krajowy po Polsce oraz
                przewozy międzynarodowe do wszystkich krajów Unii Europejskiej.
                Nasze główne kierunki to Niemcy, Francja, Benelux, kraje
                skandynawskie oraz Europa Środkowa i Wschodnia.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Obsługujemy szeroki zakres ładunków – od palet i kartonów, przez
                towary przemysłowe i chemiczne, aż po ładunki wymagające
                kontrolowanej temperatury. Każdemu klientowi przydzielamy
                dedykowanego spedytora, który dba o sprawną organizację zleceń
                bez zbędnego pośrednictwa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
