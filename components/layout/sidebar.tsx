import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="hidden lg:flex fixed top-0 left-0 w-1/4 h-screen flex-col justify-between p-12 border-r border-ink-black/10 bg-bone-white z-40">
            {/* Logo Area */}
            <div>
                <h1 className="font-display text-4xl tracking-tight leading-none uppercase">
                    Carne <br />
                    <span className="text-oxblood">&</span> Hueso
                </h1>
                <p className="font-mono text-xs mt-4 opacity-60">
                    SAN DIEGO, CA
                    <br />
                    EST. 2026
                </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-6 font-mono text-sm uppercase tracking-widest">
                <Link href="/" className="group flex items-center gap-2 hover:text-oxblood transition-colors">
                    <span>01. Index</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link href="/gallery" className="group flex items-center gap-2 hover:text-oxblood transition-colors">
                    <span>02. Gallery</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link href="/about" className="group flex items-center gap-2 hover:text-oxblood transition-colors">
                    <span>03. About</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link href="/#menu" className="group flex items-center gap-2 hover:text-oxblood transition-colors">
                    <span>04. Menu</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link href="/#reservations" className="group flex items-center gap-2 hover:text-oxblood transition-colors">
                    <span>05. Reserve</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
            </nav>

            {/* Footer / Contact */}
            <div className="font-mono text-xs space-y-2 opacity-60">
                <p>1234 Bone Street,</p>
                <p>San Diego, CA 92101</p>
                <p>+1 (619) 555-0123</p>
            </div>
        </aside>
    );
}
