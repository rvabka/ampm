import Image from 'next/image';
import Link from 'next/link';
import type { Post } from '../../src/sanity/types';

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

interface BlogPostCardProps {
  post: Post;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 group flex flex-col">
      <div className="relative h-56 overflow-hidden">
        {post.mainImage ? (
          <Image
            src={post.mainImage}
            alt={post.mainImageAlt || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-secondary/80" />
        )}
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            {post.category}
          </span>
          <time dateTime={post.publishedAt} className="text-xs text-gray-400">
            {formatDate(post.publishedAt)}
          </time>
        </div>

        <h3 className="text-xl font-bold text-secondary mb-4 leading-snug group-hover:text-primary transition-colors flex-1">
          <Link href={`/blog/${post.slug.current}`}>
            {post.title}
          </Link>
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <Link
            href={`/blog/${post.slug.current}`}
            className="text-sm font-bold text-secondary border-b-2 border-primary/30 hover:border-primary hover:text-primary transition-all"
            aria-label={`Czytaj artykuł: ${post.title}`}
          >
            Czytaj artykuł
          </Link>
          {post.readTime && (
            <span className="text-xs text-gray-400 font-medium">
              {post.readTime} min
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
