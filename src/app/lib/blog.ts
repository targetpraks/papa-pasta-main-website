export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  img: string;
  alt: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "pasta-shape-sauce",
    title: "Why Shape Matters: The Golden Blend of Pasta + Sauce",
    date: "May 2026",
    excerpt: "Flat noodles hold cream. Tubes trap meat. The right shape makes or breaks a sauce.",
    img: "/images/menu-pasta-shape-pairing.png",
    alt: "Pasta shape and sauce pairing guide",
    content: "<p>Every shape of pasta was engineered for a reason. Fettuccini's flat ribbons cradle Alfredo cream. Penne's tubes trap chunky ragù. Farfalle's pinched middle creates textural contrast. At Papa Pasta, we obsess over this marriage — because a perfect sauce on the wrong shape is a missed opportunity.</p><p>Our commissary produces six core shapes daily, each matched to its ideal sauce partner. We call it the Golden Blend: the moment when pasta and sauce become inseparable.</p>",
  },
  {
    slug: "inside-commissary",
    title: "Inside the Commissary: Where Obsession Lives",
    date: "April 2026",
    excerpt: "Behind-the-scenes at the central kitchen powering every bowl across the network.",
    img: "/images/central-kitchen-concept.png",
    alt: "Inside the Papa Pasta commissary",
    content: "<p>At 4:00 AM, while Cape Town sleeps, our commissary comes alive. Fresh eggs are cracked, flour is weighed, and dough is kneaded by hand — then rolled through Italian extruders that shape it into ribbons, tubes, and shells.</p><p>Nothing is frozen. Nothing is pre-made. Every batch is dated, tasted, and approved before it leaves for our stores. This is the engine behind every Papa Pasta bowl.</p>",
  },
  {
    slug: "art-of-crest",
    title: "The Art of the Crest: Colour Story Philosophy",
    date: "March 2026",
    excerpt: "How Papa Pasta gives every franchise a unique visual identity through colour story.",
    img: "/images/colour-story-colour-wheel.png",
    alt: "Colour story wheel",
    content: "<p>The Living Crest system was born from a simple insight: no two neighbourhoods are the same, so no two stores should look the same. Every Papa Pasta franchise receives a unique colour identity — three colours chosen by the franchisee that become their store's visual signature.</p><p>From neon gamer drops inspired by Twitch culture, to heritage palettes rooted in South African history, the crest is more than a logo. It's the visual proof that this store belongs to this place.</p>",
  },
  {
    slug: "takeover-101",
    title: "TakeOver 101: Partnership Model",
    date: "Feb 2026",
    excerpt: "How brands like MTN, Vodacom and Nedbank light up a Papa Pasta for a day.",
    img: "/images/takeover-vodacom.png",
    alt: "Brand takeover partnership event",
    content: "<p>A Papa Pasta TakeOver is when a brand partners with us to create a limited-edition menu, custom packaging, and an in-store experience for one day only. We've hosted TakeOvers with telecom brands, rugby teams, and local artists — each one completely unique.</p><p>The formula is simple: our kitchen, their vision. The result is always a sell-out.</p>",
  },
  {
    slug: "papa-pops-origin",
    title: "Papa Pops: The Snack That Surprised Everyone",
    date: "Jan 2026",
    excerpt: "From test kitchen to fan favourite. The origin story of our crunchy pasta bites.",
    img: "/images/papa-pops-peri-peri.png",
    alt: "Papa Pops crunchy pasta bites",
    content: "<p>It started as an experiment: what if we deep-fried offcuts of fresh pasta and tossed them in spice? The first batch — Cheesy Braai flavour — disappeared in minutes during a staff tasting. We knew we had something.</p><p>Today, Papa Pops are one of our best-selling items. Peri-Peri, Sweet Chutney, and the original Cheesy Braai. Three flavours. One obsession.</p>",
  },
  {
    slug: "franchise-forecast",
    title: "Franchise Forecast: Why Pasta Now",
    date: "Dec 2025",
    excerpt: "Market data, capital requirements and the first-mover gap in South African fast-casual.",
    img: "/images/franchise-store-concept.png",
    alt: "Papa Pasta franchise store concept",
    content: "<p>South Africa has 2,500+ chicken outlets. It has hundreds of burger joints. But it has zero dedicated pasta QSR franchises. That gap is not a weakness — it is an opportunity.</p><p>Papa Pasta was built to fill it. With a central commissary, a compact 40m² store footprint, and a menu that travels across all nine provinces, we are designing a brand that scales without losing soul.</p>",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
