import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Relax Villa – Luxury Villa Stay with Private Pool & Bed and Breakfast",
    template: "%s | Relax Villa",
  },
  description:
    "Experience the perfect blend of luxury and tranquility at Relax Villa. Four elegant bedrooms, private pool, and inclusive bed & breakfast. Book your serene escape today.",
  keywords: [
    "luxury villa",
    "villa accommodation",
    "bed and breakfast",
    "private pool",
    "villa stay",
    "Relax Villa",
    "holiday villa",
    "boutique accommodation",
    // German keywords — this page currently serves both languages from a
    // single client-rendered route rather than separate localized routes
    // (see note below), so keywords cover both audiences.
    "Luxusvilla",
    "Ferienvilla",
    "Übernachtung mit Frühstück",
    "privater Pool",
    "Villenaufenthalt",
  ],
  authors: [{ name: "Relax Villa" }],
  openGraph: {
    type: "website",
    siteName: "Relax Villa",
    title: "Relax Villa – Stay in comfort, relax in style",
    description:
      "Luxury villa accommodation with private pool, 4 elegant bedrooms, and bed & breakfast.",
    // Signals that German-speaking visitors are also a served audience,
    // even though the German copy is rendered client-side rather than at a
    // dedicated /de route. True per-language SSR metadata and hreflang tags
    // would require route-based localization (e.g. an app/[locale] segment) —
    // a reasonable next step, but out of scope for this client-side switch.
    locale: "en_US",
    alternateLocale: ["de_DE"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relax Villa – Luxury Villa Stay",
    description: "Experience luxury, comfort, and tranquility at Relax Villa.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#1B4332",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
