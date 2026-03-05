import Link from 'next/link';
import type { Category } from '@/src/sanity/types';

interface BlogCategoriesProps {
  categories: Category[];
  activeCategory?: string;
}

export default function BlogCategories({ categories, activeCategory }: BlogCategoriesProps) {
  return (
    <section
      className="py-10 bg-white border-b border-gray-100"
      aria-label="Filtrowanie według kategorii"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/blog"
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
              !activeCategory
                ? 'bg-primary text-white shadow-md shadow-primary/25'
                : 'bg-gray-50 text-gray-600 hover:bg-primary/10 hover:text-primary'
            }`}
          >
            Wszystkie
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat._id}
              href={`/blog?category=${cat.slug.current}`}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat.slug.current
                  ? 'bg-primary text-white shadow-md shadow-primary/25'
                  : 'bg-gray-50 text-gray-600 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {cat.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
