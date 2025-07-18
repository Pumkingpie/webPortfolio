import * as React from "react"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    {...props}
  />
))
Card.displayName = "Card"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
))
CardContent.displayName = "CardContent"

export { Card, CardContent }

export function CardHeader({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="p-4 border-b border-slate-700" {...props}>{children}</div>;
}

export function CardTitle({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className="text-xl font-bold" {...props}>{children}</h3>;
}

export function CardDescription({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className="text-sm text-slate-400" {...props}>{children}</p>;
}

