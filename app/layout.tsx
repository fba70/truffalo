import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TRUFFALO.AI",
  description: "Value beyound the visible",
  keywords: ["TRUFFALO.AI", "AI", "CRM", "AI-agents", "automation", "agentic"],
  openGraph: {
    title: "TRUFFALO.AI",
    description: "TRUFFALO.AI - Value beyond the visible",
    images: "/opengraph-image.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
