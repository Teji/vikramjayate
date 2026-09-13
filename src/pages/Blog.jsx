import SectionHeading from "../components/common/SectionHeading";
import BlogCard from "../components/blog/BlogCard";
import Seo from "../components/Seo";
import { blogPosts } from "../data/blogData";

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#07090c] text-white">
      <Seo
        title="Market Insights | Vikram Jayate"
        description="Practical stock market education, price action concepts and structured stock-analysis insights from Vikram Jayate."
        canonical="https://vikramjayate.vercel.app/blog"
      />
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Jayate Insights"
            title="Market Knowledge That Matters"
            description="Explore market education, price action concepts and structured stock-analysis insights."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-5 text-gray-600">
            Content is provided for educational and informational purposes and
            should not be treated as guaranteed investment advice.
          </p>
        </div>
      </section>
    </div>
  );
}
