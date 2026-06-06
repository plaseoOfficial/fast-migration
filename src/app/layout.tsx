import type { Metadata } from "next";
import { Poppins, Urbanist, Open_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/content";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Fast Systemmöbel Espelkamp: Möbel nach Maß seit 1996",
  description:
    "Maßmöbel vom Meisterbetrieb in Espelkamp. Planung, Fertigung und Montage aus einer Hand. Kostenlos online planen oder direkt beraten lassen.",
  openGraph: {
    title: "Fast Systemmöbel Espelkamp: Möbel nach Maß seit 1996",
    description:
      "Maßmöbel vom Meisterbetrieb in Espelkamp. Planung, Fertigung und Montage aus einer Hand.",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${poppins.variable} ${urbanist.variable} ${openSans.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
