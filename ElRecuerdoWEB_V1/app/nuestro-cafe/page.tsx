import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Coffee, Award, Leaf, Droplet } from "lucide-react"

export default function NuestroCafePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/coffee-cherries.jpg" alt="Nuestro Café" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Nuestro Café</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl">
              Descubra el auténtico sabor del café de altura cultivado con pasión y tradición en las montañas de Puebla.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Nuestra Historia</h2>
              <p className="text-muted-foreground mb-6">
                Finca El Recuerdo es una finca cafetalera familiar con más de 30 años de experiencia en el cultivo de
                café de especialidad. Ubicada en las montañas de Puebla, nuestra finca combina la tradición con la
                innovación para producir un café excepcional.
              </p>
              <p className="text-muted-foreground mb-6">
                Todo comenzó en 1990, cuando la familia Hernández adquirió estas tierras con el sueño de producir un
                café que reflejara la riqueza del terroir local. A lo largo de los años, hemos perfeccionado nuestras
                técnicas de cultivo, procesamiento y tostado, siempre con un compromiso inquebrantable con la calidad y
                la sostenibilidad.
              </p>
              <p className="text-muted-foreground mb-6">
                Hoy, Finca El Recuerdo es reconocida por producir uno de los mejores cafés de especialidad de la región,
                con un perfil de sabor único que ha ganado premios nacionales e internacionales.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/finca-view.jpg" alt="Finca El Recuerdo" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-natural-200">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestro Proceso</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada etapa del proceso de producción de nuestro café es cuidadosamente supervisada para garantizar la
              máxima calidad.
            </p>
          </div>

          <Tabs defaultValue="cultivo" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="cultivo">Cultivo</TabsTrigger>
              <TabsTrigger value="cosecha">Cosecha</TabsTrigger>
              <TabsTrigger value="procesamiento">Procesamiento</TabsTrigger>
              <TabsTrigger value="tostado">Tostado</TabsTrigger>
            </TabsList>
            <TabsContent value="cultivo" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image src="/images/finca-view.jpg" alt="Cultivo de Café" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Cultivo</h3>
                  <p className="text-muted-foreground mb-6">
                    Nuestro café se cultiva a una altitud de 1,500 a 1,800 metros sobre el nivel del mar, en un
                    microclima ideal para el desarrollo de granos de alta calidad. Utilizamos técnicas de agricultura
                    sostenible y cultivamos bajo sombra para proteger la biodiversidad local.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Las variedades que cultivamos incluyen Typica, Bourbon y Caturra, seleccionadas por su excelente
                    perfil de sabor y su adaptabilidad a nuestro terroir.
                  </p>
                  <div className="flex items-center gap-3">
                    <Leaf className="h-6 w-6 text-accent" />
                    <p className="font-medium">Cultivo bajo sombra</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="cosecha" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image src="/images/coffee-cherries.jpg" alt="Cosecha de Café" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Cosecha</h3>
                  <p className="text-muted-foreground mb-6">
                    La cosecha se realiza de manera selectiva, recogiendo a mano solo los frutos maduros. Este proceso
                    meticuloso garantiza que solo los mejores granos sean seleccionados para su procesamiento.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Nuestra temporada de cosecha principal se extiende de noviembre a febrero, cuando las condiciones
                    climáticas son óptimas para la maduración de los frutos.
                  </p>
                  <div className="flex items-center gap-3">
                    <Coffee className="h-6 w-6 text-accent" />
                    <p className="font-medium">Selección manual de cerezas maduras</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="procesamiento" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image src="/images/coffee-drying.jpg" alt="Procesamiento de Café" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Procesamiento</h3>
                  <p className="text-muted-foreground mb-6">
                    Utilizamos principalmente el método de procesamiento lavado, que resalta la acidez brillante y las
                    notas frutales de nuestro café. También experimentamos con métodos honey y natural para crear
                    perfiles de sabor únicos.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Después del despulpado, los granos se fermentan cuidadosamente y luego se secan al sol en patios o
                    camas africanas hasta alcanzar el nivel de humedad óptimo.
                  </p>
                  <div className="flex items-center gap-3">
                    <Droplet className="h-6 w-6 text-accent" />
                    <p className="font-medium">Fermentación controlada</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="tostado" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image src="/images/coffee-cherries.jpg" alt="Tostado de Café" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Tostado</h3>
                  <p className="text-muted-foreground mb-6">
                    El tostado es un arte que dominamos con precisión. Cada lote se tuesta cuidadosamente para resaltar
                    las características únicas de nuestro café, buscando el equilibrio perfecto entre acidez, cuerpo y
                    dulzor.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Ofrecemos diferentes perfiles de tueste, desde medio hasta oscuro, para satisfacer los diversos
                    gustos de nuestros clientes y métodos de preparación.
                  </p>
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-accent" />
                    <p className="font-medium">Tostado artesanal en pequeños lotes</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestros Productos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubra nuestra selección de cafés de especialidad, cuidadosamente cultivados y procesados para ofrecerle
              una experiencia sensorial única.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <div className="relative h-64">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-lg font-bold">${product.price.toFixed(2)} MXN</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < product.rating ? "text-accent fill-accent" : "text-gray-300"}`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <Link href={`/nuestro-cafe/${product.slug}`}>
                    <Button className="w-full">Ver producto</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/tienda">
              <Button size="lg" variant="outline">
                Ver todos los productos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Compromiso con la Sostenibilidad</h2>
              <p className="text-white/80 mb-6">
                En Finca El Recuerdo, la sostenibilidad no es solo una palabra de moda, es parte integral de nuestra
                filosofía y operaciones diarias. Creemos que el café de calidad debe producirse de manera responsable,
                respetando el medio ambiente y apoyando a las comunidades locales.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Leaf className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Cultivo bajo sombra</p>
                    <p className="text-sm text-white/70">
                      Preservamos los árboles nativos para proteger la biodiversidad y mejorar la calidad del café.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Droplet className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Conservación del agua</p>
                    <p className="text-sm text-white/70">
                      Utilizamos sistemas de tratamiento de agua para reducir el impacto ambiental del procesamiento del
                      café.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Comercio justo</p>
                    <p className="text-sm text-white/70">
                      Pagamos salarios justos y ofrecemos condiciones laborales dignas a todos nuestros trabajadores.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/finca-landscape.jpg" alt="Sostenibilidad" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-natural-200">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Pruebe nuestro café</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Descubra por qué nuestro café de especialidad es reconocido por su calidad excepcional y sabor único.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/tienda">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Comprar ahora
                </Button>
              </Link>
              <Link href="/tour-del-cafe">
                <Button size="lg" variant="outline">
                  Visitar la finca
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const products = [
  {
    name: "Café de Especialidad - Finca El Recuerdo",
    slug: "cafe-especialidad",
    price: 180,
    description: "Nuestro café insignia con notas de chocolate, caramelo y frutos rojos.",
    image: "/images/coffee-cherries.jpg",
    rating: 5,
  },
  {
    name: "Café Descafeinado",
    slug: "cafe-descafeinado",
    price: 190,
    description: "Todo el sabor sin cafeína, perfecto para disfrutar a cualquier hora del día.",
    image: "/images/coffee-drying.jpg",
    rating: 4,
  },
  {
    name: "Café Honey Process",
    slug: "cafe-honey",
    price: 210,
    description: "Procesado con el método honey para un perfil dulce y afrutado.",
    image: "/images/finca-view.jpg",
    rating: 5,
  },
]
