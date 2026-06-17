export type LoyaltyTier = {
  name: string;
  threshold: string;
  glow: string;
  perks: string[];
};

export const loyaltyTiers: LoyaltyTier[] = [
  {
    name: "Signal",
    threshold: "Join the network",
    glow: "#00ffff",
    perks: ["Birthday pasta reward", "Member-only drop alerts", "Digital receipt points"],
  },
  {
    name: "Pulse",
    threshold: "After 5 orders",
    glow: "#ff00ff",
    perks: ["Early merch access", "Queue priority at launch events", "Double points on seasonal dishes"],
  },
  {
    name: "Overdrive",
    threshold: "After 12 orders",
    glow: "#39ff14",
    perks: ["Collection drop previews", "Invite-only tastings", "First access to limited bowls"],
  },
];

export const loyaltyBenefits = [
  "Earn points on pasta, merch, and collectable drops.",
  "Unlock early access windows before public merch drops.",
  "Get birthday rewards, store launch invites, and seasonal menu previews.",
  "Use one account across ordering, launches, drops, and future in-store rewards.",
];
