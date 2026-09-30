"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { BlogPost } from "../lib/blog";
import { StaggerContainer, staggerChildScale } from "./Motion";
import OptimizedImage from "./OptimizedImage";

type FeedTheme = "drops" | "news";

interface ThemeTokens {
  metaAccent: string;
  hoverText: string;
  sectionClass: string;
  filterBarClass: string;
  chipClass: string;
  leadCardClass: string;
  gridCardClass: string;
  linkClass: string;
  pillClass: string;
  leadCta: string;
}

const THEME: Record<FeedTheme, ThemeTokens> = {
  drops: {
    metaAccent: "text-lime-300",
    hoverText: "group-hover:text-lime-300",
    sectionClass: "drops-green-section",
    filterBarClass: "drops-green-filter-bar",
    chipClass: "drops-filter-chip",
    leadCardClass: "cyber-card drops-card",
    gridCardClass: "cyber-card feed-card-grid feed-card-grid--drops",
    linkClass: "drops-signal-link",
    pillClass: "feed-pill feed-pill--drops",
    leadCta: "Read the drop",
  },
  news: {
    metaAccent: "text-sky-300",
    hoverText: "group-hover:text-sky-300",
    sectionClass: "news-blue-section",
    filterBarClass: "news-blue-filter-bar",
    chipClass: "news-filter-chip",
    leadCardClass: "cyber-card news-card",
    gridCardClass: "cyber-card feed-card-grid feed-card-grid--news",
    linkClass: "news-read-link",
    pillClass: "feed-pill feed-pill--news",
    leadCta: "Read the story",
  },
};

/**
 * Time-sensitivity badge derived from the post's `urgency`. Evergreen stories
 * (`urgency: "story"`) return null so the badge only appears where it earns its place.
 */
function statusBadge(post: BlogPost): { text: string; live: boolean } | null {
  if (post.badge) return { text: post.badge, live: false };
  if (post.urgency === "drop") return { text: "Live now", live: true };
  if (post.urgency === "launch") return { text: "Launching", live: false };
  return null;
}

interface PostFeedProps {
  /** Posts for this feed — first item becomes the lead article. */
  posts: readonly BlogPost[];
  /** Filter chips, including a leading "All". */
  categories: readonly string[];
  /** Visual theme — drives accent colour, glow, and copy. */
  theme: FeedTheme;
  /** Small uppercase kicker above the title. */
  eyebrow: string;
  /** Feed heading (rendered with the neon gradient). */
  title: string;
  /** One-line description under the heading. */
  subtitle: string;
}

/**
 * Themed listing shared by the Drops and News feeds. Renders a hero, a filter
 * bar, a lead article, and a responsive card grid. Glow is reserved for the
 * lead card and hover states so the visual hierarchy reads clearly.
 */
