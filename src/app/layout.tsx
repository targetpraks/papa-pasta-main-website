export const metadata = {
  title: {
    default: "Papa Pasta — Fresh Handmade Pasta, Cape Town",
    template: "%s | Papa Pasta",
  },
  description:
    "Papa Pasta serves fresh, handmade pasta crafted daily in our central kitchen. Find your nearest Cape Town store or order via UberEats & Mr D.",
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

import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
