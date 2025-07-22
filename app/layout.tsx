import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Lato } from "next/font/google"
import "./globals.css"

// Define fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-poppins" })
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" })

export const metadata: Metadata = {
  title: "Generación T — Ecosistema de Inclusión y Futuro",
  description:
    "Presentamos el ecosistema completo de programas Generación T, su impacto, cobertura nacional, objetivos, metodologías, testimonios, alianzas y resultados.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  )
}
