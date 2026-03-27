"use client"

import { useReveal } from "@/hooks/use-reveal"

const leftItems = [
  "Dokumentationsarbeit zum Preis eines Strategen",
  "Isolierte Datensilos mit niedriger Datenqualität",
  "90% des Kontexts aus unstrukturierten Daten geht verloren",
  "Kein Blick über den Tellerrand des Unternehmens",
]

const rightItems = [
  "Das CRM ist das Tool, das alle lieben sollten, aber fast jeder Verkäufer hasst",
  "Nur 35% der Arbeitszeit ist echte Verkaufsarbeit",
  "Rund 50% geht in Datenpflege und Vorbereitung verloren",
  "Fehlende Synthese führt zu verpassten Chancen und übersehenen Risiken",
]

export function MarketSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-6 md:px-12 md:pt-6 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col h-full justify-center gap-4 md:gap-10">
        <div
          className={`transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="font-sans text-3xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Das Missverständnis CRM
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-y-0 gap-x-6 md:gap-x-12 lg:gap-x-18 mt-4">
          <Column
            heading="Mehrwert?"
            items={leftItems}
            delay={0}
            isVisible={isVisible}
            translateFrom="-translate-x-16"
          />
          <Column
            heading="Oder Frustration?"
            items={rightItems}
            delay={150}
            isVisible={isVisible}
            translateFrom="translate-x-16"
          />
        </div>

        <div
          className={`transition-all duration-700 delay-500 border-t border-foreground/10 pt-4 md:pt-6 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-sm md:text-2xl font-light text-foreground/80">
            Viele CRMs sind teuer erkaufte Frustration ohne relevantem Mehrwert!
          </p>
        </div>
      </div>
    </section>
  )
}

function Column({
  heading,
  items,
  delay,
  isVisible,
  translateFrom,
}: {
  heading: string
  items: string[]
  delay: number
  isVisible: boolean
  translateFrom: string
}) {
  return (
    <div
      className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : `${translateFrom} opacity-0`}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="mb-3 text-lg font-medium text-foreground md:text-4xl md:mb-6">
        {heading}
      </h3>
      <ul className="space-y-2 md:space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 md:gap-3">
            <span className="mt-1 shrink-0 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-foreground/70 translate-y-1" />
            <p className="text-sm leading-snug text-foreground md:text-2xl md:leading-relaxed">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
