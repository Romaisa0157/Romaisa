"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { InteractiveGrid } from "./interactive-grid"
import Link from "next/link"
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa" // Icons for contact details
import { forwardRef } from "react"

export const ContactSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section 
      ref={ref}
      id="contact-section"
      className="relative min-h-screen bg-black/80 backdrop-blur-sm px-4 py-24 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center"
    >
      <InteractiveGrid />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Heading with Animation */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl mb-12"
          >
            <span className="text-[rgb(250,78,38)]">LET'S WORK</span>
            <br />
            TOGETHER
          </motion.h2>

          {/* Contact Details with Icons and Animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-8 space-y-6 text-lg text-white"
          >
            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center justify-center gap-2 group"
            >
              <FaEnvelope className="text-xl text-[rgb(250,78,38)]" />
              <Link
                href="mailto:romaisa0157@gmail.com"
                className="hover:text-[rgb(250,78,38)] transition-colors duration-300"
              >
                romaisa0157@gmail.com
              </Link>
            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center justify-center gap-2 group"
            >
              <FaPhone className="text-xl text-[rgb(250,78,38)]" />
              <Link
                href="tel:+11234567890"
                className="hover:text-[rgb(250,78,38)] transition-colors duration-300"
              >
                +92 3348709801
              </Link>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center justify-center gap-2 group"
            >
              <FaLinkedin className="text-xl text-[rgb(250,78,38)]" />
              <Link
                href="https://www.linkedin.com/in/romaisa-425ba8227"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[rgb(250,78,38)] transition-colors duration-300"
              >
                LinkedIn Profile
              </Link>
            </motion.div>
          </motion.div>

          {/* Contact Button with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-12"
          >
             
          </motion.div>
        </div>
      </div>

      
    </section>
  )
})