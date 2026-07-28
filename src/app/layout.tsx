import type { Metadata } from "next";
import { Space_Mono, Fraunces, Great_Vibes } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" });

export const metadata: Metadata = {
  title: "Karman Singh | Portfolio",
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
    <html lang="en" className={`${spaceMono.variable} ${fraunces.variable} ${greatVibes.variable}`}>
      <body className="antialiased min-h-screen">
        <ErrorOverlay />
        {children}
      </body>
    </html>
  );
}
