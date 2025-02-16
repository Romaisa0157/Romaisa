'use client'
import { useEffect, useState, useRef } from "react"
import { motion, useSpring } from "framer-motion"
import { MapPin, Globe, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InteractiveGrid } from "@/components/interactive-grid"
import SplineBackground from "@/components/ui/hero_bg"
import { Navbar } from "@/components/navbar"

export function HeroSection() {
  const [time, setTime] = useState("")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  // Create an array of spring references
  const springRefs = useRef([...Array(7)].map(() => 
    useSpring(1, { stiffness: 300, damping: 30 })
  )).current

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      setTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Letter animation variants
  const letterAnimation = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  }

  return (
    <section className="relative flex min-h-screen flex-col bg-black px-4 sm:px-6 lg:px-8">
      {/* Background elements with lower z-index */}
      <div className="absolute inset-0 z-0">
        {/* <SplineBackground /> */}
        <InteractiveGrid />
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10 flex flex-1 flex-col">
        <Navbar />

        {/* Main Title Section */}
        <div className="flex flex-col justify-center items-center min-h-full py-40 text-center">
          {/* Small Introduction */}
          <motion.h4
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-[rgb(250,78,38)] mb-2"
          >
            Hello, I am
          </motion.h4>

          {/* Main Title */}
          <h1 className="flex text-[clamp(4rem,20vw,20rem)] font-bold leading-none tracking-tighter text-white">
            {"ROMAISA".split("").map((letter, i) => {
              const isHovered = hoveredIndex === i
              
              return (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterAnimation}
                  initial="initial"
                  animate="animate"
                  style={{
                    display: 'inline-block',
                    scale: springRefs[i],
                    color: isHovered ? "rgb(250, 78, 38)" : "white",
                  }}
                  onHoverStart={() => {
                    setHoveredIndex(i)
                    springRefs[i].set(1.1)
                  }}
                  onHoverEnd={() => {
                    setHoveredIndex(null)
                    springRefs[i].set(1)
                  }}
                  className="cursor-pointer px-[0.01em] transition-colors duration-200"
                >
                  {letter}
                </motion.span>
              )
            })}
          </h1>

          {/* Small Title Below */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white mt-2"
          >
            Web Designer + Front End Developer
          </motion.h3>

          {/* Resume Download Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              backgroundColor: "rgb(250, 78, 38)",
              borderColor: "rgb(250, 78, 38)",
              color: "rgb(255, 255, 255)",
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 px-6 py-3 rounded-full border border-white bg-transparent text-sm font-light tracking-wider text-white"
            onClick={() => {
              window.open("/path-to-your-resume.pdf", "_blank")
            }}
          >
            RESUME
          </motion.button>
        </div>

        {/* Footer Info */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid gap-6 py-12 text-center text-xs tracking-wider sm:grid-cols-3 sm:gap-4"
        >
          <div className="flex flex-col items-center gap-2">
            <MapPin className="h-4 w-4 text-[rgb(250,78,38)]" />
            <div>
              <div className="font-medium text-white hover:text-[rgb(250,78,38)] transition-colors duration-300">
                BASED IN PAKISTAN,
              </div>
              <div className="text-gray-500">ABBOTTABAD</div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Globe className="h-4 w-4 text-[rgb(250,78,38)]" />
            <div>
              <div className="font-medium text-white hover:text-[rgb(250,78,38)] transition-colors duration-300">
                AVAILABLE ALL AROUND
              </div>
              <div className="text-gray-500">WORLDWIDE</div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Pencil className="h-4 w-4 text-[rgb(250,78,38)]" />
            <div>
              <div className="font-medium text-white hover:text-[rgb(250,78,38)] transition-colors duration-300">
                WEB DESIGNER
              </div>
              <div className="text-gray-500">+ FRONTEND DEVELOPER</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}