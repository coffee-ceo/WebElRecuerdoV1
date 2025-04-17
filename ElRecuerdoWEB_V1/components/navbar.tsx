"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Finca El Recuerdo"
            width={140}
            height={40}
            className="h-8 w-auto object-contain"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-12">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Inicio
          </Link>
          <Link href="/nuestro-cafe" className="text-sm font-medium transition-colors hover:text-primary">
            Nuestro Café
          </Link>
          <Link href="/hospedaje" className="text-sm font-medium transition-colors hover:text-primary">
            Hospedaje
          </Link>
          <Link href="/tour-del-cafe" className="text-sm font-medium transition-colors hover:text-primary">
            Tour del Café
          </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            Blog
          </Link>
          <Link href="/contacto" className="text-sm font-medium transition-colors hover:text-primary">
            Contacto
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/tienda/carrito">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Carrito</span>
            </Button>
          </Link>
          <Link href="/cuenta">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Mi cuenta</span>
            </Button>
          </Link>
          <Link href="/tour-del-cafe">
            <Button className="bg-accent hover:bg-accent/90 text-white">Reservar Tour</Button>
          </Link>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Menú</span>
        </Button>
      </div>
      {/* Mobile menu */}
      <div className={cn("fixed inset-0 top-16 z-50 bg-white md:hidden", isOpen ? "block" : "hidden")}>
        <nav className="container grid gap-6 p-6">
          <Link
            href="/"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="/nuestro-cafe"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Nuestro Café
          </Link>
          <Link
            href="/hospedaje"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Hospedaje
          </Link>
          <Link
            href="/tour-del-cafe"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Tour del Café
          </Link>
          <Link
            href="/blog"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contacto"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </Link>
          <div className="flex flex-col gap-4 mt-4">
            <Link href="/tienda/carrito" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full justify-start">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Carrito
              </Button>
            </Link>
            <Link href="/cuenta" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full justify-start">
                <User className="mr-2 h-5 w-5" />
                Mi cuenta
              </Button>
            </Link>
            <Link href="/tour-del-cafe" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white">Reservar Tour</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
