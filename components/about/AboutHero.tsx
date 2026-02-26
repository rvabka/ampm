import PageHero from '@/components/shared/PageHero';

export default function AboutHero() {
  return (
    <PageHero
      titleFirst="Poznaj nasz"
      titleHighlight="zespół i misję"
      titleBreak
      description="Od ponad dekady łączymy europejskie rynki, stawiając na innowacyjność, terminowość i niezawodność. Jesteśmy strategicznym partnerem w logistyce drogowej."
      eyebrow="AMPM Spedition"
      breadcrumb={[
        { label: 'Strona Główna', href: '/' },
        { label: 'O nas' },
      ]}
      layout="split"
    />
  );
}
