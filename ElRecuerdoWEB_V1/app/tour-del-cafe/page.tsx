import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Coffee, Calendar, CheckCircle2, MapPin } from "lucide-react"

export default function TourDelCafePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/coffee-cherries.jpg" alt="Tour del Café" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Tour del Café</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl">
              Conozca todo el proceso del café, desde la semilla hasta la taza, en un recorrido guiado por nuestra
              finca.
            </p>
            <Link href="#reservar">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Reservar Tour
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tour Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Una experiencia única</h2>
              <p className="text-muted-foreground mb-6">
                El Tour del Café de Finca El Recuerdo es una experiencia educativa y sensorial que le permitirá conocer
                a fondo el fascinante mundo del café de especialidad. Desde el cultivo hasta la taza, aprenderá sobre
                cada etapa del proceso y podrá degustar nuestro café recién tostado.
              </p>
              <p className="text-muted-foreground mb-8">
                Nuestros guías expertos le mostrarán los secretos de la producción de café de alta calidad y compartirán
                con usted la historia y tradición de nuestra finca familiar.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Duración</p>
                    <p className="text-sm text-muted-foreground">2-3 horas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Grupo</p>
                    <p className="text-sm text-muted-foreground">Máx. 10 personas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Incluye</p>
                    <p className="text-sm text-muted-foreground">Degustación</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Disponibilidad</p>
                    <p className="text-sm text-muted-foreground">Todo el año</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/coffee-drying.jpg" alt="Tour del Café" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Tour Itinerary */}
      <section className="py-16 md:py-24 bg-natural-200">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Itinerario del Tour</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conozca las etapas que incluye nuestro recorrido por la finca y el proceso del café.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-primary">Bienvenida</h3>
                </div>
                <p className="text-muted-foreground">
                  Recepción en la finca con una bebida de bienvenida y presentación del recorrido.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-primary">Cultivo</h3>
                </div>
                <p className="text-muted-foreground">
                  Visita a los cafetales para conocer las variedades de café, su cultivo y cosecha.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-primary">Procesamiento</h3>
                </div>
                <p className="text-muted-foreground">
                  Demostración del beneficio húmedo y seco, fermentación y secado del café.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-primary">Degustación</h3>
                </div>
                <p className="text-muted-foreground">
                  Taller de catación y degustación de diferentes preparaciones de nuestro café.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tour Includes */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/finca-view.jpg" alt="Tour del Café" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">¿Qué incluye el tour?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Recorrido guiado por la finca</p>
                    <p className="text-sm text-muted-foreground">
                      Con expertos en café que le explicarán cada etapa del proceso.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Taller de catación</p>
                    <p className="text-sm text-muted-foreground">
                      Aprenda a identificar las características organolépticas del café.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Degustación de café</p>
                    <p className="text-sm text-muted-foreground">
                      Pruebe diferentes preparaciones de nuestro café de especialidad.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Snack regional</p>
                    <p className="text-sm text-muted-foreground">
                      Disfrute de un pequeño refrigerio con productos locales.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Descuento en tienda</p>
                    <p className="text-sm text-muted-foreground">
                      10% de descuento en la compra de nuestros productos.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="reservar" className="py-16 md:py-24 bg-natural-200">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Reservar Tour</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete el siguiente formulario para solicitar información sobre el Tour del Café.
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-medium">
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Ingrese su nombre"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 border rounded-md"
                    placeholder="Ingrese su email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="telefono" className="text-sm font-medium">
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    className="w-full p-2 border rounded-md"
                    placeholder="Ingrese su teléfono"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="personas" className="text-sm font-medium">
                    Número de personas
                  </label>
                  <select id="personas" className="w-full p-2 border rounded-md" required>
                    <option value="">Seleccione</option>
                    <option value="1">1 persona</option>
                    <option value="2">2 personas</option>
                    <option value="3">3 personas</option>
                    <option value="4">4 personas</option>
                    <option value="5">5 personas</option>
                    <option value="6+">6 o más personas</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="fecha" className="text-sm font-medium">
                    Fecha preferida
                  </label>
                  <input id="fecha" type="date" className="w-full p-2 border rounded-md" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="horario" className="text-sm font-medium">
                    Horario preferido
                  </label>
                  <select id="horario" className="w-full p-2 border rounded-md" required>
                    <option value="">Seleccione</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="14:00">2:00 PM</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-sm font-medium">
                  Mensaje o solicitudes especiales
                </label>
                <textarea
                  id="mensaje"
                  className="w-full p-2 border rounded-md"
                  rows={4}
                  placeholder="Ingrese su mensaje"
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
                Enviar solicitud
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Preguntas frecuentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Respuestas a las dudas más comunes sobre nuestro Tour del Café.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">¿Es necesario reservar con anticipación?</h3>
                <p className="text-muted-foreground">
                  Sí, recomendamos reservar con al menos 2 días de anticipación para garantizar disponibilidad,
                  especialmente en temporada alta.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">¿Cuál es el costo del tour?</h3>
                <p className="text-muted-foreground">
                  El tour tiene un costo de $350 MXN por persona. Niños menores de 8 años tienen un 50% de descuento.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">¿Qué ropa y calzado se recomienda?</h3>
                <p className="text-muted-foreground">
                  Recomendamos ropa cómoda, calzado cerrado tipo tenis o botas, sombrero y protector solar. En temporada
                  de lluvias, es aconsejable traer impermeable.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">¿El tour es apto para niños?</h3>
                <p className="text-muted-foreground">
                  Sí, el tour es apto para todas las edades. Contamos con actividades especiales para los más pequeños.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 md:py-24 bg-natural-200">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ubicación</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Finca El Recuerdo se encuentra ubicada en un entorno natural privilegiado en las montañas de Puebla.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-muted-foreground">Km 5 Carretera a Zacapoaxtla, Puebla, México</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                A solo 2 horas de la ciudad de Puebla y 3.5 horas de la Ciudad de México.
              </p>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                {/* Aquí iría un mapa interactivo */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <p className="text-muted-foreground">Mapa de ubicación</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/finca-landscape.jpg"
                alt="Ubicación Finca El Recuerdo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¡Viva la experiencia del café!</h2>
            <p className="text-lg text-white/80 mb-8">
              Reserve ahora su Tour del Café y descubra los secretos detrás de una taza perfecta.
            </p>
            <Link href="#reservar">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Reservar Tour
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
