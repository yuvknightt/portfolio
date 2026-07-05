import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import Grain from "../components/Grain";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Handwritten accent font — used sparingly for a single emphasis word,
// the same typographic trick iamabhinav.me uses on "Craft" in its hero.
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  // TODO: once this is deployed, set metadataBase + openGraph.url to the real domain.
  title: "Yuvraj Singh | Backend Engineer & Systems Architect",
  description:
    "Yuvraj Singh — Software Development Engineer at Amazon, ex-Rupyy (CarDekho Group). Backend systems, microservices, and infrastructure that hold up under real traffic.",
  openGraph: {
    title: "Yuvraj Singh | Backend Engineer & Systems Architect",
    description:
      "Software Development Engineer at Amazon, ex-Rupyy (CarDekho Group). Backend systems, microservices, and infrastructure that hold up under real traffic.",
    siteName: "Yuvraj Singh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuvraj Singh | Backend Engineer & Systems Architect",
    description:
      "Software Development Engineer at Amazon, ex-Rupyy (CarDekho Group). Backend systems, microservices, and infrastructure that hold up under real traffic.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Whole-page film-grain texture, very low opacity — the same subtle
            noise visible across iamabhinav.me's dark cards and massive type. */}
        <Grain opacity={0.025} className="fixed z-[999] inset-0" />
        {children}
      </body>
    </html>
  );
}