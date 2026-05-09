"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import {
  MotionSection,
  StaggerContainer,
  staggerChild,
  staggerChildScale,
  ClipReveal,
} from "./components/Motion";
import Link from "next/link";
import { blogPosts } from "./lib/blog";

/* ═══════════════════════════════════════════════
   COUNT-UP HOOK (requestAnimationFrame)
   ═══════════════════════════════════════════════ */
function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const shouldReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (shouldReduce) {
      setCount(end);
      return;
    }
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);
  return count;
}

/* ═══════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pp-primary" aria-label="Hero">
      <div className="absolute inset-0">
        <img src="/images/store-concept-refined-neon-pop.png" alt="Papa Pasta store interior with warm lighting" className="w-full h-full object-cover opacity-40" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-pp-primary via-pp-primary/60 to-pp-primary/40" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} className="mb-6">
          <span className="badge badge-default inline-block">Crafted Daily · Cape Town</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }} className="font-serif font-bold mb-6 text-4xl sm:text-6xl lg:text-[72px] tracking-[-0.02em] leading-[1.05]">
          <span className="text-pp-on-primary">Fresh </span><span className="gold-text-gradient">Handmade</span><br /><span className="text-pp-on-primary">Pasta</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }} className="text-pp-on-primary/70 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-[1.7]">
          Built from scratch in our central kitchen. Sauces simmered for hours. Shapes matched to every sauce. This is food with obsession baked in.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/locations/" className="btn-gold-glow inline-flex items-center rounded-md bg-pp-gold px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold text-pp-black shadow-lg shadow-pp-gold/20 transition-colors duration-300">Find a Store</Link>
          <a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer" className="btn-outline-gold inline-flex items-center rounded-md border border-pp-gold/50 text-pp-gold px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300"><span>Order Now</span></a>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="w-[2px] h-12 bg-gradient-to-b from-pp-gold/60 to-transparent" aria-hidden="true" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SOCIAL PROOF / STATS
   ═══════════════════════════════════════════════ */
