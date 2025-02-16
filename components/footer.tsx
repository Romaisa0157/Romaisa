"use client"

import { motion } from "framer-motion"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      <div className="relative backdrop-blur-xl bg-black/[0.02] border-t border-white/[0.05] px-4 pt-0 pb-8 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-8 text-center overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(3rem,20vw,16rem)] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[rgb(250,78,38)] via-orange-500 to-black/40 opacity-20"
            >
              ROMAISA
            </motion.h2>
          </div>
          <div className="flex items-center justify-between text-xs tracking-wider text-gray-400">
            <span className="hover:text-[rgb(250,78,38)] transition-colors duration-300">©2025 ROMAISA DESIGN</span>
            <button 
              onClick={scrollToTop} 
              className="transition-colors hover:text-[rgb(250,78,38)]"
            >
              BACK TO TOP
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

