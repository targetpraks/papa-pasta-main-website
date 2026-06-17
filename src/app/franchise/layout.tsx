import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Franchise Portal",
  description: "Papa Pasta franchise enquiries are handled by the dedicated franchise portal.",
  alternates: { canonical: "/franchise/" },
};

export default function FranchiseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
