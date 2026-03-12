"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";

const vehicles = Array.from({ length: 11 }, (_, i) => ({
  image: `/${i + 1}.webp`,
  alt: `Pojazd floty AMPM nr ${i + 1}`,
}));

const SLIDES_PER_VIEW = 3;

export default function AboutFleet() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-16">
          <div className="text-center md:text-left">
            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
              Tabor i Możliwości
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">
              Nowoczesna Flota
            </h2>
          </div>
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <p className="text-gray-500 md:max-w-md text-center md:text-left">
              Elastyczność to nasza domena. Dysponujemy zróżnicowaną flotą
              dostosowaną do każdego rodzaju ładunku.
            </p>
            <div className="hidden md:flex gap-3 shrink-0">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition text-secondary shadow-sm"
                aria-label="Poprzedni pojazd"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="p-3 rounded-full bg-secondary text-white hover:bg-secondary/90 transition shadow-sm"
                aria-label="Następny pojazd"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: SLIDES_PER_VIEW },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          aria-live="polite"
        >
          {vehicles.map((vehicle, i) => (
            <SwiperSlide key={i} className="h-auto!">
              <div className="group relative overflow-hidden rounded-2xl aspect-4/3 bg-gray-100">
                <Image
                  src={vehicle.image}
                  alt={vehicle.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {vehicles.map((_, i) => (
            <button
              key={i}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              aria-label={`Przejdź do zdjęcia ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === activeIndex
                  ? "w-8 h-2 bg-secondary"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
