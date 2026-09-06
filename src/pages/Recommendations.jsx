import { useEffect, useMemo, useState } from "react";
import RecommendationsSection from "../components/home/RecommendationsSection";
import { getRecommendations } from "../services/recommendations";

const filters = ["ALL", "ACTIVE", "TARGET ACHIEVED", "CLOSED"];

export default function Recommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadRecommendations() {
      try {
        const data = await getRecommendations();
        setRecommendations(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load recommendations right now.");
      } finally {
        setLoading(false);
      }
    }

    loadRecommendations();
  }, []);

  const filteredRecommendations = useMemo(() => {
    if (filter === "ALL") return recommendations;

    return recommendations.filter((item) => item.status === filter);
  }, [filter, recommendations]);

  return (
    <main className="min-h-screen bg-[#07090c] px-5 py-20 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Market Watch
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Stock Recommendations
          </h1>

          <p className="mt-5 text-sm leading-7 text-gray-400">
            Review published market ideas, risk levels and current outcomes.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                filter === item
                  ? "border-emerald-400 bg-emerald-400 text-black"
                  : "border-white/10 bg-white/[0.03] text-gray-400 hover:text-emerald-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-12">
          {loading && (
            <div className="rounded-3xl border border-white/10 bg-[#0d1217] p-12 text-center text-sm text-gray-400">
              Loading recommendations...
            </div>
          )}

          {error && (
            <div className="rounded-3xl border border-red-400/10 bg-red-400/5 p-12 text-center text-sm text-red-300">
              {error}
            </div>
          )}

          {!loading && !error && (
            <RecommendationsSection
              recommendations={filteredRecommendations}
              showHeading={false}
            />
          )}
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-5 text-gray-600">
        Market information is provided for educational purposes only.
        Investments involve risk.
      </p>
    </main>
  );
}
