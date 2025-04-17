import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/finca-view.jpg" alt="Blog de Finca El Recuerdo" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Blog</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl">
              Descubra artículos sobre café, sostenibilidad, turismo rural y más.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-lg">
                    <div className="relative h-64 md:h-80">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-3 mb-4">
                        {post.categories.map((category, i) => (
                          <Link
                            key={i}
                            href={`/blog/categoria/${category.toLowerCase().replace(/\s+/g, "-")}`}
                            className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {category}
                          </Link>
                        ))}
                      </div>
                      <h2 className="text-2xl font-bold text-primary mb-3">
                        <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="outline" className="group">
                          Leer más
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center gap-1">
                  <Button variant="outline" size="icon" disabled>
                    <span className="sr-only">Página anterior</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-primary text-white">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    <span className="sr-only">Página siguiente</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Search */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-primary mb-4">Buscar</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar artículos..." className="pl-10" />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-primary mb-4">Categorías</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/categoria/${category.slug}`}
                        className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="bg-primary/10 text-primary text-xs rounded-full px-2 py-1">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-primary mb-4">Artículos recientes</h3>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="relative w-20 h-20 rounded-md overflow-hidden shrink-0">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium line-clamp-2 hover:text-primary transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h4>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">Etiquetas</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog/etiqueta/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center rounded-full bg-natural-200 px-3 py-1 text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Suscríbase a nuestro boletín</h2>
            <p className="text-white/80 mb-8">
              Reciba las últimas noticias, artículos y ofertas especiales directamente en su bandeja de entrada.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Su correo electrónico"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white">Suscribirse</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

const blogPosts = [
  {
    title: "El proceso de beneficiado húmedo: Clave para un café de calidad",
    slug: "proceso-beneficiado-humedo",
    excerpt:
      "Descubra cómo el proceso de beneficiado húmedo influye en la calidad y el perfil de sabor de nuestro café de especialidad.",
    image: "/images/coffee-drying.jpg",
    date: "15 de abril, 2023",
    author: "Carlos Hernández",
    categories: ["Proceso del Café", "Calidad"],
  },
  {
    title: "Café de sombra: Beneficios para el medio ambiente y la calidad",
    slug: "cafe-de-sombra-beneficios",
    excerpt:
      "El cultivo de café bajo sombra no solo es beneficioso para el medio ambiente, sino que también mejora la calidad y el sabor del café.",
    image: "/images/finca-view.jpg",
    date: "28 de marzo, 2023",
    author: "María Rodríguez",
    categories: ["Sostenibilidad", "Cultivo"],
  },
  {
    title: "Turismo rural en Puebla: Una experiencia auténtica",
    slug: "turismo-rural-puebla",
    excerpt:
      "Explore las maravillas del turismo rural en Puebla y descubra por qué es un destino imperdible para los amantes de la naturaleza y la cultura.",
    image: "/images/finca-landscape.jpg",
    date: "10 de febrero, 2023",
    author: "Ana López",
    categories: ["Turismo", "Cultura Local"],
  },
]

const categories = [
  { name: "Proceso del Café", slug: "proceso-del-cafe", count: 8 },
  { name: "Sostenibilidad", slug: "sostenibilidad", count: 6 },
  { name: "Cultivo", slug: "cultivo", count: 5 },
  { name: "Turismo", slug: "turismo", count: 4 },
  { name: "Cultura Local", slug: "cultura-local", count: 3 },
  { name: "Recetas", slug: "recetas", count: 2 },
]

const recentPosts = [
  {
    title: "Cómo preparar el café perfecto en casa",
    slug: "preparar-cafe-perfecto-casa",
    image: "/images/coffee-cherries.jpg",
    date: "5 de mayo, 2023",
  },
  {
    title: "Variedades de café cultivadas en Puebla",
    slug: "variedades-cafe-puebla",
    image: "/images/finca-view.jpg",
    date: "20 de abril, 2023",
  },
  {
    title: "La importancia del tueste en el sabor del café",
    slug: "importancia-tueste-sabor-cafe",
    image: "/images/coffee-drying.jpg",
    date: "8 de abril, 2023",
  },
]

const tags = [
  "Café de Especialidad",
  "Sostenibilidad",
  "Turismo Rural",
  "Cultivo Orgánico",
  "Proceso Lavado",
  "Proceso Honey",
  "Proceso Natural",
  "Recetas",
  "Barismo",
  "Puebla",
  "Cultura Cafetalera",
  "Biodiversidad",
]
