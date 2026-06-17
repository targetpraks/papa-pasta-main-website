import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drops & Journal",
  description: "New Papa Pasta store launches, merch drops, collection releases, loyalty updates, seasonal menu signals, and brand stories.",
  alternates: { canonical: "/drops/" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
