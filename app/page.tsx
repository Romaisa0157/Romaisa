'use client'
import { Analytics } from "@vercel/analytics/react"
import { HeroSection } from "@/components/hero-section"
import { ApproachSection } from "@/components/approach-section"
import { ExperienceSection } from "@/components/experience-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { useRef } from "react"
import { ServicesSection } from "@/components/services-section"
export default function Home() {
  const contactRef = useRef<HTMLElement>(null)

  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <section id="approach">
        <ApproachSection />
      </section>
      <section id="portfolio">
        <PortfolioSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <ContactSection ref={contactRef} />
      <Footer />
    </main>
  )
}

