import {
  ArrowUpRight,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import logo from "../../assets/logo.png";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Price Action", href: "#courses" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const services = [
  { label: "Stock Market Analysis", href: "#stock-analysis" },
  { label: "Fund Management", href: "#fund-management" },
  { label: "Price Action Course", href: "#courses" },
];

export default function Footer() {
  const phone = "918708570725";
  const telegram = "https://t.me/Tradewithjayate";

  const whatsappMessage = encodeURIComponent(
    "Hello Vikram, I would like to know more about your services and Price Action course."
  );

  return (
    <footer className="border-t border-white/10 bg-[#050709] text-white">

      {/* ================= MAIN FOOTER ================= */}

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND ================= */}

          <div className="lg:col-span-1">

            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <img
                src={logo}
                alt="Vikram Jayate"
                className="h-12 w-auto object-contain"
              />

              <div className="leading-none">
                <div className="text-lg font-bold tracking-tight">
                  Vikram{" "}
                  <span className="text-emerald-400">
                    Jayate
                  </span>
                </div>

                <div className="mt-2 text-[9px] font-medium uppercase tracking-[0.2em] text-gray-600">
                  Market Analysis & Education
                </div>
              </div>
            </a>

            <p className="mt-6 max-w-xs text-sm leading-6 text-gray-500">
              Helping individuals understand the stock market through
              structured market analysis, guidance and Price Action
              education.
            </p>

            {/* Social */}

            <div className="mt-6 flex items-center gap-3">

              <a
                href={`https://wa.me/${phone}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all hover:border-emerald-400/30 hover:bg-emerald-400/5 hover:text-emerald-400"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href={telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all hover:border-emerald-400/30 hover:bg-emerald-400/5 hover:text-emerald-400"
              >
                <Send size={18} />
              </a>

            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}

          <div>
            <h3 className="text-sm font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-emerald-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= SERVICES ================= */}

          <div>
            <h3 className="text-sm font-semibold text-white">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="group inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-emerald-400"
                  >
                    {service.label}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}

          <div>
            <h3 className="text-sm font-semibold text-white">
              Get In Touch
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-500">
              Have a question about the course or services? Get in
              touch directly.
            </p>

            <div className="mt-5 space-y-3">

              <a
                href={`tel:+${phone}`}
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-emerald-400"
              >
                <Phone
                  size={16}
                  className="shrink-0 text-emerald-400"
                />

                +91 8708570725
              </a>

              <a
                href={telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-emerald-400"
              >
                <Send
                  size={16}
                  className="shrink-0 text-emerald-400"
                />

                @Tradewithjayate
              </a>

            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-emerald-200 hover:shadow-lg hover:shadow-emerald-400/10"
            >
              Enquire Now
              <ArrowUpRight size={15} />
            </a>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}

      <div className="border-t border-white/5">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <p>
            © {new Date().getFullYear()} Vikram Jayate. All rights
            reserved.
          </p>

          <p className="max-w-xl text-left sm:text-right">
            Stock market investments are subject to market risks.
            Educational content does not guarantee returns.
          </p>

        </div>

      </div>

    </footer>
  );
}
