import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Pricing() {
  const membershipPlans = [
    {
      name: "STARTER",
      price: "60€",
      period: "/mês",
      description: "Perfeito para começar sua jornada",
      features: ["Jiu-Jitsu (aulas ilimitadas)", "Acesso ao skatepark"],
      highlight: false,
    },
    {
      name: "STARTER KIDS",
      subtitle: "(5-15 anos)",
      price: "45€",
      period: "/mês",
      description: "Programa especial para crianças e adolescentes",
      features: ["Jiu-Jitsu (aulas ilimitadas)", "Acesso ao skatepark"],
      highlight: false,
    },
    {
      name: "UNLIMITED FIGHTER",
      price: "60€",
      period: "/mês",
      description: "Para quem quer treinar artes marciais sem limites",
      features: ["MMA & Muay Thai (aulas ilimitadas)", "Acesso ao skatepark"],
      highlight: false,
    },
    {
      name: "TOTAL ATHLETE",
      price: "80€",
      period: "/mês",
      description: "Acesso completo a todas as modalidades",
      features: ["Jiu-Jitsu + MMA + Muay Thai", "Skatepark + Open Gym", "Sauna & Banho frio", "Vantagens exclusivas"],
      highlight: true,
    },
    {
      name: "BEYOND ATHLETE",
      price: "90€",
      period: "/mês",
      description: "O plano mais completo",
      features: [
        "Functional Training ou Pilates",
        "Artes Marciais (aulas ilimitadas)",
        "Ginásio + Sauna & Banho frio",
        "Skatepark",
        "Vantagens exclusivas",
      ],
      highlight: true,
    },
    {
      name: "FUNCTIONAL TRAINING",
      price: "55€",
      period: "/mês",
      description: "Treino funcional em grupo",
      features: ["2 treinos de grupo por semana", "Acesso ao skatepark"],
      highlight: false,
    },
    {
      name: "PILATES",
      price: "55€",
      period: "/mês",
      description: "Fortalecimento e alongamento",
      features: ["2 treinos de grupo por semana", "Acesso ao skatepark"],
      highlight: false,
    },
    {
      name: "OPEN GYM",
      price: "29€",
      period: "/mês",
      description: "Acesso ao ginásio e facilidades",
      features: ["Acesso ao ginásio & skatepark", "Acesso à sauna & banho frio"],
      highlight: false,
    },
  ]

  const surfPlans = [
    {
      name: "SURFSKATE",
      price: "30€",
      period: "/aula",
      description: "Aulas de surfskate por marcação",
      features: ["Aulas por marcação"],
    },
    {
      name: "SURF LESSONS",
      price: "40€ / 30€",
      period: "/aula",
      description: "Aulas de surf de 2 horas",
      features: [
        "Aulas 2 horas por marcação",
        "Inclui prancha, fato & seguro",
        "Out-maio: 40€/aula",
        "Junh-set: 30€/aula",
      ],
    },
  ]

  const singleOptions = [
    { name: "DROP-IN CLASS", price: "10€" },
    { name: "DAILY PASS", price: "20€" },
  ]

  return (
    <section id="pricing" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        {/* Main Membership Plans */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos Planos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Escolha o plano ideal para seus objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {membershipPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${plan.highlight ? "border-red-600 border-2 shadow-xl" : "border-zinc-200"}`}
            >
              {plan.highlight && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600">Popular</Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">
                  {plan.name}
                  {plan.subtitle && (
                    <span className="block text-sm font-normal text-muted-foreground mt-1">{plan.subtitle}</span>
                  )}
                </CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="h-full flex flex-col items-start justify-between">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.highlight ? "bg-red-600 hover:bg-red-700" : "bg-black hover:bg-zinc-800"}`}
                  asChild
                >
                  <a
                    href="https://wa.me/351912345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Começar Agora
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Surf & Surfskate */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Surf & Surfskate</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {surfPlans.map((plan) => (
              <Card key={plan.name}>
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex h-full flex-col items-start justify-between">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-black hover:bg-zinc-800" asChild>
                    <a
                      href="https://wa.me/351912345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Agendar Aula
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div className="bg-black text-white rounded-lg p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">FAMILY PACK & PARTNERSHIPS - 20% OFF</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>10% no Restaurante D'Raiz</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>10% no Wild Berry Açaí</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>10% em Beyond Apparel (primeiras coleções & edições limitadas)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Acesso prioritário a eventos & experiências especiais</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Single Options */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8">SINGLE OPTIONS & SHORT TERM</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {singleOptions.map((option) => (
              <Card key={option.name} className="w-full md:w-64">
                <CardHeader>
                  <CardTitle className="text-xl">{option.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{option.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                    <a
                      href="https://wa.me/351912345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Comprar
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
