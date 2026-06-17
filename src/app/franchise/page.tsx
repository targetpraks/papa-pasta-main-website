"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const franchisePortal = "https://franchise.papapasta.co.za/";

export default function FranchisePage() {
  return (
    <>
      <header className="relative overflow-hidden bg-black text-white min-h-[78vh] flex items-center px-4 sm:px-6 lg:px-8 hero-grid-bg">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(255,0,128,0.16),transparent_42%),radial-gradient(ellipse_at_20%_70%,rgba(0,255,255,0.1),transparent_40%)]" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto w-full text-center">
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} className="glitch-text font-serif text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-none" data-text="Franchise Portal">
            <span className="neon-text-gradient">Franchise Portal</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-white/55 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed mb-8">
            The main Papa Pasta site is built for customers. Franchise enquiries, territories, investment detail, and applications live on the dedicated franchise website.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={franchisePortal} target="_blank" rel="noopener noreferrer" className="btn-neon inline-flex items-center justify-center rounded-md px-8 py-3 text-[12px] uppercase tracking-[0.2em] font-semibold">
              Open Franchise Site
            </a>
            <Link href="/" className="btn-neon-outline inline-flex items-center justify-center rounded-md border border-white/30 px-8 py-3 text-[12px] uppercase tracking-[0.2em] font-semibold text-white/80">
              Back to Consumer Site
            </Link>
          </div>
        </div>
      </header>

      <section className="section-padding bg-white text-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: "Applications", desc: "Submit formal interest and operator details through the franchise portal." },
            { title: "Territories", desc: "Review zone availability, pipeline status, and expansion information there." },
            { title: "Commercial Detail", desc: "Financial, legal, and operating detail belongs in the controlled franchise environment." },
          ].map((item) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-md border border-black/10 p-6 bg-white">
              <h2 className="font-serif text-2xl font-bold mb-3">{item.title}</h2>
              <p className="text-sm text-black/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
