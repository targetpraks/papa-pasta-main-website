export interface Bowl {
  id: number;
  name: string;
  image: string;
  description: string;
  series: string;
  year: number;
  rarity: string;
  status: "active" | "retired";
  claimed: number;
  total: number;
}

export const bowls: Bowl[] = [
  { id: 1, name: "Founding Crest", image: "/images/bowl-01-founding-crest.png", description: "The original. Launch edition in signature black and gold. Where the obsession began.", series: "Genesis", year: 2025, rarity: "Ultra Rare", status: "retired", claimed: 500, total: 500 },
  { id: 2, name: "Franchisee Colour Drops", image: "/images/bowl-02-franchisee-colour-drops.png", description: "Each zone got its own colour identity. These bowls are the proof of belonging.", series: "Identity", year: 2025, rarity: "Rare", status: "active", claimed: 234, total: 500 },
  { id: 3, name: "SA Heritage Series", image: "/images/bowl-03-sa-heritage-series.png", description: "Proudly South African. Designed in collaboration with local ceramicists.", series: "Identity", year: 2025, rarity: "Common", status: "active", claimed: 87, total: 500 },
  { id: 4, name: "Neon Gamer Series", image: "/images/bowl-04-neon-gamer-series.png", description: "Born on Twitch. Forged in neon. The internet's favourite pasta bowl.", series: "Digital", year: 2026, rarity: "Epic", status: "active", claimed: 410, total: 500 },
  { id: 5, name: "TakeOver Partner", image: "/images/bowl-05-takeover-partner-bowls.png", description: "When Papa Pasta collides with global brands. Each partnership is a collector's item.", series: "Collab", year: 2026, rarity: "Legendary", status: "active", claimed: 12, total: 250 },
  { id: 6, name: "Local Artist Collab", image: "/images/bowl-06-local-artist-collab.png", description: "Hand-signed by the artist. Curated by local talent. One of one, sort of.", series: "Collab", year: 2026, rarity: "Ultra Rare", status: "active", claimed: 45, total: 100 },
  { id: 7, name: "Seasonal Harvest", image: "/images/bowl-07-seasonal-harvest.png", description: "Available only during harvest season. Spring truffles, autumn mushrooms.", series: "Seasonal", year: 2026, rarity: "Rare", status: "active", claimed: 189, total: 300 },
  { id: 8, name: "City Edition", image: "/images/bowl-08-city-edition.png", description: "Each major city gets its own bowl. Cape Town dropped first. Your city is next.", series: "City", year: 2026, rarity: "Epic", status: "active", claimed: 320, total: 500 },
  { id: 9, name: "Glow in the Dark", image: "/images/bowl-09-glow-in-dark.png", description: "Phosphorescent glaze. Charges under light, glows in darkness. Night owl essential.", series: "Digital", year: 2026, rarity: "Legendary", status: "active", claimed: 78, total: 200 },
  { id: 10, name: "Rugby Sports Edition", image: "/images/bowl-10-rugby-sports-edition.png", description: "For the fans. Springbok green and gold. RWC2027 special edition in the works.", series: "Sports", year: 2026, rarity: "Ultra Rare", status: "retired", claimed: 500, total: 500 },
];

export const currentSeasonBowl = bowls.find(b => b.series === "Seasonal" && b.status === "active") || bowls[6];