export default function PostFeed({
  posts,
  categories,
  theme,
  eyebrow,
  title,
  subtitle,
}: PostFeedProps) {
  const [category, setCategory] = useState<string>("All");
  const t = THEME[theme];
  const otherFeed =
    theme === "drops"
      ? { href: "/news/", label: "Looking for brand news & stories? Visit News & Journal" }
      : { href: "/drops/", label: "Looking for the latest drops? Visit Drops" };

  const filtered =
    category === "All" ? posts : posts.filter((post) => post.category === category);
  const lead = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <header className="cyber-page-hero relative overflow-hidden bg-black text-white min-h-[20vh] flex items-center py-8 sm:py-10 px-4 sm:px-6 lg:px-8 hero-grid-bg">
        <div
          className={`absolute inset-0 ${
            theme === "drops"
              ? "bg-[radial-gradient(ellipse_at_70%_25%,rgba(57,255,20,0.12),transparent_40%),radial-gradient(ellipse_at_25%_70%,rgba(255,0,255,0.12),transparent_42%)]"
              : "bg-[radial-gradient(ellipse_at_70%_25%,rgba(0,128,255,0.14),transparent_42%),radial-gradient(ellipse_at_25%_72%,rgba(0,255,255,0.08),transparent_44%)]"
          }`}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-[11px] uppercase tracking-[0.24em] font-semibold mb-3 ${t.metaAccent}`}
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="glitch-text font-serif text-3xl sm:text-4xl font-bold mb-3 leading-none"
            data-text={title}
          >
            <span className="neon-text-gradient">{title}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white/75 max-w-xl text-sm sm:text-base leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>
      </header>

      <section className={`${t.filterBarClass} bg-black text-white py-8 border-b border-white/10 hero-grid-bg`}>
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-3 overflow-x-auto scrollbar-hide"
          role="group"
          aria-label={`Filter ${title} by category`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={category === cat}
              onClick={() => setCategory(cat)}
              className={`${t.chipClass} shrink-0 ${category === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className={`section-padding cyber-page-section ${t.sectionClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {lead && (
            <AnimatePresence mode="wait">
              <motion.article
                key={lead.slug}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                className={`${t.leadCardClass} grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 overflow-hidden text-white`}
              >
                <div className="relative aspect-[16/10] lg:aspect-auto img-cyber-hover">
                  {statusBadge(lead) && (
                    <span className={`${t.pillClass} absolute top-4 left-4 z-10`}>
                      {statusBadge(lead)!.live && <span className="feed-pill-dot" aria-hidden="true" />}
                      {statusBadge(lead)!.text}
                    </span>
                  )}
                  <OptimizedImage
                    src={lead.img}
                    alt={lead.alt}
                    width={1000}
                    height={625}
                    className="w-full h-full object-cover opacity-90"
                    priority
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className={`text-[11px] uppercase tracking-[0.18em] mb-4 ${t.metaAccent}`}>
                    {lead.category} / {lead.date}
                  </p>
                  <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4">{lead.title}</h2>
                  <p className="text-white/75 leading-relaxed mb-5">{lead.excerpt}</p>
                  {lead.dropMeta && (
                    <p className="feed-scarcity text-[11px] uppercase tracking-[0.16em] mb-8">{lead.dropMeta}</p>
                  )}
                  <Link
                    href={`/${lead.section}/${lead.slug}/`}
                    className={`${t.linkClass} inline-flex w-fit items-center rounded-md border px-7 py-3 text-[12px] uppercase tracking-[0.2em] font-semibold`}
                  >
                    {t.leadCta}
                    <span className="sr-only"> — {lead.title}</span>
                  </Link>
                </div>
              </motion.article>
            </AnimatePresence>
          )}

          <AnimatePresence mode="wait">
            <StaggerContainer key={category} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post) => (
                <motion.div variants={staggerChildScale} key={post.slug}>
                  <Link
                    href={`/${post.section}/${post.slug}/`}
                    className={`group block ${t.gridCardClass} overflow-hidden img-cyber-hover`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl -mx-6 -mt-6 mb-6 bg-black">
                      {statusBadge(post) && (
                        <span className={`${t.pillClass} absolute top-3 left-3 z-10`}>
                          {statusBadge(post)!.live && <span className="feed-pill-dot" aria-hidden="true" />}
                          {statusBadge(post)!.text}
                        </span>
                      )}
                      <OptimizedImage
                        src={post.img}
                        alt={post.alt}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <p className={`text-[10px] uppercase tracking-[0.15em] mb-2 ${t.metaAccent}`}>
                      {post.category} / {post.date}
                    </p>
                    <h3 className={`font-serif text-xl font-semibold text-white mb-2 transition-colors duration-300 ${t.hoverText}`}>
                      {post.title}
                    </h3>
                    <p className="text-sm text-white/75 leading-relaxed">{post.excerpt}</p>
                    {post.dropMeta && (
                      <p className="feed-scarcity mt-4 text-[10px] uppercase tracking-[0.15em]">{post.dropMeta}</p>
                    )}
                  </Link>
                </motion.div>
              ))}
            </StaggerContainer>
          </AnimatePresence>

          <div className="mt-16 pt-10 border-t border-white/10 text-center">
            <Link
              href={otherFeed.href}
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white ${t.metaAccent}`}
            >
              {otherFeed.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
