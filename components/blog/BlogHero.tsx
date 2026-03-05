import PageHero from '@/components/shared/PageHero';

export default function BlogHero() {
  return (
    <PageHero
      titleFirst="Blog"
      titleHighlight="i Aktualności"
      description="Aktualności z branży TSL, ekspercka wiedza o logistyce i życiu w trasie."
      eyebrow="Blog"
      breadcrumb={[
        { label: 'Strona Główna', href: '/' },
        { label: 'Blog' },
      ]}
      layout="split"
    />
  );
}
