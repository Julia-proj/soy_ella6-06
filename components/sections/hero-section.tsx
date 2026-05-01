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
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/soy-ella/hero-new.png"
          alt="SOY ELLA — женское комьюнити в Мадриде"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ filter: "brightness(0.70) contrast(1.08)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/70" />
      </div>

      {/* Content — centered */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 py-24 text-center">

        {/* City tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex items-center gap-4 sm:mb-12"
        >
          <span className="h-px w-8 bg-gold-muted/60 sm:w-14" />
          <span className="text-[0.58rem] font-medium uppercase tracking-[0.45em] text-gold-muted sm:text-[0.65rem]">
            Madrid · España
          </span>
          <span className="h-px w-8 bg-gold-muted/60 sm:w-14" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="leading-none"
        >
          <span
            className="block font-display uppercase text-white/90"
            style={{ 
              fontSize: "clamp(5.5rem, 18vw, 13rem)", 
              lineHeight: 0.85,
              letterSpacing: "-0.02em",
              fontWeight: 400,
            }}
          >
            Soy
          </span>
          <span
            className="block font-display uppercase text-white"
            style={{
              fontSize: "clamp(7rem, 25vw, 18rem)",
              lineHeight: 0.83,
              letterSpacing: "-0.02em",
              fontWeight: 400,
            }}
          >
            Ella
          </span>
        </motion.h1>

        {/* Gold ornament divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex items-center gap-5 sm:mt-10"
          style={{ transformOrigin: "center" }}
        >
          <span className="h-px w-12 bg-gold-muted/50 sm:w-20" />
          <span className="text-[0.6rem] tracking-[0.3em] text-gold-muted/70">◆</span>
          <span className="h-px w-12 bg-gold-muted/50 sm:w-20" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-[18rem] text-sm font-light leading-relaxed tracking-wide text-white/55 sm:max-w-xs sm:text-base lg:max-w-sm"
        >
          Закрытое женское комьюнити в Мадриде для девушек, которые выбирают рост, качество жизни и сильное окружение.
        </motion.p>

        {/* CTA — ghost outlined */}
        <motion.a
          href="#event"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 inline-flex items-center gap-3 border border-white/20 px-9 py-4 text-[0.6rem] font-medium uppercase tracking-[0.35em] text-white/70 transition-all duration-500 hover:border-gold-muted/60 hover:text-gold-muted sm:mt-14"
        >
          Следующая встреча
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
          <p className="text-[0.55rem] font-medium uppercase tracking-[0.16em] text-white/40 sm:text-[0.62rem] sm:tracking-[0.25em]">
            30 мая next event
          </p>
          <p className="hidden text-[0.6rem] font-medium uppercase tracking-[0.25em] text-white/40 sm:block sm:text-[0.62rem]">
            Beauty Day No. 04
          </p>
          <p className="text-right text-[0.55rem] font-medium uppercase tracking-[0.16em] text-white/40 sm:text-[0.62rem] sm:tracking-[0.25em]">
            Места ограничены
          </p>
        </div>
      </motion.div>
    </section>
  )
}
