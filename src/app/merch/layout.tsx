import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merch",
  description: "Official Papa Pasta merchandise. Streetwear, collectables, and limited drops.",
  alternates: { canonical: "/merch/" },
};

export default function MerchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
