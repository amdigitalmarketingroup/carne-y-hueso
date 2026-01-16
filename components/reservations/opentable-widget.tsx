"use client"

import { useEffect, useRef } from "react"

export function OpenTableWidget() {
    const widgetRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Load OpenTable widget script
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = '//www.opentable.com/widget/reservation/loader?rid=1480066&type=standard&theme=wide&color=1&dark=false&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website'
        script.async = true

        if (widgetRef.current) {
            widgetRef.current.appendChild(script)
        }

        return () => {
            // Cleanup script on unmount
            if (widgetRef.current && script.parentNode === widgetRef.current) {
                widgetRef.current.removeChild(script)
            }
        }
    }, [])

    return (
        <div className="bg-bone-white">
            {/* Clean minimal header */}
            <div className="mb-6">
                <h3 className="font-display text-2xl lg:text-3xl mb-2">Reserve Your Table</h3>
                <p className="font-mono text-xs uppercase tracking-widest opacity-60">
                    For parties up to 9 guests
                </p>
            </div>

            {/* OpenTable Widget Container - Clean presentation */}
            <div
                ref={widgetRef}
                id="ot-widget-container"
                className="w-full min-h-[550px] bg-white rounded-sm shadow-sm"
                style={{
                    border: '1px solid #e5e5e5'
                }}
            />

            <p className="mt-4 font-mono text-xs opacity-60">
                * For parties of 10+ guests, please call us directly at{' '}
                <a href="tel:+16195550123" className="underline hover:text-oxblood">
                    (619) 555-0123
                </a>
            </p>
        </div>
    )
}
