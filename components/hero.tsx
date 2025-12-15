import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-10-25%20%C3%A0%28s%29%2016.04.25_7dacb26c-t4btUplQGrYV1cn0znlpc82QuPyPSw.mp4" type="video/mp4" />
      </video>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">Beyond</h1>
        <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto text-balance font-light">
          {"Beyond is not a brand. It's a system of belief."}
        </p>
        <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto text-balance">
          A Movement. A Way of Life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8" asChild>
            <a
              href="https://wa.me/351912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Agende sua Aula
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black text-lg px-8 bg-transparent"
            asChild
          >
            <a
              href="https://www.instagram.com/beyond_peniche"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              @beyond_peniche
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
