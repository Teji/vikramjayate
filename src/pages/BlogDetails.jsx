import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/blogData";

export default function BlogDetails() {
  const { slug } = useParams();

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#07090c] px-5 py-32 text-center text-white">
        <h1 className="text-3xl font-bold">Article Not Found</h1>

        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 text-sm text-emerald-400"
        >
          <ArrowLeft size={16} />
          Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#07090c] px-5 py-24 text-white sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400"
        >
          <ArrowLeft size={16} />
          All Insights
        </Link>

        <div className="mt-10">
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
            {post.category}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 text-sm text-gray-500">
            {post.date} · {post.readTime}
          </p>

          <div className="mt-10 border-t border-white/10 pt-10">
            <p className="text-lg leading-8 text-gray-300">
              {post.excerpt}
            </p>

            <div className="mt-10 space-y-6 text-sm leading-7 text-gray-400">
              <p>
                Market analysis begins with understanding context. Before
                looking at a particular stock, it is important to understand
                the broader market structure and prevailing trend.
              </p>

              <p>
                Support, resistance, momentum and price behaviour can provide
                useful information when studying a market. A structured
                approach can help reduce emotional decision-making.
              </p>

              <p>
                Every market decision involves risk. Analysis should therefore
                be combined with appropriate risk management and independent
                research.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-5 text-gray-500">
            This article is for educational purposes only. It does not
            constitute a guarantee of returns or personalised investment
            advice.
          </div>
        </div>
      </div>
    </article>
  );
}
