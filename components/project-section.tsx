"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ProjectSection() {
  return (
    <section className="relative min-h-screen bg-black px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto"
      >
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Featured Project
        </motion.h2>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[16/9] overflow-hidden"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cXjX6Puc8E6HChp99w1QNJOgpPWRMs.png"
            alt="Featured project"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h3 className="text-2xl font-bold text-white">Project Title</h3>
            <p className="mt-2 max-w-xl text-gray-300">A brief description of the project and its key features.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

