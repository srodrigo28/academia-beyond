import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Beyond - Academia de Artes Marciais e Fitness",
  description:
    "Academia em Peniche oferecendo Jiu-Jitsu, Muay Thai, NoGi, MMA, Yoga, Pilates e Treino Funcional. Transforme seu corpo e mente.",
  keywords: "academia, peniche, jiu-jitsu, muay thai, mma, yoga, pilates, treino funcional, artes marciais",
  openGraph: {
    title: "Beyond - Academia de Artes Marciais e Fitness",
    description: "Transforme seu corpo e mente através das artes marciais e fitness",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
