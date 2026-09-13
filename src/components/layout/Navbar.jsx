import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const navLinkClass =
  "text-sm text-gray-300 transition-colors duration-200 hover:text-emerald-400";

const mobileLinkClass =
  "block rounded-xl px-4 py-3 text-sm text-gray-300 transition-colors hover:bg-emerald-400/10 hover:text-emerald-400";

const dropdownItemClass =
  "group block rounded-xl px-4 py-3 transition-all duration-200 hover:bg-emerald-400/10";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenus = () => {
    setServicesOpen(false);
    setMoreOpen(false);
    setMobileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#070a0d]/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenus}
            className="flex min-w-0 items-center gap-3"
          >
            <img
              src={logo}
              alt="Vikram Jayate"
              className="h-11 w-auto shrink-0 object-contain"
            />

            <div className="hidden leading-none sm:block">
              <div className="text-lg font-bold tracking-tight text-white">
                Vikram <span className="text-emerald-400">Jayate</span>
              </div>

              <div className="mt-2 text-[9px] font-medium uppercase tracking-[0.25em] text-gray-500">
                Market Analysis & Education
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 xl:flex">
            <a href="#home" className={navLinkClass}>
              Home
            </a>

            <a href="#about" className={navLinkClass}>
              About
            </a>

            {/* Services */}
            <div
              className="relative flex h-[72px] items-center"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                className={`${navLinkClass} flex items-center gap-1`}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-1/2 top-[64px] w-72 -translate-x-1/2 pt-2">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c1116]/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
                    <a
                      href="#stock-analysis"
                      onClick={closeMenus}
                      className={dropdownItemClass}
                    >
                      <span className="text-sm font-medium text-gray-200 group-hover:text-emerald-400">
                        Stock Market Analysis
                      </span>
                      <p className="mt-1 text-xs text-gray-500">
                        Understand stocks & market trends
                      </p>
                    </a>

                    <a
                      href="#fund-management"
                      onClick={closeMenus}
                      className={dropdownItemClass}
                    >
                      <span className="text-sm font-medium text-gray-200 group-hover:text-emerald-400">
                        Fund Management
                      </span>
                      <p className="mt-1 text-xs text-gray-500">
                        Professional market guidance
                      </p>
                    </a>

                    <a
                      href="#courses"
                      onClick={closeMenus}
                      className={dropdownItemClass}
                    >
                      <span className="text-sm font-medium text-gray-200 group-hover:text-emerald-400">
                        Price Action Course
                      </span>
                      <p className="mt-1 text-xs text-gray-500">
                        Learn price action & market structure
                      </p>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <Link to="/blog" className={navLinkClass}>
              Insights
            </Link>

            <Link to="/recommendations" className={navLinkClass}>
              Recommendations
            </Link>

            {/* More */}
            <div
              className="relative flex h-[72px] items-center"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                type="button"
                onClick={() => setMoreOpen((prev) => !prev)}
                className={`${navLinkClass} flex items-center gap-1`}
              >
                More
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {moreOpen && (
                <div className="absolute left-1/2 top-[64px] w-52 -translate-x-1/2 pt-2">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c1116]/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
                    <a
                      href="#why-vikram"
                      onClick={closeMenus}
                      className={dropdownItemClass}
                    >
                      <span className="text-sm text-gray-200 group-hover:text-emerald-400">
                        Why Vikram
                      </span>
                    </a>

                    <a
                      href="#courses"
                      onClick={closeMenus}
                      className={dropdownItemClass}
                    >
                      <span className="text-sm text-gray-200 group-hover:text-emerald-400">
                        Price Action
                      </span>
                    </a>

                    <a
                      href="#how-it-works"
                      onClick={closeMenus}
                      className={dropdownItemClass}
                    >
                      <span className="text-sm text-gray-200 group-hover:text-emerald-400">
                        How It Works
                      </span>
                    </a>

                    <a
                      href="#faq"
                      onClick={closeMenus}
                      className={dropdownItemClass}
                    >
                      <span className="text-sm text-gray-200 group-hover:text-emerald-400">
                        FAQ
                      </span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="rounded-full bg-emerald-300 px-5 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-emerald-200 hover:shadow-lg hover:shadow-emerald-400/20"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-lg border border-white/10 p-2 text-white transition-colors hover:border-emerald-400/30 hover:text-emerald-400 xl:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="border-t border-white/5 py-3 xl:hidden">
            <a
              href="#home"
              onClick={closeMenus}
              className={mobileLinkClass}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenus}
              className={mobileLinkClass}
            >
              About
            </a>

            {/* Mobile Services */}
            <div className="mt-1">
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                className={`${mobileLinkClass} flex w-full items-center justify-between`}
              >
                <span>Services</span>

                <ChevronDown
                  size={17}
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="ml-3 mt-1 space-y-1 border-l border-emerald-400/20 pl-3">
                  <a
                    href="#stock-analysis"
                    onClick={closeMenus}
                    className={mobileLinkClass}
                  >
                    Stock Market Analysis
                  </a>

                  <a
                    href="#fund-management"
                    onClick={closeMenus}
                    className={mobileLinkClass}
                  >
                    Fund Management
                  </a>

                  <a
                    href="#courses"
                    onClick={closeMenus}
                    className={mobileLinkClass}
                  >
                    Price Action Course
                  </a>
                </div>
              )}
            </div>

            <Link
              to="/blog"
              onClick={closeMenus}
              className={mobileLinkClass}
            >
              Insights
            </Link>

            <Link
              to="/recommendations"
              onClick={closeMenus}
              className={mobileLinkClass}
            >
              Recommendations
            </Link>

            {/* Mobile More */}
            <div className="mt-1">
              <button
                type="button"
                onClick={() => setMoreOpen((prev) => !prev)}
                className={`${mobileLinkClass} flex w-full items-center justify-between`}
              >
                <span>More</span>

                <ChevronDown
                  size={17}
                  className={`transition-transform duration-200 ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {moreOpen && (
                <div className="ml-3 mt-1 space-y-1 border-l border-emerald-400/20 pl-3">
                  <a
                    href="#why-vikram"
                    onClick={closeMenus}
                    className={mobileLinkClass}
                  >
                    Why Vikram
                  </a>

                  <a
                    href="#courses"
                    onClick={closeMenus}
                    className={mobileLinkClass}
                  >
                    Price Action
                  </a>

                  <a
                    href="#how-it-works"
                    onClick={closeMenus}
                    className={mobileLinkClass}
                  >
                    How It Works
                  </a>

                  <a
                    href="#faq"
                    onClick={closeMenus}
                    className={mobileLinkClass}
                  >
                    FAQ
                  </a>
                </div>
              )}
            </div>

            <a
              href="#contact"
              onClick={closeMenus}
              className="mt-2 block rounded-xl bg-emerald-300 px-4 py-3 text-center text-sm font-semibold text-black transition-all hover:bg-emerald-200"
            >
              Enquire Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
