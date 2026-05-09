import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Legal",
  description: "Papa Pasta privacy policy, terms of service, and POPIA compliance information.",
  alternates: { canonical: "/legal/" },
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
