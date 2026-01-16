import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-ink-black text-bone-white py-24 px-6 lg:px-24">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-24">
                {/* Column 1: Brand */}
                <div className="flex-1">
                    <h2 className="font-display text-4xl lg:text-7xl leading-none mb-8">
                        Carne <br />
                        <span className="italic font-serif opacity-50">&</span> Hueso
                    </h2>
                    <p className="font-mono text-xs opacity-50 uppercase tracking-widest max-w-[200px] leading-relaxed">
                        Clinical approach to <br />
                        Primal dining. <br />
                        Est. 2026 — San Diego
                    </p>
                </div>

                {/* Column 2: Links */}
                <div className="flex gap-12 lg:gap-24 font-mono text-sm uppercase tracking-widest">
                    <div className="flex flex-col gap-4">
                        <span className="opacity-40 text-xs mb-2 block">Sitemap</span>
                        <Link href="/" className="hover:text-oxblood transition-colors">Index</Link>
                        <Link href="/gallery" className="hover:text-oxblood transition-colors">Gallery</Link>
                        <Link href="/about" className="hover:text-oxblood transition-colors">About</Link>
                        <Link href="#menu" className="hover:text-oxblood transition-colors">Menu</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="opacity-40 text-xs mb-2 block">Social</span>
                        <a href="#" className="flex items-center gap-1 hover:text-oxblood transition-colors">
                            Instagram <ArrowUpRight className="w-3 h-3" />
                        </a>
                        <a href="#" className="flex items-center gap-1 hover:text-oxblood transition-colors">
                            Twitter <ArrowUpRight className="w-3 h-3" />
                        </a>
                    </div>
                </div>

                {/* Column 3: Newsletter / Interactive */}
                <div className="w-full lg:w-auto max-w-sm">
                    <span className="font-mono text-xs opacity-40 uppercase tracking-widest mb-6 block">Subscribe to our findings</span>
                    <form className="flex border-b border-bone-white/30 pb-2">
                        <input
                            type="email"
                            placeholder="EMAIL ADDRESS"
                            className="bg-transparent border-none text-bone-white placeholder:text-bone-white/20 font-mono text-sm flex-1 focus:outline-none focus:ring-0 px-0"
                        />
                        <button className="font-mono text-xs uppercase hover:text-oxblood transition-colors">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-bone-white/10 flex flex-col lg:flex-row justify-between items-center gap-4 opacity-30 font-mono text-[10px] uppercase">
                <p>© 2026 Carne & Hueso Rights Reserved.</p>
                <p>Designed with Clinical Precision.</p>
            </div>
        </footer>
    )
}
