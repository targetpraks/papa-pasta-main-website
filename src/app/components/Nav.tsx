"use client";

import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/story/", label: "Our Story" },
  { href: "/menu/", label: "Menu" },
  { href: "/locations/", label: "Locations" },
  { href: "/blog/", label: "Blog" },
  { href: "/events/", label: "Events" },
  { href: "/contact/", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-pp-navy/95 backdrop-blur border-b border-pp-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 group">
            <img
              src="/images/logo-black.png"
              alt="Papa Pasta"
              className="h-10 w-auto rounded bg-white/10 group-hover:scale-105 transition"
            />
            <span className="text-pp-gold font-serif text-xl font-bold tracking-tight">Papa Pasta</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-pp-cream/80 hover:text-pp-gold transition"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/franchise/"
              className="ml-2 inline-flex items-center rounded-md bg-pp-gold px-4 py-2 text-sm font-semibold text-pp-navy shadow hover:bg-pp-gold-light transition"
            >
              Franchise
            </a>
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden text-pp-gold p-2"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-pp-navy border-t border-pp-gold/20">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-pp-cream/90 hover:text-pp-gold text-base font-medium py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/franchise/"
              onClick={() => setOpen(false)}
              className="block mt-2 text-center rounded-md bg-pp-gold px-4 py-2 text-sm font-semibold text-pp-navy"
            >
              Franchise
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
