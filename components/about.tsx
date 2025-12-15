import { Trophy, Users, Clock, Target } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Trophy,
      title: "Excelência",
      description: "Treinadores certificados e experientes",
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Ambiente acolhedor e motivador",
    },
    {
      icon: Clock,
      title: "Flexibilidade",
      description: "Horários variados para sua rotina",
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Metodologia comprovada e eficaz",
    },
  ]

  return (
    // <section id="about" className="py-15 bg-linear-to-tl from-[#980A0A] to-[#040908] text-white">
    <section id="about" className="py-15 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nós</h2>
          <div className="max-w-4xl mx-auto mb-12">
            <img
              src="https://esyscmmzkkrckempbqti.supabase.co/storage/v1/object/public/beyond/4ffe527b-dc95-4dc6-bd0c-6bf20e75d3dc.jpg"
              alt="Beyond is not a brand"
              className="w-full rounded-lg shadow-2xl mb-8"
            />
            <p className="text-2xl font-light text-muted-foreground mb-4 text-balance">
              {"Beyond is not a brand. It's a system of belief."}
            </p>
            <p className="text-xl text-muted-foreground text-balance">A Movement. A Way of Life.</p>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Localizada em Peniche, Portugal, somos uma comunidade dedicada a transformar vidas através do treino físico
            e mental. Oferecemos artes marciais, fitness, surf e muito mais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center rounded-lg bg-white shadow-xs shadow-[#040908] p-8">
          <h3 className="text-2xl font-bold mb-4">Nossa Localização</h3>
          <p className="text-lg mb-2">Rua João Batista Frazão 77D</p>
          <p className="text-lg mb-2">2520-267, Peniche, Portugal</p>
          <p className="text-muted-foreground">Est. 2025</p>
        </div>
      </div>
    </section>
  )
}
