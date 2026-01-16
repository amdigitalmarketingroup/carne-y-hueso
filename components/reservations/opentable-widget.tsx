"use client"

import Script from "next/script"
import { useState } from "react"

export function OpenTableWidget() {
    const [showLargePartyForm, setShowLargePartyForm] = useState(false)

    return (
        <div className="w-full">
            {/* OpenTable Widget Container */}
            <div className="mb-12">
                <div className="border-2 border-ink-black p-8 bg-bone-white">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-ink-black/20">
                        <h3 className="font-display text-3xl">Standard Reservations</h3>
                        <span className="font-mono text-xs uppercase tracking-widest opacity-60">Parties 1-9</span>
                    </div>

                    {/* OpenTable Widget */}
                    <div id="ot-widget-container" className="min-h-[400px]">
                        <Script
                            src="//www.opentable.com/widget/reservation/loader?rid=1480066&type=standard&theme=standard&color=1&dark=false&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website"
                            strategy="lazyOnload"
                        />
                    </div>
                </div>
            </div>

            {/* Large Party Contact */}
            <div className="border-2 border-oxblood bg-bone-white p-8">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-oxblood/20">
                    <h3 className="font-display text-3xl">Large Party Reservations</h3>
                    <span className="font-mono text-xs uppercase tracking-widest text-oxblood">Parties 10+</span>
                </div>

                {!showLargePartyForm ? (
                    <div className="text-center py-8">
                        <p className="font-mono text-sm mb-6 opacity-70">
                            For parties of 10 or more guests, please contact us directly to ensure the best experience.
                        </p>
                        <button
                            onClick={() => setShowLargePartyForm(true)}
                            className="bg-ink-black text-bone-white px-8 py-4 font-mono uppercase text-sm tracking-widest hover:bg-oxblood transition-colors duration-300"
                        >
                            Request Large Party Reservation
                        </button>
                        <div className="mt-6 pt-6 border-t border-ink-black/10">
                            <p className="font-mono text-xs opacity-60">Or call us directly:</p>
                            <a href="tel:+16195550123" className="font-mono text-lg hover:text-oxblood transition-colors">
                                +1 (619) 555-0123
                            </a>
                        </div>
                    </div>
                ) : (
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="font-mono text-xs uppercase tracking-widest block mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full border border-ink-black/20 p-3 font-mono text-sm focus:border-oxblood focus:outline-none bg-bone-white"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div>
                                <label className="font-mono text-xs uppercase tracking-widest block mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full border border-ink-black/20 p-3 font-mono text-sm focus:border-oxblood focus:outline-none bg-bone-white"
                                    placeholder="email@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="font-mono text-xs uppercase tracking-widest block mb-2">Phone</label>
                                <input
                                    type="tel"
                                    className="w-full border border-ink-black/20 p-3 font-mono text-sm focus:border-oxblood focus:outline-none bg-bone-white"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                            <div>
                                <label className="font-mono text-xs uppercase tracking-widest block mb-2">Party Size</label>
                                <input
                                    type="number"
                                    min="10"
                                    className="w-full border border-ink-black/20 p-3 font-mono text-sm focus:border-oxblood focus:outline-none bg-bone-white"
                                    placeholder="10+"
                                />
                            </div>
                            <div>
                                <label className="font-mono text-xs uppercase tracking-widest block mb-2">Preferred Date</label>
                                <input
                                    type="date"
                                    className="w-full border border-ink-black/20 p-3 font-mono text-sm focus:border-oxblood focus:outline-none bg-bone-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="font-mono text-xs uppercase tracking-widest block mb-2">Special Requests</label>
                            <textarea
                                rows={4}
                                className="w-full border border-ink-black/20 p-3 font-mono text-sm focus:border-oxblood focus:outline-none bg-bone-white resize-none"
                                placeholder="Any dietary restrictions, occasion details, or special requests..."
                            />
                        </div>

                        <div className="flex gap-4">
                            <button
                                type="submit"
                                className="flex-1 bg-ink-black text-bone-white px-8 py-4 font-mono uppercase text-sm tracking-widest hover:bg-oxblood transition-colors duration-300"
                            >
                                Submit Request
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowLargePartyForm(false)}
                                className="px-8 py-4 font-mono uppercase text-sm tracking-widest border border-ink-black hover:bg-ink-black hover:text-bone-white transition-colors duration-300"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}
