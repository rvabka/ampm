import PageHero from '@/components/shared/PageHero';

export default function QuoteHero() {
  return (
    <PageHero
      titleFirst="Wycena"
      titleHighlight="transportu"
      titleBreak
      description="Potrzebujesz sprawnej kalkulacji kosztów przewozu? W AMPM przygotowujemy indywidualną wycenę transportu dopasowaną do specyfiki Twojego ładunku oraz aktualnej sytuacji rynkowej."
      eyebrow="Wycena transportu"
      breadcrumb={[
        { label: 'Strona Główna', href: '/' },
        { label: 'Wycena' },
      ]}
      layout="split"
      scrollToId="formularz"
    />
  );
}
