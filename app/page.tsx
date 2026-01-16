"use client"

import { MenuSection } from "@/components/menu/menu-section"
import { Hero } from "@/components/home/hero"
import { Reservations } from "@/components/home/reservations"
import { Footer } from "@/components/layout/footer"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Home() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="relative min-h-screen bg-bone-white selection:bg-oxblood selection:text-white">
      {/* Grid Lines - Desktop Only */}
      <div className="fixed inset-0 pointer-events-none hidden lg:grid grid-cols-4 gap-0 z-0 opacity-5">
        <div className="border-r border-ink-black h-full" />
        <div className="border-r border-ink-black h-full" />
        <div className="border-r border-ink-black h-full" />
        <div className="border-r border-ink-black h-full" />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Menu Section */}
      <div className="relative z-20 bg-bone-white sticky top-0 lg:static">
        <MenuSection />
      </div>

      {/* Info / Reservations Section */}
      <Reservations />

      <div className="relative z-40">
        <Footer />
      </div>
    </div>
  );
}
