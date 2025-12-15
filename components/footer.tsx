import { Instagram, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Beyond</h3>
            <p className="text-white/70 mb-4">{"Beyond is not a brand. It's a system of belief."}</p>
            <p className="text-white/70">A Movement. A Way of Life.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#classes" className="text-white/70 hover:text-white transition-colors">
                  Modalidades
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/70 hover:text-white transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-white/70 hover:text-white transition-colors">
                  Horários
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70">Rua João Batista Frazão 77D</p>
                  <p className="text-white/70">2520-267, Peniche, Portugal</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="https://wa.me/351912345678" className="text-white/70 hover:text-white transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/beyond_peniche"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/70">
          <p>&copy; {new Date().getFullYear()} Beyond. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">www.beyondclub.com</p>
        </div>
      </div>
    </footer>
  )
}
