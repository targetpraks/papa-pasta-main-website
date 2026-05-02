"use client";

import { useState } from "react";

import Reveal from "../components/Reveal";

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

  // NOTE: keep React import
  return (
    <>
      <header className="bg-pp-navy text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-pp-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">Visual Library</p>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold mb-4">The Gallery</h1>
          <p className="text-pp-cream/80 max-w-2xl mx-auto">
            Every bowl, store concept, takeover and crest is a colour story. Browse the full visual archive.
          </p>
        </div>
      </header>

      {/* Section Tabs */}
      <div className="bg-pp-navy-dark border-b border-pp-navy-light">
        <div className="max-w-7xl mx-auto px-4 flex gap-0">
          {["bowls", "stores", "packaging", "takeovers"].map((sec) => (
            <button
              key={sec}
              onClick={() => setActiveSection(sec)}
              className={`flex-1 py-4 text-sm font-semibold uppercase tracking-wider transition ${
                activeSection === sec ? "text-pp-gold border-b-2 border-pp-gold" : "text-pp-cream/50 hover:text-pp-cream"
              }`}
            >
              {sec}
            </button>
          ))}
        </div>
      </div>

      {/* Bowls Section */}
      {activeSection === "bowls" && (
        <section className="section-padding bg-pp-cream">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-2 mb-8">
              {["All", "Foundational", "Franchise", "Heritage", "Gaming", "TakeOver", "Collab", "Seasonal", "City", "Special", "Sports"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition ${
                    filter === tag ? "bg-pp-navy text-white" : "bg-white text-pp-charcoal/60 border border-pp-navy/10 hover:border-pp-gold"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {bowlGallery.filter((b) => filter === "All" || b.tag === filter).map((b, i) => (
                <Reveal key={b.title} delay={String((i % 5) + 1)}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm img-hover-lift">
                    <div className="aspect-square overflow-hidden">
                      <img src={b.img} alt={b.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3">
                      <p className="text-xs font-medium text-pp-navy truncate">{b.title}</p>
                      <p className="text-[10px] text-pp-charcoal/40 uppercase tracking-wider">{b.tag}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stores Section */}
      {activeSection === "stores" && (
        <section className="section-padding bg-pp-cream">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {storeGallery.map((s, i) => (
                <Reveal key={s.title} delay={String((i % 5) + 1)}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm img-hover-lift">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-lg font-semibold text-pp-navy">{s.title}</h3>
                      <p className="text-xs text-pp-charcoal/50 mt-1">Store Concept</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Packaging Section */}
      {activeSection === "packaging" && (
        <section className="section-padding bg-pp-cream">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Franchisee Cups", img: "/images/packaging-franchisee-cups.png" },
              { title: "TakeOver Packaging", img: "/images/packaging-takeover.png" },
              { title: "Base B&W Template", img: "/images/packaging-base-bw.png" },
              { title: "Collectible Canisters", img: "/images/collectible-cups-canisters.png" },
              { title: "Kraft Sleeve", img: "/images/artisan-pkg-03-kraft-sleeve.png" },
              { title: "Retail Shelf Display", img: "/images/artisan-pkg-05-retail-shelf-display.png" },
            ].map((p, i) => (
              <Reveal key={p.title} delay={String((i % 5) + 1)}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm img-hover-lift">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-pp-navy">{p.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Takeovers Section */}
      {activeSection === "takeovers" && (
        <section className="section-padding bg-pp-cream">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "MTN TakeOver", img: "/images/takeover-mtn.png", partner: "MTN" },
              { title: "Nedbank TakeOver", img: "/images/takeover-nedbank.png", partner: "Nedbank" },
              { title: "Vodacom TakeOver", img: "/images/takeover-vodacom.png", partner: "Vodacom" },
              { title: "Springboks TakeOver", img: "/images/takeover-springboks.png", partner: "Springboks" },
              { title: "Lions Rugby TakeOver", img: "/images/takeover-lions-rugby.png", partner: "Lions" },
              { title: "Investec TakeOver", img: "/images/takeover-investec.png", partner: "Investec" },
            ].map((t, i) => (
              <Reveal key={t.title} delay={String((i % 5) + 1)}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm img-hover-lift">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={t.img} alt={t.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 bg-pp-gold text-pp-navy text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">{t.partner}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-pp-navy">{t.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
