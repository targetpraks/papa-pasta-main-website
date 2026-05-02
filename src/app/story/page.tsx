"use client";

import { motion } from "framer-motion";
import { MotionSection, StaggerContainer, staggerChild } from "../components/Motion";

export default function StoryPage() {
  return (
    <>
      <header className="bg-pp-navy text-pp-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-pp-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">
            Our Story
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-bold mb-6">
            It Started With One Question
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-pp-cream/80 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Why does South Africa have 2,500+ chicken outlets — and not a single nationwide pasta QSR franchise?
          </motion.p>
        </div>
      </header>

      {/* The Gap */}
      <section className="section-padding bg-pp-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <div className="prose prose-lg max-w-none text-pp-charcoal">
              <blockquote className="border-l-4 border-pp-gold pl-6 italic text-xl leading-relaxed mb-8">
                “South Africa serves chicken, burgers and bunny chow at every corner.
                But nobody has built a fast, affordable, consistent pasta brand for the masses.
                We decided to fill that gap — and build a system that scales without losing soul.”
              </blockquote>
            </div>
          </MotionSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
            <MotionSection>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-pp-navy/5">
                <div className="text-pp-gold text-3xl font-bold mb-2">2,500+</div>
                <p className="text-sm font-semibold text-pp-navy mb-1">Chicken outlets in SA</p>
                <p className="text-xs text-pp-charcoal/50">Source: industry estimates, 2024</p>
              </div>
            </MotionSection>
            <MotionSection delay={0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-pp-navy/5">
                <div className="text-pp-gold text-3xl font-bold mb-2">0</div>
                <p className="text-sm font-semibold text-pp-navy mb-1">Dedicated pasta QSR franchises</p>
                <p className="text-xs text-pp-charcoal/50">Until Papa Pasta</p>
              </div>
            </MotionSection>
          </div>
        </div>
      </section>

      {/* The System */}
      <section className="section-padding bg-pp-navy text-pp-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection className="text-center mb-16">
            <p className="text-pp-gold uppercase tracking-widest text-sm font-semibold mb-2">The Engine</p>
            <h2 className="text-pp-white font-serif text-3xl sm:text-5xl font-bold">A Central Kitchen That Powers It All</h2>
            <p className="text-pp-cream/60 max-w-2xl mx-auto mt-4">
              Every store is fed by one commissary. Every batch of pasta is extruded fresh.
              Every sauce is simmered for hours. This is obsession at scale.
            </p>
          </MotionSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Extrusion", desc: "Fresh pasta extruded daily using imported Italian dies. Shapes matched to specific sauces for optimal sauce retention." },
              { step: "02", title: "Sauce Lab", desc: "The Golden Blend: 8 core sauces slow-simmered with precise spice blends. Seasonal rotations keep the menu alive." },
              { step: "03", title: "Cold Chain", desc: "Sauces blast-chilled and vacuum-packed. Pasta portioned and sealed. HACCP-certified logistics guarantee freshness." },
              { step: "04", title: "The Store", desc: "40 m² footprint. No kitchen needed — just heat, toss and serve. 4-minute ticket time. 90% of Cape Town's rental costs." },
            ].map((item) => (
              <MotionSection key={item.step}>
                <div className="bg-pp-navy-light/40 rounded-2xl p-6 border border-pp-navy-light text-center">
                  <div className="text-pp-gold font-bold text-sm mb-3">Step {item.step}</div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-pp-cream/60 leading-relaxed">{item.desc}</p>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Golden Balance */}
      <section className="section-padding bg-pp-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MotionSection>
            <img src="/images/menu-sauce-production.png" alt="Sauce production" className="rounded-2xl shadow-lg w-full" />
          </MotionSection>

          <MotionSection delay={0.2}>
            <p className="text-pp-gold uppercase tracking-widest text-sm font-semibold mb-2">The Menu Philosophy</p>
            <h2 className="text-pp-navy font-serif text-3xl sm:text-4xl font-bold mb-6">The Golden Balance</h2>
            <p className="text-pp-charcoal/70 mb-4 leading-relaxed">
              Our menu is built on a simple but radical idea: every shape should carry its ideal sauce.
              Flat noodles hold cream. Tubes trap chunky meat. Spirals carry light oils. This is not opinion — it is physics.
            </p>
            <p className="text-pp-charcoal/70 mb-4 leading-relaxed">
              We call it the <strong className="text-pp-navy">Golden Balance</strong>: the precise ratio of carbohydrate
              to sauce to topping that makes a pasta dish satisfying, not heavy.
              Too much sauce = wet. Too little = dry. We hit it every time.
            </p>
            <p className="text-pp-charcoal/70 mb-6 leading-relaxed">
              The core menu stays at 32 dishes — enough variety for daily visits, disciplined enough
              to maintain insane quality. Seasonal specials rotate quarterly so there is always something new.
            </p>
            <a href="/menu/" className="btn-gold-glow inline-flex items-center rounded-md bg-pp-gold px-6 py-2.5 text-sm font-semibold text-pp-navy hover:bg-pp-gold-light transition">
              Explore the Full Menu
            </a>
          </MotionSection>
        </div>
      </section>

      {/* The Colour Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection className="text-center mb-12">
            <p className="text-pp-gold uppercase tracking-widest text-sm font-semibold mb-2">Brand Identity</p>
            <h2 className="text-pp-navy font-serif text-3xl sm:text-4xl font-bold">Navy &amp; Gold. And Every Colour in Between.</h2>
            <p className="text-pp-charcoal/70 max-w-2xl mx-auto mt-4">
              Every store is unique. The Living Crest system gives each franchise a colour identity
              tied to its community — from neon gamer palettes to SA heritage tones.
            </p>
          </MotionSection>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "Founding Crest", img: "/images/bowl-01-founding-crest.png" },
              { title: "Coloured Drops", img: "/images/bowl-02-franchisee-colour-drops.png" },
              { title: "SA Heritage", img: "/images/bowl-03-sa-heritage-series.png" },
              { title: "Neon Gamer", img: "/images/bowl-04-neon-gamer-series.png" },
              { title: "TakeOver", img: "/images/bowl-05-takeover-partner-bowls.png" },
              { title: "Artist Collab", img: "/images/bowl-06-local-artist-collab.png" },
            ].map((v) => (
              <motion.div key={v.title} variants={staggerChild} className="bg-pp-cream rounded-xl overflow-hidden shadow-sm">
                <div className="aspect-square overflow-hidden">
                  <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-3 text-center">
                  <p className="text-xs font-semibold text-pp-navy">{v.title}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA to Franchise */}
      <section className="section-padding bg-pp-navy text-pp-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <MotionSection>
            <h2 className="text-pp-white font-serif text-3xl sm:text-5xl font-bold mb-6">
              Love the Brand? Own One.
            </h2>
            <p className="text-pp-cream/80 mb-8 leading-relaxed">
              We are building a network of passionate operators. Every franchisee gets training,
              crest design, territory exclusivity and real-time access to our commissary system.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/franchise/" className="btn-gold-glow inline-flex items-center rounded-md bg-pp-gold px-8 py-3 text-sm font-semibold text-pp-navy hover:bg-pp-gold-light transition">
                Explore Franchise Opportunities
              </a>
              <a href="/gallery/" className="inline-flex items-center rounded-md border border-pp-gold/40 text-pp-gold px-8 py-3 text-sm font-semibold hover:bg-pp-gold/10 transition">
                See the Gallery
              </a>
            </div>
          </MotionSection>
        </div>
      </section>
    </>
  );
}
