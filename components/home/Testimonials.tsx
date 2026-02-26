"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, StarHalf, Quote, PenLine } from "lucide-react";
import Button from "@/components/shared/Button";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    initials: "MK",
    name: "Marek Kowalski",
    role: "Dyrektor Logistyki, FoodCorp",
    stars: 5,
    quote:
      "Współpraca z AMPM to czysta przyjemność. Transport zawsze na czas, a kontakt ze spedytorem bez zarzutu. Polecam każdemu, kto szuka profesjonalizmu w transporcie drogowym.",
  },
  {
    initials: "AN",
    name: "Anna Nowak",
    role: "Kierownik Importu, TechParts",
    stars: 5,
    quote:
      "Niezawodni w transporcie międzynarodowym. Nasze ładunki docierają do Hiszpanii szybciej niż z poprzednim operatorem. Pełna transparentność.",
  },
  {
    initials: "PJ",
    name: "Piotr Jankowski",
    role: "Właściciel, BudTrans",
    stars: 4.5,
    quote:
      "Bardzo elastyczne podejście do klienta. Nawet przy nagłych zleceniach potrafią znaleźć odpowiednie auto. Solidny partner w biznesie transportowym.",
  },
  {
    initials: "KW",
    name: "Katarzyna Wiśniewska",
    role: "Specjalista ds. Logistyki, AutoParts",
    stars: 5,
    quote:
      "Profesjonalna obsługa od początku do końca. Terminowość dostaw na najwyższym poziomie. Zdecydowanie polecam współpracę z AMPM.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex text-primary mb-4 gap-0.5"
      aria-label={`Ocena: ${rating} z 5 gwiazdek`}
      role="img"
    >
      {[1, 2, 3, 4, 5].map((star) => {
        if (star <= Math.floor(rating)) {
          return <Star key={star} size={16} className="fill-primary" aria-hidden="true" />;
        }
        if (rating > star - 1) {
          return <StarHalf key={star} size={16} className="fill-primary" aria-hidden="true" />;
        }
        return <Star key={star} size={16} className="text-gray-600" aria-hidden="true" />;
      })}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="py-20 px-8 bg-secondary text-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Referencje
          </span>
          <h2
            id="testimonials-heading"
            className="text-4xl font-display font-bold"
          >
            Opinie naszych klientów
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: true },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="testimonials-swiper pb-14!"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name} className="h-auto!">
              <blockquote className="bg-secondary-light rounded-3xl relative flex flex-col h-full overflow-hidden">
                <div className="p-8 flex flex-col flex-1">
                  <Quote
                    size={40}
                    className="absolute top-6 right-6 text-gray-600 opacity-20"
                    aria-hidden="true"
                  />

                  <StarRating rating={t.stars} />

                  <p className="text-gray-300 mb-6 italic flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <footer className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0"
                      aria-hidden="true"
                    >
                      {t.initials}
                    </div>
                    <div>
                      <cite className="font-bold text-sm not-italic block">
                        {t.name}
                      </cite>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                  </footer>
                </div>

                <div className="testimonial-bar h-1 w-full transition-colors duration-500" aria-hidden="true" />
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-4">
          <Button
            href="/kontakt"
            variant="ghost"
            size="lg"
            icon={PenLine}
            iconPosition="left"
            className="text-white/70 hover:text-white hover:bg-white/8"
          >
            Zostaw nam opinię!
          </Button>
        </div>
      </div>
    </section>
  );
}
