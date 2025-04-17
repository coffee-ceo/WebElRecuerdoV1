import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Wifi, Coffee, Utensils, Mountain, Tv, Users } from "lucide-react"

export default function HospedajePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/finca-house.jpg"
            alt="Hospedaje en Finca El Recuerdo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hospedaje en Finca El Recuerdo
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl">
              Disfrute de una estancia tranquila en nuestras cabañas rodeadas de naturaleza y con vistas espectaculares
              a las montañas.
            </p>
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestras Cabañas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos diferentes opciones de alojamiento para que disfrute de una estancia cómoda y memorable en
              nuestra finca cafetalera.
            </p>
          </div>

          <Tabs defaultValue="cabaña-familiar" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="cabaña-familiar">Cabaña Familiar</TabsTrigger>
              <TabsTrigger value="cabaña-pareja">Cabaña para Parejas</TabsTrigger>
              <TabsTrigger value="habitacion-individual">Habitación Individual</TabsTrigger>
            </TabsList>
            <TabsContent value="cabaña-familiar" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image src="/images/finca-house.jpg" alt="Cabaña Familiar" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Cabaña Familiar</h3>
                  <p className="text-muted-foreground mb-6">
                    Nuestra cabaña familiar es perfecta para grupos o familias que desean disfrutar de la tranquilidad
                    de la finca. Con capacidad para hasta 6 personas, cuenta con todas las comodidades necesarias para
                    una estancia placentera.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Capacidad: 6 personas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wifi className="h-5 w-5 text-primary" />
                      <span>WiFi gratuito</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="h-5 w-5 text-primary" />
                      <span>Café de cortesía</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-primary" />
                      <span>Cocina equipada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mountain className="h-5 w-5 text-primary" />
                      <span>Vista a las montañas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tv className="h-5 w-5 text-primary" />
                      <span>TV con streaming</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <p className="text-2xl font-bold">$1,800 MXN</p>
                    <p className="text-sm text-muted-foreground">por noche</p>
                  </div>
                  <Link href="/hospedaje/reservar">
                    <Button className="bg-accent hover:bg-accent/90 text-white">Reservar ahora</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="cabaña-pareja" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image src="/images/finca-landscape.jpg" alt="Cabaña para Parejas" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Cabaña para Parejas</h3>
                  <p className="text-muted-foreground mb-6">
                    Nuestra cabaña para parejas ofrece un ambiente romántico y acogedor, ideal para escapadas en pareja.
                    Disfrute de la privacidad y la belleza natural que rodea nuestra finca.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Capacidad: 2 personas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wifi className="h-5 w-5 text-primary" />
                      <span>WiFi gratuito</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="h-5 w-5 text-primary" />
                      <span>Café de cortesía</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mountain className="h-5 w-5 text-primary" />
                      <span>Vista a las montañas</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <p className="text-2xl font-bold">$1,200 MXN</p>
                    <p className="text-sm text-muted-foreground">por noche</p>
                  </div>
                  <Link href="/hospedaje/reservar">
                    <Button className="bg-accent hover:bg-accent/90 text-white">Reservar ahora</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="habitacion-individual" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image src="/images/finca-view.jpg" alt="Habitación Individual" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Habitación Individual</h3>
                  <p className="text-muted-foreground mb-6">
                    Nuestra habitación individual es perfecta para viajeros solitarios o personas que visitan la finca
                    por motivos de trabajo o estudio. Cómoda y funcional.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Capacidad: 1 persona</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wifi className="h-5 w-5 text-primary" />
                      <span>WiFi gratuito</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="h-5 w-5 text-primary" />
                      <span>Café de cortesía</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mountain className="h-5 w-5 text-primary" />
                      <span>Vista al jardín</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <p className="text-2xl font-bold">$800 MXN</p>
                    <p className="text-sm text-muted-foreground">por noche</p>
                  </div>
                  <Link href="/hospedaje/reservar">
                    <Button className="bg-accent hover:bg-accent/90 text-white">Reservar ahora</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Availability Calendar */}
      <section className="py-16 md:py-24 bg-natural-200">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Disponibilidad</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Consulte la disponibilidad de nuestras cabañas y habitaciones para planificar su estancia.
            </p>
          </div>
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <Calendar mode="single" className="rounded-md border" />
            <div className="mt-6 flex justify-center">
              <Link href="/hospedaje/reservar">
                <Button className="bg-accent hover:bg-accent/90 text-white">Verificar disponibilidad</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Actividades cercanas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Disfrute de diversas actividades durante su estancia en Finca El Recuerdo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-48">
                <Image src="/images/coffee-drying.jpg" alt="Tour del Café" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Tour del Café</h3>
                <p className="text-muted-foreground mb-4">
                  Conozca todo el proceso del café, desde la semilla hasta la taza, en un recorrido guiado por nuestra
                  finca.
                </p>
                <Link href="/tour-del-cafe">
                  <Button variant="outline" className="w-full">
                    Más información
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-48">
                <Image src="/images/finca-view.jpg" alt="Senderismo" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Senderismo</h3>
                <p className="text-muted-foreground mb-4">
                  Explore los senderos naturales que rodean nuestra finca y disfrute de vistas panorámicas de las
                  montañas y los cafetales.
                </p>
                <Link href="/actividades">
                  <Button variant="outline" className="w-full">
                    Más información
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-48">
                <Image src="/images/finca-landscape.jpg" alt="Gastronomía Local" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Gastronomía Local</h3>
                <p className="text-muted-foreground mb-4">
                  Pruebe los platillos típicos de la región, preparados con ingredientes frescos y locales en nuestro
                  restaurante.
                </p>
                <Link href="/gastronomia">
                  <Button variant="outline" className="w-full">
                    Más información
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Reserve su estancia en Finca El Recuerdo</h2>
            <p className="text-lg text-white/80 mb-8">
              Disfrute de una experiencia única en nuestras cabañas rodeadas de naturaleza y con el mejor café de
              especialidad.
            </p>
            <Link href="/hospedaje/reservar">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Reservar ahora
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
