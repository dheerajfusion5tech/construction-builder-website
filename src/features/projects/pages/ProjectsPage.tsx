import { projects } from "@/lib/data"
export function ProjectsPage(){
  return (
    <div className="bg-[hsl(var(--background))]">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-10">
        <h1 className="font-black text-[56px] lg:text-[88px] leading-[0.85] uppercase">Project<br/>Archive</h1>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--border))] border border-[hsl(var(--border))]">
          {projects.map(p=>(
            <div key={p.id} className="bg-[hsl(var(--card))] p-5">
              <div className="aspect-[16/10] bg-[hsl(var(--secondary))]"><img src={p.image} alt={p.title} className="h-full w-full object-cover"/></div>
              <div className="font-black mt-4 uppercase">{p.title}</div>
              <div className="text-[12px] opacity-60">{p.location}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
