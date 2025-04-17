import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Bed, Map, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.jpg" alt="Finca El Recuerdo" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Experimente el auténtico café de altura de Puebla
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl">
              Descubra la magia de nuestro café de especialidad cultivado en las montañas de Puebla y viva una
              experiencia única en nuestra finca.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/tour-del-cafe">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Reservar Tour
                </Button>
              </Link>
              <Link href="/nuestro-cafe">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                >
                  Descubrir Nuestro Café
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Nuestro Café */}
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-64">
                <Image src="/images/coffee-cherries.jpg" alt="Nuestro Café" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Coffee className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Nuestro Café</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Café de especialidad cultivado a más de 1,500 metros sobre el nivel del mar, con notas de chocolate,
                  caramelo y frutos rojos.
                </p>
                <Link href="/nuestro-cafe">
                  <Button variant="outline" className="w-full">
                    Conocer más
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Hospedaje */}
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-64">
                <Image src="/images/finca-house.jpg" alt="Hospedaje" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Bed className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Hospedaje</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Disfrute de una estancia tranquila en nuestras cabañas rodeadas de naturaleza y con vistas
                  espectaculares a las montañas.
                </p>
                <Link href="/hospedaje">
                  <Button variant="outline" className="w-full">
                    Conocer más
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Tour del Café */}
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-64">
                <Image src="/images/coffee-drying.jpg" alt="Tour del Café" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Map className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Tour del Café</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Conozca todo el proceso del café, desde la semilla hasta la taza, en un recorrido guiado por nuestra
                  finca.
                </p>
                <Link href="/tour-del-cafe">
                  <Button variant="outline" className="w-full">
                    Conocer más
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-natural-200">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Una historia de pasión y tradición</h2>
              <p className="text-muted-foreground mb-6">
                Finca El Recuerdo es una finca cafetalera familiar con más de 30 años de experiencia en el cultivo de
                café de especialidad. Ubicada en las montañas de Puebla, nuestra finca combina la tradición con la
                innovación para producir un café excepcional.
              </p>
              <p className="text-muted-foreground mb-8">
                Nuestro compromiso con la calidad y la sostenibilidad nos ha permitido desarrollar un producto único que
                refleja el terroir de nuestra región y el cuidado con el que tratamos cada grano.
              </p>
              <Link href="/nuestro-cafe">
                <Button>Conocer nuestra historia</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/finca-view.jpg" alt="Finca El Recuerdo" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Lo que dicen nuestros visitantes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubre las experiencias de quienes han visitado Finca El Recuerdo y han disfrutado de nuestro café y
              hospitalidad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="italic text-muted-foreground mb-4">"{testimonial.comment}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Reserva tu experiencia en Finca El Recuerdo</h2>
            <p className="text-lg text-white/80 mb-8">
              Vive la experiencia completa del café de especialidad, desde el cultivo hasta la taza, en un entorno
              natural incomparable.
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

const testimonials = [
  {
    name: "María Rodríguez",
    location: "Ciudad de México",
    comment:
      "Una experiencia inolvidable. El tour del café fue muy educativo y la vista desde la finca es espectacular. ¡El café es delicioso!",
  },
  {
    name: "Carlos Mendoza",
    location: "Guadalajara",
    comment:
      "Las cabañas son muy cómodas y el ambiente es perfecto para desconectar. Aprendí mucho sobre el proceso del café y me llevé varios paquetes a casa.",
  },
  {
    name: "Laura Sánchez",
    location: "Monterrey",
    comment:
      "El mejor café que he probado. El personal es muy amable y conocedor. Definitivamente volveré con mi familia para disfrutar más días en este paraíso.",
  },
]
