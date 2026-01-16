"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const images = [
    // Column 1
    "https://images.unsplash.com/photo-1544025162-d76690b60943?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1558030006-4506719337d0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1633511874601-e6df588c2278?auto=format&fit=crop&q=80&w=800",

    // Column 2
    "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1619894991049-2e6e22e519c7?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1514362545857-3bc16549766b?auto=format&fit=crop&q=80&w=800",
]

export function ParallaxGallery() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, -200])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])

    const half = Math.ceil(images.length / 2);
    const col1 = images.slice(0, half);
    const col2 = images.slice(half);

    return (
        <section ref={containerRef} className="min-h-screen py-24 px-4 lg:px-24 bg-bone-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h1 className="font-display text-7xl lg:text-9xl mb-24 text-center lg:text-left">
                    Visual <br />
                    <span className="text-oxblood italic font-serif">Evidence</span>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
                    {/* Column 1 - Moves Up */}
                    <motion.div style={{ y }} className="flex flex-col gap-8 lg:gap-24">
                        {col1.map((src, i) => (
                            <div key={i} className="relative group overflow-hidden">
                                <div className="aspect-[3/4] w-full bg-gray-200">
                                    <img src={src} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" />
                                </div>
                                <div className="absolute top-4 left-4 bg-ink-black text-bone-white px-2 py-1 font-mono text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                    Exhibit A-{i + 1}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Column 2 - Moves Down (Parallax) */}
                    <motion.div style={{ y: y2 }} className="flex flex-col gap-8 lg:gap-24 lg:pt-32">
                        {col2.map((src, i) => (
                            <div key={i} className="relative group overflow-hidden">
                                <div className="aspect-[3/4] w-full bg-gray-200">
                                    <img src={src} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" />
                                </div>
                                <div className="absolute top-4 left-4 bg-ink-black text-bone-white px-2 py-1 font-mono text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                    Exhibit B-{i + 1}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
