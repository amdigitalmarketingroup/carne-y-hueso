"use client"

import { motion } from "framer-motion";

export function ReservationCTA() {
    return (
        <>
            {/* DESKTOP: Top Right Pill */}
            <motion.a
                href="#reservations"
                className="hidden lg:flex fixed top-8 right-8 z-50 bg-ink-black text-bone-white px-6 py-2 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-oxblood transition-colors items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Book a Table
            </motion.a>

            {/* MOBILE: Removed in favor of Bottom Nav Icon */}
        </>
    );
}
