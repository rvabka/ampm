'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, StarHalf, Quote, PenLine } from 'lucide-react';
import Button from '@/components/shared/Button';
import 'swiper/css';
import 'swiper/css/pagination';
import type { Testimonial } from '../../src/sanity/types';

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function formatYear(dateStr: string): string {
  return dateStr ? dateStr.slice(0, 4) : '2026';
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex text-primary mb-4 gap-0.5"
      aria-label={`Ocena: ${rating} z 5 gwiazdek`}
      role="img"
    >
      {[1, 2, 3, 4, 5].map(star => {
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

export default function TestimonialsSwiper({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <>
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
        {testimonials.map(t => (
          <SwiperSlide key={t._id} className="h-auto!">
            <blockquote className="bg-secondary-light rounded-3xl relative flex flex-col h-full overflow-hidden">
              <div className="p-8 flex flex-col flex-1">
                <Quote
                  size={40}
                  className="absolute top-6 right-6 text-gray-600 opacity-20"
                  aria-hidden="true"
                />
                <StarRating rating={t.rating} />
                {t.quote && (
                  <p className="text-gray-300 mb-6 italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                )}
                <footer className="flex items-center gap-4 mt-auto">
                  <div
                    className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0"
                    aria-hidden="true"
                  >
                    {t.initials || getInitials(t.name)}
                  </div>
                  <div>
                    <cite className="font-bold text-sm not-italic block">{t.name}</cite>
                    <p className="text-xs text-gray-400">
                      {t.source === 'google' ? 'Opinia z: Google' : 'Opinia bezpośrednia'} ·{' '}
                      {formatYear(t.date)}
                    </p>
                  </div>
                </footer>
              </div>
              <div className="testimonial-bar h-1 w-full transition-colors duration-500" aria-hidden="true" />
            </blockquote>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-4">
        <a
          href="https://www.google.com/search?sca_esv=286534660d0b6d5d&sxsrf=ANbL-n5vX5xaPzZlxWEGMRqN1B3_QA7HTQ:1772740033461&q=ampm+logistics&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qObIjLX-2MKQkSxZs1NDeSAtWCSo5BKpKSlsNotuiDJanbNrVzx8Rxe9WsHOhcBT_U6J_iNA%3D&uds=ALYpb_mM1P_6lpjjfowRxWEKPgkkv8ZC3C7U6-fY5LGbA2q9WqCCl8ixUENVhPi7yM9f3vXYCYRgt07n125vj-2mJg4W7pOZ9Mz-X7iNeAZk1cK6iIo5cOI&sa=X&ved=2ahUKEwjM0-Sfw4mTAxX_HhAIHZrPB6MQ3PALegQIMBAF&biw=2327&bih=831&dpr=1.1"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Button
            variant="ghost"
            size="lg"
            icon={PenLine}
            iconPosition="left"
            className="text-white/70 hover:text-white hover:bg-white/8"
          >
            Zostaw nam opinię!
          </Button>
        </a>
      </div>
    </>
  );
}
