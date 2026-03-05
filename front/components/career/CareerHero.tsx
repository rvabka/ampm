import PageHero from '@/components/shared/PageHero';

export default function CareerHero() {
  return (
    <PageHero
      titleFirst="Dołącz do"
      titleHighlight="zespołu AMPM"
      titleBreak
      description="Branża TSL to dynamiczne środowisko, w którym liczy się szybkość działania, odpowiedzialność i dobra organizacja. Jeśli cenisz samodzielność, partnerską atmosferę i realny wpływ na wyniki — zapraszamy do współpracy."
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
