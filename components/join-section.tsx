import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BuildingIcon, BriefcaseIcon, GraduationCapIcon, UserIcon, AccessibilityIcon } from "lucide-react"
import Link from "next/link"

export default function JoinSection() {
  const joinOptions = [
    {
      title: "Municipios",
      icon: <BuildingIcon className="h-10 w-10 text-orange-500" />,
      description: "Integra Generación T en tu comunidad y potencia el desarrollo local.",
      link: "#contacto",
    },
    {
      title: "Empresas",
      icon: <BriefcaseIcon className="h-10 w-10 text-orange-500" />,
      description: "Alíate con nosotros y contribuye a la formación de talento tecnológico.",
      link: "#contacto",
    },
    {
      title: "Docentes",
      icon: <GraduationCapIcon className="h-10 w-10 text-orange-500" />,
      description: "Capacítate en IT y sé parte de la transformación digital educativa.",
      link: "#contacto",
    },
    {
      title: "Estudiantes",
      icon: <UserIcon className="h-10 w-10 text-orange-500" />,
      description: "Accede a formación gratuita en tecnología y abre puertas a tu futuro.",
      link: "#contacto",
    },
    {
      title: "Personas con Discapacidad",
      icon: <AccessibilityIcon className="h-10 w-10 text-orange-500" />,
      description: "Programas inclusivos diseñados para tu desarrollo en el mundo tech.",
      link: "#contacto",
    },
  ]

  return (
    <section id="sumarse" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">Cómo Sumarse</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {joinOptions.map((option, index) => (
            <Card
              key={index}
              className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">{option.icon}</div>
                <CardTitle className="text-xl font-semibold text-blue-700">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="w-full">
                <p className="text-gray-600 mb-6">{option.description}</p>
                <Button asChild className="bg-blue-700 hover:bg-blue-800 text-white">
                  <Link href={option.link}>Más Información</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
