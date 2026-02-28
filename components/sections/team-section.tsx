"use client"

import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"
import Image from "next/image"

export function TeamSection({
  scrollToSection,
}: {
  scrollToSection?: (index: number) => void
}) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side - Story */}
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Our Team
              </h2>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 md:space-y-4 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                Expertise, Experience, Complementarity, Dedication
              </p>
            </div>

            <div
              className={`mt-6 flex flex-wrap gap-3 transition-all duration-700 md:mt-16 md:gap-4 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "750ms" }}
            >
              <MagneticButton
                size="lg"
                variant="primary"
                onClick={() => scrollToSection?.(4)}
              >
                Get in Touch with Us
              </MagneticButton>
            </div>
          </div>

          {/* Right side - Stats with creative layout */}
          <div className="flex flex-col justify-center space-y-8 md:space-y-12">
            {[
              {
                value: "/E.png",
                label: "ELEMER",
                sublabel: "CEO",
                comment: "15+ years of sales leadership",
                direction: "right",
              },
              {
                value: "/S.png",
                label: "SEBASTIAN",
                sublabel: "CCO",
                comment: "17+ years of C-level sales",
                direction: "left",
              },
              {
                value: "/B.png",
                label: "BORIS",
                sublabel: "CTO",
                comment: "20+ years of Telco, IT and AI tech",
                direction: "right",
              },
            ].map((stat, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  return stat.direction === "left"
                    ? "-translate-x-16 opacity-0"
                    : "translate-x-16 opacity-0"
                }
                return "translate-x-0 opacity-100"
              }

              return (
                <div
                  key={i}
                  className={`flex items-center gap-4 border-l border-foreground/30 pl-4 transition-all duration-700 md:gap-8 md:pl-4 ${getRevealClass()}`}
                  style={{
                    transitionDelay: `${300 + i * 150}ms`,
                  }}
                >
                  <Image
                    src={stat.value}
                    alt={stat.label}
                    width={120}
                    height={120}
                    className="border-2 border-foreground rounded-full overflow-hidden object-cover size-24 md:size-36"
                  />

                  <div className="flex flex-col justify-start">
                    <div className="font-sans text-xl font-light text-foreground md:text-4xl">
                      {stat.label}
                    </div>
                    <div className="font-mono text-lg text-foreground/60 md:text-2xl">
                      {stat.sublabel}
                    </div>
                    <div className="font-mono text-xs text-foreground/60 md:text-base">
                      {stat.comment}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
