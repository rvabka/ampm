import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Post } from '../../src/sanity/types';

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

interface BlogFeaturedPostProps {
  post: Post;
}

export default function BlogFeaturedPost({ post }: BlogFeaturedPostProps) {
  return (
    <section className="py-16 px-6 lg:px-8 bg-background-light">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-primary" aria-hidden="true" />
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Wyróżniony wpis
          </span>
        </div>

        <article className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row min-h-[480px] border border-gray-100 group">
          <div className="w-full lg:w-3/5 overflow-hidden relative min-h-[280px]">
            {post.mainImage ? (
              <Image
                src={post.mainImage}
                alt={post.mainImageAlt || post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-secondary/90" />
            )}
          </div>

          <div className="w-full lg:w-2/5 p-10 lg:p-14 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded">
                {post.category}
              </span>
              <time
                dateTime={post.publishedAt}
                className="text-gray-400 text-sm"
              >
                {formatDate(post.publishedAt)}
              </time>
            </div>

            <h2 className="text-2xl lg:text-3xl font-display font-bold text-secondary leading-tight mb-5">
              {post.title}
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>

            {post.readTime && (
              <p className="text-xs text-gray-400 mb-6 uppercase tracking-wider font-semibold">
                {post.readTime} min czytania
              </p>
            )}

            <Link
              href={`/blog/${post.slug.current}`}
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group/link"
              aria-label={`Czytaj więcej: ${post.title}`}
            >
              Czytaj więcej
              <ArrowRight size={20} className="transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
