import PageHero from '@/components/shared/PageHero';

export default function DocumentsHero() {
  return (
    <PageHero
      titleFirst="Nasze"
      titleHighlight="Dokumenty"
      titleBreak
      description="Licencje, certyfikaty i polisy ubezpieczeniowe dostępne do pobrania. Transparentność i pełna dokumentacja naszej działalności."
      eyebrow="Am Pm sp. z o.o."
      breadcrumb={[
        { label: 'Strona Główna', href: '/' },
        { label: 'Dokumenty' },
      ]}
      layout="split"
    />
  );
}
