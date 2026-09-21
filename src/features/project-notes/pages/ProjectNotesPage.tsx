import ReactMarkdown from 'react-markdown'
const md = `
# Root Cause
CSS not rendering because __root.tsx used legacy pattern import '@/styles.css' + component with Outlet. In TanStack Start, CSS must be loaded via head links with ?url and shellComponent. Browser received HTML without stylesheet.

Also NotFound warning due to missing notFoundComponent on __root__.

Vite config had vite-tsconfig-paths unnecessary and customDomainLoggerPlugin type error.

Netlify plugin ^2.0.0 does not exist, correct is ^1.3.19 per reference.

# Files Modified
- src/styles.css kept original HSL tokens preserved
- src/routes/__root.tsx corrected to shellComponent + head links
- src/router.tsx corrected getRouter pattern
- vite.config.ts aligned to reference: devtools(), tailwindcss(), tanstackStart(), viteReact(), netlify(), customDomainLoggerPlugin
- package.json corrected versions
- tsconfig.json added types node, vite/client
- All feature pages preserved design but use hsl(var(--token)) syntax compatible with original tokens
`
export function ProjectNotesPage(){
  return <div className="mx-auto max-w-[900px] px-6 py-12"><div className="border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-8"><ReactMarkdown>{md}</ReactMarkdown></div></div>
}
