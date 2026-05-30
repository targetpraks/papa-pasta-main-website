"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  MotionSection,
  StaggerContainer,
  staggerChild,
  staggerChildScale,
  ClipReveal,
} from "./components/Motion";
import ColorReveal from "./components/ColorReveal";
import { menuItems, menuFilters } from "../lib/menu";
import { merchItems, merchCategories } from "../lib/merch";
import { bowls, currentSeasonBowl } from "../lib/bowls";
import { blogPosts } from "../lib/blog";

/* ─────────────────────────────────────────────────────────────────────────────
   HERO — Full-bleed pasta carousel with floating text overlay
   ───────────────────────────────────────────────────────────────────────────── */
function Hero() {
  const [current, setCurrent] = useState(0);

  const pastaImages = [
    { src: "/images/menu-core-8-dishes.png", alt: "Fresh pasta dishes" },
    { src: "/images/menu-sauce-production.png", alt: "Sauce production" },
    { src: "/images/menu-pasta-shape-pairing.png", alt: "Pasta shapes" },
    { src: "/images/product-range.png", alt: "Product range" },
    { src: "/images/artisan-pkg-01-die-cut-character.png", alt: "Artisan packaging" },
    { src: "/images/packaging-base-bw.png", alt: "Packaging" },
  ];

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % pastaImages.length);
  }, [pastaImages.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + pastaImages.length) % pastaImages.length);
  }, [pastaImages.length]);

  /* auto-advance every 4s */
  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end justify-center overflow-hidden bg-black"
      aria-label="Hero"
    >
      {/* ── Full-bleed image carousel ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={pastaImages[current].src}
            alt={pastaImages[current].alt}
            className="absolute inset-0 w-full h-full object-cover grayscale"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Dark overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
      </div>

      {/* ── Floating navigation arrows ── */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-black/50 text-white flex items-center justify-center transition-all duration-300 hover:border-white hover:bg-white hover:text-black hover:scale-110 active:scale-95 backdrop-blur-sm"
        aria-label="Previous image"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-black/50 text-white flex items-center justify-center transition-all duration-300 hover:border-white hover:bg-white hover:text-black hover:scale-110 active:scale-95 backdrop-blur-sm"
        aria-label="Next image"
      >
        →
      </button>

      {/* ── Thumbnail strip ── */}
      <div className="absolute bottom-28 sm:bottom-32 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3">
        {pastaImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`relative w-14 h-9 sm:w-20 sm:h-12 rounded overflow-hidden border-2 transition-all duration-300 ${
              i === current
                ? "border-white scale-110 opacity-100"
                : "border-white/20 opacity-40 hover:opacity-80 hover:border-white/50"
            }`}
            aria-label={`View ${img.alt}`}
          >
            <img src={img.src} alt="" className="w-full h-full object-cover grayscale" />
          </button>
        ))}
      </div>

      {/* ── Slide counter ── */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-white/40 text-[11px] uppercase tracking-[0.2em] font-semibold z-20">
        {String(current + 1).padStart(2, "0")} / {String(pastaImages.length).padStart(2, "0")}
      </div>

      {/* ── Hero text overlay (bottom) — with color-reveal on hover ── */}
      <ColorReveal className="w-full" revealSize={250}>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 border border-white/20 text-white/50 text-[11px] uppercase tracking-[0.2em] font-semibold rounded-sm">
            Crafted Daily — South Africa
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="font-serif font-bold mb-4 sm:mb-6 text-6xl sm:text-8xl lg:text-[160px] tracking-[-0.04em] leading-[0.85] uppercase text-white"
        >
          <span className="neon-text-gradient block">Pasta</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-white/50 text-lg sm:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-[1.7]"
        >
          Fresh handmade pasta. No compromises. No shortcuts. Just obsession,
          built from scratch in our central kitchen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/menu/"
            className="btn-neon inline-flex items-center rounded-md bg-black px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold text-white transition-all duration-300"
          >
            Find Your Pasta
          </Link>
          <a
            href="https://www.ubereats.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-outline inline-flex items-center rounded-md border-2 border-white/30 text-white/80 px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold transition-all duration-300"
          >
            Order Now
          </a>
        </motion.div>
      </div>
      </ColorReveal>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="w-[2px] h-10 bg-gradient-to-b from-white/60 to-transparent"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   FIND YOUR PASTA (Menu Discovery)
   ───────────────────────────────────────────────────────────────────────────── */
function FindYourPasta() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? menuItems
      : menuItems.filter((d) => d.tags.includes(activeFilter));

  const heroDish = menuItems.find((d) => d.seasonal);
  const gridItems = filtered.filter((d) => d.id !== heroDish?.id);

  return (
    <section
      id="menu"
      className="section-padding bg-white text-black"
      aria-labelledby="menu-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="text-center mb-14">
          <div className="line-accent mx-auto mb-4" />
          <p className="text-black/40 uppercase tracking-[0.2em] text-[12px] font-semibold mb-3">
            The Menu
          </p>
          <h2
            id="menu-heading"
            className="font-serif text-3xl sm:text-[48px] font-bold leading-[1.1] tracking-[-0.02em]"
          >
            Find Your Right Pasta
          </h2>
          <p className="text-black/40 mt-4 max-w-xl mx-auto leading-[1.65]">
            Filter by craving. Every shape, every sauce, every topping is
            deliberate.
          </p>
        </MotionSection>

        {/* Filter chips */}
        <MotionSection className="flex flex-wrap justify-center gap-3 mb-12">
          {menuFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`filter-chip ${activeFilter === f ? "active" : ""}`}
            >
              {f}
            </button>
          ))}
        </MotionSection>

        {/* Hero Seasonal Card */}
        {heroDish && (
          <MotionSection className="mb-12">
            <div className="relative rounded-2xl overflow-hidden bg-black text-white grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[16/10] lg:aspect-auto">
                  <img
                    src={heroDish.image}
                    alt={heroDish.name}
                    className="w-full h-full object-cover opacity-80"
                  />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="badge badge-limited inline-block mb-4 w-fit">
                  Hero Seasonal
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
                  {heroDish.name}
                </h3>
                <p className="text-white/60 leading-[1.65] mb-4">
                  {heroDish.description}
                </p>
                <div className="flex items-center gap-2 mb-6">
                  {heroDish.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-[0.1em] px-2 py-1 rounded border border-white/20 text-white/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="text-xl font-bold">R{heroDish.price}</div>
              </div>
            </div>
          </MotionSection>
        )}

        {/* Dish Grid */}
        <AnimatePresence mode="wait">
          <StaggerContainer
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {gridItems.map((d) => (
              <motion.div
                key={d.id}
                variants={staggerChildScale}
                className="group card img-hover-lift"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl -mx-6 -mt-6 mb-6">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {d.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] uppercase tracking-[0.1em] px-2 py-0.5 rounded bg-black/5 text-black/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-[22px] font-semibold mb-2">
                  {d.name}
                </h3>
                <p className="text-black/40 text-sm leading-[1.6] mb-3">
                  {d.description}
                </p>
                <div className="text-lg font-bold">R{d.price}</div>
              </motion.div>
            ))}
          </StaggerContainer>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   ARTISANAL PASTA
   ───────────────────────────────────────────────────────────────────────────── */
function ArtisanalSection() {
  return (
    <section
      id="artisanal"
      className="section-padding bg-black text-white"
      aria-labelledby="artisanal-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="line-accent-neon mb-4" />
              <p className="text-white/40 uppercase tracking-[0.2em] text-[12px] font-semibold mb-3">
                Take Home the Craft
              </p>
              <h2
                id="artisanal-heading"
                className="font-serif text-3xl sm:text-[48px] font-bold mb-6 leading-[1.1] tracking-[-0.02em]"
              >
                Artisanal Pasta
              </h2>
              <p className="text-white/50 mb-6 leading-[1.65]">
                Fresh pasta is not just for restaurants. We package the same
                dough, the same cuts, the same obsession -- so you can turn
                your kitchen into a pasta bar.
              </p>
              <p className="text-white/50 mb-8 leading-[1.65]">
                From die-cut characters for kids to premium kraft sleeves for
                gifts, every product is a statement.
              </p>
              <Link
                href="/artisanal/"
                className="btn-neon inline-flex items-center rounded-md bg-black px-6 py-2.5 text-[12px] uppercase tracking-[0.2em] font-semibold text-white transition-colors duration-300"
              >
                Explore the Range
              </Link>
            </div>
            <ClipReveal direction="right" delay={0.2}>
              <img
                src="/images/artisan-pkg-05-retail-shelf-display.png"
                alt="Artisanal pasta packaging on retail shelf"
                className="rounded-2xl shadow-2xl shadow-white/10 w-full"
              
              />
            </ClipReveal>
          </div>
        </MotionSection>

        <div className="mt-16">
          <StaggerContainer
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            staggerDelay={0.08}
          >
            {[
              {
                img: "/images/artisan-pkg-01-die-cut-character.png",
                title: "Kids' Characters",
                desc: "Fun shapes. Real ingredients.",
              },
              {
                img: "/images/artisan-pkg-02-colour-range-lineup.png",
                title: "Colour Range",
                desc: "Natural colours. No dyes.",
              },
              {
                img: "/images/artisan-pkg-03-kraft-sleeve.png",
                title: "Kraft Sleeves",
                desc: "Gift-ready premium packaging.",
              },
              {
                img: "/images/artisan-pkg-04-themed-shapes-box.png",
                title: "Themed Boxes",
                desc: "Seasonal drops and events.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerChildScale}
                className="card-dark rounded-xl overflow-hidden img-hover-lift"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-xs font-semibold text-white truncate">
                    {item.title}
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.1em] text-white/30">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   COLLECTABLE BOWLS
   ───────────────────────────────────────────────────────────────────────────── */
function CollectableBowls() {
  return (
    <section
      id="bowls"
      className="section-padding bg-white text-black"
      aria-labelledby="bowls-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="text-center mb-14">
          <div className="line-accent mx-auto mb-4" />
          <p className="text-black/40 uppercase tracking-[0.2em] text-[12px] font-semibold mb-3">
            Seasonal Drops
          </p>
          <h2
            id="bowls-heading"
            className="font-serif text-3xl sm:text-[48px] font-bold leading-[1.1] tracking-[-0.02em]"
          >
            Collectable Bowls
          </h2>
          <p className="text-black/40 mt-4 max-w-xl mx-auto leading-[1.65]">
            Every bowl is a collector's item. Once a season ends, it never
            returns. Limited. Numbered. Obsessed over.
          </p>
        </MotionSection>

        {/* Hero Bowl */}
        <MotionSection className="mb-12">
          <div className="relative rounded-2xl overflow-hidden bg-black text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-square lg:aspect-auto">
                <img
                  src={currentSeasonBowl.image}
                  alt={currentSeasonBowl.name}
                  className="w-full h-full object-cover"
                
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="badge badge-limited inline-block mb-4 w-fit">
                  Current Season
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
                  {currentSeasonBowl.name}
                </h3>
                <p className="text-white/60 leading-[1.65] mb-6">
                  {currentSeasonBowl.description}
                </p>
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-white/40">
                      Claimed: {currentSeasonBowl.claimed} /
                      {currentSeasonBowl.total}
                    </span>
                    <span className="text-white font-bold">
                      {Math.round(
                        (currentSeasonBowl.claimed / currentSeasonBowl.total) *
                          100
                      )}
                      %
                    </span>
                  </div>
                  <div className="bowl-progress">
                    <div
                      className="bowl-progress-bar"
                      style={{
                        width: `${
                          (currentSeasonBowl.claimed /
                            currentSeasonBowl.total) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="btn-neon inline-flex items-center rounded-md bg-black px-6 py-2.5 text-[12px] uppercase tracking-[0.2em] font-semibold text-white transition-colors duration-300">
                    Claim Now
                  </button>
                  <span className="text-white/30 text-sm">
                    {currentSeasonBowl.rarity}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Bowl Grid */}
        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          staggerDelay={0.08}
        >
          {bowls.map((b) => (
            <motion.div
              key={b.id}
              variants={staggerChildScale}
              className="card rounded-xl overflow-hidden img-hover-lift"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={b.image}
                  alt={b.name}
                  className="w-full h-full object-cover"
                
                />
                {b.status === "retired" && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white text-xs uppercase tracking-[0.15em] font-bold rotate-[-15deg]">
                      Retired
                    </span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="text-[10px] uppercase tracking-[0.1em] text-black/30 mb-1">
                  {b.series} -- {b.year}
                </p>
                <p className="text-xs font-semibold text-black truncate">
                  {b.name}
                </p>
                <p className="text-[9px] text-black/30 mt-1">{b.rarity}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MERCHANDISE
   ───────────────────────────────────────────────────────────────────────────── */
function MerchSection() {
  const [cat, setCat] = useState("All");
  const filtered =
    cat === "All"
      ? merchItems
      : merchItems.filter((m) => m.category === cat);

  return (
    <section
      id="merch"
      className="section-padding bg-black text-white"
      aria-labelledby="merch-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="text-center mb-14">
          <div className="line-accent-neon mx-auto mb-4" />
          <p className="text-white/40 uppercase tracking-[0.2em] text-[12px] font-semibold mb-3">
            The Swag
          </p>
          <h2
            id="merch-heading"
            className="font-serif text-3xl sm:text-[48px] font-bold leading-[1.1] tracking-[-0.02em]"
          >
            Merch
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto leading-[1.65]">
            Wear the brand. Gen Z streetwear meets pasta culture. Limited drops.
            No restocks.
          </p>
        </MotionSection>

        {/* Categories */}
        <MotionSection className="flex flex-wrap justify-center gap-3 mb-12">
          {merchCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                cat === c
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/60 border-white/20 hover:border-white/50"
              }`}
            >
              {c}
            </button>
          ))}
        </MotionSection>

        {/* Merch Grid */}
        <AnimatePresence mode="wait">
          <StaggerContainer
            key={cat}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                variants={staggerChildScale}
                className="card-dark rounded-xl overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  
                  />
                  {item.limited && (
                    <span className="absolute top-3 left-3 badge badge-limited text-[9px]">
                      Limited
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-[10px] uppercase tracking-[0.1em] text-white/30 mb-1">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-lg font-semibold mb-2 truncate">
                    {item.name}
                  </h3>
                  <p className="text-white/40 text-sm leading-[1.5] mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">R{item.price}</span>
                    <button className="text-xs uppercase tracking-[0.15em] font-semibold text-white hover:text-white transition-colors">
                      Shop
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   BLOG PREVIEW
   ───────────────────────────────────────────────────────────────────────────── */
function BlogPreview() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section
      className="section-padding bg-white text-black"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <MotionSection>
            <div>
              <div className="line-accent mb-4" />
              <p className="text-black/40 uppercase tracking-[0.2em] text-[12px] font-semibold mb-2">
                The Journal
              </p>
              <h2
                id="blog-heading"
                className="font-serif text-3xl sm:text-[36px] font-bold leading-[1.2] tracking-[-0.01em]"
              >
                Latest from the Blog
              </h2>
            </div>
          </MotionSection>
          <MotionSection>
            <Link
              href="/blog/"
              className="text-sm font-medium text-black underline underline-offset-4 hover:text-white transition-colors duration-300 mt-4 md:mt-0"
            >
              Read all posts &rarr;
            </Link>
          </MotionSection>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div variants={staggerChild} key={post.slug}>
              <Link
                href={`/blog/${post.slug}/`}
                className="group block card overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-xl -mx-6 -mt-6 mb-6">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  
                    width={800}
                    height={500}
                  />
                </div>
                <p className="text-xs text-black/40 mb-2 font-semibold tracking-wider">
                  {post.date}
                </p>
                <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-black/40 text-sm leading-[1.6]">
                  {post.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   FRANCHISE TEASER
   ───────────────────────────────────────────────────────────────────────────── */
function FranchiseTeaser() {
  return (
    <section
      className="section-padding bg-black text-white relative overflow-hidden"
      aria-labelledby="franchise-heading"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MotionSection>
          <div className="line-accent-neon mx-auto mb-4" />
          <p className="text-white/40 uppercase tracking-[0.2em] text-[12px] font-semibold mb-3">
            Franchise
          </p>
          <h2
            id="franchise-heading"
            className="font-serif text-3xl sm:text-[48px] font-bold mb-5 leading-[1.1] tracking-[-0.02em]"
          >
            Own a{" "}
            <span className="neon-text-gradient">Papa Pasta</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto mb-8 leading-[1.65]">
            72 zones. 9 provinces. Every zone gets its own colour crest. Join
            the first dedicated pasta QSR franchise in South Africa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/franchise/"
              className="btn-neon inline-flex items-center rounded-md bg-black px-8 py-3 text-[12px] uppercase tracking-[0.2em] font-semibold text-white transition-colors duration-300"
            >
              See the Opportunity
            </Link>
            <a
              href="https://franchise.papapasta.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-outline inline-flex items-center rounded-md border border-white/30 text-white/80 px-8 py-3 text-[12px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300"
            >
              Express Interest
            </a>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   HOME PAGE
   ───────────────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FindYourPasta />
      <ArtisanalSection />
      <CollectableBowls />
      <MerchSection />
      <BlogPreview />
      <FranchiseTeaser />
    </>
  );
}
