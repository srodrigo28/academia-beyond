import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Classes } from "@/components/classes"
import { Pricing } from "@/components/pricing"
import { Schedule } from "@/components/schedule"
import { Trainers } from "@/components/trainers"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
// import { Store } from "@/components/footer"

export default function Home() {

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Classes />
      <Pricing />
      <Schedule />
      <Trainers />
      <Contact />
      <Footer />
    </main>
  )
}
