import Link from "next/link"
import Image from "next/image" // Import Image component
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white shadow-sm fixed w-full z-50">
      <Link href="#" className="flex items-center gap-2">
        <Image
          src="/images/generacion-t-header-logo.png"
          alt="Generación T Logo"
          width={150} // Adjust width as needed
          height={40} // Adjust height as needed
          className="object-contain"
        />
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link href="#que-es" className="text-sm font-medium hover:text-blue-700 transition-colors">
          ¿Qué es?
        </Link>
        <Link href="#programas" className="text-sm font-medium hover:text-blue-700 transition-colors">
          Programas
        </Link>
        <Link href="#impacto" className="text-sm font-medium hover:text-blue-700 transition-colors">
          Impacto
        </Link>
        <Link href="#sumarse" className="text-sm font-medium hover:text-blue-700 transition-colors">
          Cómo Sumarse
        </Link>
        <Link href="#equipo" className="text-sm font-medium hover:text-blue-700 transition-colors">
          Equipo
        </Link>
        <Link href="#contacto" className="text-sm font-medium hover:text-blue-700 transition-colors">
          Contacto
        </Link>
      </nav>
      <Button className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600 text-white">
        <Link href="#contacto">Contactar</Link>
      </Button>
    </header>
  )
}
