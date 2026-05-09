import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Papa Pasta team. Store managers, commissary staff, and head office roles across Cape Town and beyond.",
  alternates: { canonical: "/careers/" },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
