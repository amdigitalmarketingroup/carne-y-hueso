"use client";

import { motion } from "framer-motion";
import { OpenTableWidget } from "@/components/reservations/opentable-widget";

export function Reservations() {
    return (
        <section id="reservations" className="relative z-30 bg-bone-white p-8 lg:p-24">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="font-display text-5xl lg:text-8xl mb-8">
                        Reservations
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-mono text-sm border-t border-b border-ink-black/10 py-8">
                        <div>
                            <p className="opacity-60 mb-2 uppercase tracking-widest text-oxblood">Hours</p>
                            <p>Thu - Sun</p>
                            <p>5pm - 11pm</p>
                        </div>
                        <div>
                            <p className="opacity-60 mb-2 uppercase tracking-widest text-oxblood">Location</p>
                            <p>1234 Bone St.</p>
                            <p>San Diego, CA</p>
                        </div>
                        <div>
                            <p className="opacity-60 mb-2 uppercase tracking-widest text-oxblood">Contact</p>
                            <p>info@carneyhueso.com</p>
                            <p>+1 (619) 555-0123</p>
                        </div>
                    </div>
                </motion.div>

                <OpenTableWidget />
            </div>
        </section>
    );
}
