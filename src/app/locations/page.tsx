"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MotionSection, StaggerContainer, staggerChild } from "../components/Motion";

export default function Page() {
  return (
    <>
      <header className="bg-pp-primary text-pp-on-primary py-20 sm:py-24 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-pp-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Locations
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-bold mb-4">
            Our <span className="gold-text-gradient">Locations</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-pp-on-primary/60 max-w-2xl mx-auto text-lg">
            Cape Town open now. Every other province coming soon. Find your nearest Papa Pasta.
          </motion.p>
        </div>
      </header>

      <section className="section-padding bg-pp-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <StaggerContainer className="space-y-6">
              {[
                { city: "Cape Town", area: "CBD & Observatory", status: "Open Now", hours: "Mon\u2013Fri 10:00\u201321:00 \u00B7 Sat\u2013Sun 09:00\u201322:00", border: "border-pp-gold" },
                { city: "Johannesburg", area: "Rosebank, Sandton & CBD", status: "Coming Soon", hours: "Expressions of interest open for franchise partners.", border: "border-pp-gold/30" },
                { city: "Durban", area: "Umhlanga & Ballito", status: "Coming Soon", hours: "Warm coastal cities are next on the expansion map.", border: "border-pp-gold/30" },
                { city: "Gqeberha (PE)", area: "Walmer & Beachfront", status: "Coming Soon", hours: "Eastern Cape expansion targeted for Q4 2026.", border: "border-pp-gold/30" },
              ].map((loc, i) => (
                <motion.div key={loc.city} variants={staggerChild}
                  className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 ${loc.border} hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif text-xl font-bold text-pp-on-surface">{loc.city}</h3>
                    <span className={`text-[10px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded ${
                      loc.status === "Open Now" ? "bg-pp-gold/15 text-pp-gold-dark" : "bg-pp-primary-60/10 text-pp-primary-60/50"
                    }`}>{loc.status}</span>
                  </div>
                  <p className="text-sm text-pp-primary-60/70 mt-1">{loc.area}</p>
                  <p className="text-sm text-pp-primary-60/50 mt-2">{loc.hours}</p>
                </motion.div>
              ))}
            </StaggerContainer>

            <MotionSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
                <img src="/images/brand-image-28.png" alt="Location map" width={800} height={600} className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 right-4 bg-pp-primary/90 backdrop-blur rounded-lg px-4 py-3">
                  <p className="text-xs text-pp-on-primary/60">
                    Interactive map coming soon. Contact us for exact addresses for the Cape Town stores.
                  </p>
                </div>
              </div>
            </MotionSection>
          </div>
          <MotionSection className="mt-10 text-center">
            <Link href="/franchise/" className="btn-gold-glow inline-flex items-center rounded-md bg-pp-gold px-6 py-2.5 text-sm font-semibold text-pp-on-surface hover:bg-pp-gold-light transition-colors duration-300">
              Own a Store in Your City
            </Link>
          </MotionSection>
        </div>
      </section>
    </>
  );
}