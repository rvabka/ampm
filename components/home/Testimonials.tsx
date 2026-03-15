import { client } from '../../src/sanity/client';
import { testimonialsQuery } from '../../src/sanity/queries';
import type { Testimonial } from '../../src/sanity/types';
import TestimonialsSwiper from './TestimonialsSwiper';

async function getTestimonials(): Promise<Testimonial[]> {
  return client.fetch(testimonialsQuery, {}, { next: { revalidate: 3600 } });
}

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  const avgRating =
    testimonials.length > 0
      ? (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)
      : '5.0';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AMPM Full Time Spedition',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avgRating,
      reviewCount: testimonials.length,
      bestRating: '5',
      worstRating: '1',
    },
    review: testimonials
      .filter(t => t.quote)
      .slice(0, 10)
      .map(t => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: t.name },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: String(t.rating),
          bestRating: '5',
          worstRating: '1',
        },
        reviewBody: t.quote,
        datePublished: t.date,
      })),
  };

  if (testimonials.length === 0) return null;

  return (
    <section
      className="py-20 px-8 bg-secondary text-white"
      aria-labelledby="testimonials-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Referencje
          </span>
          <h2 id="testimonials-heading" className="text-4xl font-display font-bold">
            Opinie naszych klientów
          </h2>
        </div>

        <TestimonialsSwiper testimonials={testimonials} />
      </div>
    </section>
  );
}
