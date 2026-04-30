"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section
      id="home"
      aria-label="SOY ELLA — главный экран"
      className="relative min-h-[100svh] overflow-hidden"
    >
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <Image
          src="/soy-ella/hero-new.png"
          alt="SOY ELLA — женское комьюнити в Мадриде"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Bottom gradient — darkest where text lives */}
        <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/90 via-wine-deep/40 to-transparent" />
        {/* Left gradient — extra readability for left-aligned text */}
        <div className="absolute inset-0 bg-gradient-to-r from-wine-deep/50 to-transparent" />
      </div>

      {/* Content — bottom left on mobile, centered on desktop */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-start justify-end px-5 pb-24 pt-24 text-left sm:px-10 sm:pb-28 lg:justify-center lg:px-20 lg:pb-24 lg:pt-24 xl:px-24">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gold-muted sm:mb-8 sm:text-[0.7rem]"
        >
          Madrid
        </motion.p>

        {/* Main title — HUGE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display uppercase text-white"
          style={{
            fontSize: "clamp(4rem, 13vw, 8.5rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
            fontWeight: 400,
          }}
        >
          <span className="block">Soy</span>
          <span className="block">Ella</span>
        </motion.h1>

        {/* Decorative ornament under title */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden
          className="mt-6 block text-xl tracking-[0.4em] text-gold-muted/70"
        >
          ◆
        </motion.span>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-sm text-base font-light leading-relaxed text-white/75 sm:mt-8 sm:max-w-md sm:text-lg lg:max-w-xl lg:text-xl"
        >
          Закрытое женское комьюнити в Мадриде для девушек, которые выбирают рост, качество жизни и сильное окружение.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#event"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-wine px-8 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:bg-wine-light sm:mt-12 sm:px-10"
        >
          Следующая встреча →
        </motion.a>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10"
      >
        <div className="site-shell flex items-center justify-between gap-4 py-5 sm:py-6">
          <p className="text-[0.55rem] font-medium uppercase tracking-[0.16em] text-white/50 sm:text-[0.65rem] sm:tracking-[0.25em]">
            30 мая next event
          </p>
          <p className="hidden text-[0.6rem] font-medium uppercase tracking-[0.25em] text-white/50 sm:block sm:text-[0.65rem]">
            Beauty Day No. 04
          </p>
          <p className="text-right text-[0.55rem] font-medium uppercase tracking-[0.16em] text-white/50 sm:text-[0.65rem] sm:tracking-[0.25em]">
            Места ограничены
          </p>
        </div>
      </motion.div>
    </section>
  )
}
