"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" || target.tagName === "BUTTON" || target.tagName === "A",
      )
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Adjust the breakpoint as needed
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("resize", handleResize)
    handleResize() // Check initial size

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Don't render the cursor on mobile
  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 h-4 w-4 rounded-full bg-white mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full border border-white mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          mass: 0.1,
        }}
      />
    </>
  )
}

