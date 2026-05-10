import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collectable Bowls",
  description: "Seasonal collectable bowls from Papa Pasta. Limited drops, numbered editions, never restocked.",
  alternates: { canonical: "/bowls/" },
};

export default function BowlsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
