import PageHero from '@/components/shared/PageHero';

export default function CarrierHero() {
  return (
    <PageHero
      titleFirst="Dla"
      titleHighlight="Przewoźnika"
      titleBreak
      description="Rozwijaj swój biznes z rzetelnym partnerem. Oferujemy stabilne warunki współpracy, terminowe płatności i wsparcie na każdym kilometrze trasy."
      eyebrow="Partnerstwo w Biznesie"
      breadcrumb={[
        { label: 'Strona Główna', href: '/' },
        { label: 'Dla Przewoźnika' },
      ]}
      layout="split"
    />
  );
}
