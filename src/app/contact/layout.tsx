import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Papa Pasta. General enquiries, franchise opportunities, press & media, and careers.",
  alternates: { canonical: "/contact/" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
