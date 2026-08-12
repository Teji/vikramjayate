import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  LineChart,
  UserRound,
} from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    text: "Market basics samajhna te investing di strong foundation build karna chaunde ho.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Working Professionals",
    text: "Apni busy routine de naal market nu structured way vich samajhna chaunde ho.",
  },
  {
    icon: UserRound,
    title: "New Investors",
    text: "Stock market vich nava start kar rahe ho te proper direction chahunde ho.",
  },
  {
    icon: LineChart,
    title: "Market Learners",
    text: "Already market vich ho te price action te chart analysis improve karna chaunde ho.",
  },
];

export default function AudianceSection() {
  return (
    <section
      id="audience"
      className="relative overflow-hidden bg-[#080b0f] py-24 text-white sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-400/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-emerald-400">
            <LineChart size={15} />
            Who Is This For?
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Wherever you are in your
            <span className="block text-emerald-400">
              market journey.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Whether you're just getting started or looking to improve
            your market understanding, the learning approach can be
            adapted to your level.
          </p>
        </motion.div>

        {/* AUDIENCE CARDS */}

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;

            return (
              <motion.div
                key={audience.title}
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

                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-emerald-400/0 blur-3xl transition-all duration-500 group-hover:bg-emerald-400/10" />

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/5 text-emerald-400 transition-all duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/10">
                    <Icon size={21} />
                  </div>

                  <h3 className="relative mt-6 text-lg font-semibold text-white">
                    {audience.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-6 text-gray-500">
                    {audience.text}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-400 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-[#0d1217] to-[#0a1014] p-7 sm:p-9"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                Start Learning
              </p>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Ready to understand the market better?
              </h3>

              <p className="mt-2 max-w-xl text-sm text-gray-500">
                Explore the Price Action course or get in touch to
                understand which option is right for you.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-emerald-200 hover:shadow-lg hover:shadow-emerald-400/20"
            >
              Get In Touch

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
