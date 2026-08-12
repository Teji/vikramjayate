import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardCheck,
  MessageCircle,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Get in Touch",
    text: "Apni requirement, experience level te market-related goals bare gal karo.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Understand Your Requirement",
    text: "Tuhadi requirement de according suitable service ya learning option identify kita janda hai.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Start Your Journey",
    text: "Structured guidance ya Price Action learning de naal apni market understanding improve karo.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#070a0d] py-24 text-white sm:py-28"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-400/5 blur-[130px]" />

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
            <Rocket size={15} />
            How It Works
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Getting started is
            <span className="block text-emerald-400">
              simple.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Whether you want market guidance or want to learn Price
            Action, start with a simple conversation.
          </p>
        </motion.div>

        {/* ================= STEPS ================= */}

        <div className="relative mt-16">

          {/* Connecting line */}

          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-16 hidden h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent lg:block" />

          <div className="grid gap-6 lg:grid-cols-3">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                  }}
                  className="group relative"
                >
                  <div className="relative h-full rounded-3xl border border-white/10 bg-[#0d1217] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-[#10171d] sm:p-8">

                    {/* Number */}

                    <div className="absolute right-7 top-7 text-xs font-semibold tracking-[0.2em] text-gray-700">
                      {step.number}
                    </div>

                    {/* Icon */}

                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/5 text-emerald-400 transition-all duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/10 group-hover:shadow-lg group-hover:shadow-emerald-400/10">
                      <Icon size={26} />
                    </div>

                    <h3 className="mt-7 text-xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-gray-500">
                      {step.text}
                    </p>

                    {/* Bottom line */}

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-400 transition-all duration-500 group-hover:w-full" />
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* ================= BOTTOM TRUST NOTE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-12 flex max-w-2xl items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
        >
          <ShieldCheck
            size={20}
            className="mt-0.5 shrink-0 text-emerald-400"
          />

          <p className="text-left text-xs leading-5 text-gray-500">
            Every market decision involves risk. The purpose of the
            guidance and educational content is to help you develop
            better market understanding and a more structured approach.
          </p>
        </motion.div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-300 px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-emerald-200 hover:shadow-lg hover:shadow-emerald-400/20"
          >
            Start With a Conversation

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
