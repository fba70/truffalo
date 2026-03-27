"use client"

import { useReveal } from "@/hooks/use-reveal"
import { Brain, ShieldAlert, Zap } from "lucide-react"
import Image from "next/image"

const useCases = [
  {
    icon: Brain,
    image: "/UC_1.jpg",
    title: "Relationship Intelligence",
    subtitle: "Sales Guide",
    goal: "Win big renewals by knowing exactly who you're dealing with.",
    desktop:
      "Most tools only show a contact's name and title — missing the human history. Truffalo.ai acts as a briefing assistant, uncovering hidden risks: a new exec who blocked similar deals before. The system auto-prepares proposals addressing their specific concerns before they object",
    mobile:
      "Uncover hidden deal risks by surfacing histories and auto-preparing tailored proposals before objections arise",
  },
  {
    icon: ShieldAlert,
    image: "/UC_2.jpg",
    title: "Early Warning",
    subtitle: "Retention System",
    goal: "Stop churn before customers realize they're unhappy.",
    desktop:
      "Companies usually notice churn only when usage drops — too late to save. Truffalo.ai detects quiet warning signs: a key leader browsing competitors, a small uptick in support tickets. It alerts the account manager with a step-by-step save plan based on what kept similar customers before",
    mobile:
      "Detect silent churn signals — competitor browsing, support tickets — and get a plan before it's too late",
  },
  {
    icon: Zap,
    image: "/UC_3.jpg",
    title: "Smart Approval",
    subtitle: "Assistant",
    goal: "Speed up discounts and special requests without losing control.",
    desktop:
      "Sales teams get bogged down waiting for discount approvals, and Finance later questions the logic. Truffalo.ai acts as an automated gatekeeper that understands strategy — instantly approving justified discounts for strategic deals and filing a clear paper trail for audits",
    mobile:
      "Auto-approve strategic discounts instantly with full audit trails — no bottlenecks, no surprises for Finance",
  },
]

export function UseCasesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-6 md:px-12 md:pt-6 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col h-full justify-center gap-6 md:gap-10">
        <div
          className={`transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="font-sans text-3xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Beispiele für Anwendungsfälle
          </h2>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 mt-4">
          {useCases.map((uc, i) => {
            const Icon = uc.icon
            return (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Mobile layout */}
                <div className="flex gap-4 md:hidden">
                  <div className="flex h-18 w-18 shrink-0 items-center justify-center">
                    <Image
                      src={uc.image}
                      alt={uc.title}
                      width={800}
                      height={436}
                      className="object-cover rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-sans text-sm font-medium text-foreground leading-tight">
                      {uc.title}{" "}
                      <span className="text-foreground/60">{uc.subtitle}</span>
                    </h3>
                    <p className="text-xs font-mono leading-snug text-foreground/60">
                      {uc.goal}
                    </p>
                    <p className="text-xs leading-snug text-foreground/80">
                      {uc.mobile}
                    </p>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:flex md:gap-6 lg:gap-10 md:items-start">
                  <div className="flex h-48 w-48 lg:h-48 lg:w-48 shrink-0 items-center justify-center">
                    <Image
                      src={uc.image}
                      alt={uc.title}
                      width={800}
                      height={436}
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h3 className="font-sans text-xl font-medium text-foreground lg:text-4xl">
                      {uc.title}{" "}
                      <span className="font-light text-foreground/70">
                        {uc.subtitle}
                      </span>
                    </h3>
                    <p className="font-mono text-sm text-foreground/60 lg:text-xl">
                      - {uc.goal}
                    </p>
                    <p className="text-xs leading-relaxed text-foreground/80 lg:text-lg max-w-4xl">
                      {uc.desktop}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-sm leading-relaxed text-foreground lg:text-2xl max-w-5xl mt-4 lg:mt-10">
          Ihr Anwendungsfall hier – nehmen Sie Kontakt mit uns auf, damit wir
          daran arbeiten können
        </p>
      </div>
    </section>
  )
}
