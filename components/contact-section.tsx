"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react" // Removed InstagramIcon, LinkedinIcon
// Removed Link import as it's no longer needed for social media in this component

export default function ContactSection() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Contacto y Vinculación</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-bold">Envíanos un Mensaje</h3>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-white">
                  Nombre Completo
                </Label>
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  className="bg-blue-600 border-blue-500 text-white placeholder:text-blue-200"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white">
                  Correo Electrónico
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@ejemplo.com"
                  className="bg-blue-600 border-blue-500 text-white placeholder:text-blue-200"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-white">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  placeholder="Escribe tu mensaje aquí..."
                  rows={5}
                  className="bg-blue-600 border-blue-500 text-white placeholder:text-blue-200"
                />
              </div>
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3">
                Enviar Mensaje
              </Button>
            </form>
          </div>
          <div className="space-y-8 text-left lg:pl-12">
            <h3 className="text-2xl font-bold">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MailIcon className="h-6 w-6 text-orange-500" />
                <span className="text-lg">generaciont@streambe.com</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-6 w-6 text-orange-500" />
                <span className="text-lg">+54 1137952229 / +54 1130062248</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-6 w-6 text-orange-500 mt-1" />
                <span className="text-lg">Avenida Regimiento de los Patricios 1052 - Barracas - CABA</span>
              </div>
            </div>
            {/* Removed "Síguenos en Redes" section */}
          </div>
        </div>
      </div>
    </section>
  )
}
