import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artisanal Pasta",
  description: "Take-home artisanal pasta from Papa Pasta. Premium packaging, natural ingredients, crafted with obsession.",
  alternates: { canonical: "/artisanal/" },
};

export default function ArtisanalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
