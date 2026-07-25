import type { Metadata } from "next";
import { Inter, Caveat, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Karman Singh | Notebook",
  description: "Interactive portfolio of Karman Singh.",
  icons: {
    icon: "/ka-icon.png",
  },
};

import { ErrorOverlay } from "@/components/ErrorOverlay";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable} ${playfair.variable}`}>
      <body className="antialiased bg-[#2c2621] selection:bg-yellow-200/50 selection:text-black min-h-screen">
        <ErrorOverlay />
        {children}
      </body>
    </html>
  );
}
