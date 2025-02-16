"use client"

import { motion } from "framer-motion"
import { Camera, Film, Edit2 } from "lucide-react"

const services = [
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photography services for events, portraits, and commercial projects.",
  },
  {
    icon: Film,
    title: "Cinematography",
    description: "High-quality video production for commercials, music videos, and short films.",
  },
  {
    icon: Edit2,
    title: "Post-Production",
    description: "Expert editing and color grading to perfect your visual content.",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-neutral-900 py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Services
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-lg border border-neutral-800 p-6"
            >
              <service.icon className="mb-4 h-8 w-8" />
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

