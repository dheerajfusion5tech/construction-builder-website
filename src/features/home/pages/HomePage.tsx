import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data"
export function HomePage(){
  return (
    <div className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <section className="relative overflow-hidden border-b border-[hsl(var(--border))]">
        <div className="absolute inset-0 bg-blueprint-grid opacity-40"></div>
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-20">
          <div className="inline-flex items-center gap-3 mb-8"><div className="h-px w-12 bg-[hsl(var(--safety))]"></div><span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--safety))]">Est. 2006 — Austin, Texas</span></div>
          <h1 className="font-black leading-[0.85] tracking-[-0.04em] text-[14vw] lg:text-[132px] uppercase">Built<br/><span className="font-display italic lowercase font-light">to last</span></h1>
          <p className="mt-8 text-[19px] max-w-[620px] opacity-80">We are a concrete-first builder. 18 years, 142 projects, zero structural failures.</p>
          <div className="mt-10 flex gap-3"><Link to="/projects"><Button variant="safety" size="xl">View Built Work</Button></Link><Link to="/services"><Button variant="outline" size="xl">Capabilities</Button></Link></div>
          <div className="mt-16 grid grid-cols-3 border-t border-[hsl(var(--border))] max-w-[600px]">
            {[{k:"Projects Built", v:"142"},{k:"Years Active", v:"18"},{k:"Tons Concrete", v:"18,400+"}].map(s=><div key={s.k} className="py-5 border-r border-[hsl(var(--border))] last:border-0"><div className="text-[11px] uppercase opacity-40 font-bold">{s.k}</div><div className="text-[28px] font-black">{s.v}</div></div>)}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <h2 className="font-black text-[42px] lg:text-[64px] uppercase leading-[0.9]">Concrete<br/>evidence</h2>
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {projects.slice(0,3).map(p=>(
              <div key={p.id} className="border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
                <div className="aspect-[16/10] overflow-hidden bg-[hsl(var(--secondary))]"><img src={p.image} alt={p.title} className="h-full w-full object-cover"/></div>
                <div className="p-5"><div className="font-black text-[18px] uppercase">{p.title}</div><div className="text-[12px] opacity-60">{p.location} — {p.year}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-[hsl(var(--foreground))] text-[hsl(var(--background))]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10"><p className="font-display text-[32px] lg:text-[54px] leading-[1.05] max-w-[900px]">We believe buildings should outlive their builders. No value engineering that reduces lifespan.</p></div>
      </section>
    </div>
  )
}
