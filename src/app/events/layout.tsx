import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming Papa Pasta events, tasting tours, franchise discovery days, and community gatherings across South Africa.",
  alternates: { canonical: "/events/" },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
