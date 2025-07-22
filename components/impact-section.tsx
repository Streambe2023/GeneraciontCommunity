import Image from "next/image"
import { GlobeIcon, UsersIcon, BuildingIcon, SchoolIcon } from "lucide-react"

export default function ImpactSection() {
  return (
    <section id="impacto" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">Nuestro Impacto</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-blue-700 mb-6">Cobertura Federal</h3>
            <Image
              src="/images/mapa-argentina-cobertura.jpeg"
              alt="Mapa interactivo de cobertura federal"
              width={600}
              height={400}
              className="mx-auto rounded-lg shadow-lg mb-8"
            />
            <p className="text-gray-700 text-lg">
              Generación T llega a cada rincón del país, transformando comunidades y brindando oportunidades.
            </p>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-6">Cifras que Inspiran</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg shadow-md">
                <UsersIcon className="h-10 w-10 text-orange-500 mb-2" />
                <span className="text-3xl font-bold text-blue-700">+20.000</span>
                <p className="text-gray-600">Alumnos</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg shadow-md">
                <BuildingIcon className="h-10 w-10 text-orange-500 mb-2" />
                <span className="text-3xl font-bold text-blue-700">+300</span>
                <p className="text-gray-600">Empresas Aliadas</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg shadow-md">
                <GlobeIcon className="h-10 w-10 text-orange-500 mb-2" />
                <span className="text-3xl font-bold text-blue-700">+200</span>
                <p className="text-gray-600">Municipios</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg shadow-md">
                <SchoolIcon className="h-10 w-10 text-orange-500 mb-2" />
                <span className="text-3xl font-bold text-blue-700">+1000</span>
                <p className="text-gray-600">Escuelas</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg shadow-md">
              <span className="text-3xl font-bold text-blue-700">+1000</span>
              <p className="text-gray-600">Convenios</p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-blue-700 mb-6">Prensa y Reconocimientos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Image
                src="/images/mencion-diario-nacional.jpeg"
                alt="Mención en Diario Nacional"
                width={300}
                height={150}
                className="rounded-md mb-4 mx-auto"
              />
              <h4 className="font-semibold text-blue-700">Mención en Diario Nacional</h4>
              <p className="text-sm text-gray-600">Cobertura de nuestro impacto en la educación tecnológica.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Image
                src="/images/premio-innovacion-social.jpeg"
                alt="Premio a la Innovación Social"
                width={300}
                height={150}
                className="rounded-md mb-4 mx-auto"
              />
              <h4 className="font-semibold text-blue-700">Premio a la Innovación Social</h4>
              <p className="text-sm text-gray-600">Reconocimiento por nuestro programa Generación T Inclusivo.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Image
                src="/images/centro-universitario-tigre.jpeg"
                alt="Alianza con Centro Universitario Tigre"
                width={300}
                height={150}
                className="rounded-md mb-4 mx-auto"
              />
              <h4 className="font-semibold text-blue-700">Alianza con Centro Universitario Tigre</h4>
              <p className="text-sm text-gray-600">Colaboración para expandir la formación tecnológica en la región.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
