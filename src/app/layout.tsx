import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Bela Balsa — Danseuse, chanteuse, comédienne",
  description:
    "Bela Balsa, interprète basée à Bordeaux : danse, chorégraphie, chant et cabaret.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${cormorant.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <TopBar />
        {children}
      </body>
    </html>
  );
}
