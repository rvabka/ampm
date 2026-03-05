import type { Metadata } from 'next';
import { client } from '../../src/sanity/client';
import {
  categoriesQuery,
  postsQuery,
  postsQueryAsc,
  postsCountQuery,
  postsByCategoryQuery,
  postsByCategoryQueryAsc,
  postsByCategoryCountQuery,
  featuredPostsQuery,
} from '@/src/sanity/queries';
import type { Post, Category } from '@/src/sanity/types';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import BlogHero from '@/components/blog/BlogHero';
import BlogFilters from '@/components/blog/BlogFilters';
import BlogFeaturedPost from '@/components/blog/BlogFeaturedPost';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogPagination from '@/components/blog/BlogPagination';

export const revalidate = 3600;

const POSTS_PER_PAGE = 6;
const BASE_URL = 'https://ampm.com.pl';

const BASE_TITLE = 'Blog i Aktualności – TSL, Logistyka, Transport';
const BASE_DESCRIPTION =
  'Ekspercka wiedza z branży TSL. Aktualności o transporcie drogowym, logistyce europejskiej, regulacjach i trendach rynkowych. Czytaj blog AMPM Spedition.';

export async function generateMetadata({ searchParams }: BlogPageProps): Promise<Metadata> {
  const { category, page: pageParam, sort: sortParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam ?? '1', 10));
  const isOldestSort = sortParam === 'oldest';

  const canonicalParams = new URLSearchParams();
  if (category) canonicalParams.set('category', category);
  if (isOldestSort) canonicalParams.set('sort', 'oldest');
  if (currentPage > 1) canonicalParams.set('page', String(currentPage));
  const canonicalQs = canonicalParams.toString();
  const canonical = `${BASE_URL}/blog${canonicalQs ? `?${canonicalQs}` : ''}`;

  const pageTitle =
    currentPage > 1
      ? `${BASE_TITLE} – Strona ${currentPage}`
      : BASE_TITLE;

  return {
    title: pageTitle,
    description: BASE_DESCRIPTION,
    keywords: [
      'blog TSL',
      'aktualności transport',
      'logistyka blog',
      'transport drogowy artykuły',
      'spedycja wiedza',
      'branża transportowa',
      'przepisy transport',
      'trendy logistyka',
    ],
    robots: isOldestSort
      ? { index: false, follow: true }
      : { index: true, follow: true },
    alternates: {
      canonical,
    },
    openGraph: {
      title: 'Blog i Aktualności – AMPM Spedition',
      description:
        'Ekspercka wiedza z branży TSL: transport drogowy, logistyka europejska, regulacje, trendy rynkowe. Czytaj blog AMPM Spedition.',
      url: canonical,
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Blog AMPM Spedition – TSL, Logistyka, Transport',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blog i Aktualności – AMPM Spedition',
      description:
        'Ekspercka wiedza z branży TSL: transport drogowy, logistyka europejska, regulacje i trendy.',
      images: [`${BASE_URL}/og-image.jpg`],
    },
  };
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Strona Główna',
      item: 'https://ampm.com.pl/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://ampm.com.pl/blog',
    },
  ],
};

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog AMPM Spedition',
  description: 'Aktualności z branży TSL, ekspercka wiedza o logistyce i życiu w trasie.',
  url: 'https://ampm.com.pl/blog',
  publisher: {
    '@type': 'Organization',
    name: 'AMPM Full Time Spedition',
    logo: { '@type': 'ImageObject', url: 'https://ampm.com.pl/logo.webp' },
  },
};

interface BlogPageProps {
  searchParams: Promise<{ category?: string; page?: string; sort?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category, page: pageParam, sort: sortParam } = await searchParams;
  const activeSort: 'newest' | 'oldest' = sortParam === 'oldest' ? 'oldest' : 'newest';
  const isAsc = activeSort === 'oldest';

  const currentPage = Math.max(1, parseInt(pageParam ?? '1', 10));
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const postsQueryToUse = category
    ? isAsc
      ? postsByCategoryQueryAsc
      : postsByCategoryQuery
    : isAsc
      ? postsQueryAsc
      : postsQuery;

  const postsParams = category
    ? { category, start, end }
    : { start, end };

  const countQueryToUse = category ? postsByCategoryCountQuery : postsCountQuery;
  const countParams = category ? { category } : {};

  const showFeatured = currentPage === 1 && !category && !isAsc;

  const [categories, posts, totalCount, featuredPosts] = await Promise.all([
    client.fetch<Category[]>(categoriesQuery),
    client.fetch<Post[]>(postsQueryToUse, postsParams),
    client.fetch<number>(countQueryToUse, countParams),
    showFeatured ? client.fetch<Post[]>(featuredPostsQuery) : Promise.resolve<Post[]>([]),
  ]);

  const featuredPost = featuredPosts[0] ?? null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <BlogHero />
        {categories.length > 0 && (
          <BlogFilters
            categories={categories}
            activeCategory={category}
            activeSort={activeSort}
          />
        )}
        {featuredPost && <BlogFeaturedPost post={featuredPost} />}
        <BlogGrid posts={posts} />
        <BlogPagination
          currentPage={currentPage}
          totalCount={totalCount}
          postsPerPage={POSTS_PER_PAGE}
          category={category}
          sort={activeSort}
        />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
