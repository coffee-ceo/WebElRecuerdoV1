import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Minus, Plus, Star, Truck, Clock, Coffee } from "lucide-react"

export default function ProductPage({ params }: { params: { slug: string } }) {
  // En un caso real, aquí se obtendría la información del producto desde una API o base de datos
  const product = {
    id: "1",
    name: "Café de Especialidad - Finca El Recuerdo",
    slug: "cafe-especialidad",
    price: 180,
    description:
      "Nuestro café de especialidad cultivado a más de 1,500 metros sobre el nivel del mar en las montañas de Puebla. Con notas de chocolate, caramelo y frutos rojos.",
    longDescription:
      "Este café de especialidad es el resultado de años de experiencia y dedicación. Cultivado bajo sombra en las montañas de Puebla, a una altitud superior a los 1,500 metros sobre el nivel del mar, nuestro café desarrolla un perfil de sabor único con notas de chocolate, caramelo y frutos rojos.\n\nCada grano es cosechado a mano, seleccionando solo los frutos maduros para garantizar la mejor calidad. Luego, son procesados mediante el método lavado, secados al sol y tostados cuidadosamente para resaltar sus características organolépticas.",
    images: ["/images/coffee-cherries.jpg", "/images/coffee-drying.jpg"],
    rating: 4.8,
    reviews: 124,
    variants: {
      roast: ["Medio", "Oscuro"],
      grind: ["Grano Entero", "Molido para Espresso", "Molido para Prensa Francesa", "Molido para Goteo"],
      weight: ["250g", "500g", "1kg"],
    },
    origin: "Puebla, México",
    altitude: "1,500 - 1,800 msnm",
    process: "Lavado",
    variety: "Typica, Bourbon",
    tastingNotes: ["Chocolate", "Caramelo", "Frutos Rojos", "Cítricos"],
    relatedProducts: [
      {
        id: "2",
        name: "Café Descafeinado",
        slug: "cafe-descafeinado",
        price: 190,
        image: "/images/coffee-cherries.jpg",
      },
      {
        id: "3",
        name: "Café Honey Process",
        slug: "cafe-honey",
        price: 210,
        image: "/images/coffee-drying.jpg",
      },
    ],
  }

  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg border-2 border-transparent hover:border-primary cursor-pointer"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Vista ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-primary mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-accent fill-accent" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviews} reseñas)
            </span>
          </div>
          <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)} MXN</p>
          <p className="text-muted-foreground mb-6">{product.description}</p>

          {/* Product Variants */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Tostado</label>
              <Select defaultValue={product.variants.roast[0]}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar tostado" />
                </SelectTrigger>
                <SelectContent>
                  {product.variants.roast.map((roast) => (
                    <SelectItem key={roast} value={roast}>
                      {roast}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Molido</label>
              <Select defaultValue={product.variants.grind[0]}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar molido" />
                </SelectTrigger>
                <SelectContent>
                  {product.variants.grind.map((grind) => (
                    <SelectItem key={grind} value={grind}>
                      {grind}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Peso</label>
              <Select defaultValue={product.variants.weight[0]}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar peso" />
                </SelectTrigger>
                <SelectContent>
                  {product.variants.weight.map((weight) => (
                    <SelectItem key={weight} value={weight}>
                      {weight}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Cantidad</label>
            <div className="flex items-center">
              <Button variant="outline" size="icon" className="rounded-r-none">
                <Minus className="h-4 w-4" />
                <span className="sr-only">Disminuir cantidad</span>
              </Button>
              <div className="h-10 w-12 flex items-center justify-center border-y">1</div>
              <Button variant="outline" size="icon" className="rounded-l-none">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Aumentar cantidad</span>
              </Button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button className="bg-primary hover:bg-primary/90 flex-1">Agregar al carrito</Button>
            <Button variant="outline" className="flex-1">
              Comprar ahora
            </Button>
          </div>

          {/* Shipping Info */}
          <div className="space-y-4 border-t pt-6">
            <div className="flex items-start gap-3">
              <Truck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Envío gratuito</p>
                <p className="text-sm text-muted-foreground">En pedidos superiores a $500 MXN</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Entrega estimada</p>
                <p className="text-sm text-muted-foreground">3-5 días hábiles</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-primary mb-6">Detalles del producto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Descripción</h3>
            <div className="space-y-4 text-muted-foreground">
              {product.longDescription.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Características</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Origen:</span>
                </div>
                <span className="text-sm text-muted-foreground">{product.origin}</span>

                <div className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Altitud:</span>
                </div>
                <span className="text-sm text-muted-foreground">{product.altitude}</span>

                <div className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Proceso:</span>
                </div>
                <span className="text-sm text-muted-foreground">{product.process}</span>

                <div className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Variedad:</span>
                </div>
                <span className="text-sm text-muted-foreground">{product.variety}</span>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Notas de cata:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.tastingNotes.map((note, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-primary mb-6">Productos relacionados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {product.relatedProducts.map((relatedProduct) => (
            <Card key={relatedProduct.id} className="overflow-hidden border-none shadow-md">
              <div className="relative aspect-square">
                <Image
                  src={relatedProduct.image || "/placeholder.svg"}
                  alt={relatedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">{relatedProduct.name}</h3>
                <p className="font-bold text-primary mb-4">${relatedProduct.price.toFixed(2)} MXN</p>
                <Link href={`/nuestro-cafe/${relatedProduct.slug}`}>
                  <Button variant="outline" className="w-full">
                    Ver producto
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
