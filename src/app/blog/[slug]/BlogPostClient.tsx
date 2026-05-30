"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts, getPostBySlug } from "../../lib/blog";
import { MotionSection } from "../../components/Motion";

export default function BlogPostClient({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-pp-tertiary">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-pp-on-surface mb-4">Post Not Found</h1>
          <Link href="/blog/" className="text-white hover:underline">← Back to Journal</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <header className="bg-pp-primary text-pp-on-primary py-20 sm:py-24 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white uppercase tracking-[0.2em] text-xs font-semibold mb-4"
          >
            {post.date}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-bold mb-6"
          >
            {post.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-pp-on-primary/60 text-lg max-w-2xl mx-auto"
          >
            {post.excerpt}
          </motion.p>
        </div>
      </header>

      <article className="section-padding bg-pp-tertiary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <MotionSection>
            <div className="rounded-2xl overflow-hidden mb-10">
              <img
                src={post.img}
                alt={post.alt}
                className="w-full h-auto object-cover"
                loading="eager"
                width={800}
                height={450}
              />
            </div>
          </MotionSection>
          <MotionSection delay={0.1}>
            <div
              className="prose prose-lg max-w-none text-pp-primary-60 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </MotionSection>
          <MotionSection delay={0.2}>
            <div className="mt-12 pt-8 border-t border-pp-primary-10">
              <Link
                href="/blog/"
                className="text-white hover:text-white-light transition-colors font-medium"
              >
                ← Back to The Journal
              </Link>
            </div>
          </MotionSection>

          <div className="mt-16">
            <h3 className="font-serif text-2xl font-bold text-pp-on-surface mb-6">
              More from the Journal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .filter((p) => p.slug !== slug)
                .slice(0, 3)
                .map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}/`}
                    className="group block card overflow-hidden"
                  >
                    <div className="aspect-[16/10] overflow-hidden rounded-xl -mx-6 -mt-6 mb-4">
                      <img
                        src={related.img}
                        alt={related.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        width={400}
                        height={250}
                      />
                    </div>
                    <p className="text-xs text-white font-semibold tracking-wider mb-1">
                      {related.date}
                    </p>
                    <h4 className="font-serif text-base font-semibold text-pp-on-surface group-hover:text-white transition-colors duration-300">
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
