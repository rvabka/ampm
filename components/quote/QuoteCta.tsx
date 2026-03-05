export default function QuoteCta() {
  return (
    <section
      className="py-20 px-6 lg:px-8 bg-secondary"
      aria-labelledby="quote-cta-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          id="quote-cta-heading"
          className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
        >
          Masz transport do zrealizowania?
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          Wyślij zapytanie już dziś i sprawdź, jak możemy zoptymalizować koszty Twojej
          logistyki.
        </p>
        <a
          href="#formularz"
          className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors text-sm uppercase tracking-wider"
        >
          Wyślij zapytanie
        </a>
      </div>
    </section>
  );
}
