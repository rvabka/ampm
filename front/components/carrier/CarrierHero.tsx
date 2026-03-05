import PageHero from '@/components/shared/PageHero';

export default function CarrierHero() {
  return (
    <PageHero
      titleFirst="Dla"
      titleHighlight="Przewoźnika"
      titleBreak
      description="Stabilna współpraca. Jasne zasady. Terminowe płatności. W AMPM budujemy długofalowe relacje z przewoźnikami oparte na partnerstwie i wzajemnym szacunku."
      eyebrow="Dla Przewoźnika"
      breadcrumb={[
        { label: 'Strona Główna', href: '/' },
        { label: 'Dla Przewoźnika' },
      ]}
      layout="split"
      scrollToId="formularz"
    />
  );
}
