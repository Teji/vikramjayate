import { useEffect, useState } from "react";
import { ArrowLeft, CircleCheck, Clock3, TrendingUp } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getRecommendationBySlug } from "../services/recommendations";
import Seo from "../components/Seo";

const statusIcons = {
  ACTIVE: Clock3,
  "TARGET ACHIEVED": CircleCheck,
  CLOSED: CircleCheck,
};

export default function RecommendationDetails() {
  const { slug } = useParams();

  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadRecommendation() {
      try {
        const data = await getRecommendationBySlug(slug);
        setRecommendation(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load recommendation.");
      } finally {
        setLoading(false);
      }
    }

    loadRecommendation();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#07090c] px-5 py-32 text-center text-white">
        Loading analysis...
      </main>
    );
  }

  if (error || !recommendation) {
    return (
      <main className="min-h-screen bg-[#07090c] px-5 py-32 text-center text-white">
        <Seo
          title="Recommendation Not Found | Vikram Jayate"
          description="The requested stock recommendation is not available."
          canonical={`https://vikramjayate.vercel.app/recommendations/${slug}`}
          noindex
        />
        <h1 className="text-3xl font-bold">
          {error || "Recommendation Not Found"}
        </h1>

        <Link
          to="/recommendations"
          className="mt-6 inline-flex items-center gap-2 text-sm text-emerald-400"
        >
          <ArrowLeft size={16} />
          Back to Recommendations
        </Link>
      </main>
    );
  }

  const StatusIcon = statusIcons[recommendation.status] || TrendingUp;

  return (
    <main className="min-h-screen bg-[#07090c] px-5 py-20 text-white sm:px-8">
      <Seo
        title={`${recommendation.symbol} Stock Analysis | Vikram Jayate`}
        description={`${recommendation.symbol} (${recommendation.company}) market analysis with entry, target, stop-loss and current status.`}
        canonical={`https://vikramjayate.vercel.app/recommendations/${recommendation.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `${recommendation.symbol} Stock Analysis`,
          description: recommendation.summary,
          author: { "@type": "Person", name: "Vikram Jayate" },
          mainEntityOfPage: `https://vikramjayate.vercel.app/recommendations/${recommendation.slug}`,
        }}
      />
      <div className="mx-auto max-w-4xl">
        <Link
          to="/recommendations"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400"
        >
          <ArrowLeft size={16} />
          All Recommendations
        </Link>

        <div className="mt-10 rounded-3xl border border-white/10 bg-[#0d1217] p-6 sm:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Stock Analysis
              </p>

              <h1 className="mt-3 text-4xl font-bold">
                {recommendation.symbol}
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                {recommendation.company}
              </p>
            </div>

            <span className="w-fit rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold text-emerald-400">
              {recommendation.type}
            </span>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <Metric label="Entry" value={recommendation.entry} />
            <Metric label="Target" value={recommendation.target} />
            <Metric label="Stop Loss" value={recommendation.stopLoss} />
          </div>

          <div className="mt-6 flex items-center gap-2 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
            <StatusIcon size={17} className="text-emerald-400" />

            <span className="text-sm font-semibold">
              {recommendation.status}
            </span>
          </div>

          <div className="mt-10 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold">Market View</h2>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              {recommendation.summary}
            </p>

            <h2 className="mt-10 text-2xl font-bold">
              Technical Analysis
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              {recommendation.analysis}
            </p>

            <div className="mt-10 rounded-2xl border border-amber-400/10 bg-amber-400/5 p-5">
              <h3 className="font-semibold text-white">Risk Management</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Every market position involves risk. Entry, target and stop
                loss levels shown here are illustrative and should not be
                treated as guaranteed outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
      <p className="text-xs uppercase tracking-wider text-gray-500">
        {label}
      </p>

      <p className="mt-2 text-xl font-semibold text-white">{value}</p>
    </div>
  );
}
