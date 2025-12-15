import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function Classes() {
  const classes = [
    {
      name: "Jiu-Jitsu",
      description: "Arte marcial brasileira focada em técnicas de solo e submissões",
      image: "https://esyscmmzkkrckempbqti.supabase.co/storage/v1/object/public/beyond/d18bbc31-d585-49c8-a600-67e850c12016.jpg",
      benefits: ["Defesa pessoal", "Condicionamento físico", "Disciplina mental"],
    },
    {
      name: "Muay-Thai",
      description: "Arte marcial tailandesa conhecida como a arte das oito armas",
      image: "https://esyscmmzkkrckempbqti.supabase.co/storage/v1/object/public/beyond/37b6f171-0c40-47e4-bb7e-ee4d58c65717.jpg",
      benefits: ["Cardio intenso", "Força e potência", "Técnicas de striking"],
    },
    {
      name: "No-Gi",
      description: "Jiu-Jitsu sem kimono, focado em velocidade e técnica",
      image: "https://esyscmmzkkrckempbqti.supabase.co/storage/v1/object/public/beyond/979d7ab5-fb01-4274-a70e-b7af92b68608.jpg",
      benefits: ["Agilidade", "Técnicas modernas", "Competição"],
    },
    {
      name: "MMA",
      description: "Artes marciais mistas combinando várias disciplinas de luta",
      image: "https://esyscmmzkkrckempbqti.supabase.co/storage/v1/object/public/beyond/73d32622-5ba5-4641-b7d0-57412ee8a324.jpg",
      benefits: ["Treino completo", "Versatilidade", "Condicionamento extremo"],
    },
    {
      name: "Pilates",
      description: "Método de exercícios para fortalecimento e alongamento",
      image: "https://esyscmmzkkrckempbqti.supabase.co/storage/v1/object/public/beyond/yo.jpg",
      benefits: ["Postura", "Core forte", "Reabilitação"],
    },
    {
      name: "Treino Funcional",
      description: "Exercícios que melhoram a funcionalidade do corpo no dia a dia",
      image: "https://esyscmmzkkrckempbqti.supabase.co/storage/v1/object/public/beyond/a9ec1fdd-9289-440d-8f37-55b84e498fb8.jpg",
      benefits: ["Força funcional", "Mobilidade", "Perda de peso"],
    },
    {
      name: "Open Gym",
      description: "Acesso ao ginásio completo com sauna e banho frio",
      image: "https://esyscmmzkkrckempbqti.supabase.co/storage/v1/object/public/beyond/espaco2.jpg",
      benefits: ["Treino livre", "Sauna", "Banho frio"],
    },
    {
      name: "Surf & Surfskate",
      description: "Aulas de surf e surfskate para todos os níveis",
      image: "/surfing-lesson-beach.jpg",
      benefits: ["Aulas personalizadas", "Equipamento incluído", "Instrutores certificados"],
    },
  ]

  return (
    <section id="classes" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossas Modalidades</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Oferecemos uma variedade de modalidades para todos os níveis e objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((classItem) => (
            <Card key={classItem.name} className="overflow-hidden hover:shadow-xl transition-shadow px-3.5">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={classItem.image || "/placeholder.svg"}
                  alt={classItem.name}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{classItem.name}</CardTitle>
                <CardDescription className="text-base">{classItem.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {classItem.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
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
    </section>
  )
}
