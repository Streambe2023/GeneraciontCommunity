import {
  CodeIcon,
  AccessibilityIcon,
  HeartPulseIcon,
  GraduationCapIcon,
  UsersIcon,
  BookOpenIcon,
  SearchIcon,
  ClockIcon,
  BusIcon as SoccerBallIcon,
} from "lucide-react"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function ProgramsSection() {
  const programs = [
    {
      id: "trayecto-formativo",
      icon: <CodeIcon className="h-8 w-8 text-orange-500" />,
      title: "Generación T – Trayecto Formativo",
      description:
        "Formación gratuita en desarrollo web full-stack, IA y habilidades blandas para estudiantes de 5.º y 6.º año.",
      details: [
        "Cobertura federal – 14 000 alumnos / 170 municipios / +1 000 escuelas.",
        "Prácticas profesionalizantes y portal de empleabilidad.",
      ],
      link: "https://generaciont.org/",
    },
    {
      id: "inclusivo",
      icon: <AccessibilityIcon className="h-8 w-8 text-orange-500" />,
      title: "Generación T Inclusivo",
      description: "Trayecto tecnológico adaptado para personas con discapacidad (LSA, pictogramas, fácil lectura).",
      details: ["Accesibilidad integral, premios nacionales e impacto binacional (AR + UY)."],
    },
    {
      id: "salud",
      icon: <HeartPulseIcon className="h-8 w-8 text-orange-500" />,
      title: "Generación Salud",
      description: "Educación para la salud y la vida activa; hábitos saludables y empleabilidad en el sector.",
      details: ["Promoción de autocuidado y vida saludable en todo el país."],
      link: "https://www.generacionsalud.com/",
    },
    {
      id: "formador-de-formadores",
      icon: <GraduationCapIcon className="h-8 w-8 text-orange-500" />,
      title: "Generación T Formador de Formadores",
      description:
        "Capacitación docente en IT (puntaje oficial de acuerdo a cada Jurisdicción) 100 % online con enfoque en transformación digital educativa.",
      details: ["Programa certificado y avalado por organismos educativos."],
    },
    {
      id: "academy",
      icon: <UsersIcon className="h-8 w-8 text-orange-500" />,
      title: "Generación T Academy",
      description: "Capacitación ad hoc en tecnología y soft skills para municipios, organismos y empresas.",
      details: ["Planes formativos diseñados a medida de cada institución."],
      link: "https://academy.generaciont.org/academy/",
    },
    {
      id: "alas",
      icon: <BookOpenIcon className="h-8 w-8 text-orange-500" />,
      title: "Generación T Alas",
      description:
        "Inclusión digital para jóvenes en contexto de encierro y privados de su libertad: formación técnica, red de mentores y empleabilidad real.",
      details: ["IT + habilidades emocionales, coaching, narrativa de transformación."],
    },
    {
      id: "observatorio",
      icon: <SearchIcon className="h-8 w-8 text-orange-500" />,
      title: "Generación T Observatorio",
      description: "Área de datos e investigación: informes abiertos para políticas públicas basadas en evidencia.",
      details: ["Monitoreo de movilidad social, salud, educación y empleo juvenil."],
    },
    {
      id: "level-plus",
      icon: <ClockIcon className="h-8 w-8 text-orange-500" />,
      title: "Generación T Level +",
      description: "Cursos Asincrónicos para que aprendas a tu ritmo.",
      details: ["Acceso flexible a contenidos educativos de alta calidad."],
      link: "https://academy.generaciont.org/level-mas/",
    },
    {
      id: "clubes",
      icon: <SoccerBallIcon className="h-8 w-8 text-orange-500" />, // Using SoccerBallIcon for clubs
      title: "Generación T Clubes",
      description: "Formación de impacto en tecnología para jóvenes estudiantes de Clubes de Fútbol.",
      details: ["Programa enfocado en el desarrollo tecnológico y personal de jóvenes deportistas."],
    },
  ]

  return (
    <section id="programas" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">Programas del Ecosistema</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Link
              key={program.id}
              href={program.link || "#"} // Use program.link if available, otherwise a placeholder
              target={program.link ? "_blank" : undefined} // Open in new tab if link exists
              rel={program.link ? "noopener noreferrer" : undefined} // Add rel for security
              className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow rounded-lg" // Apply card styles to Link
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">{program.icon}</div>
                <CardTitle className="text-xl font-semibold text-blue-700">{program.title}</CardTitle>
                <CardDescription className="text-gray-600 mt-2">{program.description}</CardDescription>
              </CardHeader>

              <CardContent className="w-full pt-0">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-blue-600 hover:text-blue-700">Ver más</AccordionTrigger>
                    <AccordionContent className="text-left text-gray-700 mt-2">
                      <ul className="list-disc list-inside space-y-1">
                        {program.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
