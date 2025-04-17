import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function ContactoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/finca-house.jpg"
            alt="Contacto - Finca El Recuerdo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Contacto</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl">
              Estamos aquí para responder a sus preguntas y ayudarle a planificar su visita a Finca El Recuerdo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Envíenos un mensaje</h2>
              <p className="text-muted-foreground mb-8">
                Complete el siguiente formulario y nos pondremos en contacto con usted lo antes posible.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium">
                      Nombre completo
                    </label>
                    <Input id="nombre" type="text" placeholder="Ingrese su nombre" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Correo electrónico
                    </label>
                    <Input id="email" type="email" placeholder="Ingrese su email" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="telefono" className="text-sm font-medium">
                    Teléfono
                  </label>
                  <Input id="telefono" type="tel" placeholder="Ingrese su teléfono" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="asunto" className="text-sm font-medium">
                    Asunto
                  </label>
                  <Input id="asunto" type="text" placeholder="Asunto de su mensaje" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <Textarea id="mensaje" placeholder="Escriba su mensaje aquí..." rows={5} required />
                </div>
                <Button type="submit" className="bg-accent hover:bg-accent/90 text-white">
                  Enviar mensaje
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Información de contacto</h2>
              <p className="text-muted-foreground mb-8">
                No dude en contactarnos directamente utilizando la siguiente información.
              </p>
              <div className="space-y-6">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold mb-1">Dirección</h3>
                        <p className="text-muted-foreground">Km 5 Carretera a Zacapoaxtla, Puebla, México</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold mb-1">Teléfono</h3>
                        <p className="text-muted-foreground">+52 (222) 123 4567</p>
                        <p className="text-muted-foreground">+52 (222) 765 4321</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold mb-1">Correo electrónico</h3>
                        <p className="text-muted-foreground">info@fincaelrecuerdo.com</p>
                        <p className="text-muted-foreground">reservas@fincaelrecuerdo.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold mb-1">Horarios</h3>
                        <p className="text-muted-foreground">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground">Sábados y Domingos: 8:00 AM - 7:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary mb-4">Síganos en redes sociales</h3>
                <div className="flex gap-4">
                  <Link
                    href="https://facebook.com"
                    className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="https://instagram.com"
                    className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://twitter.com"
                    className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 md:py-24 bg-natural-200">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ubicación</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Finca El Recuerdo se encuentra ubicada en un entorno natural privilegiado en las montañas de Puebla.
            </p>
          </div>
          <div className="aspect-[16/9] w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Aquí iría un mapa interactivo */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-muted-foreground">Mapa de ubicación</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Preguntas frecuentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Respuestas a las dudas más comunes sobre cómo contactarnos y visitarnos.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">¿Cómo puedo llegar a Finca El Recuerdo?</h3>
                <p className="text-muted-foreground">
                  Desde la ciudad de Puebla, tome la carretera a Zacapoaxtla. En el kilómetro 5 encontrará la entrada a
                  Finca El Recuerdo, señalizada con nuestro logo. Si viene en transporte público, puede tomar un autobús
                  a Zacapoaxtla y bajarse en la parada "El Recuerdo".
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">¿Es necesario reservar para visitar la finca?</h3>
                <p className="text-muted-foreground">
                  Para el Tour del Café y hospedaje, recomendamos reservar con anticipación para garantizar
                  disponibilidad. Para visitar nuestra tienda o cafetería, no es necesario reservar.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">¿Ofrecen envíos de café a domicilio?</h3>
                <p className="text-muted-foreground">
                  Sí, realizamos envíos a todo México. Los pedidos se procesan en 24-48 horas y el tiempo de entrega
                  depende de la ubicación. Para envíos internacionales, contáctenos directamente.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">¿Puedo organizar eventos en la finca?</h3>
                <p className="text-muted-foreground">
                  Sí, ofrecemos servicios para eventos como bodas, reuniones corporativas y celebraciones familiares.
                  Contáctenos para más información sobre disponibilidad y precios.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para visitarnos?</h2>
            <p className="text-lg text-white/80 mb-8">
              Reserve su tour o estancia en Finca El Recuerdo y viva una experiencia inolvidable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/tour-del-cafe">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Reservar Tour
                </Button>
              </Link>
              <Link href="/hospedaje">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Reservar Hospedaje
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
