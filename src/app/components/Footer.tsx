"use client";

import Link from "next/link";
import { MotionSection } from "./Motion";
import OptimizedImage from "./OptimizedImage";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/papapasta_sa",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@papapasta_sa",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.66 2.52-4.91 1.75-1.61 4.4-2.07 6.65-1.19.05.02.1.04.19.08v4.22c-.66-.22-1.38-.25-2.06-.09-.74.18-1.39.62-1.79 1.26-.39.62-.48 1.39-.27 2.09.23.78.85 1.44 1.63 1.73.87.33 1.91.17 2.6-.42.55-.47.87-1.17.87-1.89V.02z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/papapasta_sa",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const exploreLinks = [
  { href: "/menu/", label: "Menu", neon: "#ff5f1f" },
  { href: "/locations/", label: "Locations", neon: "#0080ff" },
  { href: "/merch/", label: "Merch", neon: "#bf00ff" },
  { href: "/loyalty/", label: "Loyalty", neon: "#ffd700" },
  { href: "/drops/", label: "Drops & Journal", neon: "#39ff14" },
  { href: "/story/", label: "Story", neon: "#f8fafc" },
];

const infoLinks = [
  { href: "/contact/", label: "Contact", neon: "#39ff14" },
  { href: "/careers/", label: "Careers", neon: "#ffff00" },
  { href: "/legal/", label: "Legal", neon: "#00ffff" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 lg:py-20">
          {/* Brand Column */}
          <MotionSection>
            <div className="flex flex-col">
              <Link href="/" className="flex items-center gap-3 mb-5 group">
                <OptimizedImage
                  src="/images/logo-crest-white.png"
                  alt="Papa Pasta"
                  className="h-16 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  width={70}
                  height={90}
                />
                <span className="text-white font-serif text-xl font-bold">
                  Papa Pasta
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-white/40 max-w-xs">
                Fresh handmade pasta, cyber-bright drops, merch, loyalty rewards, and store launches across South Africa.
              </p>
              <div className="flex items-center gap-3 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Papa Pasta on ${social.name}`}
                    className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-cyan-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:[filter:drop-shadow(0_0_8px_rgba(0,255,255,0.6))]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </MotionSection>

          {/* Explore Column */}
          <MotionSection delay={0.1}>
            <div>
              <h4 className="text-white font-serif font-semibold mb-5 text-label-md uppercase tracking-label-md">
                Explore
              </h4>
              <ul className="space-y-3 text-sm">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/50 transition-all duration-300 hover:pl-1 inline-block"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = link.neon || '#00ffff';
                        e.currentTarget.style.textShadow = `0 0 8px ${link.neon || '#00ffff'}80`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '';
                        e.currentTarget.style.textShadow = '';
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </MotionSection>

          {/* Info Column */}
          <MotionSection delay={0.2}>
            <div>
              <h4 className="text-white font-serif font-semibold mb-5 text-label-md uppercase tracking-label-md">
                Info
              </h4>
              <ul className="space-y-3 text-sm">
                {infoLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/50 transition-all duration-300 hover:pl-1 inline-block"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = link.neon || '#39ff14';
                        e.currentTarget.style.textShadow = `0 0 8px ${link.neon || '#39ff14'}80`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '';
                        e.currentTarget.style.textShadow = '';
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </MotionSection>

          {/* Order Column */}
          <MotionSection delay={0.3}>
            <div>
              <h4 className="text-white font-serif font-semibold mb-5 text-label-md uppercase tracking-label-md">
                Order Now
              </h4>
              <div className="flex flex-col gap-2">
                <Link href="/menu/" className="inline-flex items-center justify-center rounded-md border border-white/20 text-white text-sm font-medium px-4 py-2.5 hover:bg-white hover:text-black transition-colors duration-300">
                  View Menu
                </Link>
                <Link href="/locations/" className="inline-flex items-center justify-center rounded-md border border-white/20 text-white text-sm font-medium px-4 py-2.5 hover:bg-white hover:text-black transition-colors duration-300">
                  Find Stores
                </Link>
                <Link href="/merch/" className="inline-flex items-center justify-center rounded-md border border-white/20 text-white text-sm font-medium px-4 py-2.5 hover:bg-white hover:text-black transition-colors duration-300">
                  Shop Merch
                </Link>
              </div>
            </div>
          </MotionSection>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Papa Pasta. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal/" className="transition-all duration-300" onMouseEnter={(e)=>{e.currentTarget.style.color='#00ffff'; e.currentTarget.style.textShadow='0 0 8px rgba(0,255,255,0.5)';}} onMouseLeave={(e)=>{e.currentTarget.style.color=''; e.currentTarget.style.textShadow='';}}>Privacy &amp; Legal</Link>
            <a href="https://franchise.papapasta.co.za/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300" onMouseEnter={(e)=>{e.currentTarget.style.color='#ff0080'; e.currentTarget.style.textShadow='0 0 8px rgba(255,0,128,0.5)';}} onMouseLeave={(e)=>{e.currentTarget.style.color=''; e.currentTarget.style.textShadow='';}}>Franchise</a>
            <Link href="/contact/" className="transition-all duration-300" onMouseEnter={(e)=>{e.currentTarget.style.color='#39ff14'; e.currentTarget.style.textShadow='0 0 8px rgba(57,255,20,0.5)';}} onMouseLeave={(e)=>{e.currentTarget.style.color=''; e.currentTarget.style.textShadow='';}}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
