import Link from "next/link"
import { InstagramIcon, LinkedinIcon } from "lucide-react" // Removed FacebookIcon, TwitterIcon

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-8 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Generación T</h3>
          <p className="text-sm text-blue-200">Ecosistema de Inclusión y Futuro. Una iniciativa de Streambe RSE.</p>
          <div className="flex gap-4 mt-4">
            <Link
              href="https://www.generaciont.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white text-sm"
            >
              www.generaciont.org
            </Link>
            <Link
              href="https://www.streambe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white text-sm"
            >
              www.streambe.com
            </Link>
            <Link
              href="https://www.instagram.com/cmstreambe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white text-sm"
            >
              cmstreambe
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
          <nav className="flex flex-col space-y-1">
            <Link href="#programas" className="text-sm hover:underline text-blue-200">
              Programas
            </Link>
            <Link href="#impacto" className="text-sm hover:underline text-blue-200">
              Impacto
            </Link>
            <Link href="#sumarse" className="text-sm hover:underline text-blue-200">
              Cómo Sumarse
            </Link>
            <Link href="#contacto" className="text-sm hover:underline text-blue-200">
              Contacto
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Síguenos</h3>
          <div className="flex gap-4">
            {/* Removed Facebook Link */}
            {/* Removed Twitter Link */}
            <Link
              href="https://www.instagram.com/generaciont_ar?igsh=bHpxbTgwMWx1M2Ry"
              aria-label="Instagram"
              className="text-blue-200 hover:text-white"
            >
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/generaci%C3%B3n-t/"
              aria-label="LinkedIn"
              className="text-blue-200 hover:text-white"
            >
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-600 mt-8 pt-4 text-center text-sm text-blue-200">
        &copy; {new Date().getFullYear()} Generación T. Todos los derechos reservados.
      </div>
    </footer>
  )
}
