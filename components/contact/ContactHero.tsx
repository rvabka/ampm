import PageHero from '@/components/shared/PageHero';

export default function ContactHero() {
  return (
    <PageHero
      titleFirst="Skontaktuj"
      titleHighlight="się z nami"
      titleBreak
      description="Jesteśmy do Twojej dyspozycji. Napisz, zadzwoń lub odwiedź nas osobiście — odpowiemy tak szybko, jak to możliwe."
      eyebrow="Kontakt"
      breadcrumb={[
        { label: 'Strona Główna', href: '/' },
        { label: 'Kontakt' },
      ]}
      layout="split"
    />
  );
}
