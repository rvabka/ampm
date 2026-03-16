import PageHero from '@/components/shared/PageHero';

export default function FaqHero() {
  return (
    <PageHero
      titleFirst="FAQ"
      titleHighlight="Najczęstsze Pytania"
      titleBreak
      description="Tutaj znajdziesz odpowiedzi na najważniejsze pytania dotyczące współpracy, transportu i płatności."
      eyebrow="Am Pm sp. z o.o."
      breadcrumb={[
        { label: 'Strona Główna', href: '/' },
        { label: 'FAQ' },
      ]}
      layout="split"
    />
  );
}
