import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.14em] ring-offset-[hsl(var(--background))] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:bg-[hsl(var(--foreground))]/90",
        safety: "bg-[hsl(var(--safety))] text-white hover:bg-[hsl(var(--safety-dark))]",
        outline: "border border-[hsl(var(--border))] bg-transparent hover:bg-[hsl(var(--secondary))]",
        ghost: "hover:bg-[hsl(var(--secondary))]",
        secondary: "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary))]/80",
      },
      size: { default: "h-11 px-7", sm: "h-9 px-4", lg: "h-12 px-8", icon: "h-10 w-10", xl: "h-[56px] px-10" },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => (
  <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
))
Button.displayName = "Button"
export { Button, buttonVariants }
