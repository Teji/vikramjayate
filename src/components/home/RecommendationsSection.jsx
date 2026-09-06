import {
  ArrowRight,
  CircleCheck,
  Clock3,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import { siteData } from "../../data/siteData";

const statusIcons = {
  ACTIVE: Clock3,
  "TARGET ACHIEVED": CircleCheck,
  CLOSED: CircleCheck,
};

export default function RecommendationsSection({
  recommendations = siteData.recommendations,
  showHeading = true,
}) {
  return (
    <section
      id="recommendations"
      className="border-t border-white/5 bg-[#07090c] py-10"
    >
      <div className="mx-auto max-w-7xl">
        {showHeading && (
          <SectionHeading
            eyebrow="Market Watch"
            title="Stock Recommendations"
            description="A structured view of published market ideas with entry, target, stop-loss and current status."
          />
        )}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((item) => {
            const StatusIcon = statusIcons[item.status] || TrendingUp;

            return (
              <article
                key={item.id}
                className="rounded-3xl border border-white/10 bg-[#0d1217] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xl font-bold text-white">
                      {item.symbol}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      {item.company}
                    </p>
                  </div>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold text-emerald-400">
                    {item.type}
                  </span>
                </div>

                <div className="mt-7 grid grid-cols-3 gap-2">
                  <Metric label="Entry" value={item.entry} />
                  <Metric label="Target" value={item.target} />
                  <Metric label="Stop Loss" value={item.stopLoss} />
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-white/5 pt-5">
                  <StatusIcon size={15} className="text-emerald-400" />

                  <span className="text-xs font-semibold text-gray-300">
                    {item.status}
                  </span>
                </div>

                <Link
                  to={`/recommendations/${item.slug}`}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/30 hover:bg-emerald-400/5 hover:text-emerald-400"
                >
                  View Analysis
                  <ArrowRight size={15} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-xl bg-white/[0.03] p-3 text-center">
      <p className="text-[10px] uppercase tracking-wider text-gray-500">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
