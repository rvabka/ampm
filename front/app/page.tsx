import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";
import Services from "@/components/home/Services";
import Fleet from "@/components/home/Fleet";
import AboutMap from "@/components/about/AboutMap";
import Testimonials from "@/components/home/Testimonials";
import BlogSection from "@/components/home/BlogSection";
import Footer from "@/components/shared/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";

export const metadata: Metadata = {
  title: "Transport Drogowy i Spedycja Europejska",
  description:
    "AMPM Spedition – profesjonalny transport drogowy ciężarowy i dostawczy po całej Europie. Wycena online, wsparcie 24/7, ponad 25 krajów obsługi. Zaufaj liderowi logistyki drogowej.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AMPM Spedition – Transport Drogowy i Spedycja Europejska",
    description:
      "Profesjonalny transport ciężarowy TIR, dostawczy do 3.5t oraz magazynowanie na terenie całej Europy.",
    url: "/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AMPM Spedition – Transport Drogowy i Spedycja Europejska",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMPM Spedition – Transport Drogowy i Spedycja Europejska",
    description:
      "Profesjonalny transport ciężarowy TIR, dostawczy do 3.5t oraz magazynowanie na terenie całej Europy.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <WhyUs />
        <Services />
        <AboutMap />
        <Fleet />
        <Testimonials />
        <BlogSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
