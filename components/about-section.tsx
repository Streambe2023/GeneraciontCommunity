import Image from "next/image"
import { GraduationCapIcon, TrendingUpIcon, AccessibilityIcon, HeartPulseIcon } from "lucide-react"
import LogoCarousel from "./logo-carousel" // Import the new component

export default function AboutSection() {
  const strategicPartners = [
    { src: "/images/practicas-profesionalizantes.png", alt: "Logo Prácticas Profesionalizantes" },
    { src: "/images/lanus-gobierno.jpeg", alt: "Logo Lanús Gobierno" },
    { src: "/images/vicente-lopez.png", alt: "Logo Vivamos Vicente López" },
    { src: "/images/nueve-de-julio-municipalidad.jpeg", alt: "Logo Nueve de Julio Municipalidad" },
    { src: "/images/logo-de-la-plata.jpeg", alt: "Logo Municipalidad de La Plata" },
    { src: "/images/municipio-de-tigre.png", alt: "Logo Tigre Municipio" },
    { src: "/images/gobierno-de-florentino-ameghino.jpeg", alt: "Logo Gobierno de Florentino Ameghino" },
    { src: "/images/municipio-de-fontana.jpeg", alt: "Logo Municipio de Fontana" },
    { src: "/images/salta-municipalidad.jpeg", alt: "Logo Salta Municipalidad" },
    { src: "/images/florencio-varela-municipalidad.jpeg", alt: "Logo Florencio Varela Municipalidad" },
    { src: "/images/gobierno-de-tucuman.jpeg", alt: "Logo Gobierno de Tucumán" },
    { src: "/images/iprodi.jpeg", alt: "Logo IPRODI - Instituto Provincial de Discapacidad" },
    { src: "/images/ba-discapacidad.jpeg", alt: "Logo BA Discapacidad" },
    { src: "/images/cai.png", alt: "Logo C.A.I." },
    { src: "/images/lanus.png", alt: "Logo Lanús" },
    { src: "/images/byma.jpeg", alt: "Logo BYMA - Bolsas y Mercados Argentinos" },
    { src: "/images/chubut.png", alt: "Logo Chubut" },
    { src: "/images/benito-juarez.png", alt: "Logo Municipio de Benito Juarez" },
    { src: "/images/friedrich-naumann-foundation.jpeg", alt: "Logo Friedrich Naumann Foundation" },
    { src: "/images/cookmaster.png", alt: "Logo Cook Master" },
    { src: "/images/natura.png", alt: "Logo Natura" },
    { src: "/images/nodo-tecnologico.png", alt: "Logo Nodo Tecnológico" },
  ]

  return (
    <section id="que-es" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8">¿Qué es Generación T?</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
          Generación T es un ecosistema de programas de transformación social y territorial, nacido desde el sector
          privado con una profunda vocación pública.Utiliza la tecnología como motor de inclusión, desarrollo, salud y
          empleabilidad, articulando el esfuerzo conjunto de municipios, provincias, escuelas, empresas, ONGs y
          organismos del Estado para generar oportunidades donde antes no las había.
        </p>
        <h3 className="text-2xl font-bold text-blue-700 mb-6">Problemáticas que nos Impulsan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-red-50 rounded-lg shadow-md">
            <GraduationCapIcon className="h-12 w-12 text-red-500 mb-4" />
            <h4 className="text-xl font-semibold text-red-700 mb-2">La Educación</h4>
            <ul className="text-gray-600 text-left list-disc list-inside space-y-1">
              <li>Argentina ha perdido valor agregado en generaciones sin la formación suficiente.</li>
              <li>Baja inscripción en escuelas técnicas y baja egresabilidad universitarias en ciencias duras.</li>
              <li>La formación media no está alineada con la demanda del mercado.</li>
              <li>Jóvenes no muestran interés en IT, optando por carreras humanísticas.</li>
              <li>
                Argentina podría ser principal exportador de tecnología si potenciase la comunicación sobre la
                industria.
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center p-6 bg-red-50 rounded-lg shadow-md">
            <TrendingUpIcon className="h-12 w-12 text-red-500 mb-4" />
            <h4 className="text-xl font-semibold text-red-700 mb-2">Demanda Tecnológica</h4>
            <ul className="text-gray-600 text-left list-disc list-inside space-y-1">
              <li>La pandemia aceleró la demanda tecnológica y hay escasez.</li>
              <li>Faltante de 15.000 profesionales IT por año.</li>
              <li>El rubro IT podría ser la 2° industria generadora de divisas luego del campo.</li>
            </ul>
          </div>
          {/* Nueva problemática: Accesibilidad e inclusión laboral real para personas con discapacidad */}
          <div className="flex flex-col items-center p-6 bg-red-50 rounded-lg shadow-md">
            <AccessibilityIcon className="h-12 w-12 text-red-500 mb-4" />
            <h4 className="text-xl font-semibold text-red-700 mb-2">
              Accesibilidad e Inclusión Laboral para Personas con Discapacidad
            </h4>
            <ul className="text-gray-600 text-left list-disc list-inside space-y-1">
              <li>Argentina presenta una tasa de desempleo entre personas con discapacidad cercana al 70%.</li>
              <li>Existencia de una brecha en la inclusión laboral de personas con discapacidad.</li>
            </ul>
          </div>
          {/* Nueva problemática: Salud */}
          <div className="flex flex-col items-center p-6 bg-red-50 rounded-lg shadow-md">
            <HeartPulseIcon className="h-12 w-12 text-red-500 mb-4" />
            <h4 className="text-xl font-semibold text-red-700 mb-2">Salud</h4>
            <ul className="text-gray-600 text-left list-disc list-inside space-y-1">
              <li>Desigualdad en el acceso a la salud.</li>
              <li>Atención primaria de la salud poco eficiente.</li>
              <li>Gestión lenta de la salud como servicio esencial.</li>
            </ul>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-blue-700 mb-6">Nuestro Ecosistema</h3>
        <Image
          src="/images/ecosistema-generacion-t.jpeg"
          alt="Infografía del ecosistema Generación T"
          width={800}
          height={400}
          className="mx-auto rounded-lg shadow-lg mb-12"
        />
        <h3 className="text-2xl font-bold text-blue-700 mb-6">Nuestros Aliados Estratégicos</h3>
        <LogoCarousel logos={strategicPartners} /> {/* Use the new LogoCarousel component */}
        <p className="text-gray-700 text-lg mt-8 font-extrabold">y muchos más...</p>
      </div>
    </section>
  )
}
