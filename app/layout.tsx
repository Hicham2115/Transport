import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/MainSection/Footer";
import Navbar from "@/components/MainSection/NavBar";
import { Toaster } from "@/components/ui/sonner";

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

export const metadata: Metadata = {
  title: "Next Way Transport | Location de Bus & Minibus avec Chauffeur",
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

  openGraph: {
    title: "Next Way Transport | Location de Bus avec Chauffeur",
    description:
      "Réservez facilement votre bus ou minibus avec chauffeur. Service rapide, fiable et adapté à tous vos déplacements.",
    url: "https://yourwebsite.com",
    siteName: "NEXT WAY TRANSPORT",
    images: [
      {
        url: "https://yourwebsite.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Next Way Transport",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Way Transport",
    description:
      "Location de bus, minibus et autocar avec chauffeur. Devis rapide en moins de 24h.",
    images: ["https://yourwebsite.com/preview.jpg"],
  },

  icons: {
    icon: "/icon.png",
  },

  themeColor: "#8164f3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#060010] text-white cursor-default">
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
