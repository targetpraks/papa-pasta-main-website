export interface MerchItem {
  id: string;
  name: string;
  category: "Apparel" | "Accessories" | "Collectibles" | "Drops";
  status: "Live" | "Coming Soon" | "Sold Out" | "Archive";
  price: number;
  image: string;
  description: string;
  variants: string;
  dropDate: string;
  ctaLabel: string;
  limited?: boolean;
}

export const merchItems: MerchItem[] = [
  {
    id: "blackout-bomber",
    name: "Blackout Bomber Jacket",
    category: "Apparel",
    status: "Live",
    price: 1599,
    image: "/images/digital-stories-reels.png",
    description: "Satin shell, reflective crest print, black-on-black lining, and neon flash details under light.",
    variants: "XS-XXL",
    dropDate: "Live now",
    ctaLabel: "Shop Drop",
    limited: true,
  },
  {
    id: "graphic-tee",
    name: "Neon Crest Graphic Tee",
    category: "Apparel",
    status: "Live",
    price: 399,
    image: "/images/print-main-brand-collateral.png",
    description: "Organic cotton tee with a glitch crest hit, back print, and glow-in-dark ink details.",
    variants: "Black / White, S-XXL",
    dropDate: "Live now",
    ctaLabel: "Shop Tee",
  },
  {
    id: "chef-cap",
    name: "The OG Chef Cap",
    category: "Accessories",
    status: "Coming Soon",
    price: 299,
    image: "/images/uniforms-instore.png",
    description: "Structured black cap with raised crest embroidery and a hidden cyan stitch line.",
    variants: "Adjustable",
    dropDate: "July 2026",
    ctaLabel: "Notify Me",
  },
  {
    id: "enamel-pin",
    name: "Crest Enamel Pin Set",
    category: "Collectibles",
    status: "Sold Out",
    price: 89,
    image: "/images/collectible-cups-canisters.png",
    description: "Three-piece soft enamel set: shield crest, crossed fork/spoon, and Fresh Seasonal Quality badge.",
    variants: "Set of 3",
    dropDate: "May 2026",
    ctaLabel: "View Archive",
    limited: true,
  },
  {
    id: "heritage-bowl-drop",
    name: "Heritage Bowl Drop",
    category: "Drops",
    status: "Coming Soon",
    price: 349,
    image: "/images/bowl-03-sa-heritage-series.png",
    description: "Numbered ceramic bowl tied to the Youth Day collection drop. Loyalty members get early access.",
    variants: "500 numbered units",
    dropDate: "16 June 2026",
    ctaLabel: "Join Early Access",
    limited: true,
  },
  {
    id: "mtn-takeover-hoodie",
    name: "MTN TakeOver Hoodie",
    category: "Drops",
    status: "Archive",
    price: 1099,
    image: "/images/takeover-mtn.png",
    description: "Signal bars meet the Papa Pasta crest. A one-time TakeOver capsule, archived for collectors.",
    variants: "200 units made",
    dropDate: "Feb 2026",
    ctaLabel: "View Story",
    limited: true,
  },
];

export const merchCategories = ["All", "Apparel", "Accessories", "Collectibles", "Drops"];
export const merchStatuses = ["All", "Live", "Coming Soon", "Sold Out", "Archive"];
