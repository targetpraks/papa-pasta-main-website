export interface MerchItem {
  id: string;
  name: string;
  category: "Apparel" | "Accessories" | "Collectibles";
  price: number;
  image: string;
  description: string;
  limited?: boolean;
}

export const merchItems: MerchItem[] = [
  {
    id: "chef-cap",
    name: "The OG Chef Cap",
    category: "Accessories",
    price: 299,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80",
    description: "Structured cotton twill cap with 3D embroidered crest. Black. Adjustable. No cap.",
  },
  {
    id: "streetwear-hoodie",
    name: "Streetwear Pullover Hoodie",
    category: "Apparel",
    price: 899,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
    description: "Heavyweight 400gsm fleece. Oversized fit. Puff-print PASTA across the chest. Drops mic.",
    limited: true,
  },
  {
    id: "graphic-tee",
    name: "Neon Crest Graphic Tee",
    category: "Apparel",
    price: 399,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    description: "100% organic cotton. Front chest crest with glow-in-dark ink. Back hit reads PASTA.",
  },
  {
    id: "tote-bag",
    name: "Reusable Pasta Tote",
    category: "Accessories",
    price: 149,
    image: "https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&w=600&q=80",
    description: "Heavy canvas. Handles reinforced. Embroidered tagline. Built for groceries and flexing.",
  },
  {
    id: "enamel-pin",
    name: "Crest Enamel Pin Set",
    category: "Collectibles",
    price: 89,
    image: "https://images.unsplash.com/photo-1517331156700-0c056d6fd7dd?auto=format&fit=crop&w=600&q=80",
    description: "Set of 3: Shield crest, crossed fork/spoon, tagline badge. Soft enamel. Butterfly clutch.",
    limited: true,
  },
  {
    id: "takeover-hoodie-mtn",
    name: "MTN Takeover Collab Hoodie",
    category: "Apparel",
    price: 1099,
    image: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?auto=format&fit=crop&w=600&q=80",
    description: "Limited MTN x Papa Pasta collab. Signal bars meet crest shield. 200 pieces made.",
    limited: true,
  },
  {
    id: "sports-scarf",
    name: "Derby Day Supporter Scarf",
    category: "Accessories",
    price: 249,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=600&q=80",
    description: "Jacquard knit. Papa Pasta crest on one side, local zone color on the reverse. Game day essential.",
  },
  {
    id: "limited-bomber",
    name: "Blackout Bomber Jacket",
    category: "Apparel",
    price: 1599,
    image: "https://images.unsplash.com/photo-1551488852-0801751ac1f4?auto=format&fit=crop&w=600&q=80",
    description: "Satin shell. Quilted lining. Reflective crest print. 50 pieces only. Drops sell out in minutes.",
    limited: true,
  },
];

export const merchCategories = ["All", "Apparel", "Accessories", "Collectibles"];
