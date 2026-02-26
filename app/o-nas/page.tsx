import type { Metadata } from 'next';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import AboutHero from '@/components/about/AboutHero';
import AboutHistory from '@/components/about/AboutHistory';
import AboutMission from '@/components/about/AboutMission';
import AboutStats from '@/components/about/AboutStats';
import AboutStandards from '@/components/about/AboutStandards';
import AboutFleet from '@/components/about/AboutFleet';
import AboutMap from '@/components/about/AboutMap';
import AboutValues from '@/components/about/AboutValues';
import AboutTeam from '@/components/about/AboutTeam';
import AboutContact from '@/components/about/AboutContact';

export const metadata: Metadata = {
  title: 'O Nas – Flota, Standardy i Zespół',
  description:
    'Poznaj AMPM Spedition – naszą historię, misję, nowoczesną flotę spełniającą normy Euro 6 oraz zespół ekspertów logistyki drogowej.',
  alternates: {
    canonical: '/o-nas'
  },
  openGraph: {
    title: 'O Nas – AMPM Spedition',
    description:
      'Od ponad dekady wyznaczamy standardy w transporcie drogowym na terenie całej Europy. Poznaj nasz zespół i flotę.',
    url: '/o-nas'
  }
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <AboutHero />
        <AboutHistory />
        <AboutMission />
        <AboutStats />
        <AboutStandards />
        <AboutFleet />
        <AboutValues />
        <AboutMap />
        <AboutTeam />
        <AboutContact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
