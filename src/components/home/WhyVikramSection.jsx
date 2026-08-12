import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  Clock3,
  LineChart,
  ShieldCheck,
  Target,
} from "lucide-react";

const reasons = [
  {
    icon: Clock3,
    title: "15+ Years of Market Experience",
    text: "Years of exposure to different market conditions and price behaviour.",
  },
  {
    icon: Brain,
    title: "Knowledge Over Noise",
    text: "Focus on understanding the market instead of blindly following tips.",
  },
  {
    icon: BarChart3,
    title: "Structured Analysis",
    text: "A systematic approach to analysing stocks, charts and important levels.",
  },
  {
    icon: Target,
    title: "Practical Learning",
    text: "Concepts are explained with a focus on how they can be understood on real charts.",
  },
];

export default function WhyVikramSection() {
  return (
    <section
      id="why-vikram"
      className="relative overflow-hidden bg-[#070a0d] py-24 text-white sm:py-28"
    >
      {/* Background effects */}

      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-emerald-400/5 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-400/[0.03] blur-[110px]" />

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
            <ShieldCheck size={15} />
            Why Vikram Jayate
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Learn the market with
            <span className="block text-emerald-400">
              clarity and discipline.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            The objective is not to predict every move of the market.
            It is to develop a better understanding of price, risk and
            market behaviour.
          </p>
        </motion.div>

        {/* ================= REASONS ================= */}

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group"
              >
                <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0d1217] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-[#10171d]">

                  {/* Glow */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-emerald-400/0 blur-3xl transition-all duration-500 group-hover:bg-emerald-400/10" />

                  {/* Icon */}

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/5 text-emerald-400 transition-all duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/10">
                    <Icon size={21} />
                  </div>

                  <h3 className="relative mt-6 text-lg font-semibold text-white">
                    {reason.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-6 text-gray-500">
                    {reason.text}
                  </p>

                  {/* Bottom line */}

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-400 transition-all duration-500 group-hover:w-full" />

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* ================= APPROACH CARD ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 overflow-hidden rounded-[32px] border border-white/10 bg-[#0d1217]"
        >

          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

            {/* LEFT */}

            <div className="p-7 sm:p-10 lg:p-12">

              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-emerald-400" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  The Approach
                </span>
              </div>

              <h3 className="mt-5 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
                Better decisions start with
                <span className="text-emerald-400">
                  {" "}better understanding.
                </span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                Markets can be unpredictable. A structured approach can
                help you understand what you are looking at before
                making an investment or trading decision.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Understand before you act",
                  "Analyse price instead of chasing noise",
                  "Build a disciplined market approach",
                  "Always remain aware of market risk",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400/10">
                      <CheckCircle2
                        size={15}
                        className="text-emerald-400"
                      />
                    </div>

                    <span className="text-sm text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              <a
                href="#contact"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-emerald-200 hover:shadow-lg hover:shadow-emerald-400/20"
              >
                Start Your Journey

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>

            {/* RIGHT VISUAL */}

            <div className="relative min-h-[330px] overflow-hidden border-t border-white/10 bg-[#0a0f13] lg:border-l lg:border-t-0">

              {/* Grid */}

              <div className="absolute inset-0 opacity-30">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "45px 45px",
                  }}
                />
              </div>

              {/* Chart line */}

              <svg
                viewBox="0 0 500 300"
                className="absolute inset-0 h-full w-full p-8"
                preserveAspectRatio="none"
              >
                <path
                  d="M20 245 C80 220, 80 190, 130 205 C180 220, 175 140, 230 155 C285 170, 270 100, 320 120 C370 140, 365 65, 415 85 C445 98, 460 55, 480 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-emerald-400"
                />

                <path
                  d="M20 245 C80 220, 80 190, 130 205 C180 220, 175 140, 230 155 C285 170, 270 100, 320 120 C370 140, 365 65, 415 85 C445 98, 460 55, 480 40 L480 280 L20 280 Z"
                  className="fill-emerald-400/[0.03]"
                />
              </svg>

              {/* Floating stat */}

              <div className="absolute left-8 top-8 rounded-2xl border border-white/10 bg-[#080c10]/90 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                    <LineChart size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">
                      Focus
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Market Understanding
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom label */}

              <div className="absolute bottom-8 right-8 rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3">
                <p className="text-[10px] uppercase tracking-widest text-emerald-400">
                  Experience
                </p>

                <p className="mt-1 text-2xl font-bold text-white">
                  15+
                </p>

                <p className="text-xs text-gray-500">
                  Years in Market
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
