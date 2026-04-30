import type { CSSProperties, HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

type StickerProps = HTMLAttributes<HTMLDivElement> & {
  tone?: "butter" | "blue" | "cream" | "ink" | "white"
  rotate?: number
  children: ReactNode
}

const toneClasses: Record<NonNullable<StickerProps["tone"]>, string> = {
  butter: "border-brand-butter/70 bg-brand-butter/20 text-brand-ink",
  blue: "border-brand-blue/40 bg-brand-white/75 text-brand-blue",
  cream: "border-brand-ink/15 bg-brand-cream/75 text-brand-ink",
  ink: "border-brand-ink/20 bg-brand-ink/85 text-brand-butter",
  white: "border-white/60 bg-white/75 text-brand-ink",
}

export function Sticker({ tone = "butter", rotate = 0, className, children, style, ...rest }: StickerProps) {
  return (
    <div
      {...rest}
      style={{
        ...style,
        "--sticker-rotate": `${rotate}deg`,
        transform: `rotate(${rotate}deg)`,
      } as CSSProperties}
      className={cn(
        "inline-flex max-w-[min(18rem,calc(100vw-3rem))] items-center rounded-full border px-4 py-2 text-[0.62rem] font-semibold uppercase leading-none tracking-[0.14em] shadow-[0_18px_42px_-34px_rgba(24,23,19,0.72)] backdrop-blur-md",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </div>
  )
}
