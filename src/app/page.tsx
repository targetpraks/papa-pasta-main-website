"use client";

import { useState, useEffect } from "react";
import Reveal from "./components/Reveal";

/* ------------------------------------------------------------------
   Animated counter hook
   ------------------------------------------------------------------ */
function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / stepTime));
      if (start >= end) { start = end; clearInterval(timer); }
      setCount(start);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
}

/* ------------------------------------------------------------------
   Section 1 — Hero
   ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/store-concept-refined-neon-pop.png"
          alt="Papa Pasta store interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-pp-navy/60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-pp-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">
          Crafted Daily · Cape Town
        </p>
        <h1 className="text-pp-white font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Fresh Handmade Pasta
        </h1>
        <p className="text-pp-cream/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Built from scratch in our central kitchen. Sauces simmered for hours.
          Shapes matched to every sauce. This is food with obsession baked in.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/locations/"
            className="btn-gold-glow inline-flex items-center rounded-md bg-pp-gold px-8 py-3 text-sm font-semibold text-pp-navy shadow hover:bg-pp-gold-light transition"
          >
            Find a Store
          </a>
          <a
            href="https://www.ubereats.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-pp-gold/40 text-pp-gold px-8 py-3 text-sm font-semibold hover:bg-pp-gold/10 transition"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Section 2 — Social Proof Bar
   ------------------------------------------------------------------ */
