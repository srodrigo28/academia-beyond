"use client"

import { useState, useEffect } from "react"
import { Menu, X, Instagram } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Modalidades", href: "#classes" },
    { name: "Planos", href: "#pricing" },
    { name: "Horários", href: "#schedule" },
    { name: "Treinadores", href: "#trainers" },
    { name: "Contato", href: "#contact" },
  
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-white">
            Beyond 
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-white/90 hover:text-white transition-colors">
                {item.name}
              </a>
            ))}
            <a
              href="https://www.instagram.com/beyond_peniche"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://www.instagram.com/beyond_peniche"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
