import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description: "How Papa Pasta was born from a single question: why does South Africa have 2,500+ chicken outlets and not a single nationwide pasta QSR franchise?",
  alternates: { canonical: "/story/" },
};

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
