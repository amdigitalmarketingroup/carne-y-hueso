"use client"
import Link from "next/link";
import { Utensils, Home, Info } from "lucide-react";

export function BottomNav() {
    return (
        <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-bone-white border-t border-ink-black/10 flex justify-between px-8 py-4 z-50 pb-safe">
            <Link href="/" className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 hover:text-oxblood transition-colors">
                <Home className="w-5 h-5" />
                <span className="font-mono text-[10px] uppercase">Home</span>
            </Link>
            <Link href="/gallery" className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 hover:text-oxblood transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                </svg>
                <span className="font-mono text-[10px] uppercase">Gallery</span>
            </Link>
            <Link href="/#menu" className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 hover:text-oxblood transition-colors">
                <Utensils className="w-5 h-5" />
                <span className="font-mono text-[10px] uppercase">Menu</span>
            </Link>
            <Link href="/about" className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 hover:text-oxblood transition-colors">
                <Info className="w-5 h-5" />
                <span className="font-mono text-[10px] uppercase">About</span>
            </Link>
        </nav>
    );
}
