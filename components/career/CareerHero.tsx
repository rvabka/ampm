import PageHero from '@/components/shared/PageHero';

export default function CareerHero() {
  return (
    <PageHero
      titleFirst="Dołącz do"
      titleHighlight="zespołu AMPM"
      titleBreak
      description="Twórz z nami przyszłość logistyki. Szukamy pasjonatów, którzy chcą rozwijać się w dynamicznym środowisku międzynarodowym."
      eyebrow="Kariera"
      breadcrumb={[
        { label: 'Strona Główna', href: '/' },
        { label: 'Kariera' },
      ]}
      layout="split"
      scrollToId="aplikuj"
    />
  );
}
