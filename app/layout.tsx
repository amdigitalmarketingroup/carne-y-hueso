import type { Metadata } from "next";
import { Playfair_Display, Space_Mono, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import { Sidebar } from "@/components/layout/sidebar";
import { BottomNav } from "@/components/layout/bottom-nav";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Loader } from "@/components/ui/loader";
import { ReservationCTA } from "@/components/ui/reservation-cta";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carne & Hueso",
  description: "Clinical Brutalism meets Refined Dining",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${spaceMono.variable} antialiased bg-bone-white text-ink-black`}
      >
        <Loader />
        <CustomCursor />
        <ReservationCTA />
        <Sidebar />
        <main className="lg:ml-[25%] transition-all duration-500">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
