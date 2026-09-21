import * as React from "react"
type Theme = "light" | "dark"
const Ctx = React.createContext<{theme: Theme, toggle: ()=>void}>({theme:"light", toggle:()=>{}})
export function ThemeProvider({children}:{children: React.ReactNode}){
  const [theme, setTheme] = React.useState<Theme>("light")
  React.useEffect(()=>{
    const saved = localStorage.getItem("theme") as Theme | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initial = saved || (prefersDark ? "dark" : "light")
    setTheme(initial)
    document.documentElement.classList.toggle("dark", initial==="dark")
  },[])
  const toggle = ()=>{
    const next = theme==="light"?"dark":"light"
    setTheme(next)
    localStorage.setItem("theme", next)
    document.documentElement.classList.toggle("dark", next==="dark")
  }
  return <Ctx.Provider value={{theme, toggle}}>{children}</Ctx.Provider>
}
export const useTheme = ()=> React.useContext(Ctx)
