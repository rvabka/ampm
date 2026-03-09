import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { client } from "../../src/sanity/client";
import { recentPostsQuery } from "../../src/sanity/queries";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  category: string;
  mainImage: string | null;
  mainImageAlt: string | null;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogSection() {
  const posts: Post[] = await client.fetch(recentPostsQuery, {}, { next: { revalidate: 3600 } });

  if (!posts?.length) return null;

  return (
    <section
      className="py-24 px-8 bg-background-light"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12">
          <div>
            <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">
              Blog
            </span>
            <h2
              id="blog-heading"
              className="text-4xl font-display font-bold text-secondary"
            >
              Aktualności i Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-primary font-bold hover:text-primary-hover flex items-center gap-2 transition-colors shrink-0"
            aria-label="Zobacz wszystkie artykuły na blogu"
          >
            Zobacz wszystkie
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post._id} className="flex flex-col group cursor-pointer">
              <Link href={`/blog/${post.slug.current}`} className="block">
                <div className="rounded-2xl overflow-hidden mb-4 h-56 relative bg-gray-100">
                  {post.mainImage && (
                    <Image
                      src={post.mainImage}
                      alt={post.mainImageAlt ?? post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                  {post.category && (
                    <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded">
                      {post.category}
                    </div>
                  )}
                </div>

                <time
                  dateTime={post.publishedAt}
                  className="text-gray-500 text-sm mb-2 block"
                >
                  {formatDate(post.publishedAt)}
                </time>

                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
