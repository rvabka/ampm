import Link from 'next/link';
import { ArrowDownAZ, ArrowUpAZ } from 'lucide-react';
import type { Category } from '@/src/sanity/types';

interface BlogFiltersProps {
  categories: Category[];
  activeCategory?: string;
  activeSort: 'newest' | 'oldest';
}

function buildHref(params: {
  category?: string;
  sort: 'newest' | 'oldest';
  page?: number;
}) {
  const p = new URLSearchParams();
  if (params.category) p.set('category', params.category);
  if (params.sort === 'oldest') p.set('sort', 'oldest');
  const qs = p.toString();
  return `/blog${qs ? `?${qs}` : ''}`;
}

export default function BlogFilters({
  categories,
  activeCategory,
  activeSort,
}: BlogFiltersProps) {
  return (
    <section
      className="py-8 bg-white border-b border-gray-100"
      aria-label="Filtry wpisów"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={buildHref({ sort: activeSort })}
              className={`px-5 py-1.5 rounded-full text-sm font-bold transition-all ${
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
                href={buildHref({ category: cat.slug.current, sort: activeSort })}
                className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat.slug.current
                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                    : 'bg-gray-50 text-gray-600 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {cat.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider mr-1">
              Sortuj:
            </span>
            <Link
              href={buildHref({ category: activeCategory, sort: 'newest' })}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                activeSort === 'newest'
                  ? 'bg-secondary text-white'
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
              }`}
              aria-pressed={activeSort === 'newest'}
            >
              <ArrowDownAZ size={14} aria-hidden="true" />
              Najnowsze
            </Link>
            <Link
              href={buildHref({ category: activeCategory, sort: 'oldest' })}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                activeSort === 'oldest'
                  ? 'bg-secondary text-white'
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
              }`}
              aria-pressed={activeSort === 'oldest'}
            >
              <ArrowUpAZ size={14} aria-hidden="true" />
              Najstarsze
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
