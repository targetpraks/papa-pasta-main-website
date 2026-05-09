import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Fresh handmade pasta with slow-simmered sauces. From Alfredo Classico to Braai-Spiced Meatballs — every shape matched to its perfect partner.",
  alternates: { canonical: "/menu/" },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
