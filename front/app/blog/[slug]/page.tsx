import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@/src/sanity/client';
import { postQuery, allPostSlugsQuery } from '@/src/sanity/queries';
import type { Post } from '@/src/sanity/types';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import BlogPostHero from '@/components/blog/BlogPostHero';
import BlogPostContent from '@/components/blog/BlogPostContent';

export const revalidate = 3600;

const BASE_URL = 'https://ampm.com.pl';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(allPostSlugsQuery);
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<Post | null>(postQuery, { slug });

  if (!post) {
    return {
      title: 'Artykuł nie znaleziony',
    };
  }

  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt;
  const ogImage = post.seo?.ogImage || post.mainImage;
  const canonical = post.seo?.canonicalUrl || `${BASE_URL}/blog/${slug}`;

  return {
    title,
    description,
    keywords: post.seo?.keywords ?? post.tags,
    robots: post.seo?.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/blog/${slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      section: post.category,
      tags: post.tags,
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, alt: post.mainImageAlt || title }]
        : [{ url: '/og-image.jpg', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : ['/og-image.jpg'],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await client.fetch<Post | null>(postQuery, { slug });

  if (!post) notFound();

  const postUrl = `${BASE_URL}/blog/${slug}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: postUrl,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    image: post.mainImage
      ? { '@type': 'ImageObject', url: post.mainImage, width: 1200, height: 630 }
      : undefined,
    author: {
      '@type': 'Organization',
      name: 'AMPM Full Time Spedition',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AMPM Full Time Spedition',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.webp` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
    articleSection: post.category,
    keywords: post.tags?.join(', '),
    inLanguage: 'pl-PL',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona Główna', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: postUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <BlogPostHero post={post} />
        <BlogPostContent post={post} postUrl={postUrl} />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
