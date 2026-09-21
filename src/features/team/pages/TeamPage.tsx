import { team } from "@/lib/data"
export function TeamPage(){
  return (
    <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-10">
      <h1 className="font-black text-[56px] lg:text-[88px] uppercase leading-[0.85]">The crew<br/>who pours</h1>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--border))] border border-[hsl(var(--border))]">
        {team.map(m=>(
          <div key={m.id} className="bg-[hsl(var(--card))]"><div className="aspect-[4/3] bg-[hsl(var(--secondary))]"><img src={m.image} alt={m.name} className="h-full w-full object-cover"/></div><div className="p-4"><div className="font-black uppercase">{m.name}</div><div className="text-[11px] uppercase opacity-60">{m.role}</div></div></div>
        ))}
      </div>
    </div>
  )
}
