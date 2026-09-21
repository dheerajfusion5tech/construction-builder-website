import { Link, useRouterState } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"
import { Menu, X, Sun, Moon } from "lucide-react"
import * as React from "react"
const links = [
  { to: "/", label: "Home", num: "00" },
  { to: "/projects", label: "Projects", num: "01" },
  { to: "/services", label: "Services", num: "02" },
  { to: "/team", label: "Team", num: "03" },
  { to: "/contact", label: "Contact", num: "04" },
]
export function Navbar(){
  const [open, setOpen] = React.useState(false)
  const { toggle, theme } = useTheme()
  const pathname = useRouterState({ select: s=> s.location.pathname })
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1600px] items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-8 w-8 bg-[hsl(var(--foreground))] text-[hsl(var(--background))] grid place-items-center text-[11px] font-black">M</div>
          <div><div className="font-black text-[15px] uppercase">Monolith</div><div className="text-[10px] tracking-[0.2em] uppercase opacity-60">Builders — EST. 2006</div></div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l=>{
            const active = pathname===l.to
            return <Link key={l.to} to={l.to} className={"group flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] " + (active ? "opacity-100" : "opacity-60 hover:opacity-100")}><span className="text-[10px] opacity-50">{l.num}</span><span>{l.label}</span></Link>
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggle} className="h-9 w-9 grid place-items-center rounded-full border border-[hsl(var(--border))]"><span>{theme==="light" ? <Moon size={16}/> : <Sun size={16}/>}</span></button>
          <Link to="/contact" className="hidden lg:inline-flex"><Button variant="safety" size="sm" className="h-9">Start a Project</Button></Link>
          <button onClick={()=>setOpen(!open)} className="lg:hidden h-9 w-9 grid place-items-center border border-[hsl(var(--border))]">{open ? <X size={18}/> : <Menu size={18}/>}</button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-[hsl(var(--border))] bg-[hsl(var(--background))] px-6 py-8">
          <div className="grid gap-6">
            {links.map(l=>(<Link key={l.to} to={l.to} onClick={()=>setOpen(false)} className="flex justify-between items-center text-[24px] font-black uppercase"><span>{l.label}</span><span className="text-[12px] opacity-40">{l.num}</span></Link>))}
          </div>
        </div>
      )}
    </header>
  )
}
