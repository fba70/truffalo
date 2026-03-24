"use client"

import { Mail, MapPin, Linkedin, Globe } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import Image from "next/image"
import Link from "next/link"
// import { useState, type FormEvent } from "react"
import { MagneticButton } from "@/components/magnetic-button"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-6 md:px-12 md:pt-6 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-16">
        <div className="flex flex-col justify-center">
          <div
            className={`mb-6 transition-all duration-700 md:mb-12 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-7xl lg:text-8xl">
              Let's talk
            </h2>
            <p className="font-mono text-xs text-foreground/60 md:text-lg">
              / Get in touch with us to get info about
              <br />/ the product and investment opportunities
            </p>
          </div>

          <div className="space-y-4 md:space-y-8">
            <a
              href="mailto:hello@studio.com"
              className={`group block transition-all duration-700 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="mb-1 flex items-center gap-2">
                <Mail className="h-3 w-3 text-foreground/60" />
                <span className="font-mono text-xs text-foreground/60">
                  Email
                </span>
              </div>
              <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                hello@truffalo.ai
              </p>
            </a>

            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              <div className="mb-1 flex items-center gap-2">
                <MapPin className="h-3 w-3 text-foreground/60" />
                <span className="font-mono text-xs text-foreground/60">
                  Location
                </span>
              </div>
              <p className="text-base text-foreground md:text-2xl">
                Vienna, AUSTRIA
              </p>
            </div>

            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              <div className="mb-1 flex items-center gap-2">
                <Linkedin className="h-3 w-3 text-foreground/60" />
                <span className="font-mono text-xs text-foreground/60">
                  LinkedIn
                </span>
              </div>
              <div className="text-base text-foreground md:text-2xl gap-8 md:gap-10 flex flex-wrap justify-start">
                <Link
                  href="https://www.linkedin.com/in/elemermelik/"
                  target="_blank"
                  className="flex flex-row items-center justify-center gap-2"
                >
                  <Globe size={20} />
                  Elemer
                </Link>

                <Link
                  href="https://www.linkedin.com/in/sebastian-gypser-0805403/"
                  target="_blank"
                  className="flex flex-row items-center justify-center gap-2"
                >
                  <Globe size={20} />
                  Sebastian
                </Link>

                <Link
                  href="https://www.linkedin.com/in/bfedotov/"
                  target="_blank"
                  className="flex flex-row items-center justify-center gap-2"
                >
                  <Globe size={20} /> Boris
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-10">
            <MagneticButton
              size="lg"
              variant="primary"
              className="w-full md:w-auto"
              onClick={() => {
                const a = document.createElement("a")
                a.href = "/Truffalo_pitch_web.pdf"
                a.download = "Truffalo_pitch_web.pdf"
                a.click()
              }}
            >
              Download Pitch Slides
            </MagneticButton>
          </div>
        </div>

        {/* Right side - Minimal form */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-64 md:w-64 lg:w-96">
            <Image
              src="/TP_logo_golden.jpg"
              alt="TRUFFALO.AI Logo"
              width={352}
              height={400}
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 256px, 400px"
              className="object-contain w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
