"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { loyaltyBenefits, loyaltyTiers } from "../../lib/loyalty";
import { StaggerContainer, staggerChildScale } from "../components/Motion";

export default function LevelUpPage() {
  return (
    <>
      <header className="cyber-page-hero loyalty-gold-hero relative overflow-hidden bg-black text-white min-h-[20vh] flex items-center py-8 sm:py-10 px-4 sm:px-6 lg:px-8 hero-grid-bg">
        <div className="loyalty-gold-hero-glow absolute inset-0" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto w-full">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="glitch-text font-serif text-3xl sm:text-4xl font-bold mb-3 leading-none" data-text="Level Up">
            <span className="loyalty-gold-text">Level Up</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-white/55 max-w-xl text-sm sm:text-base leading-relaxed mb-5">
            The loyalty layer for pasta orders, merch drops, birthday rewards, new-store invites, and collection previews.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:hello@papapasta.co.za?subject=Level%20Up%20Waitlist" className="loyalty-primary-action inline-flex items-center justify-center rounded-md px-8 py-3 text-[12px] uppercase tracking-[0.2em] font-semibold">
              Join Waitlist
            </a>
            <Link href="/merch/" className="loyalty-secondary-action inline-flex items-center justify-center rounded-md border px-8 py-3 text-[12px] uppercase tracking-[0.2em] font-semibold">
              Browse Drops
            </Link>
          </div>
        </div>
      </header>

      <section className="section-padding cyber-page-section loyalty-gold-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div>
            <div className="line-accent mb-4" />
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-6 text-white">One account across the whole Papa Pasta signal.</h2>
            <div className="space-y-4">
              {loyaltyBenefits.map((benefit) => (
                <p key={benefit} className="loyalty-benefit text-white/64 leading-relaxed border-l-2 pl-4">
                  {benefit}
                </p>
              ))}
            </div>
          </div>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4" staggerDelay={0.08}>
            {loyaltyTiers.map((tier) => (
              <motion.article key={tier.name} variants={staggerChildScale} className="cyber-card loyalty-card p-6 min-h-[300px]" style={{ "--tier-glow": tier.glow } as CSSProperties}>
                <span className="loyalty-tier-signal block h-1.5 w-14 mb-6" />
                <h3 className="font-serif text-3xl font-bold mb-2 text-white">{tier.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/35 mb-5">{tier.threshold}</p>
                <ul className="space-y-3 text-sm text-white/58">
                  {tier.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
