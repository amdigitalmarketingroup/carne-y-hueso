"use client"

import Script from "next/script"

export function OpenTableWidget() {
    return (
        <div className="border-2 border-ink-black bg-bone-white">
            {/* Header */}
            <div className="border-b-2 border-ink-black p-6">
                <h3 className="font-display text-3xl">Book Your Table</h3>
                <p className="font-mono text-xs uppercase tracking-widest opacity-60 mt-2">
                    Parties up to 9 guests
                </p>
            </div>

            {/* OpenTable Widget Container */}
            <div className="p-6">
                <div
                    id="ot-widget-container"
                    className="min-h-[500px] w-full"
                    style={{
                        width: '100%',
                        maxWidth: '100%'
                    }}
                >
                    <Script
                        src="//www.opentable.com/widget/reservation/loader?rid=1480066&type=standard&theme=standard&color=1&dark=false&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website"
                        strategy="afterInteractive"
                        onLoad={() => {
                            console.log('OpenTable widget loaded')
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
