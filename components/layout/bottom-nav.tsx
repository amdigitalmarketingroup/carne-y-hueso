"use client"
import Link from "next/link";
import { Utensils, Home, Info } from "lucide-react";

export function BottomNav() {
    return (
        <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-bone-white border-t border-ink-black/10 flex justify-between items-end px-6 py-3 z-50 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.03)]">
            {/* Left Group */}
            <div className="flex gap-8">
                <Link href="/" className="flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 hover:text-oxblood transition-colors">
                    <Home className="w-5 h-5" />
                    <span className="font-mono text-[9px] uppercase tracking-wider">Home</span>
                </Link>
                <Link href="/gallery" className="flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 hover:text-oxblood transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <span className="font-mono text-[9px] uppercase tracking-wider">Gallery</span>
                </Link>
            </div>

            {/* Center Action Button - Floating effect */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-6">
                <Link
                    href="#reservations"
                    className="flex flex-col items-center justify-center w-14 h-14 bg-ink-black text-bone-white rounded-full shadow-lg hover:bg-oxblood hover:scale-105 transition-all duration-300 border-4 border-bone-white"
                >
                    <Utensils className="w-5 h-5" />
                </Link>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-wider font-bold opacity-80 pt-1">Book</span>
            </div>

            {/* Right Group */}
            <div className="flex gap-8">
                <Link href="/#menu" className="flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 hover:text-oxblood transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                    <span className="font-mono text-[9px] uppercase tracking-wider">Menu</span>
                </Link>
                <Link href="/about" className="flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 hover:text-oxblood transition-colors">
                    <Info className="w-5 h-5" />
                    <span className="font-mono text-[9px] uppercase tracking-wider">About</span>
                </Link>
            </div>
        </nav>
    );
}
