import PageHero from '@/components/shared/PageHero';

export default function CareerHero() {
  return (
    <PageHero
      titleFirst="Kariera w"
      titleHighlight="naszej firmie"
      titleBreak
      description="Dołącz do zespołu profesjonalistów i rozwijaj swoją karierę w branży transportu i logistyki. Tworzymy środowisko pracy, w którym liczą się ludzie, rozwój oraz partnerska współpraca. Jeśli szukasz miejsca, w którym możesz zdobywać doświadczenie i realizować ambitne cele – jesteś we właściwym miejscu."
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