function SocialProof() {
  const stores = useCountUp(12);
  const provinces = useCountUp(9);
  return (
    <section className="bg-pp-navy text-pp-cream border-y border-pp-gold/20">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-around gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-pp-gold">{stores}+</div>
            <div className="text-xs uppercase tracking-wider mt-1">Stores Planned</div>
          </div>
          <div className="hidden sm:block h-10 w-px bg-pp-navy-light"></div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-pp-gold">{provinces}</div>
            <div className="text-xs uppercase tracking-wider mt-1">SA Provinces</div>
          </div>
          <div className="hidden sm:block h-10 w-px bg-pp-navy-light"></div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-pp-gold">32</div>
            <div className="text-xs uppercase tracking-wider mt-1">Core Dishes</div>
          </div>
          <div className="hidden sm:block h-10 w-px bg-pp-navy-light"></div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-pp-gold">∞</div>
            <div className="text-xs uppercase tracking-wider mt-1">Crest Variations</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Section 3 — Hero Dishes
   ------------------------------------------------------------------ */
function HeroDishes() {
  const dishes = [
    {
      title: "Fettuccini Alfredo",
      desc: "Silky Alfredo sauce over fresh flat ribbons. The comfort classic, perfected.",
      img: "/images/menu-core-8-dishes.png",
    },
    {
      title: "Papa Pops — Cheesy Braai",
      desc: "Crunchy pasta bites with a braai twist. Snackable perfection.",
      img: "/images/papa-pops-cheesy-braai.png",
    },
    {
      title: "Golden Blend Sauces",
      desc: "Slow-simmered sauces designed to cling, coat, and captivate.",
      img: "/images/menu-sauce-production.png",
    },
  ];
  return (
    <section className="section-padding bg-pp-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-pp-gold uppercase tracking-widest text-sm font-semibold mb-2">The Menu</p>
            <h2 className="text-pp-navy font-serif text-3xl sm:text-5xl font-bold">Hero Dishes</h2>
            <p className="text-pp-charcoal/70 mt-4 max-w-xl mx-auto">
              Three heroes to start your obsession. Every sauce, shape, and topping is deliberate.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((d, i) => (
            <Reveal key={d.title} delay={String(i + 1)}>
              <div
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-pp-navy font-serif text-xl font-semibold mb-2">{d.title}</h3>
                  <p className="text-pp-charcoal/70 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 text-center">
            <a
              href="/menu/"
              className="inline-flex items-center rounded-md border border-pp-navy/20 text-pp-navy px-6 py-2.5 text-sm font-medium hover:bg-pp-navy hover:text-white transition"
            >
              See Full Menu
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   NEW Section 4 — Colour Story
   ------------------------------------------------------------------ */
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
    <section className="section-padding bg-pp-navy text-pp-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-pp-gold uppercase tracking-widest text-sm font-semibold mb-3">The Colour Story</p>
              <h2 className="text-pp-white font-serif text-3xl sm:text-5xl font-bold mb-6 leading-tight">
                Every Franchise Gets a Crest
              </h2>
              <p className="text-pp-cream/70 mb-6 leading-relaxed">
                The Living Crest system means no two stores look identical.
                Each franchise receives a colour identity tied to its city, its owner, and its community —
                making every location a collectible moment.
              </p>
              <p className="text-pp-cream/70 mb-8 leading-relaxed">
                From neon gamer drops to SA heritage palettes, the crest is more than a logo.
                It is the visual proof that this store belongs to <em>this</em> place.
              </p>
              <a
                href="/gallery/"
                className="btn-gold-glow inline-flex items-center rounded-md bg-pp-gold px-6 py-2.5 text-sm font-semibold text-pp-navy hover:bg-pp-gold-light transition"
              >
                Browse the Gallery
              </a>
            </div>
            <div>
              <img
                src="/images/colour-story-colour-wheel.png"
                alt="Papa Pasta colour wheel"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {variations.map((v, i) => (
              <Reveal key={v.title} delay={String((i % 5) + 1)}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm img-hover-lift">
                  <div className="aspect-square overflow-hidden">
                    <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-xs font-semibold text-pp-navy truncate">{v.title}</p>
                    <p className="text-[10px] text-pp-charcoal/40">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Section 5 — Brand Teaser
   ------------------------------------------------------------------ */
function BrandTeaser() {
  return (
    <section className="section-padding bg-pp-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/images/central-kitchen-concept.png"
              alt="Papa Pasta central kitchen"
              className="w-full h-auto object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 left-4 bg-pp-gold text-pp-navy text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
              Commissary
            </div>
          </div>
        </Reveal>

        <Reveal delay="2">
          <div>
            <p className="text-pp-gold uppercase tracking-widest text-sm font-semibold mb-3">Our Story</p>
            <h2 className="text-pp-navy font-serif text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              A Passion for Pasta, Engineered for Scale
            </h2>
            <blockquote className="border-l-4 border-pp-gold pl-6 italic text-lg leading-relaxed mb-6">
              “Every strand matters. Every sauce simmers for hours. We refuse shortcuts because pasta should taste like someone cared.”
            </blockquote>
            <p className="text-pp-charcoal/70 mb-8 leading-relaxed">
              From a single commissary in Cape Town, we designed a system that brings
              restaurant-quality pasta to neighbourhoods across South Africa — without
              losing the soul of handmade craft.
            </p>
            <a
              href="/story/"
              className="btn-gold-glow inline-flex items-center rounded-md bg-pp-gold px-6 py-2.5 text-sm font-semibold text-pp-navy hover:bg-pp-gold-light transition"
            >
              Read Our Story
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Section 6 — Location Preview
   ------------------------------------------------------------------ */
function LocationPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <Reveal>
            <div>
              <p className="text-pp-gold uppercase tracking-widest text-sm font-semibold mb-2">Locations</p>
              <h2 className="text-pp-navy font-serif text-3xl sm:text-4xl font-bold">Find a Papa Pasta</h2>
              <p className="text-pp-charcoal/70 mt-3 max-w-lg">
                Cape Town stores open now, with expansions rolling into every South African province.
              </p>
            </div>
          </Reveal>
          <Reveal delay="1">
            <a
              href="/locations/"
              className="inline-flex items-center rounded-md bg-pp-navy px-6 py-2.5 text-sm font-medium text-white hover:bg-pp-navy-light transition"
            >
              View All Locations
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { city: "Cape Town", status: "Open Now", addr: "CBD & Observatory", img: "/images/brand-image-28.png" },
            { city: "Johannesburg", status: "Coming Soon", addr: "Rosebank, Sandton & CBD", img: "/images/franchise-store-concept.png" },
            { city: "Durban", status: "Coming Soon", addr: "Umhlanga & Ballito", img: "/images/franchise-store-concept.png" },
          ].map((loc, i) => (
            <Reveal key={loc.city} delay={String(i + 1)}>
              <div className="bg-pp-cream rounded-xl overflow-hidden shadow-sm img-hover-lift">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={loc.img} alt={loc.city} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-pp-navy font-serif text-lg font-semibold">{loc.city}</h3>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      loc.status === "Open Now" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                    }`}>
                      {loc.status}
                    </span>
                  </div>
                  <p className="text-pp-charcoal/60 text-sm">{loc.addr}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Section 7 — Blog Preview
   ------------------------------------------------------------------ */
function BlogPreview() {
  const posts = [
    {
      title: "Why Shape Matters: The Golden Blend of Pasta + Sauce",
      excerpt: "Flat noodles hold cream. Tubes trap meat. We match every shape to its perfect partner.",
      date: "May 2026",
      img: "/images/menu-pasta-shape-pairing.png",
    },
    {
      title: "Inside the Commissary: Where Obsession Lives",
      excerpt: "A behind-the-scenes look at the central kitchen that powers every Papa Pasta store.",
      date: "April 2026",
      img: "/images/central-kitchen-concept.png",
    },
    {
      title: "The Art of the Crest: Colour Story Philosophy",
      excerpt: "Every franchise gets a unique crest. Here is how the colour explosion happens.",
      date: "March 2026",
      img: "/images/colour-story-colour-wheel.png",
    },
  ];
  return (
    <section className="section-padding bg-pp-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-10">
          <Reveal>
            <div>
              <p className="text-pp-gold uppercase tracking-widest text-sm font-semibold mb-2">The Journal</p>
              <h2 className="text-pp-navy font-serif text-3xl sm:text-4xl font-bold">Latest from the Blog</h2>
            </div>
          </Reveal>
          <Reveal delay="1">
            <a href="/blog/" className="text-sm font-medium text-pp-navy underline underline-offset-4 hover:text-pp-gold transition mt-4 md:mt-0">
              Read all posts →
            </a>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={String(i + 1)}>
              <a
                href="/blog/"
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-pp-charcoal/50 mb-2">{post.date}</p>
                  <h3 className="text-pp-navy font-serif text-lg font-semibold mb-2 group-hover:text-pp-gold transition">{post.title}</h3>
                  <p className="text-pp-charcoal/70 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Section 8 — Events
   ------------------------------------------------------------------ */
function EventsPreview() {
  return (
    <section className="section-padding bg-pp-navy text-pp-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div>
            <p className="text-pp-gold uppercase tracking-widest text-sm font-semibold mb-2">Community</p>
            <h2 className="text-pp-white font-serif text-3xl sm:text-4xl font-bold mb-5">
              Upcoming Events
            </h2>
            <ul className="space-y-5">
              {[
                { name: "Cape Town Pasta Festival", date: "15 May 2026", loc: "V&A Waterfront" },
                { name: "Franchise Discovery Day", date: "3 June 2026", loc: "Zoom & Cape Town HQ" },
                { name: "Heritage Bowl Launch", date: "16 June 2026", loc: "All Locations" },
              ].map((e) => (
                <li key={e.name} className="border-l-4 border-pp-gold pl-4">
                  <div className="font-semibold text-pp-gold-light">{e.name}</div>
                  <div className="text-sm text-pp-cream/70">{e.date} · {e.loc}</div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a href="/events/" className="btn-gold-glow inline-flex items-center rounded-md bg-pp-gold px-6 py-2.5 text-sm font-semibold text-pp-navy hover:bg-pp-gold-light transition">
                View All Events
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay="2">
          <div className="rounded-2xl overflow-hidden">
            <img src="/images/product-range.png" alt="Papa Pasta product range" className="w-full h-auto object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Section 9 — Newsletter CTA
   ------------------------------------------------------------------ */
function Newsletter() {
  return (
    <section className="section-padding bg-pp-gold/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <Reveal>
          <h2 className="text-pp-navy font-serif text-3xl sm:text-4xl font-bold mb-4">Join the Table</h2>
        </Reveal>
        <Reveal delay="1">
          <p className="text-pp-charcoal/70 mb-8">
            Get seasonal drops, secret sauce stories, and event invites — straight to your inbox.
          </p>
        </Reveal>
        <Reveal delay="2">
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Coming soon: newsletter signup powered by Zoho!"); }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="w-full sm:w-80 rounded-md border border-pp-navy/20 bg-white px-4 py-3 text-sm text-pp-navy placeholder:text-pp-charcoal/40 focus:outline-none focus:ring-2 focus:ring-pp-gold"
            />
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-pp-navy px-6 py-3 text-sm font-semibold text-white hover:bg-pp-navy-light transition"
            >
              Subscribe
            </button>
          </form>
        </Reveal>
        <p className="text-xs text-pp-charcoal/40 mt-4">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Section 10 — Franchise Teaser
   ------------------------------------------------------------------ */
function FranchiseTeaser() {
  return (
    <section className="section-padding bg-pp-navy text-pp-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <p className="text-pp-gold uppercase tracking-widest text-sm font-semibold mb-3">Franchise</p>
          <h2 className="text-pp-white font-serif text-3xl sm:text-5xl font-bold mb-5">
            Own a Papa Pasta
          </h2>
          <p className="text-pp-cream/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            All-in investment from R1.14M. 20.7% COGS. 21.6% EBITDA. An 8-month payback
            and a first-mover opportunity in South Africa’s only dedicated pasta QSR franchise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/franchise/"
              className="btn-gold-glow inline-flex items-center rounded-md bg-pp-gold px-8 py-3 text-sm font-semibold text-pp-navy shadow hover:bg-pp-gold-light transition"
            >
              See the Opportunity
            </a>
            <a
              href="https://franchise.papapasta.co.za/?utm_source=brand-site\u0026utm_medium=franchise-teaser\u0026utm_campaign=franchise-bridge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-pp-gold/40 text-pp-gold px-8 py-3 text-sm font-semibold hover:bg-pp-gold/10 transition"
            >
              Express Interest →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Homepage Assembly
   ------------------------------------------------------------------ */
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
