import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations",
  description: "Find your nearest Papa Pasta store. Cape Town locations open now, with Johannesburg, Durban, Gqeberha and more coming soon.",
  alternates: { canonical: "/locations/" },
};

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
