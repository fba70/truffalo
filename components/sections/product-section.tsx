"use client"

import { useReveal } from "@/hooks/use-reveal"
import {
  CalendarClock,
  Newspaper,
  TabletSmartphone,
  Blocks,
  SquareScissors,
  DatabaseBackup,
} from "lucide-react"

export function ProductSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-6 transition-all duration-700 md:mb-16 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Product Features
          </h2>
        </div>

        <div className="grid gap-x-8 gap-y-4 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          {[
            {
              icon: <CalendarClock />,
              title: "Works while you sleep",
              description: "Search and turns the data into useful content 24x7",
              direction: "top",
            },
            {
              icon: <Newspaper />,
              title: "Information you need",
              description: "Up-to-date information in the relevant format",
              direction: "right",
            },
            {
              icon: <TabletSmartphone />,
              title: "Simple user interface",
              description:
                "Chat with the system or talk to it to get things done",
              direction: "left",
            },
            {
              icon: <Blocks />,
              title: "Get more done as you grow",
              description: "Configure new processes and tools without coding",
              direction: "bottom",
            },
            {
              icon: <SquareScissors />,
              title: "Knows your processes and tools",
              description: "Facilitates processes across tasks and teams",
              direction: "center-left",
            },
            {
              icon: <DatabaseBackup />,
              title: "Automate migration and setup",
              description: "Reduce the time-to-market and migration risks",
              direction: "center-right",
            },
          ].map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: {
    icon: React.ReactNode
    title: string
    description: string
    direction: string
  }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">
          0{index + 1}
        </span>
        <span>{service.icon}</span>
      </div>
      <h3 className="mb-2 font-sans text-2xl font-light text-foreground md:text-3xl">
        {service.title}
      </h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">
        {service.description}
      </p>
    </div>
  )
}
