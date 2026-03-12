"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Truck, Bus, Snowflake, Globe, AlertTriangle, ArrowLeft, ArrowRight, type LucideIcon } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

type Category = "wszystkie" | "krajowy" | "miedzynarodowy" | "specjalny";

interface Service {
  title: string;
  category: Exclude<Category, "wszystkie">;
  categoryLabel: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  description: string;
  href: string;
  popular?: boolean;
}

const services: Service[] = [
  {
    title: "Transport Międzynarodowy",
    category: "miedzynarodowy",
    categoryLabel: "Międzynarodowy",
    icon: Globe,
    image: "/image18.webp",
    imageAlt: "Ciężarówka TIR na autostradzie – transport międzynarodowy UE",
    description:
      "Realizujemy transport towarów na terenie całej Europy oraz poza jej granicami. Zapewniamy pełną obsługę logistyczną, w tym planowanie tras, dokumentację transportową oraz stały monitoring przesyłek. Nasze rozwiązania pozwalają na szybkie i bezpieczne dostarczanie ładunków między krajami.",
    href: "/uslugi/transport-miedzynarodowy",
    popular: true,
  },
  {
    title: "Transport Krajowy",
    category: "krajowy",
    categoryLabel: "Krajowy",
    icon: Truck,
    image: "/image17.webp",
    imageAlt: "Transport krajowy na terenie Polski – AMPM Sp. z o.o.",
    description:
      "Świadczymy usługi transportu na terenie całej Polski, gwarantując terminowe i bezpieczne dostawy. Dzięki nowoczesnej flocie oraz doświadczonym kierowcom jesteśmy w stanie obsługiwać zarówno pojedyncze zlecenia, jak i stałe kontrakty logistyczne dla firm z różnych branż.",
    href: "/uslugi/transport-krajowy",
  },
  {
    title: "Transport Ekspresowy",
    category: "krajowy",
    categoryLabel: "Ekspres",
    icon: Bus,
    image: "/image16.webp",
    imageAlt: "Bus dostawczy do 3,5 t – transport ekspresowy",
    description:
      "Transport ekspresowy to rozwiązanie dla przesyłek wymagających natychmiastowej realizacji. Oferujemy szybki przewóz towarów z krótkim czasem dostawy oraz bezpośrednim transportem od nadawcy do odbiorcy. Idealnie sprawdza się w przypadku pilnych dostaw i ładunków o wysokim priorytecie.",
    href: "/uslugi/transport-ekspresowy",
  },
  {
    title: "Transport Chłodniczy",
    category: "specjalny",
    categoryLabel: "Specjalny",
    icon: Snowflake,
    image: "/image14.webp",
    imageAlt: "Transport chłodniczy – kontrolowana temperatura",
    description:
      "Zapewniamy specjalistyczny transport towarów wymagających kontrolowanej temperatury, takich jak żywność, produkty farmaceutyczne czy chemiczne. Nasze pojazdy chłodnicze wyposażone są w nowoczesne systemy utrzymujące stałą temperaturę podczas całego transportu.",
    href: "/uslugi/transport-chlodniczy",
  },
  {
    title: "Transport ADR",
    category: "specjalny",
    categoryLabel: "Specjalny",
    icon: AlertTriangle,
    image: "/image15.webp",
    imageAlt: "Transport ADR – przewóz materiałów niebezpiecznych",
    description:
      "Specjalizujemy się w przewozie materiałów niebezpiecznych zgodnie z międzynarodową konwencją ADR. Nasi przewoźnicy posiadają odpowiednie uprawnienia, a pojazdy są przystosowane do bezpiecznego transportu tego typu ładunków. Zapewniamy pełną zgodność z przepisami oraz najwyższe standardy bezpieczeństwa.",
    href: "/uslugi/transport-adr",
  },
];

const tabs: { id: Category; label: string }[] = [
  { id: "wszystkie", label: "Wszystkie Usługi" },
  { id: "krajowy", label: "Transport Krajowy" },
  { id: "miedzynarodowy", label: "Transport Międzynarodowy" },
  { id: "specjalny", label: "Specjalistyczny" },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<Category>("wszystkie");
  const swiperRef = useRef<SwiperType | null>(null);

  const filtered = services.filter(
    (s) => activeTab === "wszystkie" || s.category === activeTab
  );

  return (
    <section
      className="py-20 px-8 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">
              Nasze Możliwości
            </span>
            <h2
              id="services-heading"
              className="text-4xl font-display font-bold text-secondary"
            >
              Profesjonalne Usługi Spedycyjne
            </h2>
          </div>
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-3 rounded-full border border-gray-300 hover:bg-white transition text-secondary"
              aria-label="Poprzednia usługa"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-3 rounded-full bg-primary text-white hover:bg-primary-hover transition shadow-lg"
              aria-label="Następna usługa"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Filtruj usługi"
          className="flex flex-wrap gap-2 md:gap-8 mb-10 border-b border-gray-200"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-2 pb-4 font-medium transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "text-secondary font-bold border-b-2 border-secondary -mb-px"
                  : "text-gray-500 hover:text-text-light"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <Swiper
          key={activeTab}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          modules={[Autoplay, Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          loop={filtered.length > 3}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="services-swiper pb-14!"
          aria-live="polite"
        >
          {filtered.map((service) => (
            <SwiperSlide key={service.title} className="h-auto!">
              <article className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-xs font-bold text-white">
                      Popularne
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <service.icon
                        className="text-secondary"
                        size={18}
                        aria-hidden="true"
                      />
                      <span className="text-xs font-bold text-gray-500 uppercase">
                        {service.categoryLabel}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-secondary">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-secondary">
                      Wycena indywidualna
                    </span>
                    <Link
                      href={service.href}
                      className="text-primary font-bold text-sm hover:underline"
                      aria-label={`Dowiedz się więcej: ${service.title}`}
                    >
                      Więcej
                    </Link>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
