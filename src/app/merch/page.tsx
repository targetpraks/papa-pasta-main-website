"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function MerchPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <div className="line-accent-neon mx-auto mb-6" />
        <h1 className="font-serif text-5xl sm:text-7xl font-bold mb-4 tracking-tight">
          <span className="neon-text-gradient">Merch</span>
        </h1>
        <p className="text-white/40 text-lg mb-8 leading-relaxed">
          Coming soon. Streetwear drops, collectable enamel pins, and limited edition capsule collections.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="btn-neon inline-flex items-center rounded-md px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold transition-all duration-300"
          >
            Back to Home
          </Link>
          <a
            href="https://franchise.papapasta.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-outline inline-flex items-center rounded-md border border-white/30 px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold transition-all duration-300"
          >
            Franchise Info
          </a>
        </div>
      </motion.div>

      {/* Minimal pulse animation to signal "still alive" */}
      <motion.div
        className="mt-12 w-2 h-2 rounded-full bg-pp-neon-pink"
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
