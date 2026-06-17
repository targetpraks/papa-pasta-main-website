"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollProgressBar } from "./Motion";
import OptimizedImage from "./OptimizedImage";

/* Per-link neon accent — each nav item gets its own cyber colour */
const navLinks = [
  { href: "/", label: "Home", accent: "#00ffff" },              // cyan
  { href: "/menu/", label: "Menu", accent: "#ff5f1f" },         // appetite orange
  { href: "/locations/", label: "Locations", accent: "#0080ff" }, // electric blue
  { href: "/merch/", label: "Merch", accent: "#bf00ff" },        // violet
  { href: "/loyalty/", label: "Loyalty", accent: "#ffd700", aliases: ["/level-up/"] }, // gold
  { href: "/drops/", label: "Drops", accent: "#39ff14", aliases: ["/blog/"] },         // acid green
  { href: "/story/", label: "Story", accent: "#f8fafc" },  // silver-white
];

const navAccentMap: Record<string, string> = {};
navLinks.forEach((l) => {
  navAccentMap[l.href] = l.accent;
  l.aliases?.forEach((alias) => {
    navAccentMap[alias] = l.accent;
  });
});

const normalizePath = (path: string) => (path.endsWith("/") ? path : `${path}/`);

const FRANCHISE_NEON = "#ff0080"; // hot pink
const FRANCHISE_HREF = "https://franchise.papapasta.co.za";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const active = pathname || "/";

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
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Papa Pasta — Home"
            >
              <OptimizedImage
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

            {/* Desktop Nav — each link has its own neon color */}
            <nav
              className="hidden xl:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navLinks.map((l) => {
                const activePath = normalizePath(active);
                const activeTargets = [l.href, ...(l.aliases ?? [])].map(normalizePath);
                const isActive = activeTargets.includes(activePath);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 group ${
                      isActive
                        ? ""
                        : "text-white/60"
                    }`}
                    style={{
                      color: isActive ? navAccentMap[l.href] : undefined,
                    }}
                    aria-current={isActive ? "page" : undefined}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = l.accent;
                      e.currentTarget.style.textShadow = `0 0 8px ${l.accent}80, 0 0 20px ${l.accent}40`;
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "";
                        e.currentTarget.style.textShadow = "";
                      }
                    }}
                  >
                    <span className="font-sans text-label-md uppercase tracking-label-md"
                    >
                      {l.label}
                    </span>
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 rounded-full"
                      style={{
                        backgroundColor: navAccentMap[l.href],
                        boxShadow: isActive ? `0 0 6px ${navAccentMap[l.href]}80` : undefined,
                        width: isActive ? "75%" : "0%",
                      }}
                    />
                  </Link>
                );
              })}
              <a
                href={FRANCHISE_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 inline-flex items-center rounded-md px-5 py-2.5 text-label-md uppercase tracking-label-md font-semibold transition-all duration-300"
                style={{
                  backgroundColor: FRANCHISE_NEON,
                  color: "#000",
                  boxShadow: `0 0 12px ${FRANCHISE_NEON}60`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${FRANCHISE_NEON}80, 0 0 40px ${FRANCHISE_NEON}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 12px ${FRANCHISE_NEON}60`;
                }}
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

        {/* Mobile Menu Overlay — each link styled with its own neon color */}
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
                const activePath = normalizePath(active);
                const activeTargets = [l.href, ...(l.aliases ?? [])].map(normalizePath);
                const isActive = activeTargets.includes(activePath);
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
                            isActive ? "font-bold" : ""
                          }`}
                          style={{
                            color: isActive ? l.accent : "rgba(255,255,255,0.9)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = l.accent;
                            e.currentTarget.style.textShadow = `0 0 8px ${l.accent}80`;
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive) {
                              e.currentTarget.style.color = "rgba(255,255,255,0.9)";
                              e.currentTarget.style.textShadow = "";
                            }
                          }}
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
                      className="block mt-4 text-center rounded-md px-6 py-3 text-label-md uppercase tracking-label-md font-semibold transition-all duration-300"
                      style={{
                        backgroundColor: FRANCHISE_NEON,
                        color: "#000",
                        boxShadow: `0 0 16px ${FRANCHISE_NEON}60`,
                      }}
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
