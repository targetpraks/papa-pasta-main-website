import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Franchise",
  description: "Own a Papa Pasta franchise. All-in investment from R1.14M, 21.6% EBITDA, 8-month payback. South Africa's only dedicated pasta QSR franchise opportunity.",
  alternates: { canonical: "/franchise/" },
};

export default function FranchiseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
