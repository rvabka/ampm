import PageHero from '@/components/shared/PageHero';

export default function QuoteHero() {
  return (
    <PageHero
      titleFirst="Zapytaj o"
      titleHighlight="Wycenę"
      titleBreak
      description="Wypełnij formularz — opisz trasę i szczegóły ładunku, a my przygotujemy ofertę dopasowaną do Twoich potrzeb."
      eyebrow="Bezpłatna wycena"
      breadcrumb={[
        { label: 'Strona Główna', href: '/' },
        { label: 'Wycena' },
      ]}
      layout="split"
    />
  );
}
