"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { blogCategories, blogPosts } from "../../lib/blog";
import { StaggerContainer, staggerChildScale } from "../components/Motion";
import OptimizedImage from "../components/OptimizedImage";

export default function Page() {
  const [category, setCategory] = useState<(typeof blogCategories)[number]>("All");
  const filtered = category === "All" ? blogPosts : blogPosts.filter((post) => post.category === category);
  const lead = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <header className="cyber-page-hero relative overflow-hidden bg-black text-white min-h-[20vh] flex items-center py-8 sm:py-10 px-4 sm:px-6 lg:px-8 hero-grid-bg">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_25%,rgba(57,255,20,0.12),transparent_40%),radial-gradient(ellipse_at_25%_70%,rgba(255,0,255,0.12),transparent_42%)]" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto w-full">
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="glitch-text font-serif text-3xl sm:text-4xl font-bold mb-3 leading-none" data-text="Drops & Journal">
            <span className="neon-text-gradient">Drops & Journal</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-white/55 max-w-xl text-sm sm:text-base leading-relaxed">
            New store launches, merch drops, collection releases, loyalty updates, menu signals, and the brand stories behind the system.
          </motion.p>
        </div>
      </header>

      <section className="drops-green-filter-bar bg-black text-white py-8 border-b border-white/10 hero-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-3 overflow-x-auto scrollbar-hide">
          {blogCategories.map((cat) => (
            <button key={cat} onClick={() => setCategory(cat)} className={`drops-filter-chip shrink-0 ${category === cat ? "active" : ""}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="section-padding cyber-page-section drops-green-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {lead && (
            <AnimatePresence mode="wait">
              <motion.article key={lead.slug} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} className="cyber-card drops-card grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 overflow-hidden text-white">
                <div className="aspect-[16/10] lg:aspect-auto img-cyber-hover">
                  <OptimizedImage src={lead.img} alt={lead.alt} width={1000} height={625} className="w-full h-full object-cover opacity-90" priority />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-lime-300 mb-4">{lead.category} / {lead.date}</p>
                  <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4">{lead.title}</h2>
                  <p className="text-white/55 leading-relaxed mb-5">{lead.excerpt}</p>
                  {lead.dropMeta && <p className="text-[11px] uppercase tracking-[0.16em] text-white/35 mb-8">{lead.dropMeta}</p>}
                  <Link href={`/drops/${lead.slug}/`} className="drops-signal-link inline-flex w-fit items-center rounded-md border px-7 py-3 text-[12px] uppercase tracking-[0.2em] font-semibold">
                    Open Signal
                  </Link>
                </div>
              </motion.article>
            </AnimatePresence>
          )}

          <AnimatePresence mode="wait">
            <StaggerContainer key={category} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post) => (
                <motion.div variants={staggerChildScale} key={post.slug}>
                  <Link href={`/drops/${post.slug}/`} className="group block cyber-card drops-card overflow-hidden img-cyber-hover">
                    <div className="aspect-[16/10] overflow-hidden rounded-xl -mx-6 -mt-6 mb-6 bg-black">
                      <OptimizedImage src={post.img} alt={post.alt} width={800} height={500} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/35 mb-2">{post.category} / {post.date}</p>
                    <h3 className="font-serif text-xl font-semibold text-white mb-2 group-hover:text-lime-300 transition-colors duration-300">{post.title}</h3>
                    <p className="text-sm text-white/52 leading-relaxed">{post.excerpt}</p>
                    {post.dropMeta && <p className="mt-4 text-[10px] uppercase tracking-[0.15em] text-lime-400">{post.dropMeta}</p>}
                  </Link>
                </motion.div>
              ))}
            </StaggerContainer>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