function SocialProof() {
  const stores = useCountUp(12);
  const provinces = useCountUp(9);
  return (
    <section className="bg-pp-primary text-pp-on-primary border-t border-b border-pp-gold/10" aria-label="Key statistics">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <StaggerContainer className="flex flex-col sm:flex-row items-center justify-around gap-8 text-center">
          {[{ value: `${stores}+`, label: "Stores Planned" }, { value: provinces, label: "SA Provinces" }, { value: "32", label: "Core Dishes" }, { value: "\u221E", label: "Crest Variations" }].map((stat) => (
            <motion.div key={stat.label} variants={staggerChildScale}>
              <div className="gold-text-gradient font-serif text-3xl sm:text-5xl font-bold mb-1">{stat.value}</div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-pp-on-primary/40">{stat.label}</div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   HERO DISHES
   ═══════════════════════════════════════════════ */
function HeroDishes() {
  const dishes = [
    { title: "Fettuccini Alfredo", desc: "Silky Alfredo sauce over fresh flat ribbons. The comfort classic, perfected.", img: "/images/menu-core-8-dishes.png", alt: "Fettuccini Alfredo pasta dish" },
    { title: "Papa Pops — Cheesy Braai", desc: "Crunchy pasta bites with a braai twist. Snackable perfection.", img: "/images/papa-pops-cheesy-braai.png", alt: "Papa Pops cheesy braai snack" },
    { title: "Golden Blend Sauces", desc: "Slow-simmered sauces designed to cling, coat, and captivate.", img: "/images/menu-sauce-production.png", alt: "Golden blend pasta sauces" },
  ];
  return (
    <section className="section-padding bg-pp-tertiary" aria-labelledby="hero-dishes-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="text-center mb-14">
          <div className="line-accent mx-auto mb-4" />
          <p className="text-pp-gold uppercase tracking-[0.2em] text-[12px] font-semibold mb-3">The Menu</p>
          <h2 id="hero-dishes-heading" className="text-pp-on-surface font-serif text-3xl sm:text-[48px] font-bold leading-[1.1] tracking-[-0.02em]">Hero Dishes</h2>
          <p className="text-pp-primary-60 mt-4 max-w-xl mx-auto leading-[1.65]">Three heroes to start your obsession. Every sauce, shape, and topping is deliberate.</p>
        </MotionSection>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((d) => (
            <motion.div key={d.title} variants={staggerChildScale} className="group card img-hover-lift">
              <div className="aspect-[4/3] overflow-hidden rounded-xl -mx-6 -mt-6 mb-6">
                <img src={d.img} alt={d.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              </div>
              <h3 className="text-pp-on-surface font-serif text-[22px] font-semibold mb-2">{d.title}</h3>
              <p className="text-pp-primary-60 text-sm leading-[1.6]">{d.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
        <MotionSection className="mt-10 text-center">
          <Link href="/menu/" className="btn-outline-gold inline-flex items-center rounded-md border-2 border-pp-primary/10 text-pp-on-surface px-6 py-2.5 text-sm font-medium hover:border-pp-gold hover:text-pp-gold transition-colors duration-300"><span>See Full Menu</span></Link>
        </MotionSection>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   COLOUR STORY
   ═══════════════════════════════════════════════ */
function ColourStory() {
  const variations = [
    { title: "Founding Crest", img: "/images/bowl-01-founding-crest.png", desc: "Where it all began." },
    { title: "Franchisee Drops", img: "/images/bowl-02-franchisee-colour-drops.png", desc: "Every owner gets a story." },
    { title: "SA Heritage", img: "/images/bowl-03-sa-heritage-series.png", desc: "Proudly South African." },
    { title: "Neon Gamer", img: "/images/bowl-04-neon-gamer-series.png", desc: "Born on Twitch and TikTok." },
    { title: "TakeOver Special", img: "/images/bowl-05-takeover-partner-bowls.png", desc: "When brands collide." },
    { title: "Artist Collab", img: "/images/bowl-06-local-artist-collab.png", desc: "Curated by local talent." },
  ];
  return (
    <section className="section-padding bg-pp-primary text-pp-on-primary" aria-labelledby="colour-story-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="line-accent mb-4" />
              <p className="text-pp-gold uppercase tracking-[0.2em] text-[12px] font-semibold mb-3">The Colour Story</p>
              <h2 id="colour-story-heading" className="text-pp-on-primary font-serif text-3xl sm:text-[48px] font-bold mb-6 leading-[1.1] tracking-[-0.02em]">Every Franchise Gets a Crest</h2>
              <p className="text-pp-on-primary/60 mb-6 leading-[1.65]">The Living Crest system means no two stores look identical. Each franchise receives a colour identity tied to its city, its owner, and its community — making every location a collectible moment.</p>
              <p className="text-pp-on-primary/60 mb-8 leading-[1.65]">From neon gamer drops to SA heritage palettes, the crest is more than a logo. It is the visual proof that this store belongs to <em className="text-pp-gold not-italic">this</em> place.</p>
              <Link href="/gallery/" className="btn-gold-glow inline-flex items-center rounded-md bg-pp-gold px-6 py-2.5 text-[12px] uppercase tracking-[0.2em] font-semibold text-pp-black transition-colors duration-300">Browse the Gallery</Link>
            </div>
            <ClipReveal direction="right" delay={0.2}>
              <img src="/images/colour-story-colour-wheel.png" alt="Papa Pasta colour wheel showing the Living Crest system" className="rounded-2xl shadow-2xl shadow-pp-gold/10 w-full" loading="lazy" />
            </ClipReveal>
          </div>
        </MotionSection>
        <div className="mt-16">
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4" staggerDelay={0.08}>
            {variations.map((v) => (
              <motion.div key={v.title} variants={staggerChildScale} className="card-dark rounded-xl overflow-hidden img-hover-lift">
                <div className="aspect-square overflow-hidden"><img src={v.img} alt={`${v.title} bowl design`} className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="p-3 text-center">
                  <p className="text-xs font-semibold text-pp-gold truncate">{v.title}</p>
                  <p className="text-[9px] uppercase tracking-[0.1em] text-pp-on-primary/30">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   BRAND TEASER
   ═══════════════════════════════════════════════ */
function BrandTeaser() {
  return (
    <section className="section-padding bg-pp-tertiary" aria-labelledby="brand-teaser-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ClipReveal direction="left" delay={0}>
          <div className="relative rounded-2xl overflow-hidden">
            <img src="/images/central-kitchen-concept.png" alt="Papa Pasta central kitchen with stainless steel equipment" className="w-full h-auto object-cover rounded-2xl" loading="lazy" />
            <div className="absolute bottom-4 left-4 badge badge-default">Commissary</div>
          </div>
        </ClipReveal>
        <MotionSection delay={0.2}>
          <div>
            <div className="line-accent mb-4" />
            <p className="text-pp-gold uppercase tracking-[0.2em] text-[12px] font-semibold mb-3">Our Story</p>
            <h2 id="brand-teaser-heading" className="text-pp-on-surface font-serif text-3xl sm:text-[36px] font-bold mb-6 leading-[1.2] tracking-[-0.01em]">A Passion for Pasta, Engineered for Scale</h2>
            <blockquote className="border-l-4 border-pp-gold pl-6 italic text-lg leading-relaxed mb-6 text-pp-primary-60">&ldquo;Every strand matters. Every sauce simmers for hours. We refuse shortcuts because pasta should taste like someone cared.&rdquo;</blockquote>
            <p className="text-pp-primary-60 mb-8 leading-[1.65]">From a single commissary in Cape Town, we designed a system that brings restaurant-quality pasta to neighbourhoods across South Africa.</p>
            <Link href="/story/" className="btn-gold-glow inline-flex items-center rounded-md bg-pp-gold px-6 py-2.5 text-[12px] uppercase tracking-[0.2em] font-semibold text-pp-black transition-colors duration-300">Read Our Story</Link>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   LOCATION PREVIEW
   ═══════════════════════════════════════════════ */
function LocationPreview() {
  return (
    <section className="section-padding bg-pp-surface-elevated" aria-labelledby="locations-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <MotionSection>
            <div>
              <div className="line-accent mb-4" />
              <p className="text-pp-gold uppercase tracking-[0.2em] text-[12px] font-semibold mb-2">Locations</p>
              <h2 id="locations-heading" className="text-pp-on-surface font-serif text-3xl sm:text-[36px] font-bold leading-[1.2] tracking-[-0.01em]">Find a Papa Pasta</h2>
              <p className="text-pp-primary-60 mt-3 max-w-lg leading-[1.65]">Cape Town stores open now, with expansions rolling into every South African province.</p>
            </div>
          </MotionSection>
          <MotionSection>
            <Link href="/locations/" className="btn-gold-glow inline-flex items-center rounded-md bg-pp-primary px-6 py-2.5 text-sm font-medium text-pp-on-primary hover:bg-pp-primary-80 transition-colors duration-300">View All Locations</Link>
          </MotionSection>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { city: "Cape Town", status: "Open Now", statusType: "success" as const, addr: "CBD & Observatory", img: "/images/brand-image-28.png", alt: "Cape Town Papa Pasta store" },
            { city: "Johannesburg", status: "Coming Soon", statusType: "warning" as const, addr: "Rosebank, Sandton & CBD", img: "/images/franchise-store-concept.png", alt: "Johannesburg store concept" },
            { city: "Durban", status: "Coming Soon", statusType: "warning" as const, addr: "Umhlanga & Ballito", img: "/images/franchise-store-concept.png", alt: "Durban store concept" },
          ].map((loc) => (
            <motion.div key={loc.city} variants={staggerChildScale} className="card bg-pp-tertiary rounded-xl overflow-hidden img-hover-lift">
              <div className="aspect-[16/10] overflow-hidden"><img src={loc.img} alt={loc.alt} className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-pp-on-surface font-serif text-lg font-semibold">{loc.city}</h3>
                  <span className={`badge ${loc.statusType === "success" ? "badge-success" : "badge-warning"}`}>{loc.status}</span>
                </div>
                <p className="text-pp-primary-60 text-sm">{loc.addr}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   BLOG PREVIEW
   ═══════════════════════════════════════════════ */
function BlogPreview() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section className="section-padding bg-pp-tertiary" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <MotionSection>
            <div>
              <div className="line-accent mb-4" />
              <p className="text-pp-gold uppercase tracking-[0.2em] text-[12px] font-semibold mb-2">The Journal</p>
              <h2 id="blog-heading" className="text-pp-on-surface font-serif text-3xl sm:text-[36px] font-bold leading-[1.2] tracking-[-0.01em]">Latest from the Blog</h2>
            </div>
          </MotionSection>
          <MotionSection>
            <Link href="/blog/" className="text-sm font-medium text-pp-gold underline underline-offset-4 hover:text-pp-gold-light transition-colors duration-300 mt-4 md:mt-0">Read all posts &rarr;</Link>
          </MotionSection>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div variants={staggerChild} key={post.slug}>
              <Link href={`/blog/${post.slug}/`} className="group block card overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden rounded-xl -mx-6 -mt-6 mb-6">
                  <img src={post.img} alt={post.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={800} height={500} />
                </div>
                <p className="text-xs text-pp-gold mb-2 font-semibold tracking-wider">{post.date}</p>
                <h3 className="text-pp-on-surface font-serif text-lg font-semibold mb-2 group-hover:text-pp-gold transition-colors duration-300">{post.title}</h3>
                <p className="text-pp-primary-60 text-sm leading-[1.6]">{post.excerpt}</p>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   EVENTS PREVIEW
   ═══════════════════════════════════════════════ */
function EventsPreview() {
  return (
    <section className="section-padding bg-pp-primary text-pp-on-primary" aria-labelledby="events-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <MotionSection>
          <div>
            <div className="line-accent mb-4" />
            <p className="text-pp-gold uppercase tracking-[0.2em] text-[12px] font-semibold mb-2">Community</p>
            <h2 id="events-heading" className="text-pp-on-primary font-serif text-3xl sm:text-[36px] font-bold mb-5 leading-[1.2] tracking-[-0.01em]">Upcoming Events</h2>
            <ul className="space-y-5">
              {[{ name: "Cape Town Pasta Festival", date: "15 May 2026", loc: "V&A Waterfront" }, { name: "Franchise Discovery Day", date: "3 June 2026", loc: "Zoom & Cape Town HQ" }, { name: "Heritage Bowl Launch", date: "16 June 2026", loc: "All Locations" }].map((e) => (
                <li key={e.name} className="border-l-4 border-pp-gold pl-4">
                  <div className="font-semibold text-pp-gold-light">{e.name}</div>
                  <div className="text-sm text-pp-on-primary/50">{e.date} · {e.loc}</div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/events/" className="btn-gold-glow inline-flex items-center rounded-md bg-pp-gold px-6 py-2.5 text-[12px] uppercase tracking-[0.2em] font-semibold text-pp-black transition-colors duration-300">View All Events</Link>
            </div>
          </div>
        </MotionSection>
        <ClipReveal direction="right" delay={0.2}>
          <div className="rounded-2xl overflow-hidden">
            <img src="/images/product-range.png" alt="Papa Pasta product range including bowls and packaging" className="w-full h-auto object-cover" loading="lazy" />
          </div>
        </ClipReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   NEWSLETTER
   ═══════════════════════════════════════════════ */
function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubmit = useCallback((e: React.FormEvent) => { e.preventDefault(); if (email.trim()) setSubmitted(true); }, [email]);
  return (
    <section className="section-padding bg-pp-neutral-90" aria-labelledby="newsletter-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <MotionSection>
          <div className="line-accent mx-auto mb-4" />
          <h2 id="newsletter-heading" className="text-pp-on-surface font-serif text-3xl sm:text-[36px] font-bold mb-4 leading-[1.2] tracking-[-0.01em]">Join the Table</h2>
        </MotionSection>
        <MotionSection><p className="text-pp-primary-60 mb-8 leading-[1.65]">Get seasonal menu drops, behind-the-sauce secrets, and first access to tasting events — straight to your inbox.</p></MotionSection>
        {submitted ? (
          <MotionSection>
            <div className="bg-pp-gold/10 border border-pp-gold/30 rounded-lg p-6">
              <p className="text-pp-gold font-semibold">You&apos;re on the list.</p>
              <p className="text-pp-primary-60 text-sm mt-1">We&apos;ll be in touch soon.</p>
            </div>
          </MotionSection>
        ) : (
          <MotionSection>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input id="newsletter-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required className="input-field w-full sm:w-80" />
              <button type="submit" className="w-full sm:w-auto btn-gold-glow inline-flex items-center justify-center rounded-md bg-pp-primary px-6 py-3 text-[12px] uppercase tracking-[0.2em] font-semibold text-white hover:bg-pp-primary-80 transition-colors duration-300">Subscribe</button>
            </form>
          </MotionSection>
        )}
        <p className="text-xs text-pp-primary-60/50 mt-4">By subscribing you agree to our <Link href="/legal/" className="underline hover:text-pp-gold transition-colors">Privacy Policy</Link>. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FRANCHISE TEASER
   ═══════════════════════════════════════════════ */
function FranchiseTeaser() {
  return (
    <section className="section-padding bg-pp-primary text-pp-on-primary relative overflow-hidden" aria-labelledby="franchise-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MotionSection>
          <div className="line-accent mx-auto mb-4" />
          <p className="text-pp-gold uppercase tracking-[0.2em] text-[12px] font-semibold mb-3">Franchise</p>
          <h2 id="franchise-heading" className="text-pp-on-primary font-serif text-3xl sm:text-[48px] font-bold mb-5 leading-[1.1] tracking-[-0.02em]">Own a <span className="gold-text-gradient">Papa Pasta</span></h2>
          <p className="text-pp-on-primary/60 max-w-2xl mx-auto mb-8 leading-[1.65]">All-in investment from R1.14M. 20.7% COGS. 21.6% EBITDA. An 8-month payback and a first-mover opportunity in South Africa&apos;s only dedicated pasta QSR franchise.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/franchise/" className="btn-gold-glow inline-flex items-center rounded-md bg-pp-gold px-8 py-3 text-[12px] uppercase tracking-[0.2em] font-semibold text-pp-black shadow-lg shadow-pp-gold/20 hover:bg-pp-gold-light transition-colors duration-300">See the Opportunity</Link>
            <a href="https://franchise.papapasta.co.za/?utm_source=brand-site&utm_medium=franchise-teaser&utm_campaign=franchise-bridge" target="_blank" rel="noopener noreferrer" className="btn-outline-gold inline-flex items-center rounded-md border border-pp-gold/50 text-pp-gold px-8 py-3 text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-pp-gold hover:text-pp-black transition-colors duration-300"><span>Express Interest &rarr;</span></a>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <HeroDishes />
      <ColourStory />
      <BrandTeaser />
      <LocationPreview />
      <BlogPreview />
      <EventsPreview />
      <Newsletter />
      <FranchiseTeaser />
    </>
  );
}
