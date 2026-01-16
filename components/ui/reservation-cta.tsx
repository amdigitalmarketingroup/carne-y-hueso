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

            {/* MOBILE: Sticky Bar above Bottom Nav */}
            <motion.div
                className="lg:hidden fixed bottom-[72px] left-0 w-full z-40 px-4 pb-2"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <a
                    href="#reservations"
                    className="block w-full bg-ink-black text-bone-white text-center py-3 font-mono text-xs uppercase tracking-widest rounded-lg shadow-lg"
                >
                    Book a Table
                </a>
            </motion.div>
        </>
    );
}
