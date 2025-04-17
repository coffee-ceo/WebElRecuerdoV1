import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/logo.png"
              alt="Finca El Recuerdo"
              width={180}
              height={50}
              className="h-auto w-auto invert"
            />
            <p className="text-sm text-white/80 mt-2">
              Finca El Recuerdo es un lugar donde la tradición del café se une con la belleza natural de Puebla, México.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="https://facebook.com" className="text-white/80 hover:text-accent">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-white/80 hover:text-accent">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-white/80 hover:text-accent">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-white/80 hover:text-accent">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nuestro-cafe" className="text-sm text-white/80 hover:text-accent">
                  Nuestro Café
                </Link>
              </li>
              <li>
                <Link href="/hospedaje" className="text-sm text-white/80 hover:text-accent">
                  Hospedaje
                </Link>
              </li>
              <li>
                <Link href="/tour-del-cafe" className="text-sm text-white/80 hover:text-accent">
                  Tour del Café
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-white/80 hover:text-accent">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-white/80 hover:text-accent">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-white/80">Km 5 Carretera a Zacapoaxtla, Puebla, México</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm text-white/80">+52 (222) 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm text-white/80">info@fincaelrecuerdo.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Horarios</h3>
            <ul className="space-y-2">
              <li className="text-sm text-white/80">
                <span className="font-medium">Lunes a Viernes:</span> 9:00 AM - 6:00 PM
              </li>
              <li className="text-sm text-white/80">
                <span className="font-medium">Sábados y Domingos:</span> 8:00 AM - 7:00 PM
              </li>
              <li className="text-sm text-white/80 mt-4">
                <span className="font-medium">Tours del Café:</span> 10:00 AM y 2:00 PM
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/20 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Finca El Recuerdo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
