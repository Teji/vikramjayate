import { motion } from "framer-motion";
import {
  BarChart3,
  BriefcaseBusiness,
  CandlestickChart,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "stock-analysis",
    number: "01",
    icon: BarChart3,
    title: "Stock Market Analysis",
    description:
      "Understand stocks through structured market analysis, price behaviour and important market levels.",
    points: [
      "Stock & market analysis",
      "Price movement understanding",
      "Important market levels",
    ],
    link: "#contact",
  },
  {
    id: "fund-management",
    number: "02",
    icon: BriefcaseBusiness,
    title: "Fund Management",
    description:
      "Get a structured approach to managing and understanding your market investments based on your individual goals.",
    points: [
      "Investment guidance",
      "Portfolio understanding",
      "Market-focused approach",
    ],
    link: "#contact",
  },
  {
    id: "price-action",
    number: "03",
    icon: CandlestickChart,
    title: "Price Action Course",
    description:
      "Learn how to read price movement, market structure and important levels without depending only on indicators.",
    points: [
      "Market structure",
      "Price action concepts",
      "Practical chart analysis",
    ],
    link: "#courses",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#080b0f] py-24 text-white sm:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-400/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-emerald-400">
            <CandlestickChart size={15} />
            What I Offer
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Market Knowledge.
            <span className="block text-emerald-400">
              Practical Approach.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
            Whether you want to understand stocks, improve your market
            knowledge or learn price action, choose the approach that
            fits your journey.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}

        <div className="mt-16 grid gap-5 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                id={service.id}
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                className="group"
              >
                <div id={service.id} className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0d1217] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-[#10171d] hover:shadow-2xl hover:shadow-emerald-400/5 sm:p-8">

                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-400/0 blur-3xl transition-all duration-500 group-hover:bg-emerald-400/10" />

                  {/* Number */}
                  <div className="absolute right-7 top-7 text-xs font-medium tracking-widest text-gray-700">
                    {service.number}
                  </div>

                  {/* Icon */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/5 text-emerald-400 transition-all duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/10 group-hover:shadow-lg group-hover:shadow-emerald-400/10">
                    <Icon size={25} />
                  </div>

                  {/* Content */}
                  <div className="relative mt-7">

                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-gray-400">
                      {service.description}
                    </p>

                    {/* Points */}
                    <div className="mt-6 space-y-3">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3 text-sm text-gray-300"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-emerald-400"
                          />

                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={service.link}
                      className="group/link mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400"
                    >
                      {service.id === "price-action"
                        ? "Explore Course"
                        : "Enquire Now"}

                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                      />
                    </a>

                  </div>

                  {/* Bottom line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-400 transition-all duration-500 group-hover:w-full" />

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* ================= BOTTOM NOTE ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-gray-600">
            Market investments involve risk. Information and education
            provided on this website should not be considered a guarantee
            of returns.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
