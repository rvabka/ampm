const steps = [
  {
    num: '01',
    title: 'Aplikacja',
    desc: 'Wyślij swoje CV i podstawowe informacje poprzez formularz rekrutacyjny.',
  },
  {
    num: '02',
    title: 'Rozmowa rekrutacyjna',
    desc: 'Skontaktujemy się z wybranymi kandydatami i zaprosimy na rozmowę telefoniczną lub online.',
  },
  {
    num: '03',
    title: 'Wdrożenie i szkolenie',
    desc: 'Nowi pracownicy przechodzą proces wdrożenia oraz szkolenia, które pozwalają szybko odnaleźć się w pracy.',
  },
  {
    num: '04',
    title: 'Start pracy',
    desc: 'Po zakończeniu procesu rozpoczynasz pracę w naszym zespole i rozwijasz swoją karierę w branży TSL.',
  },
];

export default function CareerProcess() {
  return (
    <section
      className="py-24 px-6 lg:px-8 bg-gray-50"
      aria-labelledby="career-process-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" aria-hidden="true" />
            <span className="text-primary font-semibold tracking-wider uppercase text-xs">
              Proces rekrutacji
            </span>
            <div className="h-px w-10 bg-primary" aria-hidden="true" />
          </div>
          <h2
            id="career-process-heading"
            className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4"
          >
            Jak wygląda proces rekrutacji?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Nasza rekrutacja jest prosta i przejrzysta. Chcemy jak najszybciej poznać Twoje
            kompetencje i zaprosić Cię do współpracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ num, title, desc }, i) => (
            <div key={num} className="relative">
              {/* connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-[calc(100%-1px)] w-full h-px bg-gradient-to-r from-primary/30 to-primary/10 z-0"
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 bg-white rounded-2xl p-7 border border-gray-100 hover:border-primary/20 hover:shadow-md transition duration-300 h-full">
                <span className="text-4xl font-display font-black text-primary/20 leading-none block mb-4">
                  {num}
                </span>
                <h3 className="font-bold text-secondary mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
