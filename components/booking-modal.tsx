"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { X } from "lucide-react"
import { useIsMobile } from "@/components/ui/use-mobile"
import { BOOKING_OPEN_EVENT } from "@/lib/booking-events"

const BOOKING_KEY = "se-booking-v1"
const INTRO_KEY = "se-intro-v2"
const EASE = [0.16, 1, 0.3, 1] as const

const STRIPE_DEPOSIT = "https://buy.stripe.com/00wcN56fn7Q7eO8c8XdnW1T"
const STRIPE_FULL = "https://buy.stripe.com/8x29AT8nv9YfdK48WLdnW1U"

export function BookingModal() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const isMobile = useIsMobile()
  const shouldReduceMotion = useReducedMotion()
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const innerTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-open after delay, respecting intro animation timing
  useEffect(() => {
    try {
      if (sessionStorage.getItem(BOOKING_KEY)) return
    } catch {
      return
    }

    const outerTimer = setTimeout(() => {
      try {
        if (!sessionStorage.getItem(INTRO_KEY)) {
          // First visit: intro animation still running, wait for it to finish
          innerTimerRef.current = setTimeout(() => setOpen(true), 600)
        } else {
          setOpen(true)
        }
      } catch {
        setOpen(true)
      }
    }, 2500)

    return () => {
      clearTimeout(outerTimer)
      if (innerTimerRef.current) clearTimeout(innerTimerRef.current)
    }
  }, [])

  // Open via custom event (from buttons anywhere on the page)
  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener(BOOKING_OPEN_EVENT, handler)
    return () => window.removeEventListener(BOOKING_OPEN_EVENT, handler)
  }, [])

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // Focus close button when modal opens
  useEffect(() => {
    if (open) closeButtonRef.current?.focus()
  }, [open])

  // Escape key to close
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [open]) // eslint-disable-line react-hooks/exhaustive-deps

  const close = useCallback(() => {
    try {
      sessionStorage.setItem(BOOKING_KEY, "1")
    } catch {
      // Private browsing may block sessionStorage
    }
    setOpen(false)
  }, [])

  if (!mounted) return null

  const overlayTransition = { duration: shouldReduceMotion ? 0.1 : 0.3 }

  const panelInitial = shouldReduceMotion
    ? isMobile ? { opacity: 0 } : { opacity: 0, x: "-50%", y: "-50%" }
    : isMobile
    ? { y: "100%" }
    : { opacity: 0, scale: 0.95, x: "-50%", y: "-46%" }

  const panelAnimate = shouldReduceMotion
    ? isMobile ? { opacity: 1 } : { opacity: 1, x: "-50%", y: "-50%" }
    : isMobile
    ? { y: 0 }
    : { opacity: 1, scale: 1, x: "-50%", y: "-50%" }

  const panelExit = shouldReduceMotion
    ? isMobile ? { opacity: 0 } : { opacity: 0, x: "-50%", y: "-50%" }
    : isMobile
    ? { y: "100%" }
    : { opacity: 0, scale: 0.97, x: "-50%", y: "-48%" }

  const panelTransition = shouldReduceMotion
    ? { duration: 0.15 }
    : isMobile
    ? { duration: 0.42, ease: EASE }
    : { duration: 0.38, ease: EASE }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            key="booking-overlay"
            className="fixed inset-0 z-[200] bg-black/55 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={overlayTransition}
            onClick={close}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="booking-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Забронировать место на Beauty Day"
            className={
              isMobile
                ? "fixed inset-x-0 bottom-0 z-[201] max-h-[90svh] overflow-y-auto rounded-t-2xl bg-brand-cream"
                : "fixed left-1/2 top-1/2 z-[201] w-[calc(100%-2rem)] max-w-md max-h-[90svh] overflow-y-auto rounded-2xl bg-brand-cream shadow-2xl"
            }
            style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
            initial={panelInitial}
            animate={panelAnimate}
            exit={panelExit}
            transition={panelTransition}
          >
            <div className="relative p-5 sm:p-6 md:p-8">
              {/* Drag handle — mobile only */}
              {isMobile && (
                <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-brand-ink/15" />
              )}

              {/* Close button */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={close}
                aria-label="Закрыть"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-ink/5 text-brand-taupe transition-colors hover:bg-brand-ink/10"
              >
                <X size={14} strokeWidth={2} />
              </button>

              {/* Deadline badge */}
              <span className="inline-flex items-center rounded-full border border-brand-yellow px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-brand-taupe">
                до 23 мая
              </span>

              {/* Title */}
              <h2 className="mt-3 font-display text-xl leading-tight text-brand-ink sm:mt-4 sm:text-2xl md:text-3xl">
                Забронировать место на Beauty Day
              </h2>

              {/* Date */}
              <p className="mt-1.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-brand-taupe sm:mt-2">
                30 мая · Мадрид
              </p>

              {/* Body */}
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/65 sm:mt-4">
                Если ты уже всё решила, можно не листать сайт до конца.
                Забронируй место сейчас, а детали мы отправим после оплаты.
              </p>

              <div className="mt-4 h-px bg-brand-ink/8 sm:mt-6" />

              {/* Option 1 — Deposit, primary */}
              <a
                href={STRIPE_DEPOSIT}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-between gap-3 rounded-full bg-brand-ink px-4 py-3.5 text-brand-cream transition-colors hover:bg-[#2a2622] sm:mt-5 sm:gap-4 sm:px-5 sm:py-4"
              >
                <span className="min-w-0 text-[0.65rem] font-bold uppercase tracking-[0.2em]">
                  Резервация места
                </span>
                <span className="shrink-0 font-sans text-xl font-semibold tabular-nums tracking-tight">50 €</span>
              </a>
              <p className="mt-2 px-1 text-[0.58rem] text-brand-taupe/70">
                остаток 130 € оплачивается позже
              </p>

              {/* Separator */}
              <div className="my-3 flex items-center gap-3 sm:my-4">
                <div className="h-px flex-1 bg-brand-ink/8" />
                <span className="text-[0.58rem] uppercase tracking-[0.2em] text-brand-ink/30">или</span>
                <div className="h-px flex-1 bg-brand-ink/8" />
              </div>

              {/* Option 2 — Full payment, secondary */}
              <a
                href={STRIPE_FULL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-between gap-3 rounded-full border border-brand-ink/15 px-4 py-3 text-brand-ink/75 transition-colors hover:border-brand-ink/30 hover:text-brand-ink sm:gap-4 sm:px-5 sm:py-3.5"
              >
                <span className="min-w-0 text-[0.65rem] font-medium uppercase tracking-[0.2em]">
                  Полная оплата
                </span>
                <span className="shrink-0 font-sans text-lg font-semibold tabular-nums tracking-tight">180 €</span>
              </a>

              {/* Footer */}
              <p className="mt-4 text-center text-[0.55rem] uppercase tracking-[0.18em] text-brand-ink/25 sm:mt-5">
                Оплата доступна до 23 мая · Stripe · Безопасная оплата
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
