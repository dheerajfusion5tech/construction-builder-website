import { Button } from "@/components/ui/button"
export function ContactPage(){
  return (
    <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-10">
      <h1 className="font-black text-[56px] lg:text-[88px] uppercase leading-[0.85]">Start a<br/>build</h1>
      <div className="mt-10 grid lg:grid-cols-[1.2fr_0.8fr] border border-[hsl(var(--border))]">
        <div className="bg-[hsl(var(--card))] p-8">
          <div className="text-[11px] font-mono uppercase opacity-40 mb-8">Inquiry Sheet — MB-INQ-2026</div>
          <form className="grid gap-5">
            <input placeholder="Full Name" className="h-12 px-4 border border-[hsl(var(--border))] bg-[hsl(var(--background))]"/>
            <input placeholder="Work Email" className="h-12 px-4 border border-[hsl(var(--border))] bg-[hsl(var(--background))]"/>
            <textarea placeholder="Site / Scope / Timeline" rows={5} className="p-4 border border-[hsl(var(--border))] bg-[hsl(var(--background))]"></textarea>
            <Button variant="safety" size="xl">Submit Inquiry</Button>
          </form>
        </div>
        <div className="bg-[hsl(var(--foreground))] text-[hsl(var(--background))] p-8"><div className="text-[11px] uppercase opacity-40 mb-6">Builder Details</div><div className="text-[14px]">1201 E 7th St, Austin, TX<br/>hello@monolith.builders<br/>+1 (512) 555-0142</div></div>
      </div>
    </div>
  )
}
