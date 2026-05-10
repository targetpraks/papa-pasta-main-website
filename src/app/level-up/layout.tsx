import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Level Up",
  description: "Papa Pasta loyalty program. Level Up and unlock exclusive rewards, early access, and members-only perks.",
  alternates: { canonical: "/level-up/" },
};

export default function LevelUpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
