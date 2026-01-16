"use client";

import { motion } from "framer-motion";

export function Reservations() {
    return (
        <section id="info" className="relative z-30 min-h-[50vh] bg-ink-black text-bone-white p-8 lg:p-24 flex flex-col justify-center">
            <div className="max-w-4xl">
                <motion.h2
                    className="font-display text-5xl lg:text-8xl mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Reservations
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 font-mono text-sm">
                    <div>
                        <p className="opacity-60 mb-2 uppercase tracking-widest text-gold">Hours</p>
                        <p>Thu - Sun</p>
                        <p>5pm - 11pm</p>
                    </div>
                    <div>
                        <p className="opacity-60 mb-2 uppercase tracking-widest text-gold">Location</p>
                        <p>1234 Bone St.</p>
                        <p>San Diego, CA</p>
                    </div>
                    <div>
                        <p className="opacity-60 mb-2 uppercase tracking-widest text-gold">Contact</p>
                        <p>info@carneyhueso.com</p>
                        <p>+1 (619) 555-0123</p>
                    </div>
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-16 w-full lg:w-auto bg-bone-white text-ink-black px-12 py-4 font-mono uppercase hover:bg-oxblood hover:text-white transition-colors border border-transparent hover:border-bone-white"
                >
                    Book a Table
                </motion.button>
            </div>
        </section>
    );
}
