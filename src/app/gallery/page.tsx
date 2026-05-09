"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { StaggerContainer, staggerChildScale } from "../components/Motion";

const bowlGallery = [
  { title: "Founding Crest", img: "/images/bowl-01-founding-crest.png", tag: "Foundational" },
  { title: "Franchisee Colour Drops", img: "/images/bowl-02-franchisee-colour-drops.png", tag: "Franchise" },
  { title: "SA Heritage Series", img: "/images/bowl-03-sa-heritage-series.png", tag: "Heritage" },
  { title: "Neon Gamer Series", img: "/images/bowl-04-neon-gamer-series.png", tag: "Gaming" },
  { title: "TakeOver Partners", img: "/images/bowl-05-takeover-partner-bowls.png", tag: "TakeOver" },
  { title: "Local Artist Collab", img: "/images/bowl-06-local-artist-collab.png", tag: "Collab" },
  { title: "Seasonal Harvest", img: "/images/bowl-07-seasonal-harvest.png", tag: "Seasonal" },
  { title: "City Edition", img: "/images/bowl-08-city-edition.png", tag: "City" },
  { title: "Glow in the Dark", img: "/images/bowl-09-glow-in-dark.png", tag: "Special" },
  { title: "Rugby Sports Edition", img: "/images/bowl-10-rugby-sports-edition.png", tag: "Sports" },
];

const storeGallery = [
  { title: "Cyberpunk Neon", img: "/images/store-concept-1-cyberpunk-neon.png" },
  { title: "Tron Legacy", img: "/images/store-concept-2-tron-legacy.png" },
  { title: "Gaming Arena", img: "/images/store-concept-3-gaming-arena.png" },
  { title: "Neon Tokyo", img: "/images/store-concept-4-neon-tokyo.png" },
  { title: "Pop Art Neon", img: "/images/store-concept-5-pop-art-neon.png" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [activeSection, setActiveSection] = useState("bowls");

  return (
    <>
      <header className="bg-pp-primary text-pp-on-primary py-20 sm:py-24 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-pp-gold uppercase tracking-[0.2em] text-xs font-semibold mb-3">Visual Library</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-bold mb-4">
            The <span className="gold-text-gradient">Gallery</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-pp-on-primary/60 max-w-2xl mx-auto">
            Every bowl, store concept, takeover and crest is a colour story. Browse the full visual archive.
          </motion.p>
        </div>
      </header>

      <div className="bg-pp-surface-dark border-b border-pp-gold/10">
        <div className="max-w-7xl mx-auto px-4 flex gap-0">
          {["bowls", "stores", "packaging", "takeovers"].map((sec) => (
            <button
              key={sec}
              onClick={() => setActiveSection(sec)}
              className={`flex-1 py-4 text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
                activeSection === sec ? "text-pp-gold border-b-2 border-pp-gold" : "text-pp-on-primary/40 hover:text-pp-on-primary/70"
              }`}
            >
              {sec}
            </button>
          ))}
        </div>
      </div>

      {activeSection === "bowls" && (
        <section className="section-padding bg-pp-tertiary">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-2 mb-8">
              {["All", "Foundational", "Franchise", "Heritage", "Gaming", "TakeOver", "Collab", "Seasonal", "City", "Special", "Sports"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`text-xs font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full transition-all duration-300 ${
                    filter === tag ? "bg-pp-primary text-pp-gold shadow-lg" : "bg-white text-pp-primary-60/50 border border-pp-primary/5 hover:border-pp-gold hover:text-pp-gold"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </motion.div>
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {bowlGallery.filter((b) => filter === "All" || b.tag === filter).map((b) => (
                <motion.div key={b.title} variants={staggerChildScale} className="bg-white rounded-xl overflow-hidden border border-pp-primary/5 img-hover-lift">
                  <div className="aspect-square overflow-hidden">
                    <img src={b.img} alt={b.title} width={400} height={300} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-xs font-semibold text-pp-on-surface truncate">{b.title}</p>
                    <p className="text-[10px] text-pp-gold uppercase tracking-wider">{b.tag}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {activeSection === "stores" && (
        <section className="section-padding bg-pp-tertiary">
          <div className="max-w-7xl mx-auto px-4">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {storeGallery.map((s) => (
                <motion.div key={s.title} variants={staggerChildScale} className="bg-white rounded-2xl overflow-hidden border border-pp-primary/5 img-hover-lift">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={s.img} alt={s.title} width={800} height={600} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-pp-on-surface">{s.title}</h3>
                    <p className="text-xs text-pp-gold mt-1 uppercase tracking-wider">Store Concept</p>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {activeSection === "packaging" && (
        <section className="section-padding bg-pp-tertiary">
          <div className="max-w-7xl mx-auto px-4">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Franchisee Cups", img: "/images/packaging-franchisee-cups.png" },
                { title: "TakeOver Packaging", img: "/images/packaging-takeover.png" },
                { title: "B&W Template", img: "/images/packaging-base-bw.png" },
                { title: "Collectible Canisters", img: "/images/collectible-cups-canisters.png" },
                { title: "Kraft Sleeve", img: "/images/artisan-pkg-03-kraft-sleeve.png" },
                { title: "Retail Shelf Display", img: "/images/artisan-pkg-05-retail-shelf-display.png" },
              ].map((p) => (
                <motion.div key={p.title} variants={staggerChildScale} className="bg-white rounded-2xl overflow-hidden border border-pp-primary/5 img-hover-lift">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.title} width={800} height={600} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-pp-on-surface">{p.title}</h3>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {activeSection === "takeovers" && (
        <section className="section-padding bg-pp-tertiary">
          <div className="max-w-7xl mx-auto px-4">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "MTN TakeOver", img: "/images/takeover-mtn.png", partner: "MTN" },
                { title: "Nedbank TakeOver", img: "/images/takeover-nedbank.png", partner: "Nedbank" },
                { title: "Vodacom TakeOver", img: "/images/takeover-vodacom.png", partner: "Vodacom" },
                { title: "Springboks TakeOver", img: "/images/takeover-springboks.png", partner: "Springboks" },
                { title: "Lions Rugby TakeOver", img: "/images/takeover-lions-rugby.png", partner: "Lions" },
                { title: "Investec TakeOver", img: "/images/takeover-investec.png", partner: "Investec" },
              ].map((t) => (
                <motion.div key={t.title} variants={staggerChildScale} className="bg-white rounded-2xl overflow-hidden border border-pp-primary/5 img-hover-lift">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={t.img} alt={t.title} width={800} height={600} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 bg-pp-gold text-pp-on-surface text-[10px] font-bold uppercase tracking-[0.15em] px-2 py-1 rounded">{t.partner}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-pp-on-surface">{t.title}</h3>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}
    </>
  );
}