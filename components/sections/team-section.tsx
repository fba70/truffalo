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
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-6 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-4 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side - Story */}
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="font-sans text-3xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Our Team
              </h2>
              <div className="hidden md:block md:w-72 lg:w-120 mt-10">
                <Image
                  src="/T_logo.jpg"
                  alt="TRUFFALO.AI Logo"
                  width={400}
                  height={400}
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 256px, 400px"
                  className="object-contain w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right side - Stats with creative layout */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-12">
            {[
              {
                value: "/E.png",
                label: "ELEMER",
                sublabel: "CEO",
                comment: "15+ years of sales leadership",
                text: "Commercial Leadership, Go-to-market execution, Sales consulting. Responsibilities: Strategy, Driving growth and performance, managing investors",
                direction: "right",
              },
              {
                value: "/S.png",
                label: "SEBASTIAN",
                sublabel: "CCO",
                comment: "17+ years of C-level sales",
                text: "Expertise: Senior Key Account Manager on C-level & Sales Trainer. Responsibilities: Sales and business development, Strategy, Fundraising",
                direction: "left",
              },
              {
                value: "/B.jpg",
                label: "BORIS",
                sublabel: "CTO",
                comment: "20+ years of Telco, IT and AI tech",
                text: "Expertise: Global enterprise platform architecture for up to 50M users. Responsibilities: Product development, Architecture, AI technology",
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
                  className={`flex flex-col gap-2 border-l border-foreground/30 pl-4 transition-all duration-700 ${getRevealClass()}`}
                  style={{
                    transitionDelay: `${300 + i * 150}ms`,
                  }}
                >
                  {/* Top block: image (40%) + label/sublabel (60%) */}
                  <div className="flex items-center gap-4">
                    <div className="w-1/4 shrink-0">
                      <Image
                        src={stat.value}
                        alt={stat.label}
                        width={120}
                        height={120}
                        className="border-2 border-foreground rounded-full overflow-hidden object-cover w-full h-auto"
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                      <div className="font-sans text-2xl font-light text-foreground md:text-4xl">
                        {stat.label}
                      </div>
                      <div className="font-mono text-lg text-foreground/80 md:text-2xl">
                        {stat.sublabel}
                      </div>
                    </div>
                  </div>
                  {/* Bottom block: comment + text */}
                  <div className="flex flex-col gap-1">
                    <div className="font-mono text-sm text-foreground/90 md:text-lg">
                      {stat.comment}
                    </div>
                    <div className="font-mono text-xs text-foreground/70 md:text-base">
                      {stat.text}
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
