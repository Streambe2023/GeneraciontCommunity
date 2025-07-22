import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/placeholder.svg?height=1000&width=1920"
        alt="Jóvenes aprendiendo, mapas y logos institucionales"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-blue-900 opacity-70 z-10" />
      <div className="relative z-20 text-white px-4 md:px-6 max-w-4xl space-y-6">
        <Image
          src="/images/generacion-t-logo-hero.jpeg"
          alt="Generación T Logo"
          width={800} // Aumentar el ancho para un efecto de banner
          height={120} // Ajustar la altura para mantener una proporción de banner
          className="mx-auto mb-4"
        />
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-8">El futuro Empieza con Vos</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Link href="#programas">Conocé los Programas</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-700 text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Link href="#sumarse">Sumá tu Municipio</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
