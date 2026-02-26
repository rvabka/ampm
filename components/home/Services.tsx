"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Truck, Bus, Warehouse, ArrowLeft, ArrowRight, type LucideIcon } from "lucide-react";

type Category = "wszystkie" | "całopojazdowy" | "ekspresowy" | "logistyka";

interface Service {
  title: string;
  category: Exclude<Category, "wszystkie">;
  categoryLabel: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  description: string;
  price: string;
  popular?: boolean;
}

const services: Service[] = [
  {
    title: "Transport Ciężki (TIR)",
    category: "całopojazdowy",
    categoryLabel: "Międzynarodowy",
    icon: Truck,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADTbwAqRFXv_cxWJ0U_ng2ORydFvV1rKMjt7I0wq7ChL7ZeBGucqyyDyymktdjGUQ2wSXjyguocWYgkoQvI_JHwnc2yKIZPDskYR_AoNYAyg2PDEa1h7CPActrKNdyk9dnpJ_HVc6O1w3111psfmLHSuyI5wblxHBOOqJJ6iWvgvgbr4Gmvu1_NsiTC9V3L6MC1aQcaPrcqn_q7b21iFd9NQuIShpcISeVzaNLVdFOYUIp3UOX-exdu0UuSS9O-zAay9eSR8lUndRn",
    imageAlt: "Ciężarówka TIR na autostradzie – transport całopojazdowy",
    description:
      "Specjalistyczny transport całopojazdowy (FTL) z wykorzystaniem ciągników siodłowych z naczepami.",
    price: "Od 4.50 zł/km",
    popular: true,
  },
  {
    title: "Transport do 3.5t",
    category: "ekspresowy",
    categoryLabel: "Ekspres",
    icon: Bus,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD42QjYg4doBrCAnXA2L2jVMlntgxDx-FQoZo8mtuNdkuygeyVWgX1k6JrCl-Biz-cosrs4EQ5k9uADO2EGxMjI9xJTZuCZZHpIvDtaIMWLAHZzeUqMLFa6MA_1cEBZeN1R84EG9fXuReEUu1AnBcSWladOxW7W4k5Eb1Dh3Yvax_5GcXkfBj9R37km2f0qGfCLDBvIkSaRDAJm3pR4JrEoXGlvz2V0T_mV6LyCS1TIKeVRb9e7R42kQmiV9gjGZiKBQ7_f4DZmb9hJ",
    imageAlt: "Samochód dostawczy – transport ekspresowy do 3.5 tony",
    description:
      "Szybkie przewozy busami na terenie całej Europy. Idealne dla mniejszych ładunków wymagających pilnego dostarczenia.",
    price: "Wycena Indywidualna",
  },
  {
    title: "Magazynowanie i Dystrybucja",
    category: "logistyka",
    categoryLabel: "Logistyka",
    icon: Warehouse,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB__78BM9IiMqI0Pm6leaLopc3haMt_5mEDhGsUsEvxuRodAZrS6VXkR-IkK3KUrxdO5vwxl2PE4PaQ_kcYB44kbaTgOaujKiY-SOnsdCdWEVqNSoA0lqMfkjOJlLqgitrQ6I2ZBddshdEsW_EmALDilcl7JwDMt4goQV4gYWCXvQpRkQzvxbkNngNQCHH8-CmJfjVAhsTkTBemxlKaL6fWMCDTrxmw0vqCECdi4xnkc3JVW-LteyLa2wh2OiOc5AvbQTTGUyj85JV2",
    imageAlt: "Półki magazynowe – usługi magazynowania i dystrybucji",
    description:
      "Strategiczne centra przeładunkowe dla transportu drogowego z usługami kompletacji i dystrybucji lokalnej.",
    price: "Elastyczne Warunki",
  },
];

const tabs: { id: Category; label: string }[] = [
  { id: "wszystkie", label: "Wszystkie Usługi" },
  { id: "całopojazdowy", label: "Transport Całopojazdowy" },
  { id: "ekspresowy", label: "Transport Ekspresowy" },
  { id: "logistyka", label: "Logistyka" },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<Category>("wszystkie");

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
          <div className="hidden md:flex gap-4" aria-hidden="true">
            <button
              className="p-3 rounded-full border border-gray-300 hover:bg-white transition text-secondary"
              aria-label="Poprzednie usługi"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              className="p-3 rounded-full bg-primary text-white hover:bg-primary-hover transition shadow-lg"
              aria-label="Następne usługi"
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

        
        <div
          role="tabpanel"
          aria-live="polite"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {filtered.map((service) => (
            <article
              key={service.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col h-full"
            >
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
                    {service.price}
                  </span>
                  <Link
                    href="/wycena"
                    className="text-primary font-bold text-sm hover:underline"
                    aria-label={`Zapytaj o wycenę: ${service.title}`}
                  >
                    Wycena
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
