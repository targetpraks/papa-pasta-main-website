import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore the Living Crest system — bowl designs, store concepts, packaging, and brand takeovers. Every franchise gets a unique visual identity.",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
