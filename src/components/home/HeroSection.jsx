import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  TrendingUp,
  BarChart3,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

import heroImage from "../../assets/images/vikram-hero.png";

export default function HeroSection() {
  return (
    <section
  id="home"
  className="relative min-h-[calc(100vh-116px)] overflow-hidden bg-[#070a0d] pt-12 text-white lg:pt-16"
>
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[140px]" />

      {/* ================= GRID ================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid min-h-[calc(100vh-140px)] items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* =====================================================
              LEFT
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >

            {/* EXPERIENCE BADGE */}

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-2 text-xs font-medium uppercase tracking-wide text-emerald-400">
              <TrendingUp size={15} />
              15+ Years of Stock Market Experience
            </div>

            {/* HEADING */}

            <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[76px]">

              Understand the
              <br />

              <span className="text-white">
                Market.
              </span>{" "}

              <span className="text-white">
                Analyse
              </span>

              <br />

              <span className="text-white">
                Smarter.
              </span>

              <br />

              <span className="text-emerald-400">
                Trade with
                <br />
                Confidence.
              </span>

            </h1>

            {/* DESCRIPTION */}

            <p className="mt-7 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
              Learn how the market works, understand stock behaviour
              and develop a structured approach to investing with
              Vikram Jayate.
            </p>

            {/* CTA BUTTONS */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-emerald-300 hover:shadow-xl hover:shadow-emerald-400/20"
              >
                Explore Services

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/5"
              >
                <PlayCircle size={17} />

                Learn Price Action
              </a>

            </div>

            {/* =================================================
                CREDIBILITY STATS
            ================================================== */}

            <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-white/10 py-5">

              {/* STAT 1 */}

              <div className="pr-4">

                <div className="flex items-center gap-2 text-emerald-400">
                  <BarChart3 size={17} />

                  <span className="text-xl font-bold sm:text-2xl">
                    15+
                  </span>
                </div>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500 sm:text-xs">
                  Years Experience
                </p>

              </div>

              {/* STAT 2 */}

              <div className="border-l border-white/10 px-4">

                <div className="flex items-center gap-2 text-emerald-400">
                  <TrendingUp size={17} />

                  <span className="text-xl font-bold sm:text-2xl">
                    Market
                  </span>
                </div>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500 sm:text-xs">
                  Stock Analysis
                </p>

              </div>

              {/* STAT 3 */}

              <div className="border-l border-white/10 pl-4">

                <div className="flex items-center gap-2 text-emerald-400">
                  <GraduationCap size={17} />

                  <span className="text-xl font-bold sm:text-2xl">
                    Price
                  </span>
                </div>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500 sm:text-xs">
                  Action Education
                </p>

              </div>

            </div>

          </motion.div>

          {/* =====================================================
              RIGHT IMAGE
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[500px] lg:ml-auto"
          >

            {/* GREEN GLOW */}

            <div className="absolute -inset-5 rounded-[45px] bg-emerald-400/10 blur-3xl" />

            {/* OUTER FRAME */}

            <div className="relative rounded-[40px] border border-emerald-400/20 bg-gradient-to-b from-emerald-400/20 to-transparent p-[1px]">

              <div className="relative overflow-hidden rounded-[39px] bg-[#0c1115]">

                {/* IMAGE */}

                <div className="relative aspect-[4/5]">

                  <img
                    src={heroImage}
                    alt="Vikram Jayate"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />

                  {/* IMAGE GRADIENT */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#070a0d] via-transparent to-transparent" />

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#070a0d]/20" />

                </div>

                {/* =================================================
                    EXPERIENCE CARD
                ================================================== */}

                <div className="absolute bottom-5 left-5 right-5">

                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#080c10]/85 p-4 shadow-2xl backdrop-blur-xl">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                        <ShieldCheck size={20} />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          Market Experience
                        </p>

                        <p className="mt-0.5 text-xs text-gray-500">
                          15+ Years in Stock Market
                        </p>
                      </div>

                    </div>

                    <div className="text-right">

                      <p className="text-xl font-bold text-emerald-400">
                        15+
                      </p>

                      <p className="text-[9px] uppercase tracking-wider text-gray-500">
                        Years
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* FLOATING MARKET CARD */}

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-5 top-16 hidden rounded-2xl border border-white/10 bg-[#0d1318]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/10">
                  <TrendingUp
                    size={17}
                    className="text-emerald-400"
                  />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-wider text-gray-500">
                    Approach
                  </p>

                  <p className="text-sm font-semibold text-white">
                    Analyse. Learn. Grow.
                  </p>
                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* ================= BOTTOM FADE ================= */}

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080b0f] to-transparent" />

    </section>
  );
}
