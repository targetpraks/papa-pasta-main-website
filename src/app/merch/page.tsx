"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { merchCategories, merchItems, merchStatuses } from "../../lib/merch";
import { StaggerContainer, staggerChildScale } from "../components/Motion";
import OptimizedImage from "../components/OptimizedImage";

export default function MerchPage() {
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const filtered = merchItems
    .filter((item) => category === "All" || item.category === category)
    .filter((item) => status === "All" || item.status === status);

  return (
    <>
      <header className="cyber-page-hero relative overflow-hidden bg-black text-white min-h-[20vh] flex items-center py-8 sm:py-10 px-4 sm:px-6 lg:px-8 hero-grid-bg">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(191,0,255,0.14),transparent_45%),radial-gradient(ellipse_at_20%_70%,rgba(0,255,255,0.12),transparent_42%)]" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto w-full">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="glitch-text font-serif text-3xl sm:text-4xl font-bold mb-3 leading-none" data-text="Merch Drops">
            <span className="neon-text-gradient">Merch Drops</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-white/55 max-w-xl text-sm sm:text-base leading-relaxed mb-5">
            Streetwear, collectables, bowl drops, and archived TakeOver capsules. Live pieces move fast; loyalty members see the next signal first.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/loyalty/" className="btn-neon inline-flex items-center justify-center rounded-md px-8 py-3 text-[12px] uppercase tracking-[0.2em] font-semibold">
              Join Early Access
            </Link>
            <Link href="/drops/" className="btn-neon-outline inline-flex items-center justify-center rounded-md border border-white/30 px-8 py-3 text-[12px] uppercase tracking-[0.2em] font-semibold text-white/80">
              Drop Stories
            </Link>
          </div>
        </div>
      </header>

      <section className="section-padding cyber-page-section merch-purple-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 mb-10">
            <div className="flex flex-wrap gap-3">
              {merchCategories.map((cat) => (
                <button key={cat} onClick={() => setCategory(cat)} className={`merch-filter-chip ${category === cat ? "active" : ""}`}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {merchStatuses.map((state) => (
                <button key={state} onClick={() => setStatus(state)} className={`merch-status-chip ${status === state ? "active" : ""}`}>
                  {state}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <StaggerContainer key={`${category}-${status}`} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item) => (
                <motion.article key={item.id} variants={staggerChildScale} className="group cyber-card merch-card overflow-hidden img-cyber-hover">
                  <div className="aspect-[4/3] overflow-hidden -mx-6 -mt-6 mb-6 relative bg-black">
                    <OptimizedImage src={item.image} alt={item.name} width={800} height={600} className="w-full h-full object-cover opacity-90" />
                    <span className="absolute top-3 left-3 bg-black/80 text-white border border-white/20 px-2 py-1 text-[10px] uppercase tracking-[0.13em]">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/35 mb-2">{item.category} / {item.dropDate}</p>
                  <h2 className="font-serif text-2xl font-bold mb-3 text-white">{item.name}</h2>
                  <p className="text-white/52 text-sm leading-relaxed mb-5">{item.description}</p>
                  <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                    <div>
                      <p className="text-lg font-bold text-white">R{item.price}</p>
                      <p className="text-[10px] uppercase tracking-[0.12em] text-white/35">{item.variants}</p>
                    </div>
                    <Link href={item.status === "Coming Soon" ? "/loyalty/" : "/drops/"} className="text-xs uppercase tracking-[0.15em] font-semibold text-fuchsia-300 hover:text-white">
                      {item.ctaLabel}
                    </Link>
                  </div>
                </motion.article>
              ))}
            </StaggerContainer>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
