import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import { AnalyticsScripts } from "./components/Analytics";

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
  metadataBase: new URL("https://papapasta.co.za"),
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
    images: [
      "https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/menu-core-8-dishes.png",
    ],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="preconnect" href="https://raw.githubusercontent.com" />
        <link rel="dns-prefetch" href="https://raw.githubusercontent.com" />
        <script type="application/ld+json">{"@context": "https://schema.org", "@type": "Restaurant", "name": "Papa Pasta", "image": "https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/menu-core-8-dishes.png", "url": "https://papapasta.co.za", "telephone": "+27-21-456-7890", "email": "hello@papapasta.co.za", "servesCuisine": "Italian", "priceRange": "R79–R98", "address": {"@type": "PostalAddress", "addressLocality": "Cape Town", "addressRegion": "Western Cape", "addressCountry": "ZA"}, "geo": {"@type": "GeoCoordinates", "latitude": "-33.9249", "longitude": "18.4241"}, "openingHoursSpecification": [{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "10:00", "closes": "22:00"}, {"@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "11:00", "closes": "21:00"}]}</script>
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-pp-cream text-pp-black antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
        <Footer />
        <CookieConsent />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
