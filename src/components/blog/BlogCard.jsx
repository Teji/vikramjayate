import { ArrowUpRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-[#0d1217] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
          {post.category}
        </span>

        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Clock3 size={13} />
          {post.readTime}
        </div>
      </div>

      <h2 className="mt-6 text-xl font-semibold text-white">
        {post.title}
      </h2>

      <p className="mt-3 text-sm leading-6 text-gray-400">
        {post.excerpt}
      </p>

      <Link
        to={`/blog/${post.slug}`}
        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400"
      >
        Read Article
        <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}
