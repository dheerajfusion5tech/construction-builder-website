export function ServicesPage(){
  return (
    <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-10">
      <h1 className="font-black text-[56px] lg:text-[92px] leading-[0.85] uppercase">We self-<br/>perform<br/>structure.</h1>
      <p className="mt-6 max-w-[42ch] opacity-70">Others sub out concrete and steel. We don't. Our crews, our formwork, our cranes.</p>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {["General Contracting","Design-Build","Concrete & Structure","Restoration"].map(s=>(
          <div key={s} className="border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-8"><div className="font-black text-[22px] uppercase">{s}</div></div>
        ))}
      </div>
    </div>
  )
}
