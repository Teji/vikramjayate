import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";

export default function FinalCTA() {
  const phone = "918708570725";
  const telegram = "https://t.me/Tradewithjayate";

  const whatsappMessage = encodeURIComponent(
    "Hello Vikram, I would like to know more about your stock market services and Price Action course."
  );

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#070a0d] py-24 text-white sm:py-28"
    >
      {/* Background effects */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-400/5 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-400/[0.03] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

        {/* ================= MAIN CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[36px] border border-emerald-400/15 bg-[#0c1217]"
        >
          <div className="relative px-7 py-14 text-center sm:px-12 sm:py-16">

            {/* Top badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-emerald-400">
              <MessageCircle size={15} />
              Let's Connect
            </div>

            {/* Heading */}

            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Ready to understand the market
              <span className="block text-emerald-400">
                with more clarity?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Whether you want to learn Price Action, understand the
              available services or simply discuss your requirements,
              get in touch with Vikram.
            </p>

            {/* ================= CTA BUTTONS ================= */}

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              {/* WhatsApp */}

              <a
                href={`https://wa.me/${phone}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-300 px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-emerald-200 hover:shadow-lg hover:shadow-emerald-400/20 sm:w-auto"
              >
                <MessageCircle size={18} />

                WhatsApp Enquiry

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              {/* Telegram */}

              <a
                href={telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/5 hover:text-emerald-400 sm:w-auto"
              >
                <Send size={17} />

                Telegram

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

            </div>

            {/* ================= CONTACT DETAILS ================= */}

            <div className="mx-auto mt-10 flex max-w-xl flex-col items-center justify-center gap-5 border-t border-white/5 pt-8 sm:flex-row">

              <a
                href={`tel:+${phone}`}
                className="group flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-emerald-400"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-emerald-400">
                  <Phone size={16} />
                </span>

                +91 8708570725
              </a>

              <div className="hidden h-5 w-px bg-white/10 sm:block" />

              <a
                href={telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-emerald-400"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-emerald-400">
                  <Send size={16} />
                </span>

                @Tradewithjayate
              </a>

            </div>

          </div>
        </motion.div>

        {/* ================= DISCLAIMER ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-8 flex max-w-3xl items-start gap-3 text-center"
        >
          <ShieldCheck
            size={17}
            className="mt-0.5 hidden shrink-0 text-gray-600 sm:block"
          />

          <p className="text-xs leading-5 text-gray-600">
            Stock market investments are subject to market risks. The
            information provided on this website is for educational and
            informational purposes and should not be considered a
            guarantee of returns.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
