"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { menuItems, type Dish } from "@/components/data/menu"
import { X, ArrowRight } from "lucide-react"

export function MenuSection() {
    const [selectedDish, setSelectedDish] = useState<Dish | null>(null)

    return (
        <section
            id="menu"
            className="relative min-h-screen py-32 px-4 lg:px-24 bg-bone-white pb-32" // Added pb-32 for mobile scroll
        >
            <div className="max-w-5xl mx-auto">
                {/* Header with more Identity */}
                <div className="mb-24 flex flex-col lg:flex-row justify-between items-end border-b-2 border-ink-black pb-8">
                    <h2 className="font-display text-6xl lg:text-8xl leading-none">
                        The <br />
                        <span className="text-oxblood italic font-serif px-2">Cure</span>
                    </h2>
                    <p className="font-mono text-xs max-w-xs mt-6 lg:mt-0 text-right opacity-60 uppercase tracking-widest">
                        Surgically precise cuts. <br />
                        Unapologetic flavors.
                    </p>
                </div>

                <div className="flex flex-col gap-20">
                    {["Raw", "Butcher's Cut", "Sides", "Libations"].map((category, index) => (
                        <div key={category} className="relative">
                            {/* Brutalist Category Header */}
                            <div className="flex items-center gap-4 mb-8 opacity-40">
                                <span className="font-mono text-sm">0{index + 1}</span>
                                <div className="h-[1px] w-12 bg-ink-black" />
                                <h3 className="font-mono text-sm uppercase tracking-[0.2em]">
                                    {category}
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 gap-x-12 gap-y-0">
                                {menuItems.filter(item => item.category === category).map((item) => (
                                    <div
                                        key={item.id}
                                        className="group relative border-b border-ink-black/10 py-8 lg:py-10 cursor-pointer lg:hover:border-ink-black transition-colors duration-300"
                                        onClick={() => setSelectedDish(item)}
                                    >
                                        <div className="flex justify-between items-start lg:items-center relative z-10">
                                            <div className="flex-1">
                                                <div className="flex items-baseline gap-4">
                                                    <h4 className="font-display text-3xl lg:text-5xl group-hover:italic transition-all duration-300">
                                                        {item.name}
                                                    </h4>
                                                    {/* Tech Specs / Identity Elements */}
                                                    <span className="hidden lg:inline-block font-mono text-[9px] text-oxblood border border-oxblood px-1 rounded-full uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                                                        Signature
                                                    </span>
                                                </div>
                                                <p className="font-mono text-xs lg:text-sm opacity-50 mt-2 max-w-md">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className="font-mono text-sm lg:text-lg">
                                                    {item.price}
                                                </span>
                                                <ArrowRight className="w-4 h-4 -rotate-45 opacity-0 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-300 text-oxblood hidden lg:block" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* MOBILE: Enhanced Drawer */}
            <AnimatePresence>
                {selectedDish && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-ink-black/60 z-[60] lg:hidden backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedDish(null)}
                        />
                        <motion.div
                            className="fixed bottom-0 left-0 w-full h-[85vh] bg-bone-white z-[70] rounded-t-[2rem] p-0 flex flex-col overflow-hidden"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 250 }}
                        >
                            <div className="relative h-1/2 w-full bg-gray-200">
                                <img
                                    src={selectedDish.image}
                                    alt={selectedDish.name}
                                    className="w-full h-full object-cover grayscale contrast-125"
                                />
                                <button
                                    onClick={() => setSelectedDish(null)}
                                    className="absolute top-4 right-4 p-3 bg-bone-white rounded-full shadow-lg z-10"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bone-white to-transparent" />
                            </div>

                            <div className="flex-1 px-8 pt-4 pb- safe-bottom overflow-y-auto">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <p className="font-mono text-xs text-oxblood uppercase tracking-widest mb-2">Specimen 00{selectedDish.id}</p>
                                        <h3 className="font-display text-4xl leading-none">{selectedDish.name}</h3>
                                    </div>
                                    <span className="font-mono text-xl">{selectedDish.price}</span>
                                </div>

                                <p className="font-mono text-sm leading-relaxed opacity-70 mb-8">
                                    {selectedDish.description}
                                </p>

                                {/* Mock Nutrition Data for "Clinical" feel */}
                                <div className="grid grid-cols-3 gap-4 border-t border-b border-ink-black/10 py-6 mb-8">
                                    <div className="text-center">
                                        <span className="block font-display text-xl">450</span>
                                        <span className="text-[10px] font-mono text-oxblood uppercase">Kcal</span>
                                    </div>
                                    <div className="text-center border-l border-ink-black/10">
                                        <span className="block font-display text-xl">45</span>
                                        <span className="text-[10px] font-mono text-oxblood uppercase">Prot (g)</span>
                                    </div>
                                    <div className="text-center border-l border-ink-black/10">
                                        <span className="block font-display text-xl">MED</span>
                                        <span className="text-[10px] font-mono text-oxblood uppercase">Temp</span>
                                    </div>
                                </div>

                                <button className="w-full bg-ink-black text-bone-white font-mono uppercase py-5 text-sm tracking-widest hover:bg-oxblood transition-colors mb-8">
                                    Initialize Order
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    )
}
