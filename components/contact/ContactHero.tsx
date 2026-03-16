import PageHero from '@/components/shared/PageHero';

export default function ContactHero() {
  return (
    <PageHero
      titleFirst="Skontaktuj"
      titleHighlight="się z nami"
      titleBreak
      description="Masz pytania dotyczące transportu? Chcesz otrzymać wycenę lub rozpocząć współpracę? Nasz zespół jest do Twojej dyspozycji. W Am Pm sp. z o.o. stawiamy na szybką i konkretną komunikację — niezależnie od tego, czy jesteś klientem, przewoźnikiem czy chcesz u nas pracować."
      eyebrow="Kontakt"
      breadcrumb={[
        { label: 'Strona Główna', href: '/' },
        { label: 'Kontakt' },
      ]}
      layout="split"
      scrollToId="formularz"
    />
  );
}
