"use client";

import { motion } from "framer-motion";

const contactRoutes = [
  { label: "General", email: "hello@papapasta.co.za", desc: "Customer questions, ordering, stores, and product feedback." },
  { label: "Merch & Drops", email: "hello@papapasta.co.za", desc: "Drop availability, archive pieces, early access, and collection questions." },
  { label: "Press & Media", email: "media@papapasta.co.za", desc: "Brand enquiries, campaigns, launches, and media requests." },
  { label: "Careers", email: "careers@papapasta.co.za", desc: "Store roles, commissary roles, and future team opportunities." },
];

export default function Page() {
  return (
    <>
      <header className="bg-black text-white py-20 sm:py-24 text-center px-4 sm:px-6 lg:px-8 hero-grid-bg">
        <div className="max-w-7xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl sm:text-6xl font-bold mb-4">
            Contact <span className="neon-text-gradient">Papa Pasta</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/55 max-w-2xl mx-auto text-lg">
            Pick the right signal. No fake form queue: each route opens a direct email path.
          </motion.p>
        </div>
      </header>

      <section className="section-padding bg-white text-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {contactRoutes.map((route) => (
            <motion.a key={route.label} href={`mailto:${route.email}?subject=${encodeURIComponent(route.label + " enquiry")}`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group rounded-md border border-black/10 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(0,255,255,0.14)]">
              <p className="text-[10px] uppercase tracking-[0.15em] text-black/35 mb-2">{route.email}</p>
              <h2 className="font-serif text-2xl font-bold mb-3 group-hover:text-cyan-500 transition-colors">{route.label}</h2>
              <p className="text-sm text-black/50 leading-relaxed">{route.desc}</p>
            </motion.a>
          ))}
        </div>
      </section>
    </>
  );
}
