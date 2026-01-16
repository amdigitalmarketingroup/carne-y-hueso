"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function Loader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-bone-white flex items-center justify-center pointer-events-none"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-32 h-32 relative">
                        <motion.svg
                            viewBox="0 0 100 100"
                            fill="none"
                            stroke="#1A1A1A"
                            strokeWidth="2"
                            className="w-full h-full"
                        >
                            {/* Circle */}
                            <motion.circle
                                cx="50"
                                cy="50"
                                r="30"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                            {/* Cross Line */}
                            <motion.line
                                x1="20"
                                y1="50"
                                x2="80"
                                y2="50"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                            />
                            {/* Vertical Line */}
                            <motion.line
                                x1="50"
                                y1="20"
                                x2="50"
                                y2="80"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                            />
                        </motion.svg>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
