"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-xl rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-10 sm:p-14"
      >
        <div className="line-accent-neon mx-auto mb-6" />
        <h1 className="font-serif text-4xl sm:text-6xl font-bold mb-3 tracking-tight">
          <span className="neon-text-gradient">404</span>
        </h1>
        <p className="text-white/40 text-lg mb-8 leading-relaxed">
          This page is undercooked. It does not exist yet, or it has been retired.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/menu/"
            className="btn-neon inline-flex items-center rounded-md px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold transition-all duration-300"
          >
            Choose a Pasta
          </Link>
          <Link
            href="/"
            className="btn-neon-outline inline-flex items-center rounded-md border border-white/30 px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>

        {/* Minimal ambient glow */}
        <motion.div
        className="mt-10 w-2 h-2 rounded-full bg-pp-neon-pink"
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
