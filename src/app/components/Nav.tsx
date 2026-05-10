"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollProgressBar } from "./Motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/story/", label: "Our Story" },
  { href: "/menu/", label: "Menu" },
  { href: "/locations/", label: "Locations" },
  { href: "/artisanal/", label: "Artisanal" },
  { href: "/bowls/", label: "Bowls" },
  { href: "/merch/", label: "Merch" },
  { href: "/level-up/", label: "Level Up" },
  { href: "/blog/", label: "Blog" },
  { href: "/events/", label: "Events" },
];

const FRANCHISE_HREF = "https://franchise.papapasta.co.za";

function useActiveRoute() {
  const [active, setActive] = useState("/");
  useEffect(() => {
    setActive(window.location.pathname);
    const onPop = () => setActive(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  return active;
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveRoute();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <ScrollProgressBar />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/40"
            : "bg-black/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-22">
            {/* Logo — massive */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Papa Pasta — Home"
            >
              <img
                src="/images/logo-crest-white.png"
                alt=""
                className="h-14 sm:h-18 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                loading="eager"
                width={70}
                height={90}
              />
              <span className="hidden sm:block text-white font-serif text-2xl sm:text-3xl font-bold tracking-tight"
              >
                Papa Pasta
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden xl:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navLinks.map((l) => {
                const isActive =
                  active === l.href || active === l.href.replace(/\/$/, "");
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 group ${
                      isActive
                        ? "text-cyan-400"
                        : "text-white/60 hover:text-cyan-400"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="font-sans text-label-md uppercase tracking-label-md"
                    >
                      {l.label}
                    </span>
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-cyan-400 transition-all duration-300 rounded-full ${
                        isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
                      }`}
                    />
                  </Link>
                );
              })}
              <a
                href={FRANCHISE_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 inline-flex items-center rounded-md bg-white text-black px-5 py-2.5 text-label-md uppercase tracking-label-md font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Franchise
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="xl:hidden text-white p-3 hover:bg-white/5 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-white min-h-[44px] min-w-[44px]"
              onClick={() => setOpen(!open)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 xl:hidden"
                onClick={() => setOpen(false)}
                aria-hidden="true"
              />
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="xl:hidden bg-black border-t border-white/10 absolute left-0 right-0 top-full z-50 shadow-2xl"
              >
                <div className="px-4 py-6 space-y-1">
                  {navLinks.map((l, i) => {
                    const isActive =
                      active === l.href || active === l.href.replace(/\/$/, "");
                    return (
                      <motion.div
                        key={l.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                      >
                        <Link
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className={`block text-lg font-medium py-3 border-b border-white/5 transition-colors ${
                            isActive
                              ? "text-cyan-400"
                              : "text-white/90 hover:text-cyan-400"
                          }`}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {l.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: navLinks.length * 0.05,
                      duration: 0.3,
                    }}
                  >
                    <a
                      href={FRANCHISE_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="block mt-4 text-center rounded-md bg-white text-black px-6 py-3 text-label-md uppercase tracking-label-md font-semibold hover:bg-cyan-400 transition-colors"
                    >
                      Franchise
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
