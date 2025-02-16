"use client"

import { motion } from "framer-motion"
import { InteractiveGrid } from "./interactive-grid"

const experiences = [
  {
    company: "LUMUNATE",
    role: "Creative Design Lead",
    period: "2024 - PRESENT",
    description:
      "Leading creative direction and design strategies to enhance brand identity and user experience. Focused on crafting engaging visual content and optimizing digital interfaces for seamless interaction.",
  },
  {
    company: "128 TECHNOLOGIES",
    role: "FrontEnd Developer",
    period: "June 2024 - August 2024",
    description: "During my internship at 128 Technologies, I designed and developed a responsive website for the CHALO PARHO Pakistan campaign. I implemented dynamic features to improve user interaction and engagement, ensuring a smooth and intuitive experience. Additionally, I managed the deployment process, overseeing the transition from development to launch while maintaining performance and functionality.",
  },
  {
    company: "MISSION CRITICAL COMMUNICATION",
    role: "JUNIOR UX DESIGNER",
    period: "June 2024 - August 2024",
    description: "At MCC, I worked on automating the processing of handwritten forms by integrating TrOCR for handwritten text recognition. I was responsible for scanning, preprocessing, and text detection to improve accuracy and efficiency. Additionally, I preprocessed and annotated datasets for training YOLO models, streamlining template creation for logo and field detection. To further enhance performance, I fine-tuned TrOCR on custom datasets, ensuring precise handwritten text recognition for real-world applications.",
  },
  {
    company: "FREELANCE",
    role: "VIDEO EDITOR",
    period: "2020 - PRESENT",
    description: "As a freelance video editor on Upwork, I specialize in delivering high-quality video content tailored to client needs. My expertise includes seamless cuts, transitions, color grading, and motion graphics to enhance storytelling and engagement. I collaborate with clients from various industries to create visually compelling narratives, ensuring their vision is translated effectively through professional video editing.",
  },
]

export function ExperienceSection() {
  return (
    <section className="relative min-h-screen bg-black px-4 py-24 sm:px-6 lg:px-8">
      {/* <InteractiveGrid /> */}

      {/* Navigation */}
      <div className="mb-24 flex items-center justify-between text-sm tracking-wider text-gray-400">
        <span className="text-[rgb(250,78,38)]">03</span>
        <span className="hover:text-[rgb(250,78,38)] transition-colors duration-300">//EXPERIENCE</span>
        <span className="hover:text-[rgb(250,78,38)] transition-colors duration-300">2022 - PRESENT</span>
      </div>

      {/* Experience List */}
      <div className="container mx-auto">
        <div className="relative space-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative grid gap-4 pl-8 lg:grid-cols-[1fr_200px]"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-3 flex items-center justify-center">
                <div className="h-[10px] w-[10px] rounded-full bg-[rgb(250,78,38)]" />
              </div>

              <div className="space-y-4">
                <motion.h3
                  initial={{ opacity: 0.5 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[rgb(250,78,38)] sm:text-4xl"
                >
                  {exp.company}
                </motion.h3>
                <div className="space-y-2">
                  <p className="text-sm font-medium tracking-wider text-[rgb(250,78,38)]">{exp.role}</p>
                  <p className="max-w-2xl text-gray-500">{exp.description}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm tracking-wider text-gray-400 group-hover:text-[rgb(250,78,38)] transition-colors duration-300">
                  {exp.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

