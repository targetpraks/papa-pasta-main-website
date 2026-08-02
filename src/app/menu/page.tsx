"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MotionSection, StaggerContainer, staggerChildScale } from "../components/Motion";
import OptimizedImage from "../components/OptimizedImage";
import {
  defaultMenuFacets,
  dishMatchesFacets,
  menuDishes,
  menuDishFacets,
  menuFacetGroups,
  type FacetKey,
} from "../../lib/menu";

export default function MenuPage() {
  const [facets, setFacets] = useState(defaultMenuFacets);
  const hasActiveFacets = Object.values(facets).some((value) => value !== "All");
  const filtered = menuDishes.filter((dish) => dishMatchesFacets(dish, facets));

  const setFacet = (key: FacetKey, value: string) => {
    setFacets((current) => ({ ...current, [key]: value }));
  };

  return (
    <>
      <header className="cyber-page-hero bg-black text-white min-h-[20vh] flex items-center py-8 sm:py-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-cyan-300 uppercase tracking-[0.2em] text-[11px] font-semibold mb-3">
            The Menu
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl font-bold mb-3">
            32 Core Dishes. <span className="neon-text-gradient">Carb Hard</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-white/58 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            Max Out your Taste Buds! Choose your Style!
          </motion.p>
        </div>
      </header>

      <section className="section-padding cyber-page-section menu-appetite-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection className="cyber-panel menu-filter-panel mx-auto mb-10 max-w-6xl p-4 sm:p-5">
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-300">Food Filters</p>
                <p className="mt-1 text-sm text-white/65">
                  Filter by sauce family, protein, cheese, heat level, and dietary style.
                </p>
              </div>
              <button
                onClick={() => setFacets(defaultMenuFacets)}
                className={`w-fit rounded-sm border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] transition-all ${
                  hasActiveFacets
                    ? "border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-black hover:shadow-[0_0_28px_rgba(255,95,31,0.42)]"
                    : "border-white/10 text-white/40"
                }`}
                disabled={!hasActiveFacets}
              >
                Clear Food Filters
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {menuFacetGroups.map((group) => (
                <div key={group.key}>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/65">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.options.map((option) => {
                      const isSelected = facets[group.key] === option;

                      return (
                        <button
                          key={option}
                          onClick={() => setFacet(group.key, option)}
                          className={`menu-filter-chip ${isSelected ? "active" : ""}`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/65">
              Showing <span className="text-orange-300">{filtered.length}</span> of {menuDishes.length} dishes
            </p>
          </MotionSection>

          {filtered.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((d) => (
                <motion.div
                  key={d.name + d.category}
                  variants={staggerChildScale}
                  className="group cyber-card menu-card overflow-hidden"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <OptimizedImage src={d.img} alt={d.name} width={800} height={600} className="w-full h-full object-cover img-cyber-hover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded bg-white/5 text-white/65 border border-white/15">{d.category}</span>
                      {d.tag && (
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded bg-orange-400/10 text-orange-300 border border-orange-300/35">{d.tag}</span>
                      )}
                    </div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-serif text-lg font-semibold text-white">{d.name}</h3>
                      <span className="font-bold text-orange-300 drop-shadow-[0_0_12px_rgba(255,95,31,0.55)]">{d.price}</span>
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">{d.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                      {Object.entries(menuDishFacets[d.name]).filter(([key]) => key !== "sauce").map(([key, value]) => (
                        <span key={key} className="rounded border border-white/12 bg-white/5 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.13em] text-white/60">
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          ) : (
            <MotionSection className="cyber-panel mx-auto max-w-xl p-8 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">No Match</p>
              <h2 className="mt-3 font-serif text-2xl font-bold text-white">No pasta fits that signal yet.</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Try clearing one food filter or switching sauce families.
              </p>
            </MotionSection>
          )}

          <MotionSection className="mt-12 text-center">
            <div className="cyber-panel p-8 inline-block">
              <p className="text-white/65 text-sm mb-3">Prices are estimated. Final menu and pricing set at launch.</p>
              <p className="text-white/70 text-sm">
                <span className="font-semibold text-white">Dietary info:</span> Vegetarian, halal and gluten-free options available.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>
    </>
  );
}
