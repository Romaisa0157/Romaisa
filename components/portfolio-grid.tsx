"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const portfolioItems = [
  {
    id: 1,
    title: "Urban Photography",
    category: "Photography",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Portrait Series",
    category: "Photography",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Cinematic Short",
    category: "Cinematography",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Street Life",
    category: "Photography",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function PortfolioGrid() {
  return (
    <section className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Latest Portfolio
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={600}
                height={400}
                className="transform object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

