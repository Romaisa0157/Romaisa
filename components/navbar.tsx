 'use client'
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function Navbar() {
  const [time, setTime] = useState("")

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

  return (
    <div className="flex items-center justify-between py-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-sm font-light tracking-wider text-gray-400"
      >
        <span className="mr-2 text-[rgb(250,78,38)]">LOCAL/</span>
        {time}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center space-x-8 z-10"
      >
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { name: "Approach", href: "#approach" },
            { name: "Portfolio", href: "#portfolio" },
            { name: "Experience", href: "#experience" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-[rgb(250,78,38)] text-sm font-light tracking-wider transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{
            backgroundColor: "rgb(250, 78, 38)",
            borderColor: "rgb(250, 78, 38)",
            color: "rgb(255, 255, 255)",
            transition: { duration: 0.3 },
          }}
          className="rounded-full border border-white bg-transparent px-6 py-2 text-sm font-light tracking-wider text-white transition-all duration-300"
          onClick={() => {
            document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          CONTACT NOW
        </motion.button>
      </motion.div>
    </div>
  )
}