"use client"

import Image from "next/image"
import { useReveal } from "@/hooks/use-reveal"

const cards = [
  {
    image: "/P1.jpg",
    title: "Autonome Aktion",
    text: "Sichert höchste Datenqualität durch autonome 24/7 Datenpflege über alle Kanäle",
  },
  {
    image: "/P2.jpg",
    title: "Intelligente Synthese",
    text: "Identifiziert Chancen sowie Risiken durch Synthese interner (Mail, Chat, CRM/ERP) und externer Signale",
  },
  {
    image: "/P3.jpg",
    title: "Data to Insight Interface",
    text: "Liefert Action Cards mit Strategieempfehlungen in verifizierter Form",
  },
]

const bottomBullets = [
  "Deep Sales Intelligence durch Context Graphs",
  "LLM Modelle Agnostik durch modulare Architektur",
  "Behält Entscheidungen und die Gründe dafür im Gedächtnis",
  "Gilt für alle Unternehmensdaten und -prozesse",
  "Automatisierte Datenmigration und Inbetriebnahme in 3 Tagen",
  "Sovereign-by-Design durch Split-Brain-Architektur",
]

export function ProductSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      id="solution"
      className="flex w-full px-6 pt-24 pb-12 md:min-h-screen md:items-center md:px-12 md:pt-28 md:pb-16 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-6 md:gap-10">
        <div
          className={`transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="font-sans text-3xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Unsere Lösung
          </h2>
        </div>

        {/* 3-column cards */}
        <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-8 lg:gap-12">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Mobile: image left + text right */}
              <div className="flex gap-4 md:hidden">
                <div className="w-20 h-20 shrink-0 overflow-hidden rounded-lg border border-foreground/80">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={768}
                    height={768}
                    className="object-cover w-full h-auto"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-sans text-base font-medium text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-xs leading-snug text-foreground/80">
                    {card.text}
                  </p>
                </div>
              </div>
              {/* Desktop: vertical stack */}
              <div className="hidden md:flex md:flex-col md:gap-3">
                <div className="relative w-full overflow-hidden rounded-lg border-2 border-foreground/80">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={768}
                    height={768}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-sans text-xl font-medium text-foreground lg:text-3xl lg:mt-2">
                  {card.title}
                </h3>
                <p className="text-xs text-foreground/70 md:text-lg">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div
          className={`border-t border-foreground/10 pt-4 md:pt-6 transition-all duration-700 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h3 className="mb-3 font-sans text-2xl font-light text-foreground md:text-5xl md:mb-6">
            USPs - Values - Moats
          </h3>
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3">
            {bottomBullets.map((bullet, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="shrink-0 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-foreground/70" />
                <p className="text-sm text-foreground md:text-xl md:leading-relaxed">
                  {bullet}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
