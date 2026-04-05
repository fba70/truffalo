import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://truffalo.ai"),
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SWYVJVLM7Q"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SWYVJVLM7Q');
          `}
        </Script>
      </head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
