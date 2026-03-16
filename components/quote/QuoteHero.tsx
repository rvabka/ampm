import PageHero from '@/components/shared/PageHero';

export default function QuoteHero() {
  return (
    <PageHero
      titleFirst="Szybka i rzetelna"
      titleHighlight="wycena transportu"
      description="Potrzebujesz sprawnej kalkulacji kosztów przewozu? W Am Pm sp. z o.o. przygotowujemy indywidualną wycenę transportu dopasowaną do specyfiki Twojego ładunku oraz aktualnej sytuacji rynkowej."
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
