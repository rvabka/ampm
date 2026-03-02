import PageHero from '@/components/shared/PageHero';

export default function AboutHero() {
  return (
    <PageHero
      titleFirst="Poznaj naszą"
      titleHighlight="firmę i wartości"
      titleBreak
      description="Jesteśmy firmą spedycyjną specjalizującą się w transporcie drogowym na terenie Polski i całej Unii Europejskiej. Stawiamy na partnerskie relacje, przejrzyste zasady i profesjonalną obsługę każdego zlecenia."
      eyebrow="O nas"
      breadcrumb={[
        { label: 'Strona Główna', href: '/' },
        { label: 'O nas' },
      ]}
      layout="split"
      scrollToId="formularz"
    />
  );
}
