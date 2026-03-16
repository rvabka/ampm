import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { portableTextComponents } from '../../src/sanity/portableTextComponents';
import BlogShareButtons from './BlogShareButtons';
import type { Post, RelatedPost } from '../../src/sanity/types';

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

interface BlogPostContentProps {
  post: Post;
  postUrl: string;
}

export default function BlogPostContent({ post, postUrl }: BlogPostContentProps) {
  return (
    <section className="py-16 px-6 lg:px-8 bg-background-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          <article className="lg:col-span-8">

            <div className="prose prose-lg max-w-none
              prose-headings:font-display prose-headings:font-bold prose-headings:text-secondary prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-5
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-5
              prose-a:text-primary prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-secondary prose-strong:font-bold
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic
              prose-ul:list-disc prose-ul:ml-6 prose-li:text-gray-600 prose-li:leading-relaxed
              prose-img:rounded-2xl prose-img:shadow-xl
            ">
              {post.body && <PortableText value={post.body as PortableTextBlock[]} components={portableTextComponents} />}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Tagi</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary transition-colors"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                Wróć do bloga
              </Link>
              <BlogShareButtons url={postUrl} title={post.title} />
            </div>

            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <div className="mt-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-8 bg-primary" aria-hidden="true" />
                  <h2 className="text-sm font-bold text-primary uppercase tracking-widest">
                    Powiązane artykuły
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {post.relatedPosts.map((related) => (
                    <RelatedPostCard key={related._id} post={related} />
                  ))}
                </div>
              </div>
            )}
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">

              <div className="bg-secondary rounded-2xl p-8 text-white">
                <div className="h-px w-8 bg-primary mb-4" aria-hidden="true" />
                <h3 className="font-display font-bold text-xl mb-2">Am Pm sp. z o.o. Blog</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Odkryj więcej artykułów z branży TSL, logistyki i transportu drogowego.
                </p>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 w-full justify-center py-3 bg-primary hover:bg-primary-hover rounded-xl text-white font-semibold text-sm transition shadow-lg shadow-primary/25"
                >
                  Wszystkie artykuły
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-6 bg-primary" aria-hidden="true" />
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    Masz pytania?
                  </span>
                </div>
                <h3 className="font-display font-bold text-secondary text-lg mb-2">
                  Porozmawiajmy
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Nasi eksperci chętnie odpowiedzą na Twoje pytania dotyczące transportu i logistyki.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 w-full justify-center py-3 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white rounded-xl font-semibold text-sm transition"
                >
                  Napisz do nas
                </Link>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function RelatedPostCard({ post }: { post: RelatedPost }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300">
      {post.mainImage && (
        <div className="relative h-44 overflow-hidden">
          <Image
            src={post.mainImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="p-5">
        {post.category && (
          <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">
            {post.category}
          </span>
        )}
        <h3 className="font-bold text-secondary text-sm leading-snug mb-3 group-hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
        </h3>
        <Link
          href={`/blog/${post.slug.current}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:gap-2.5 transition-all"
        >
          Czytaj
          <ArrowRight size={12} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
