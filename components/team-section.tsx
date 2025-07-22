import Image from "next/image"
import { LinkedinIcon } from "lucide-react"
import Link from "next/link"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Gastón Gugliotta",
      role: "Director de RSE, Streambe",
      image: "/images/gaston-gugliotta.jpeg",
      linkedin: "#",
    },
    {
      name: "Sebastian D'oria",
      role: "Coordinador de Programas",
      image: "/images/sebastian-doria.jpg",
      linkedin: "#",
    },
    {
      name: "Claudio Yapura",
      role: "Líder de Alianzas Estratégicas",
      image: "/images/claudio-yapura.jpg",
      linkedin: "#",
    },
    {
      name: "Nadia Mattina",
      role: "Especialista en Inclusión",
      image: "/images/nadia-mattina.jpeg", // Updated image path
      linkedin: "#",
    },
    {
      name: "Melanie Dabien",
      role: "Especialista en Comunicación",
      image: "/images/melanie-dabien.jpeg",
      linkedin: "#",
    },
  ]

  return (
    <section id="equipo" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">Nuestro Equipo</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
          Conoce al equipo de Streambe RSE detrás del ecosistema Generación T, comprometido con la educación y la
          transformación social.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow-lg">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full object-cover mb-4 border-4 border-orange-500"
              />
              <h3 className="text-xl font-semibold text-blue-700">{member.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{member.role}</p>
              <Link
                href={member.linkedin}
                aria-label={`LinkedIn de ${member.name}`}
                className="text-blue-700 hover:text-orange-500 transition-colors"
              >
                <LinkedinIcon className="h-6 w-6" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
