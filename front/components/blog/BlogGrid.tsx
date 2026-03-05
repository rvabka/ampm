import type { Post } from '@/src/sanity/types';
import BlogPostCard from './BlogPostCard';

interface BlogGridProps {
  posts: Post[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <section className="pb-24 px-6 lg:px-8 bg-background-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              Brak wpisów w tej kategorii.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="pb-24 px-6 lg:px-8 bg-background-light"
      aria-label="Lista wpisów"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <BlogPostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
