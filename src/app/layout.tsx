import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Papa Pasta — Fresh Handmade Pasta, Cape Town",
    template: "%s | Papa Pasta",
  },
  description:
    "Papa Pasta serves fresh, handmade pasta crafted daily in our central kitchen. Find your nearest Cape Town store or order via UberEats \u0026 Mr D.",
  keywords: [
    "fresh pasta",
    "Cape Town pasta",
    "pasta restaurant",
    "Italian fast food",
    "papa pasta",
    "South Africa pasta",
    "pasta franchise",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://papapasta.co.za",
    siteName: "Papa Pasta",
    images: [
      {
        url: "https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/menu-core-8-dishes.png",
        width: 1200,
        height: 630,
        alt: "Papa Pasta fresh pasta dishes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@papapasta_sa",
  },
  alternates: {
    canonical: "https://papapasta.co.za",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
