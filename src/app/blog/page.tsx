"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "../../lib/blog";
import { MotionSection, StaggerContainer, staggerChildScale } from "../components/Motion";

export default function Page() {
  return (
    <>
      <header className="bg-pp-primary text-pp-on-primary py-20 sm:py-24 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-white uppercase tracking-[0.2em] text-xs font-semibold mb-4">
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

      <section className="section-padding bg-pp-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div variants={staggerChildScale} key={post.slug}>
                <Link href={`/blog/${post.slug}/`} className="group block bg-pp-surface-elevated rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-500 border border-pp-primary/5">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={post.img} alt={`Cover image for ${post.title}`} width={800} height={500} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-white font-semibold tracking-wider mb-2">{post.date}</p>
                    <h3 className="font-serif text-lg font-semibold text-pp-on-surface mb-2 group-hover:text-white transition-colors duration-300">{post.title}</h3>
                    <p className="text-sm text-pp-primary-60/50 leading-relaxed">{post.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
