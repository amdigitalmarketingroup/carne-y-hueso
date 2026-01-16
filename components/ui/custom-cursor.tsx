"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false)
    const [isHovering, setIsHovering] = useState(false)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Use a very stiff spring for near-instant response
    const springConfig = { damping: 50, stiffness: 2000, mass: 0.1 }
    const cursorX = useSpring(mouseX, springConfig)
    const cursorY = useSpring(mouseY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
            // Only show custom cursor on desktop
            if (window.innerWidth >= 1024) {
                setIsVisible(true)
            }
        }

        const handleMouseEnter = () => {
            // Check if hovering over a clickable element
            const hovered = document.querySelector('a:hover, button:hover')
            setIsHovering(!!hovered)
        }

        window.addEventListener("mousemove", moveCursor)
        window.addEventListener("mouseover", handleMouseEnter)

        return () => {
            window.removeEventListener("mousemove", moveCursor)
            window.removeEventListener("mouseover", handleMouseEnter)
        }
    }, [mouseX, mouseY])

    if (!isVisible) return null

    return (
        <motion.div
            className={cn(
                "fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference",
                "flex items-center justify-center"
            )}
            style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
            }}
        >
            <motion.div
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    rotate: isHovering ? 45 : 0,
                }}
                className="w-4 h-4 bg-oxblood rounded-full lg:bg-white"
            />
            {/* Plus sign for clinical feel */}
            <div className="absolute w-full h-[1px] bg-white opacity-50" />
            <div className="absolute h-full w-[1px] bg-white opacity-50" />
        </motion.div>
    )
}
