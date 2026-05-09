import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description: "Seasonal menu drops, sauce science, and the stories behind the Papa Pasta brand. Fresh perspectives on pasta culture.",
  alternates: { canonical: "/blog/" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
