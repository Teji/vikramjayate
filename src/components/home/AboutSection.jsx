import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

import aboutImage from "../../assets/images/vikram-about.png";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080b0f] py-24 text-white sm:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-emerald-400/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* ================= IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-[500px]"
          >

            {/* Glow */}
            <div className="absolute -inset-5 rounded-[40px] bg-emerald-400/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0d1217]">

              <div className="aspect-[4/5]">

                <img
                  src={aboutImage}
                  alt="Vikram Jayate"
                  className="h-full w-full object-cover object-top"
                />

              </div>

              {/* Image overlay */}

              <div className="absolute inset-x-5 bottom-5">

                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#080c10]/90 px-4 py-3 backdrop-blur-xl">

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">
                      Experience
                    </p>

                    <p className="mt-1 text-lg font-bold text-white">
                      15+ Years
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                    <TrendingUp size={20} />
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* ================= CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            {/* Label */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-emerald-400">
              <BarChart3 size={15} />
              About Vikram Jayate
            </div>

            {/* Heading */}

            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">

              Experience matters

              <span className="block text-emerald-400">
                when the market keeps changing.
              </span>

            </h2>

            {/* Paragraph */}

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              With over 15 years of experience in the stock market,
              Vikram Jayate focuses on understanding market behaviour,
              analysing stocks and helping people develop a more
              structured approach towards investing and trading.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
              The objective is simple — make market concepts easier
              to understand and help individuals make decisions with
              better knowledge, discipline and awareness of risk.
            </p>

            {/* ================= HIGHLIGHTS ================= */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-emerald-400/20">

                <div className="flex items-start gap-3">

                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      15+ Years of Experience
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Extensive exposure to stock market behaviour
                      and analysis.
                    </p>
                  </div>

                </div>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-emerald-400/20">

                <div className="flex items-start gap-3">

                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Practical Market Knowledge
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Focus on understanding markets rather than
                      blindly following tips.
                    </p>
                  </div>

                </div>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-emerald-400/20">

                <div className="flex items-start gap-3">

                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Structured Approach
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Learn to analyse market information in a
                      systematic way.
                    </p>
                  </div>

                </div>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-emerald-400/20">

                <div className="flex items-start gap-3">

                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Market Analysis
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Understand price behaviour and important
                      market levels.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* CTA */}

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400"
            >
              Work With Vikram

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
