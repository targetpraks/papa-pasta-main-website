import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merch",
  description: "Official Papa Pasta merch drops: live streetwear capsules, coming-soon collectables, sold-out archive pieces, and loyalty early access.",
  alternates: { canonical: "/merch/" },
};

export default function MerchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
