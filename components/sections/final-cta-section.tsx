"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { EVENT_CONFIG } from "@/config/constants"

export function FinalCtaSection() {
  return (
    <section
      aria-label="Финальный призыв"
      className="relative min-h-[70svh] overflow-hidden bg-wine-deep text-cream sm:min-h-[80svh]"
    >
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/soy-ella/2nd.JPG"
          alt="Участницы SOY ELLA на встрече в Мадриде"
          fill
          sizes="100vw"
          className="object-cover object-[center_42%] lg:object-[center_35%]"
          style={{ filter: 'saturate(0.85) contrast(1.05)' }}
        />
      </motion.div>

      {/* Strong overlay — text must be readable over photo */}
      <div className="absolute inset-0 bg-wine-deep/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-wine-deep via-wine-deep/40 to-transparent" />

      {/* Content */}
      <div className="site-shell relative z-10 flex min-h-[70svh] flex-col justify-end pb-16 pt-20 sm:min-h-[80svh] sm:pb-20 lg:justify-center lg:pb-16 lg:pt-16">
        {/* Section tag */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-number section-number-light"
        >
          No. 08 / Решение
        </motion.span>

          <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold-muted sm:text-[0.7rem]"
        >
          Beauty Day, {EVENT_CONFIG.date}, места ограничены
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mega-title mt-8 max-w-4xl font-display text-cream sm:mt-10"
        >
          Твое окружение влияет на скорость роста.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg"
        >
          Занимай одно из мест на Beauty Day. Без формальностей, просто приходи, знакомься и останься среди своих.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap gap-3 sm:mt-14"
        >
          <a
            href="https://buy.stripe.com/8x29AT8nv9YfdK48WLdnW1U"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-wine px-5 py-4 text-center text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-cream transition-all duration-300 hover:bg-wine-light sm:w-auto sm:px-10 sm:text-[0.7rem] sm:tracking-[0.18em]"
          >
            Оплатить участие, 180 €
          </a>
          <a
            href="#about"
            className="inline-flex w-full items-center justify-center rounded-full border border-cream/30 bg-transparent px-5 py-4 text-center text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-cream transition-all duration-300 hover:bg-cream/10 sm:w-auto sm:px-10 sm:text-[0.7rem] sm:tracking-[0.18em]"
          >
            Сначала узнать больше
          </a>
        </motion.div>
      </div>
    </section>
  )
}
