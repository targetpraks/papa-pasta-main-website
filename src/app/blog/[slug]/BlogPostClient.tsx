"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts, getPostBySlug } from "../../lib/blog";
import { MotionSection } from "../../components/Motion";
import OptimizedImage from "../../components/OptimizedImage";

/* ───────────────────────────────────────────────
   SIMPLE HTML SANITIZER — strips scripts and events
   ─────────────────────────────────────────────── */
function sanitizeHtml(raw: string | undefined): string {
  if (!raw) return "";
  return raw
    .replace(/<script\b[^<]*<\/script>/gi, "")
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, "");
}

export default function BlogPostClient({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/drops/" className="text-lime-300 hover:text-white">Back to Drops</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <header className="cyber-page-hero bg-black text-white min-h-[20vh] flex items-center py-8 sm:py-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lime-300 uppercase tracking-[0.2em] text-xs font-semibold mb-4"
          >
            {post.date}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl font-bold mb-4"
          >
            {post.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/58 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
          >
            {post.excerpt}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-lime-300 text-[11px] uppercase tracking-[0.18em] mt-5"
          >
            {post.category}{post.dropMeta ? ` / ${post.dropMeta}` : ""}
          </motion.p>
        </div>
      </header>

      <article className="section-padding cyber-page-section drops-green-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <MotionSection>
            <div className="img-cyber-hover rounded-md overflow-hidden mb-10 border border-lime-300/30 shadow-[0_0_34px_rgba(57,255,20,0.18)]">
              <OptimizedImage
                src={post.img}
                alt={post.alt}
                className="w-full h-auto object-cover"
                loading="eager"
                width={800}
                height={450}
                priority
              />
            </div>
          </MotionSection>
          <MotionSection delay={0.1}>
            <div
              className="prose prose-invert prose-lg max-w-none leading-relaxed text-white/64"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }}
            />
          </MotionSection>
          <MotionSection delay={0.2}>
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                <Link
                  href="/drops/"
                  className="text-lime-300 hover:text-white transition-colors font-medium"
                >
                  Back to Drops & Journal
                </Link>
                {post.ctaHref.startsWith("http") ? (
                  <a href={post.ctaHref} target="_blank" rel="noopener noreferrer" className="btn-neon inline-flex w-fit items-center rounded-md px-6 py-2.5 text-[12px] uppercase tracking-[0.2em] font-semibold">
                    {post.ctaLabel}
                  </a>
                ) : (
                  <Link href={post.ctaHref} className="btn-neon inline-flex w-fit items-center rounded-md px-6 py-2.5 text-[12px] uppercase tracking-[0.2em] font-semibold">
                    {post.ctaLabel}
                  </Link>
                )}
              </div>
            </div>
          </MotionSection>

          <div className="mt-16">
            <h3 className="font-serif text-2xl font-bold text-white mb-6">
              More from the Journal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .filter((p) => p.slug !== slug)
                .slice(0, 3)
                .map((related) => (
                  <Link
                    key={related.slug}
                    href={`/drops/${related.slug}/`}
                    className="group block cyber-card drops-card overflow-hidden img-cyber-hover"
                  >
                    <div className="aspect-[16/10] overflow-hidden rounded-md -mx-6 -mt-6 mb-4">
                      <OptimizedImage
                        src={related.img}
                        alt={related.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        width={400}
                        height={250}
                      />
                    </div>
                    <p className="text-xs text-lime-300 font-semibold tracking-wider mb-1">
                      {related.category} / {related.date}
                    </p>
                    <h4 className="font-serif text-base font-semibold text-white group-hover:text-lime-300 transition-colors duration-300">
                      {related.title}
                    </h4>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
