import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Clock, Calendar } from 'lucide-react';
import type { Post } from '@/src/sanity/types';

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

interface BlogPostHeroProps {
  post: Post;
}

export default function BlogPostHero({ post }: BlogPostHeroProps) {
  return (
    <>
      <header className="relative bg-secondary overflow-hidden pt-32 pb-16 lg:pb-20">
        <div
          className="absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        <div
          className="absolute -top-40 right-0 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[150px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <nav
            aria-label="Ścieżka nawigacji"
            className="flex items-center gap-1.5 text-sm text-gray-500 mb-10"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Strona Główna
            </Link>
            <ChevronRight
              size={14}
              className="text-gray-600"
              aria-hidden="true"
            />
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight
              size={14}
              className="text-gray-600"
              aria-hidden="true"
            />
            <span className="text-gray-300 font-medium line-clamp-1">
              {post.title}
            </span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            {post.category && (
              <span className="inline-block px-4 py-1.5 bg-primary/15 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
                {post.category}
              </span>
            )}
            {post.readTime && (
              <span className="inline-flex items-center gap-1.5 text-gray-400 text-sm">
                <Clock size={14} aria-hidden="true" />
                {post.readTime} min czytania
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            {post.title}
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span className="inline-flex items-center gap-2">
              <Calendar size={14} aria-hidden="true" />
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
            </span>
            {post.updatedAt && post.updatedAt !== post.publishedAt && (
              <span className="text-gray-600">
                Aktualizacja:{' '}
                <time dateTime={post.updatedAt}>
                  {formatDate(post.updatedAt)}
                </time>
              </span>
            )}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {post.mainImage && (
        <div
          className="relative max-w-7xl overflow-hidden object-cover mx-auto rounded-2xl shadow-xl mt-4"
          style={{ aspectRatio: '16/9', maxHeight: '1080px' }}
        >
          <Image
            src={post.mainImage}
            alt={post.mainImageAlt || post.title}
            fill
            className="object-center object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent" />
        </div>
      )}
    </>
  );
}
