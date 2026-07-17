import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import localFont from "next/font/local";
import { brand } from "@/brand/tokens";
import "./globals.css";

const ivyPresto = localFont({
  src: [
    { path: "../brand/fonts/ivy-presto-headline-thin.otf", weight: "300", style: "normal" },
    { path: "../brand/fonts/ivy-presto-headline.otf", weight: "400", style: "normal" },
  ],
  variable: "--font-ivypresto",
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${brand.name} — Brand Book ${brand.version}`,
  description: `${brand.name} living style guide: color, type, ornament, components, voice, and motion — the single source of truth for the brand.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ivyPresto.variable} ${fraunces.variable} ${manrope.variable} h-full`}
    >
      <body className="min-h-full bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
