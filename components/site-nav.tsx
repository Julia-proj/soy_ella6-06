"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { TransitionLink } from "@/components/ui/transition-link"
import { NAVIGATION_LINKS } from "@/config/constants"
import { useScroll } from "@/hooks/use-scroll"
import { useBodyLock } from "@/hooks/use-body-lock"

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const scrolled = useScroll(40)

  // Body scroll lock for mobile menu
  useBodyLock(open)

  return (
    <>
      {/* Top nav */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-wine/10 bg-cream/95 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="site-shell flex h-14 items-center justify-between gap-4 sm:h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            aria-label="SOY ELLA — на главную"
            className="font-display text-base font-medium tracking-[0.15em] sm:text-lg"
          >
            <span className={cn("transition-colors duration-300", scrolled ? "text-wine" : "text-white")}>SOY </span>
            <span className={cn("transition-colors duration-300", scrolled ? "text-wine-deep" : "text-cream/70")}>ELLA</span>
          </a>

          {/* Desktop links */}
          <nav aria-label="Основная навигация" className="hidden lg:flex">
            <ul className="flex items-center gap-10 text-[0.75rem] font-medium uppercase tracking-[0.12em] xl:text-[0.8rem]">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <TransitionLink
                    href={link.href}
                    className={cn(
                      "transition-colors duration-300",
                      scrolled ? "text-wine/60 hover:text-wine" : "text-white/70 hover:text-white",
                    )}
                  >
                    {link.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <a
            href="#event"
            className={cn(
              "hidden lg:inline-flex px-6 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.1em] transition-all duration-300 xl:text-[0.75rem]",
              scrolled
                ? "rounded-full border border-wine bg-wine text-cream hover:bg-wine-light hover:border-wine-light"
                : "rounded-full border border-white/30 text-white hover:bg-white/10",
            )}
          >
            Занять место
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Открыть меню"
            aria-expanded={open}
            className={cn(
              "inline-flex size-10 items-center justify-center transition-colors duration-300 lg:hidden",
              scrolled ? "text-wine" : "text-white",
            )}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-wine-deep/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[70] w-full max-w-[320px] bg-cream px-6 pt-6 text-wine transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="Меню навигации"
      >
        <div className="flex items-center justify-between">
          <span className="font-display italic text-base font-medium tracking-[0.15em]">
            <span className="text-wine">SOY </span><span className="text-wine-deep">ELLA</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Закрыть меню"
            className="inline-flex size-10 items-center justify-center"
          >
            <X className="size-4" />
          </button>
        </div>

        <ul className="mt-12">
          {NAVIGATION_LINKS.map((link) => (
            <li key={link.href}>
              <TransitionLink
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-t border-wine/10 py-5 font-serif text-2xl font-medium text-wine transition-colors hover:text-wine-light"
              >
                {link.label}
              </TransitionLink>
            </li>
          ))}
        </ul>

        <a
          href="#event"
          onClick={() => setOpen(false)}
          className="mt-10 inline-flex w-full items-center justify-center rounded-full border border-wine bg-wine py-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-wine-light hover:border-wine-light"
        >
          Занять место
        </a>
      </div>
    </>
  )
}
