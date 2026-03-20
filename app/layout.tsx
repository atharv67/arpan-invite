import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Lato,
  Playfair_Display_SC,
  IM_Fell_English_SC,
  Noto_Serif_Devanagari,
} from "next/font/google";
import "./globals.css";
import { weddingConfig } from "@/config/wedding";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant-var",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato-var",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const playfair = Playfair_Display_SC({
  variable: "--font-playfair-var",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const imFell = IM_Fell_English_SC({
  variable: "--font-fell-var",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const noto = Noto_Serif_Devanagari({
  variable: "--font-noto-var",
  subsets: ["devanagari"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arpanwedssshivani.com"),
  title: weddingConfig.meta.siteTitle,
  description: `Join us as we celebrate the wedding of Arpan & Shivani on ${weddingConfig.couple.weddingDateDisplay}.`,
  openGraph: {
    title: weddingConfig.meta.siteTitle,
    description: `Join us as we celebrate the wedding of Arpan & Shivani on ${weddingConfig.couple.weddingDateDisplay}.`,
    images: [{ url: weddingConfig.meta.ogImage, width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const fontVars = [
    cormorant.variable,
    lato.variable,
    playfair.variable,
    imFell.variable,
    noto.variable,
  ].join(" ");

  return (
    <html lang="en" className={fontVars}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
