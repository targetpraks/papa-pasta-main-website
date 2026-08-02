import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moved",
  description: "This page has moved. Papa Pasta drops now live at /drops and brand news at /news.",
  alternates: { canonical: "/drops/" },
  robots: { index: false, follow: true },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
