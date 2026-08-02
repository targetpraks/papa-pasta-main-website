import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drops",
  description:
    "Papa Pasta drops — limited merch capsules, numbered collection releases, and seasonal menu launches. Loyalty gets early access.",
  alternates: { canonical: "/drops/" },
};

export default function DropsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
