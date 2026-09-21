import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"
import appCss from "../styles.css?url"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ThemeProvider } from "@/hooks/use-theme"
export const Route = createRootRoute({
  head: () => ({
    meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { title: "Monolith Builders — Built to Last" }],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})
function NotFound() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-24">
      <div className="border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-8">
        <div className="text-[11px] font-mono uppercase tracking-[0.16em] opacity-40 mb-4">404 — Drawing Not Found — MB-404</div>
        <h1 className="font-black text-[48px] leading-[0.9] tracking-[-0.03em] uppercase">Sheet not found</h1>
        <p className="mt-4 text-[14px] opacity-70 max-w-[46ch]">The drawing you requested does not exist in the current set.</p>
        <a href="/" className="mt-6 inline-flex h-11 px-6 items-center bg-[hsl(var(--foreground))] text-[hsl(var(--background))] text-[11px] font-bold uppercase tracking-[0.14em]">Return to Index — 00</a>
      </div>
    </div>
  )
}
function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><HeadContent /></head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <ThemeProvider><Navbar /><main className="flex-1">{children}</main><Footer /></ThemeProvider>
        <TanStackDevtools config={{ position: "bottom-right" }} plugins={[{ name: "Tanstack Router", render: <TanStackRouterDevtoolsPanel /> }]} />
        <Scripts />
      </body>
    </html>
  )
}
