const steps = [
  {
    step: '01',
    title: 'Kontakt z naszym zespołem',
    description: 'Skontaktuj się z nami telefonicznie, mailowo lub przez formularz na stronie.',
  },
  {
    step: '02',
    title: 'Przesłanie dokumentów',
    description: 'Prześlij wymagane dokumenty rejestrowe i transportowe.',
  },
  {
    step: '03',
    title: 'Weryfikacja i podpisanie umowy',
    description: 'Sprawdzamy dokumentację i podpisujemy umowę na warunkach jasnych dla obu stron.',
  },
  {
    step: '04',
    title: 'Pierwsze zlecenie',
    description: 'Przydzielamy dedykowanego spedytora — pierwsze ładunki możesz otrzymać już bardzo szybko.',
  },
];

export default function CarrierProcess() {
  return (
    <section
      className="py-24 px-6 lg:px-8 bg-white"
      aria-labelledby="carrier-process-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
            Jak zacząć
          </span>
          <h2
            id="carrier-process-heading"
            className="text-3xl md:text-4xl font-display font-bold text-secondary"
          >
            Jak rozpocząć współpracę?
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Proces jest szybki i przejrzysty. Pierwsze ładunki możesz otrzymać nawet
            w bardzo krótkim czasie od zakończenia formalności.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ step, title, description }) => (
            <div key={step} className="relative">
              <div className="bg-background-light rounded-2xl p-8 h-full border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all duration-200">
                <span
                  className="text-5xl font-extrabold text-primary/15 font-display leading-none block mb-4"
                  aria-hidden="true"
                >
                  {step}
                </span>
                <h3 className="text-lg font-display font-bold text-secondary mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
