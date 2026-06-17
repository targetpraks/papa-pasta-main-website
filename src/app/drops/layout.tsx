import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drops",
  description:
    "Papa Pasta drops, store launches, merch capsules, collection releases, loyalty updates, and brand stories.",
  alternates: { canonical: "/drops/" },
};

export default function DropsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
