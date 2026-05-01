"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { openBookingModal } from "@/lib/booking-events"

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-gold-muted/25 bg-wine/90 backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex h-[72px] items-center justify-between gap-3 px-4 sm:px-6">
        <div className="min-w-0 flex flex-col gap-0.5">
          <p className="text-[0.52rem] font-medium uppercase tracking-[0.2em] text-cream/50">
            30 мая · Madrid
          </p>
          <p className="font-display italic text-[1.55rem] leading-none text-gold-muted">
            Beauty Day
          </p>
          <p className="text-[0.52rem] font-medium uppercase tracking-[0.18em] text-gold-muted/60">
            бронь до 23 мая
          </p>
        </div>
        <button
          type="button"
          onClick={openBookingModal}
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-cream px-5 py-2.5 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-wine transition-colors hover:bg-parchment sm:px-6 sm:py-3"
        >
          Занять место
        </button>
      </div>
    </div>
  )
}
