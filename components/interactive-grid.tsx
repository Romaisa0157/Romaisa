"use client"

import { useEffect, useRef, useState } from "react"

export function InteractiveGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [sizes, setSizes] = useState({
    size1: Math.floor(Math.random() * 30 + 20),
    size2: Math.floor(Math.random() * 40 + 30),
    size3: Math.floor(Math.random() * 50 + 40),
  })

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      grid.style.setProperty("--x", `${x}px`)
      grid.style.setProperty("--y", `${y}px`)
    }

    const updateSizes = () => {
      setSizes({
        size1: Math.floor(Math.random() * 30 + 20),
        size2: Math.floor(Math.random() * 40 + 30),
        size3: Math.floor(Math.random() * 50 + 40),
      })
    }

    // Update sizes every 3 seconds
    const interval = setInterval(updateSizes, 3000)
    grid.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      grid.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  return (
    <div
      ref={gridRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px),
          linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(to right, rgba(0,0,0,0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.15) 1px, transparent 1px),
          radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.15) 0%, transparent 80%)
        `,
        backgroundSize: `
          ${sizes.size1}px ${sizes.size1}px,
          ${sizes.size1}px ${sizes.size1}px,
          ${sizes.size1}px ${sizes.size1}px,
          ${sizes.size1}px ${sizes.size1}px,
          ${sizes.size2}px ${sizes.size2}px,
          ${sizes.size2}px ${sizes.size2}px,
          ${sizes.size3}px ${sizes.size3}px,
          ${sizes.size3}px ${sizes.size3}px,
          100% 100%
        `,
        opacity: 0.3,
        transition: "background-size 1.5s ease-in-out",
      }}
    />
  )
}

