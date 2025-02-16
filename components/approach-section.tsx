"use client"

import { motion } from "framer-motion"
import { InteractiveGrid } from "./interactive-grid"

const phases = [
  {
    dots: "●",
    title: "Discover & Define",
    description:
      "Every great design starts with a deep understanding. I dive into your vision, audience, and goals through research, conversations, and brainstorming. This phase is all about uncovering the essence of your brand—what makes you unique and how we can translate that into a seamless digital experience.",
  },
  {
    dots: "● ●",
    title: "Design & Craft",
    description:
      "Creativity meets strategy here. Using insights from the discovery phase, I transform ideas into visually compelling and intuitive designs. From wireframes to high-fidelity prototypes, every detail—colors, typography, and layouts—is chosen to enhance usability and create a lasting impact.",
  },
  {
    dots: "● ● ●",
    title: "Deliver & Elevate",
    description:
      "A design is only as good as its execution. I refine, test, and optimize every element to ensure a pixel-perfect and responsive experience. The result? A user-centered interface that not only looks stunning but also feels effortless to navigate.",
  },
]

export function ApproachSection() {
  return (
    <section className="relative min-h-screen bg-black px-4 py-24 sm:px-6 lg:px-8">
      {/* <InteractiveGrid /> */}

      {/* Navigation */}
      <div className="mb-16 flex items-center justify-between text-sm tracking-wider text-gray-400">
        <span className="text-[rgb(250,78,38)]">01</span>
        <span className="hover:text-[rgb(250,78,38)] transition-colors duration-300">//APPROACH</span>
        <span className="hover:text-[rgb(250,78,38)] transition-colors duration-300">THREE PHASES</span>
      </div>

      {/* Main Content */}
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            I'M <span className="text-[rgb(250,78,38)]">ROMAISA</span> BASED IN ISLAMABAD, PAKISTAN.
          </h2>
          <p className="mt-6 text-right text-sm text-gray-400">
            I employed responsive design skills to maintain consistency across all devices.
          </p>
        </motion.div>

        {/* Phases */}
        <div className="space-y-24">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="grid gap-8 lg:grid-cols-[100px_1fr]"
            >
              <div className="text-2xl text-[rgb(250,78,38)]">{phase.dots}</div>
              <div>
                <h3 className="mb-6 text-xl font-bold tracking-wider text-white hover:text-[rgb(250,78,38)] transition-colors duration-300">
                  {phase.title}
                </h3>
                <p className="max-w-2xl text-gray-400">{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

