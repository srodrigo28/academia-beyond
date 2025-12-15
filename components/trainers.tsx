import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Trainers() {
  const trainers = [
    {
      name: "alexandre Pereira",
      role: "Instrutor de Jiu-Jitsu",
      image: "https://esyscmmzkkrckempbqti.supabase.co/storage/v1/object/public/beyond/alex.jpg",
      credentials: "Faixa Preta 2º Grau",
    },
    {
      name: "Gonçalo Oliveira",
      role: "Instrutor de Jiu-Jitsu",
      image: "https://esyscmmzkkrckempbqti.supabase.co/storage/v1/object/public/beyond/8be9c0d5-c699-4460-aabd-c5860bf2c22b.jpg",
      credentials: "Faixa Marrom",
    },
    {
      name: "Jonas Costa",
      role: "Instrutor de Jiu-Jitsu Kids",
      image: "https://esyscmmzkkrckempbqti.supabase.co/storage/v1/object/public/beyond/jonas.jpg",
      credentials: "Faixa Preta 1º Grau",
    },
    {
      name: "Gabi Uchoa",
      role: "Instrutora de Jiu-Jitsu",
      image: "https://esyscmmzkkrckempbqti.supabase.co/storage/v1/object/public/beyond/4d9129d2-28b9-4486-9367-7c5fe43c2ab3.jpg",
      credentials: "faixa Preta",
    },
    {
      name: "Lucas Ferrari",
      role: "Instrutor de MMA",
      image: "https://esyscmmzkkrckempbqti.supabase.co/storage/v1/object/public/beyond/lucas.jpg",
      credentials: "Atletade profissional",
    },

     {
      name: "David Crespo",
      role: "Instrutor de Muay Thai",
      image: "https://esyscmmzkkrckempbqti.supabase.co/storage/v1/object/public/beyond/37b6f171-0c40-47e4-bb7e-ee4d58c65717.jpg",
      credentials: "Certificaçao Internacional",
    },

    {
      name: "Henrry Tesa",
      role: "Instrutor de Yoga e Pilates",
      image: "https://esyscmmzkkrckempbqti.supabase.co/storage/v1/object/public/beyond/81150fe9-6a14-4b6c-bde9-dbf587e33066.jpg",
      credentials: "Certificação Internacional",
    },
    {
      name: "Frederico Silva",
      role: "instrutor functional training Competition",
      image: "https://esyscmmzkkrckempbqti.supabase.co/storage/v1/object/public/beyond/fred.jpg",
      credentials: "Certificação Internacional",
    },
    {
      name: "Tomas Contrera",
      role: "instrutor Surf-Training",
      image: "https://esyscmmzkkrckempbqti.supabase.co/storage/v1/object/public/beyond/surf.jpg",
      credentials: "Certificação Internacional",
    },
    
    {
      name: "Guilherme Fonseca",
      role: "instrutor Surf and Surfskate",
      image: "https://esyscmmzkkrckempbqti.supabase.co/storage/v1/object/public/beyond/suf1.jpg",
      credentials: "Certificação Internacional",
    },
  ]

  return (
    <section id="trainers" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos Treinadores</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Equipe experiente e dedicada ao seu desenvolvimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer) => (
            <Card key={trainer.name} className="max-w-[400px] flex flex-col items-center text-center overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden px-4">
                <img
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  className="object-cover bg-red-400 w-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="w-full flex flex-col items-center">
                <CardTitle>{trainer.name}</CardTitle>
                <CardDescription className="text-base">{trainer.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{trainer.credentials}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
