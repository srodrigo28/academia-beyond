import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, MessageCircle, Instagram } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Estamos prontos para ajudá-lo a começar sua jornada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Informações de Contato</CardTitle>
              <CardDescription>Entre em contato conosco através dos canais abaixo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Endereço</p>
                  <p className="text-sm text-muted-foreground">Peniche, Portugal</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Telefone</p>
                  <p className="text-sm text-muted-foreground">+351 912 345 678</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">contato@beyondpeniche.pt</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Instagram className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Instagram</p>
                  <a
                    href="https://www.instagram.com/beyond_peniche"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-red-600 hover:underline"
                  >
                    @beyond_peniche
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Agende sua Aula Experimental</CardTitle>
              <CardDescription>Entre em contato pelo WhatsApp e agende sua primeira aula gratuita</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                <a
                  href="https://wa.me/351912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
              <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-4">Horário de Atendimento:</p>
                <p className="text-sm">Segunda a Sexta: 07:00 - 21:00</p>
                <p className="text-sm">Sábado: 09:00 - 13:00</p>
                <p className="text-sm">Domingo: Fechado</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
