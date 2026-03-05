import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPaginationProps {
  currentPage: number;
  totalCount: number;
  postsPerPage: number;
  category?: string;
  sort?: 'newest' | 'oldest';
}

export default function BlogPagination({
  currentPage,
  totalCount,
  postsPerPage,
  category,
  sort,
}: BlogPaginationProps) {
  const totalPages = Math.ceil(totalCount / postsPerPage);

  if (totalPages <= 1) return null;

  function pageHref(page: number) {
    const params = new URLSearchParams();
    if (category) params.set('category', category);
    if (sort === 'oldest') params.set('sort', 'oldest');
    if (page > 1) params.set('page', String(page));
    const qs = params.toString();
    return `/blog${qs ? `?${qs}` : ''}`;
  }

  const pages: (number | '...')[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push('...');
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push('...');
    pages.push(totalPages);
  }

  return (
    <nav className="pb-24 px-6 lg:px-8" aria-label="Paginacja bloga">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-2">
        {currentPage > 1 && (
          <Link
            href={pageHref(currentPage - 1)}
            className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-secondary hover:bg-primary hover:border-primary hover:text-white transition-all shadow-sm"
            aria-label="Poprzednia strona"
          >
            <ChevronLeft size={18} />
          </Link>
        )}

        {pages.map((p, i) =>
          p === '...' ? (
            <span key={`ellipsis-${i}`} className="px-2 text-gray-400 select-none">
              ...
            </span>
          ) : (
            <Link
              key={p}
              href={pageHref(p)}
              aria-label={`Strona ${p}`}
              aria-current={p === currentPage ? 'page' : undefined}
              className={`w-11 h-11 flex items-center justify-center rounded-xl border font-bold text-sm transition-all shadow-sm ${
                p === currentPage
                  ? 'bg-primary border-primary text-white shadow-md shadow-primary/25'
                  : 'border-gray-200 bg-white text-secondary hover:bg-primary hover:border-primary hover:text-white'
              }`}
            >
              {p}
            </Link>
          )
        )}

        {currentPage < totalPages && (
          <Link
            href={pageHref(currentPage + 1)}
            className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-secondary hover:bg-primary hover:border-primary hover:text-white transition-all shadow-sm"
            aria-label="Następna strona"
          >
            <ChevronRight size={18} />
          </Link>
        )}
      </div>
    </nav>
  );
}
