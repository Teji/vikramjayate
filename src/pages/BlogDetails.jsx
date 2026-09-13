import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import { blogPosts } from "../data/blogData";

const SITE_URL = "https://vikramjayate.vercel.app";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#07090c] px-5 py-32 text-center text-white">
        <Seo
          title="Article Not Found | Vikram Jayate"
          description="The requested Vikram Jayate market insight could not be found."
          canonical={`${SITE_URL}/blog/${slug}`}
          noindex
        />
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
      <Seo
        title={`${post.title} | Vikram Jayate`}
        description={post.excerpt}
        canonical={`${SITE_URL}/blog/${post.slug}`}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          author: { "@type": "Person", name: "Vikram Jayate" },
          publisher: { "@type": "Person", name: "Vikram Jayate" },
          mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        }}
      />

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
            <p className="text-lg leading-8 text-gray-300">{post.excerpt}</p>

            <div className="mt-10 space-y-6 text-sm leading-7 text-gray-400">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-5 text-gray-500">
            This article is for educational purposes only. It does not
            constitute a guarantee of returns or personalised investment advice.
          </div>
        </div>
      </div>
    </article>
  );
}
