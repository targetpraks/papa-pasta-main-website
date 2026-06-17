import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Papa Pasta store launches, collection drops, tasting tours, pop-ups, and archived community events across South Africa.",
  alternates: { canonical: "/events/" },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
