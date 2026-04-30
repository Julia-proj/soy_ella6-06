import { ArrowUpRight } from "lucide-react"

export function EventTeaserSection() {
  return (
    <section aria-label="Анонс встречи" className="bg-foreground text-background">
      <div className="site-shell flex flex-col items-center py-16 text-center md:py-20">
        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-background/40 mb-4">
          30 мая · Мадрид
        </p>
        <h2
          className="mega-title font-display text-background leading-[0.85] tracking-normal"
        >
          MADRID
        </h2>
        <a
          href="#event"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-background/30 text-background px-8 py-4 text-[0.72rem] font-bold uppercase tracking-[0.12em] transition-colors hover:bg-background hover:text-foreground"
        >
          Смотреть программу
          <ArrowUpRight className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  )
}
