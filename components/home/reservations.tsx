"use client";

import { motion } from "framer-motion";
import { OpenTableWidget } from "@/components/reservations/opentable-widget";

export function Reservations() {
    return (
        <section id="reservations" className="relative z-30 bg-bone-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-display text-5xl lg:text-8xl mb-4">
                        Reservations
                    </h2>
                    <p className="font-mono text-sm opacity-60 uppercase tracking-widest">
                        Secure Your Table
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Widget Area - Takes more space on desktop */}
                    <div className="lg:col-span-2">
                        <OpenTableWidget />
                    </div>

                    {/* Information Sidebar */}
                    <div className="space-y-8">
                        <div className="border-2 border-ink-black p-6 bg-bone-white">
                            <h3 className="font-display text-2xl mb-6">Visit Us</h3>

                            <div className="space-y-6 font-mono text-sm">
                                <div>
                                    <p className="opacity-60 mb-2 uppercase tracking-widest text-oxblood text-xs">Hours</p>
                                    <p>Thursday - Sunday</p>
                                    <p>5:00 PM - 11:00 PM</p>
                                </div>

                                <div className="border-t border-ink-black/10 pt-6">
                                    <p className="opacity-60 mb-2 uppercase tracking-widest text-oxblood text-xs">Location</p>
                                    <p>1234 Bone Street</p>
                                    <p>San Diego, CA 92101</p>
                                </div>

                                <div className="border-t border-ink-black/10 pt-6">
                                    <p className="opacity-60 mb-2 uppercase tracking-widest text-oxblood text-xs">Contact</p>
                                    <a href="mailto:info@carneyhueso.com" className="block hover:text-oxblood transition-colors">
                                        info@carneyhueso.com
                                    </a>
                                    <a href="tel:+16195550123" className="block hover:text-oxblood transition-colors">
                                        +1 (619) 555-0123
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="border-2 border-ink-black/10 p-6 bg-bone-white">
                            <p className="font-mono text-xs uppercase tracking-widest mb-4 opacity-60">Private Events</p>
                            <p className="font-mono text-sm mb-4">
                                For parties of 10 or more, please contact us directly to arrange your private dining experience.
                            </p>
                            <a
                                href="tel:+16195550123"
                                className="inline-block bg-ink-black text-bone-white px-6 py-3 font-mono uppercase text-xs tracking-widest hover:bg-oxblood transition-colors"
                            >
                                Call for Large Parties
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
