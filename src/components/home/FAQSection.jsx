import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Who is Vikram Jayate?",
    answer:
      "Vikram Jayate is a Relationship Manager with 15+ years of experience in the stock market, focusing on market understanding, stock analysis and price action education.",
  },
  {
    question: "Who can learn Price Action?",
    answer:
      "The Price Action course is designed for people who want to understand how price moves and learn a structured approach to reading market charts. Beginners as well as existing market learners can explore the course.",
  },
  {
    question: "Do I need previous stock market experience?",
    answer:
      "No. You can enquire even if you are new to the stock market. Your current level and learning requirements can be discussed before choosing the appropriate learning option.",
  },
  {
    question: "What will I learn in the Price Action course?",
    answer:
      "The course focuses on concepts such as price behaviour, market structure, support and resistance, important levels and practical chart analysis.",
  },
  {
    question: "Do you provide stock market guidance?",
    answer:
      "Yes. Market-related services and guidance can be discussed based on your requirements. Please contact Vikram to understand the available service and suitability for your needs.",
  },
  {
    question: "Can I contact Vikram before joining a course or service?",
    answer:
      "Yes. You can get in touch first and discuss your requirements, experience level and objectives before deciding on a course or service.",
  },
  {
    question: "Is stock market investment risk-free?",
    answer:
      "No. Stock market investments involve risk and returns cannot be guaranteed. The information and educational content on this website should not be considered a guarantee of returns.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#080b0f] py-24 text-white sm:py-28"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-400/5 blur-[130px]" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-emerald-400">
            <HelpCircle size={15} />
            Frequently Asked Questions
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Have questions?
            <span className="block text-emerald-400">
              We have answers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Find answers to some of the common questions about market
            guidance and the Price Action course.
          </p>
        </motion.div>

        {/* ================= FAQ LIST ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 space-y-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-emerald-400/25 bg-[#0d1217]"
                    : "border-white/10 bg-[#0b1014] hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-sm font-semibold transition-colors sm:text-base ${
                      isOpen ? "text-emerald-400" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
                        : "border-white/10 bg-white/[0.03] text-gray-400"
                    }`}
                  >
                    <ChevronDown size={17} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="border-t border-white/5 px-5 pb-5 pt-4 sm:px-6">
                        <p className="text-sm leading-7 text-gray-400">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* ================= CONTACT NOTE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-gray-500">
            Still have a question?
          </p>

          <a
            href="#contact"
            className="mt-2 inline-block text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
          >
            Get in touch with Vikram →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
