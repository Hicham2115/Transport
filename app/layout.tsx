import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/MainSection/Footer";
import Navbar from "@/components/MainSection/NavBar";
import { Toaster } from "@/components/ui/sonner";
import ScrollToTop from "@/components/ui/ScrollToTop";

const siteUrl = new URL("https://www.nextway-transport.com");

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#8164f3",
};

export const metadata: Metadata = {
  metadataBase: siteUrl,

  title: {
    default: "Next Way Transport | Location de Bus & Minibus avec Chauffeur",
    template: "%s | Next Way Transport",
  },
  description:
    "NEXT WAY TRANSPORT est votre spécialiste de la location de bus, minibus et autocar avec chauffeur. Devis rapide en moins de 24h, transport fiable en France et en Europe.",

  keywords: [
    "location bus avec chauffeur",
    "location minibus",
    "autocar avec chauffeur",
    "transport groupe",
    "transport événementiel",
    "location bus France",
    "transport entreprise",
    "NEXT WAY TRANSPORT",
    "location car Europe",
  ],

  authors: [{ name: "NEXT WAY TRANSPORT" }],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Next Way Transport | Location de Bus & Minibus avec Chauffeur",
    description:
      "Réservez facilement votre bus ou minibus avec chauffeur. Devis rapide en moins de 24h, service fiable en France et en Europe.",
    url: "/",
    siteName: "Next Way Transport",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Way Transport | Location de Bus & Minibus avec Chauffeur",
    description:
      "Location de bus, minibus et autocar avec chauffeur. Devis rapide en moins de 24h, transport fiable en France et en Europe.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={` ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#060010] text-white cursor-default">
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
        <Toaster />
      </body>
    </html>
  );
}
