import type { Metadata } from "next";
import { Geist, Jost } from "next/font/google";
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
  title: "Talise — Agua Mineral Natural de Manantial | Patagonia Argentina",
  description:
    "Agua Mineral Natural Talise, envasada en su fuente de origen en el Establecimiento La Victoria, Telsen, Chubut, Patagonia Argentina. Agua de manantial de mineralización débil, bajo sodio y pH alcalino.",
  keywords: [
    "agua mineral",
    "agua de manantial",
    "Talise",
    "Patagonia",
    "Chubut",
    "Telsen",
    "bidones de agua",
  ],
  openGraph: {
    title: "Talise — Agua Mineral Natural de Manantial",
    description:
      "Agua de manantial envasada en su fuente de origen. Patagonia Argentina.",
    locale: "es_AR",
    type: "website",
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
