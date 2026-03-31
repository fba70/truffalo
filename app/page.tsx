"use client"

import { Shader, Swirl } from "shaders/react"
import { MarketSection } from "@/components/sections/market-section"
import { UseCasesSection } from "@/components/sections/use-cases-section"
import { ProductSection } from "@/components/sections/product-section"
import { TeamSection } from "@/components/sections/team-section"
import { ContactSection } from "@/components/sections/contact-section"
import { MagneticButton } from "@/components/magnetic-button"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"

const sections = ["home", "challenge", "solution", "use-cases", "team", "contact"]
const sectionLabels = ["Home", "Challenge", "Solution", "Use Cases", "Team", "Contact"]

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const shaderContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas")
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true)
          return true
        }
      }
      return false
    }

    if (checkShaderReady()) return

    const intervalId = setInterval(() => {
      if (checkShaderReady()) {
        clearInterval(intervalId)
      }
    }, 100)

    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true)
    }, 1500)

    return () => {
      clearInterval(intervalId)
      clearTimeout(fallbackTimer)
    }
  }, [])

  const scrollToSection = (index: number) => {
    const id = sections[index]
    const el = document.getElementById(id)
    if (!el) return
    setCurrentSection(index)
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach((id, index) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCurrentSection(index)
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <main className="relative min-h-screen w-full bg-background">
      <div
        ref={shaderContainerRef}
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ contain: "strict", pointerEvents: "none" }}
      >
        <Shader className="h-full w-full">
          <Swirl
            colorA="#1275d8"
            colorB="#600C6E"
            speed={0.8}
            detail={0.8}
            blend={50}
            coarseX={40}
            coarseY={40}
            mediumX={40}
            mediumY={40}
            fineX={40}
            fineY={40}
          />
        </Shader>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 py-6 transition-opacity duration-700 md:px-12 bg-gray-800/70 backdrop-blur-sm ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={() => scrollToSection(0)}
          className="flex items-center gap-2 md:gap-3 transition-transform hover:scale-105"
        >
          <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-foreground/15 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-foreground/25">
            <Image
              src="/TP_golden_icon_small.jpg"
              alt="TRUFFALO.AI Logo"
              width={40}
              height={40}
              className="border-2 border-foreground rounded-full overflow-hidden object-cover"
            />
          </div>
          <span className="font-sans text-xl md:text-3xl font-semibold tracking-wide bg-linear-to-r from-blue-400 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
            truffalo.ai
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {sectionLabels.map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(index)}
              className={`group relative font-sans text-base font-medium transition-colors ${
                currentSection === index
                  ? "text-foreground"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {item}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                  currentSection === index ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <MagneticButton
            variant="secondary"
            onClick={() => scrollToSection(5)}
            className="text-xs px-2 py-1.5 md:text-sm md:px-4 md:py-2"
          >
            Contact Us
          </MagneticButton>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg bg-foreground/15 backdrop-blur-md transition-all hover:bg-foreground/25"
            aria-label="Open menu"
          >
            <span className="w-5 h-px bg-foreground" />
            <span className="w-5 h-px bg-foreground" />
            <span className="w-5 h-px bg-foreground" />
          </button>
        </div>

      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-100 flex items-end justify-center md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative w-full rounded-t-2xl bg-gray-900/95 backdrop-blur-xl px-6 pt-4 pb-10 border-t border-foreground/10">
            <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-foreground/30" />
            <nav className="flex flex-col gap-1">
              {sectionLabels.map((item, index) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(index)
                    setMenuOpen(false)
                  }}
                  className={`flex items-center justify-between w-full px-4 py-4 rounded-xl font-sans text-base font-medium transition-colors ${
                    currentSection === index
                      ? "bg-foreground/15 text-foreground"
                      : "text-foreground/70 hover:bg-foreground/10 hover:text-foreground"
                  }`}
                >
                  {item}
                  {currentSection === index && (
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      <div
        className={`relative z-10 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Hero Section */}
        <section
          id="home"
          className="flex w-full flex-col items-center px-6 pt-24 pb-12 md:min-h-screen md:justify-center md:px-12 md:pt-28 md:pb-16"
        >
          <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-12 justify-between w-full max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="mb-6 animate-in fade-in slide-in-from-bottom-8 font-sans text-5xl  leading-[1.1] tracking-tight duration-1000 md:text-7xl lg:text-8xl ">
                <span className="font-light">The Agentic</span>
                <br />
                <span className="font-medium bg-linear-to-r from-blue-400 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
                  Truffle Pig
                </span>
              </h1>
              <p className="mb-4 animate-in fade-in slide-in-from-bottom-4 text-base md:text-2xl leading-relaxed text-foreground/90 duration-1000 delay-200">
                Lassen wir uns mit dem Mythos aufräumen, dass „CRM dort endet,
                wo der eigentliche Verkauf beginnt"! Mit{" "}
                <span className="font-medium bg-linear-to-r from-blue-400 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
                  truffalo.ai
                </span>{" "}
                hat dein Sales-Team immer den goldenen Riecher!
              </p>
              <p className="mb-6 animate-in fade-in slide-in-from-bottom-4 text-xs md:text-lg leading-relaxed text-foreground/80 duration-1000 delay-200">
                Unser Trüffelschwein findet im komplexen Dickicht die wertvollen
                Daten-Trüffeln und transformiert sie in gewinnbringende
                Handlungsanweisungen für deine Key Account Manager.
              </p>

              <div className="flex animate-in fade-in slide-in-from-bottom-4 flex-col gap-2 duration-1000 delay-300 sm:flex-row sm:items-center">
                <MagneticButton
                  size="lg"
                  variant="primary"
                  onClick={() => {
                    const a = document.createElement("a")
                    a.href = "/Truffalo_pitch_web.pdf"
                    a.download = "Truffalo_pitch_web.pdf"
                    a.click()
                  }}
                >
                  Download Pitch Slides
                </MagneticButton>
                <MagneticButton
                  size="lg"
                  variant="secondary"
                  onClick={() => scrollToSection(5)}
                  className="hidden sm:block"
                >
                  Contact Us
                </MagneticButton>
              </div>
            </div>

            <div className="w-48 md:w-72 lg:w-120">
              <Image
                src="/TP_logo_golden.jpg"
                alt="TRUFFALO.AI Logo"
                width={352}
                height={400}
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 256px, 352px"
                className="object-contain w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        <MarketSection />
        <ProductSection />
        <UseCasesSection />
        <TeamSection scrollToSection={scrollToSection} />
        <ContactSection />
      </div>
    </main>
  )
}
