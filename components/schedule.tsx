export function Schedule() {
  const schedule = [
    {
      time: "06:45 - 07:30",
      monday: "Adult Jiu-Jitsu (Gi)",
      tuesday: "",
      wednesday: "Adult Jiu-Jitsu (No-Gi)",
      thursday: "",
      friday: "",
      saturday: "",
    },
    {
      time: "09:00 - 10:00",
      monday: "",
      tuesday: "Pilates",
      wednesday: "",
      thursday: "Pilates",
      friday: "",
      saturday: "",
    },
    {
      time: "10:00 - 11:00",
      monday: "",
      tuesday: "Functional Training",
      wednesday: "",
      thursday: "Functional Training",
      friday: "",
      saturday: "Women's Jiu-Jitsu",
    },
    {
      time: "11:00 - 12:00",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "Open Mat",
    },
    {
      time: "12:15 - 13:00",
      monday: "Adult Jiu-Jitsu (Gi)",
      tuesday: "Adult Jiu-Jitsu (No-Gi)",
      wednesday: "Adult Jiu-Jitsu (Gi)",
      thursday: "Adult Jiu-Jitsu (No-Gi)",
      friday: "",
      saturday: "",
    },
    {
      time: "18:00 - 19:00",
      monday: "Kids Jiu-Jitsu (Gi)",
      tuesday: "Pilates",
      wednesday: "Kids Jiu-Jitsu (Gi)",
      thursday: "Pilates",
      friday: "Kids Jiu-Jitsu (Gi)",
      saturday: "",
    },
    {
      time: "19:00 - 20:00",
      monday: "Adult Jiu-Jitsu (Gi)",
      tuesday: "Muay Thai / Functional Training",
      wednesday: "Adult Jiu-Jitsu (Gi)",
      thursday: "Muay Thai / Functional Training",
      friday: "Open Mat",
      saturday: "",
    },
    {
      time: "20:00 - 21:00",
      monday: "MMA",
      tuesday: "Adult Jiu-Jitsu (No-Gi)",
      wednesday: "MMA",
      thursday: "Adult Jiu-Jitsu (No-Gi)",
      friday: "MMA",
      saturday: "",
    },
  ]

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Horários 2025</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Confira nossa grade completa de horários
          </p>
          <div className="mt-6 text-lg">
            <p className="font-semibold">Segunda a Sexta: 8:00-14:00, 16:00-21:00</p>
            <p className="font-semibold">Sábado: 9:00-13:00</p>
            <p className="font-semibold text-red-600">Domingo: Fechado</p>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-black text-white">
                <th className="border border-zinc-300 p-3 text-left font-bold">Horário</th>
                <th className="border border-zinc-300 p-3 text-center font-bold">Seg</th>
                <th className="border border-zinc-300 p-3 text-center font-bold">Ter</th>
                <th className="border border-zinc-300 p-3 text-center font-bold">Qua</th>
                <th className="border border-zinc-300 p-3 text-center font-bold">Qui</th>
                <th className="border border-zinc-300 p-3 text-center font-bold">Sex</th>
                <th className="border border-zinc-300 p-3 text-center font-bold">Sáb</th>
                <th className="border border-zinc-300 p-3 text-center font-bold bg-red-600">Dom</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-zinc-50" : "bg-white"}>
                  <td className="border border-zinc-300 p-3 font-medium">{row.time}</td>
                  <td className="border border-zinc-300 p-3 text-center text-sm">{row.monday || "-"}</td>
                  <td className="border border-zinc-300 p-3 text-center text-sm">{row.tuesday || "-"}</td>
                  <td className="border border-zinc-300 p-3 text-center text-sm">{row.wednesday || "-"}</td>
                  <td className="border border-zinc-300 p-3 text-center text-sm">{row.thursday || "-"}</td>
                  <td className="border border-zinc-300 p-3 text-center text-sm">{row.friday || "-"}</td>
                  <td className="border border-zinc-300 p-3 text-center text-sm">{row.saturday || "-"}</td>
                  <td className="border border-zinc-300 p-3 text-center bg-red-600/10">-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: Show timetable image */}
        <div className="lg:hidden">
          <img
            src="/images/timetable-2025.jpg"
            alt="Horários Beyond 2025"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
