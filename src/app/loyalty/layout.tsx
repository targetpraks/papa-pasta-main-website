import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loyalty",
  description:
    "Papa Pasta Level Up loyalty program. Earn pasta rewards, early merch access, collection drop previews, birthday rewards, and store launch invites.",
  alternates: { canonical: "/loyalty/" },
};

export default function LoyaltyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
