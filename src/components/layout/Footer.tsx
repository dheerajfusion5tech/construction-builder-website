import { Link } from "@tanstack/react-router"
export function Footer(){
  return (
    <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--foreground))] text-[hsl(var(--background))] mt-0">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] gap-12">
          <div><div className="font-black text-[18px] uppercase">Monolith Builders</div><p className="text-[14px] opacity-70 mt-4 max-w-[36ch]">Built with precision. Designed for longevity.</p></div>
          <div><div className="text-[11px] uppercase opacity-40 mb-5">Navigation</div><div className="grid gap-3 text-[14px]"><Link to="/">Home</Link><Link to="/projects">Projects</Link><Link to="/services">Services</Link><Link to="/team">Team</Link><Link to="/contact">Contact</Link></div></div>
          <div><div className="text-[11px] uppercase opacity-40 mb-5">Contact</div><div className="text-[13px] opacity-70">1201 E 7th St, Austin, TX<br/>hello@monolith.builders</div></div>
          <div className="bg-white/[0.04] border border-white/10 p-6"><div className="text-[11px] uppercase opacity-40 mb-3">Build Notes</div><Link to="/project-notes" className="inline-flex h-10 px-5 items-center bg-[hsl(var(--background))] text-[hsl(var(--foreground))] text-[11px] font-bold uppercase">Project notes</Link></div>
        </div>
      </div>
    </footer>
  )
}
