import type { Metadata } from "next";
import { Geist, Jost } from "next/font/google";
import { SITE_NAME, SITE_URL } from "./site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Talise — Agua Mineral Natural de Manantial | Patagonia Argentina",
    template: "%s | Talise",
  },
  description:
    "Agua Mineral Natural Talise, envasada en su fuente de origen en el Establecimiento La Victoria, Telsen, Chubut, Patagonia Argentina. Agua de manantial de mineralización débil, bajo sodio y pH alcalino. Botellas, bidones y dispensers en comodato con reparto en Puerto Madryn, Trelew, Rawson y toda la zona.",
  keywords: [
    "agua mineral",
    "agua mineral natural",
    "agua de manantial",
    "Talise",
    "Patagonia",
    "Chubut",
    "Telsen",
    "bidones de agua",
    "dispenser de agua",
    "dispenser frío calor comodato",
    "reparto de agua Puerto Madryn",
    "reparto de agua Trelew",
    "distribuidores de agua mineral",
  ],
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
    },
  },
  openGraph: {
    siteName: SITE_NAME,
    title: "Talise — Agua Mineral Natural de Manantial",
    description:
      "Agua de manantial envasada en su fuente de origen, en la meseta de Chubut. Botellas, bidones y dispensers en comodato. Patagonia Argentina.",
    url: "/",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/botellas.jpeg",
        width: 1200,
        height: 900,
        alt: "Botellas de agua mineral Talise de 600 ml y 1,5 L",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talise — Agua Mineral Natural de Manantial",
    description:
      "Agua de manantial envasada en su fuente de origen, en la Patagonia Argentina.",
    images: ["/images/botellas.jpeg"],
  },
  other: {
    "geo.region": "AR-U",
    "geo.placename": "Telsen, Chubut, Argentina",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
