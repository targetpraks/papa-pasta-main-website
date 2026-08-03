import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "News & Journal", template: "%s | Papa Pasta" },
  description:
    "Papa Pasta brand news and stories — new store launches, brand partnerships and TakeOvers, loyalty updates, and the thinking behind the system.",
  alternates: { canonical: "/news/" },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
