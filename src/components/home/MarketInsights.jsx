import { ArrowUpRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import { siteData } from "../../data/siteData";

export default function MarketInsights() {
  return (
    <section
  id="market-insights"
  className="border-t border-white/5 bg-[#080b0f] px-5 py-24 sm:px-8"
>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Market Insights"
          title="Learn. Analyse. Understand."
          description="Explore practical market insights and educational content designed to build a more structured approach to the stock market."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {siteData.insights.map((item) => (
            <article
              key={item.id}
              className="group rounded-3xl border border-white/10 bg-[#0d1217] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                  {item.category}
                </span>

                <BookOpen
                  size={19}
                  className="text-gray-600 transition-colors group-hover:text-emerald-400"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {item.description}
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-white/5 pt-5">
                <span className="text-xs text-gray-500">{item.date}</span>

                <Link
                  to={`/blog/${item.slug}`}
                  className="flex items-center gap-1 text-xs font-semibold text-emerald-400"
                >
                  Read More
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
