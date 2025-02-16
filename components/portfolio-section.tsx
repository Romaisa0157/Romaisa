"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { InteractiveGrid } from "./interactive-grid"
import img1 from "@/public/veritas_m.png"
import img2 from "@/public/Koinfolio.png"
import img3 from "@/public/Leverage.png"
import img4 from "@/public/FastClean.png"
import img5 from "@/public/AceMyexams.png"

const portfolioItems = [
  {
    title: "Veritas",
    categories: ["UI / UX Design", "Web Development", "Digital Design"],
    image: img1,
    link: "https://veritas-green.vercel.app/",
  },
  {
    title: "Koinfolio",
    categories: ["UI / UX Design", "Digital Design", "Frontend Development"],
    image: img2,
    link: "#",
  },
  {
    title: "Leverage AI",
    categories: ["UI / UX Design", "Branding"],
    image: img3,

    link: "#",
  },
  {
    title: "Fast Clean",
    categories: ["UI / UX Design", "Motion"],
    image: img4,

    link: "#",
  },
  {
    title: "AceMyExams",
    categories: ["UI / UX Design", "Branding"],
    image: img5,

    link: "#",
  },
  {
    title: "Care Connect",
    categories: ["UI / UX Design", "Motion"],
    image: img4,

    link: "#",
  },

]

export function PortfolioSection() {
  return (
    <section className="relative min-h-screen bg-black px-4 py-24 sm:px-6 lg:px-8">
      <InteractiveGrid />

      {/* Navigation */}
      <div className="mb-16 flex items-center justify-between text-sm tracking-wider text-gray-400">
        <span className="text-[rgb(250,78,38)]">02</span>
        <span className="hover:text-[rgb(250,78,38)] transition-colors duration-300">//PORTFOLIO</span>
        <span className="hover:text-[rgb(250,78,38)] transition-colors duration-300">2024 - 2025</span>
      </div>

      {/* Header */}
      <div className="container mx-auto mb-32 max-w-[90%]">
        <div className="flex items-start justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            <span className="text-[rgb(250,78,38)]">LATEST</span>
            <br />
            PORTFOLIO
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[200px] text-right text-sm text-gray-400"
          >
            My creative spirit comes alive in the digital realm. With nimble fingers flying across the device.
          </motion.p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto max-w-[90%]">
        <div className="grid gap-8 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group relative"
            >
              <motion.div
                className="relative mb-10 overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="aspect-[16/11]">
                  <Image 
                    src={item.image || "/placeholder.svg"} 
                    alt={item.title} 
                    fill 
                    className="object-cover"
                    priority={index < 2}
                  />
                </div>
                {/* Overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-[rgb(250,78,38)] bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20"
                />
              </motion.div>

              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-4xl font-medium text-white group-hover:text-[rgb(250,78,38)] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-lg text-gray-400">
                    {item.categories.map((category, i) => (
                      <span key={category}>
                        {category}
                        {i < item.categories.length - 1 && (
                          <span className="mx-3 text-[rgb(250,78,38)]">•</span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
                <motion.a
                  href={item.link}
                  className="flex items-center gap-3 text-lg text-[rgb(250,78,38)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  View Project
                  <ArrowRight className="h-6 w-6" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

