import Image from 'next/image';

export default function CareerAbout() {
  return (
    <section
      className="py-24 px-6 lg:px-8 bg-white"
      aria-labelledby="career-about-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div
          className="relative rounded-2xl overflow-hidden bg-background-light aspect-[4/3]"
          role="presentation"
          aria-hidden="true"
        >
          <Image
            src="/image4.webp"
            alt="Zespół pracowników AMPM podczas spotkania biznesowego"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-primary" aria-hidden="true" />
            <span className="text-primary font-semibold tracking-wider uppercase text-xs">
              O pracy w AMPM
            </span>
          </div>
          <h2
            id="career-about-heading"
            className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6"
          >
            Branża TSL to dynamiczne środowisko
          </h2>
          <div className="space-y-5 text-gray-500 leading-relaxed">
            <p>
              W AMPM tworzymy zespół ludzi ambitnych, zaangażowanych i nastawionych
              na rozwój. W branży TSL liczy się szybkość działania, odpowiedzialność
              i dobra organizacja — i dokładnie na tych wartościach budujemy naszą pracę.
            </p>
            <p>
              Jeśli cenisz samodzielność, partnerską atmosferę i realny wpływ na
              wyniki — jesteś we właściwym miejscu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
