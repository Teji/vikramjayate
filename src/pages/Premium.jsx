import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPremiumRecommendations } from "../services/recommendations";


export default function Premium() {
 

  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPremiumContent() {
      try {
        const data = await getPremiumRecommendations();
        setRecommendations(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load premium content.");
      } finally {
        setLoading(false);
      }
    }

    loadPremiumContent();
  }, []);

  return (
    <main className="min-h-screen bg-[#07090c] px-5 py-24 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
          Premium Members
        </p>

        <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-4xl font-bold">
              Premium Content
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400">
              Exclusive market analysis and member-only recommendations.
            </p>
          </div>

          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold text-emerald-400">
            PREMIUM ACTIVE
          </span>
        </div>

        <div className="mt-12">
          {loading && (
            <div className="rounded-3xl border border-white/10 bg-[#0d1217] p-10 text-center text-sm text-gray-400">
              Loading premium content...
            </div>
          )}

          {error && (
            <div className="rounded-3xl border border-red-400/10 bg-red-400/5 p-10 text-center text-sm text-red-300">
              {error}
            </div>
          )}

          {!loading && !error && recommendations.length === 0 && (
            <div className="rounded-3xl border border-white/10 bg-[#0d1217] p-10 text-center">
              <p className="text-gray-400">
                No premium recommendations are available yet.
              </p>
            </div>
          )}

          {!loading && !error && recommendations.length > 0 && (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {recommendations.map((item) => (
                <article
                  key={item.id}
                  className="rounded-3xl border border-emerald-400/10 bg-[#0d1217] p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xl font-bold">
                        {item.symbol}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {item.company}
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-400 px-3 py-1 text-[10px] font-bold text-black">
                      PREMIUM
                    </span>
                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-2">
                    <Metric label="Entry" value={item.entry} />
                    <Metric label="Target" value={item.target} />
                    <Metric label="Stop Loss" value={item.stopLoss} />
                  </div>

                  <div className="mt-6 border-t border-white/5 pt-5">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Analysis
                    </p>

                    <p className="mt-3 text-sm leading-6 text-gray-400">
                      {item.analysis}
                    </p>
                  </div>

                  <Link
                    to={`/recommendations/${item.slug}`}
                    className="mt-6 block rounded-xl border border-white/10 px-4 py-3 text-center text-sm font-semibold transition hover:border-emerald-400/30 hover:text-emerald-400"
                  >
                    Full Analysis
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-5 text-gray-600">
          Market information is provided for educational and informational
          purposes only. Investments involve risk.
        </p>

        <div className="mt-8 text-center">
          <Link
            to="/dashboard"
            className="text-sm text-gray-500 transition hover:text-emerald-400"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-xl bg-white/[0.03] p-3 text-center">
      <p className="text-[10px] uppercase tracking-wider text-gray-500">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold">
        {value}
      </p>
    </div>
  );
}
