import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CandlestickChart,
  CheckCircle2,
  Layers3,
  ShieldCheck,
  Target,
} from "lucide-react";

export default function CourseSection() {
  const topics = [
    {
      icon: CandlestickChart,
      title: "Price Action Basics",
      text: "Understand how price moves and how to read market behaviour.",
    },
    {
      icon: Layers3,
      title: "Market Structure",
      text: "Learn important highs, lows, trends and market structure.",
    },
    {
      icon: Target,
      title: "Support & Resistance",
      text: "Identify important price levels and understand their relevance.",
    },
    {
      icon: BarChart3,
      title: "Chart Analysis",
      text: "Develop a structured approach to analysing real market charts.",
    },
  ];

  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-[#080b0f] py-24 text-white sm:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-emerald-400/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-emerald-400">
            <CandlestickChart size={15} />
            Price Action Course
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Learn to Read the Market
            <span className="block text-emerald-400">
              Through Price Action
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Build a better understanding of market movement by learning
            how to read price, structure and important levels on a chart.
          </p>
        </motion.div>

        {/* ================= MAIN COURSE CARD ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 overflow-hidden rounded-[32px] border border-white/10 bg-[#0d1217]"
        >

          <div className="grid lg:grid-cols-[1fr_1.05fr]">

            {/* ================= LEFT VISUAL ================= */}

            <div className="relative min-h-[420px] overflow-hidden border-b border-white/10 bg-[#0a0f13] lg:border-b-0 lg:border-r">

              {/* Chart background */}

              <div className="absolute inset-0 opacity-30">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                  }}
                />
              </div>

              {/* Chart */}

              <div className="absolute inset-8 flex items-center justify-center">

                <div className="relative h-64 w-full max-w-lg">

                  {/* Trend line */}

                  <div className="absolute left-[8%] top-[68%] h-[2px] w-[82%] rotate-[-24deg] origin-left bg-emerald-400/70" />

                  {/* Candles */}

                  {[
                    ["12%", "55%", "h-16"],
                    ["22%", "42%", "h-24"],
                    ["32%", "52%", "h-20"],
                    ["42%", "30%", "h-32"],
                    ["52%", "38%", "h-24"],
                    ["62%", "20%", "h-36"],
                    ["72%", "29%", "h-28"],
                    ["82%", "12%", "h-40"],
                  ].map(([left, top, height], index) => (
                    <div
                      key={index}
                      className="absolute"
                      style={{ left, top }}
                    >
                      <div className="mx-auto h-8 w-px bg-gray-500" />

                      <div
                        className={`w-2 rounded-sm ${
                          index % 3 === 0
                            ? "bg-red-400/80"
                            : "bg-emerald-400/80"
                        } ${height}`}
                      />

                      <div className="mx-auto h-6 w-px bg-gray-500" />
                    </div>
                  ))}

                  {/* Level */}

                  <div className="absolute left-0 top-[72%] w-full border-t border-dashed border-emerald-400/30">
                    <span className="absolute right-0 -top-5 text-[10px] uppercase tracking-widest text-emerald-400/60">
                      Key Level
                    </span>
                  </div>

                </div>

              </div>

              {/* Visual label */}

              <div className="absolute bottom-6 left-6 rounded-xl border border-white/10 bg-[#080c10]/90 px-4 py-3 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                    <CandlestickChart size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">
                      Course Focus
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Price + Structure
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* ================= RIGHT CONTENT ================= */}

            <div className="p-7 sm:p-10 lg:p-12">

              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-emerald-400" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  What You'll Learn
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                Develop the skill to understand
                <span className="text-emerald-400">
                  {" "}what price is telling you.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-6 text-gray-400 sm:text-base">
                The course is designed to help you understand the
                fundamentals of price action and develop a structured
                way of looking at market charts.
              </p>

              {/* Topics */}

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {topics.map((topic, index) => {
                  const Icon = topic.icon;

                  return (
                    <motion.div
                      key={topic.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                      className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/[0.03]"
                    >
                      <div className="flex gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                          <Icon size={17} />
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-white">
                            {topic.title}
                          </h4>

                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            {topic.text}
                          </p>
                        </div>

                      </div>
                    </motion.div>
                  );
                })}

              </div>

              {/* Course points */}

              <div className="mt-7 space-y-3">

                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={17} className="text-emerald-400" />
                  Practical chart-based learning
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={17} className="text-emerald-400" />
                  Focus on understanding, not blind tips
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={17} className="text-emerald-400" />
                  Suitable for beginners and market learners
                </div>

              </div>

              {/* CTA */}

              <div className="mt-9 flex flex-wrap items-center gap-5">

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-emerald-200 hover:shadow-lg hover:shadow-emerald-400/20"
                >
                  Enquire About Course

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <ShieldCheck size={15} className="text-emerald-400" />
                  Learn with a structured approach
                </div>

              </div>

            </div>

          </div>

        </motion.div>

        {/* Disclaimer */}

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-5 text-gray-600">
          Educational content only. Stock market investments involve
          risk. Past performance does not guarantee future results.
        </p>

      </div>
    </section>
  );
}
