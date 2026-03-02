import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "nowe-centrum-dystrybucyjne",
    category: "Logistyka",
    date: "2023-10-12",
    dateFormatted: "12 Października, 2023",
    title: "Nowe centrum dystrybucyjne w centralnej Polsce",
    excerpt:
      "Rozszerzamy nasze możliwości magazynowe. Nowy obiekt o powierzchni 10 000 m² już otwarty dla naszych kluczowych partnerów.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRrV52FOWEkKmMPhYba320_haLp0VMLMexGWA9silkzaadf8EAbTbYCZUgsKPtnTPNdV1Xj9E3U-l7i8VXmxhRS1uNtcfTPJsLdA8pzYxKEnNWZU6XLFZyluo8lCavNqbTqGKPnN34laJCy9GsrdwHqTaDSb9jiCYb4T-lXt1eK3y7tnbcIvzV3hOYgPMIxGZ90fYl1kTDw_7lJjKgTiNdZkY8Jpvt8D9XPew6-KLBnePdHTMIjbNRW0tGlFKBbpWZjN0GxoGo5kEg",
    imageAlt: "Nowoczesne centrum dystrybucyjne AMPM Spedition w Polsce",
  },
  {
    slug: "zmiany-pakiet-mobilnosci",
    category: "Transport",
    date: "2023-09-28",
    dateFormatted: "28 Września, 2023",
    title: "Zmiany w przepisach pakietu mobilności",
    excerpt:
      "Co oznaczają nowe regulacje unijne dla polskich przewoźników drogowych? Analiza ekspercka naszego zespołu prawnego.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD42QjYg4doBrCAnXA2L2jVMlntgxDx-FQoZo8mtuNdkuygeyVWgX1k6JrCl-Biz-cosrs4EQ5k9uADO2EGxMjI9xJTZuCZZHpIvDtaIMWLAHZzeUqMLFa6MA_1cEBZeN1R84EG9fXuReEUu1AnBcSWladOxW7W4k5Eb1Dh3Yvax_5GcXkfBj9R37km2f0qGfCLDBvIkSaRDAJm3pR4JrEoXGlvz2V0T_mV6LyCS1TIKeVRb9e7R42kQmiV9gjGZiKBQ7_f4DZmb9hJ",
    imageAlt: "Ciężarówka na drodze – zmiany w przepisach pakietu mobilności",
  },
  {
    slug: "trendy-transport-q4-2023",
    category: "Rynek",
    date: "2023-09-15",
    dateFormatted: "15 Września, 2023",
    title: "Trendy w transporcie drogowym na Q4 2023",
    excerpt:
      "Stawki frachtowe stabilizują się. Przewidujemy wzrost zapotrzebowania na usługi transportowe w okresie przedświątecznym.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDu99yzUmdBfQYvXDB19ud9ScudrdBraRGgHuA06-A3YdFcFoY6LiGROBaR5nl2qFWQq310KhZ7h4zOs6syDoDskyPEbPTbN1v3cYan0plolfpVmUaT-QSV0jaVYORrQeNBhwSriUh8-uIrYaE5LtSme9N31bjey_hVVkRz8H5MTRSOTX3XnfS0mcK8TDf-2ZmfEUdxuKl6ZXoN7UCfEhiI8Mz85ZAGWF6hANDP_JC6N-wjPkJX7sfieMXlAVH2m1oP3fImV-pjWU09",
    imageAlt: "Trasa transportowa – trendy w transporcie drogowym Q4 2023",
  },
];

export default function BlogSection() {
  return (
    <section
      className="py-24 px-8 bg-background-light"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
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
            className="text-primary font-bold hover:text-primary-hover flex items-center gap-2 transition-colors"
            aria-label="Zobacz wszystkie artykuły na blogu"
          >
            Zobacz wszystkie
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.slug} className="flex flex-col group cursor-pointer">
              <Link href={`/blog/${article.slug}`} className="block">
                <div className="rounded-2xl overflow-hidden mb-4 h-56 relative">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded">
                    {article.category}
                  </div>
                </div>

                <time
                  dateTime={article.date}
                  className="text-gray-500 text-sm mb-2 block"
                >
                  {article.dateFormatted}
                </time>

                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-2">
                  {article.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
