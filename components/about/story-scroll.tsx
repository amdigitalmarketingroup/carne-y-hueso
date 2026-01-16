"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const story = [
    {
        year: "2024",
        title: "The Conception",
        text: "It started with a question: Why must fine dining be sterile? We wanted the clinical precision of surgery but the raw, primal emotion of the hunt."
    },
    {
        year: "2025",
        title: "The Structure",
        text: "We found an abandoned medical archive in downtown San Diego. The bones of the building were perfect. Cold concrete, exposed steel. We left it exposed."
    },
    {
        year: "2026",
        title: "The Flesh",
        text: "Carne & Hueso opens. Not just a restaurant, but a study in contrast. Life and death on a plate. Served with absolute precision."
    }
]

export function StoryScroll() {
    return (
        <section className="bg-ink-black text-bone-white min-h-screen py-32 px-6 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-display text-6xl lg:text-8xl mb-32 border-b border-bone-white/20 pb-8">
                    Origin <span className="text-oxblood">Story</span>
                </h1>

                <div className="space-y-48">
                    {story.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
                        >
                            <div className="lg:col-span-3">
                                <span className="font-mono text-oxblood text-xl lg:text-2xl border border-oxblood px-4 py-2 rounded-full inline-block">
                                    {item.year}
                                </span>
                            </div>
                            <div className="lg:col-span-9">
                                <h3 className="font-display text-4xl lg:text-5xl mb-6">{item.title}</h3>
                                <p className="font-mono text-sm lg:text-lg opacity-70 leading-relaxed max-w-2xl">
                                    {item.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Manifesto */}
                <div className="mt-48 p-12 lg:p-24 border border-bone-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-50">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor">
                            <path d="M0 0L50 50M50 0L0 50" />
                        </svg>
                    </div>
                    <h4 className="font-mono text-xs uppercase tracking-widest mb-8 text-oxblood">The Manifesto</h4>
                    <p className="font-display text-3xl lg:text-5xl leading-tight">
                        "We believe in the bone as much as the meat. The structure as much as the flavor. Dining is not just sustenance, it is an architectural event."
                    </p>
                    <p className="font-mono text-sm mt-8 opacity-50 text-right">
                        — Executive Chef, Marco V.
                    </p>
                </div>
            </div>
        </section>
    )
}
