"use client";

import { motion } from "framer-motion";
import { MotionSection, StaggerContainer, staggerChildScale } from "../components/Motion";

export default function Page() {
  return (
    <>
      <header className="bg-pp-primary text-pp-on-primary py-20 sm:py-24 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-pp-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            The Journal
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-bold mb-4">
            The <span className="gold-text-gradient">Journal</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-pp-on-primary/60 max-w-2xl mx-auto text-lg">
            Seasonal drops, sauce science, and the stories behind the brand. The Papa Pasta journal.
          </motion.p>
        </div>
      </header>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Why Shape Matters: The Golden Blend", date: "May 2026", excerpt: "Flat noodles hold cream. Tubes trap meat. The right shape makes or breaks a sauce.", img: "/images/menu-pasta-shape-pairing.png" },
              { title: "Inside the Commissary", date: "April 2026", excerpt: "Behind-the-scenes at the central kitchen powering every bowl across the network.", img: "/images/central-kitchen-concept.png" },
              { title: "The Art of the Crest", date: "March 2026", excerpt: "How Papa Pasta gives every franchise a unique visual identity through colour story.", img: "/images/colour-story-colour-wheel.png" },
              { title: "TakeOver 101: Partnership Model", date: "Feb 2026", excerpt: "How brands like MTN, Vodacom and Nedbank light up a Papa Pasta for a day.", img: "/images/takeover-vodacom.png" },
              { title: "Papa Pops: The Snack That Surprised Everyone", date: "Jan 2026", excerpt: "From test kitchen to fan favourite. The origin story of our crunchy pasta bites.", img: "/images/papa-pops-peri-peri.png" },
              { title: "Franchise Forecast: Why Pasta Now", date: "Dec 2025", excerpt: "Market data, capital requirements and the first-mover gap in South African fast-casual.", img: "/images/franchise-store-concept.png" },
            ].map((post) => (
              <motion.a variants={staggerChildScale} key={post.title} href="/blog/" className="group block bg-pp-tertiary rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-500 border border-pp-primary/5">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-pp-gold font-semibold tracking-wider mb-2">{post.date}</p>
                  <h3 className="font-serif text-lg font-semibold text-pp-on-surface mb-2 group-hover:text-pp-gold transition-colors duration-300">{post.title}</h3>
                  <p className="text-sm text-pp-primary-60/50 leading-relaxed">{post.excerpt}</p>
                </div>
              </motion.a>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}