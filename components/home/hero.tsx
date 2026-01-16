"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center lg:justify-start">
            {/* Background - Video Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-ink-black/30 z-10" /> {/* Overlay */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/placeholder-hero.jpg"
                // Using a placeholder reliable video URL or just a div if no video available
                // For now, let's assuming a local asset or external link. 
                // I'll use a solid color fallback with a 'gritty' texture if no video.
                >
                    {/* <source src="/hero-video.mp4" type="video/mp4" /> */}
                </video>
                {/* Fallback Texture */}
                <div className="absolute inset-0 bg-neutral-900 z-0" />
            </div>

            <div className="relative z-20 px-8 lg:px-24 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl"
                >
                    <h1 className="font-display text-white text-7xl lg:text-[10rem] uppercase leading-[0.8] tracking-tighter mix-blend-difference mb-8">
                        Carne & <br /> It's Just <span className="text-terracotta">Blood</span>
                    </h1>

                    <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                        <p className="font-mono text-white/80 max-w-sm text-sm lg:text-base leading-relaxed">
                            An unapologetic exploration of primal dining.
                            San Diego's most uncompromising culinary experience.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="bg-white text-black px-8 py-4 font-mono uppercase text-sm tracking-widest hover:bg-terracotta transition-colors"
                        >
                            Book a Table
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white font-mono text-xs uppercase tracking-widest"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Scroll
            </motion.div>
        </section>
    );
}
