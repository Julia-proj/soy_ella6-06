"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const PRINCIPLES = [
  {
    n: "01",
    t: "Закрытый формат",
    d: "Только по заявке. Ограниченные места на каждую встречу.",
  },
  {
    n: "02",
    t: "Экспертные встречи",
    d: "Спикеры, бренды и темы, проверенные на себе.",
  },
  {
    n: "03",
    t: "Теплая среда",
    d: "Женщины, которые вдохновляют, а не сравнивают.",
  },
]

export function AboutSection() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section id="about" aria-label="О SOY ELLA" className="section-pad relative overflow-hidden bg-cream text-charcoal">

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[90svh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1200}
                height={900}
                className="max-h-[88svh] w-auto rounded-xl object-contain shadow-2xl"
                style={{ maxWidth: "88vw" }}
              />
              <button
                onClick={() => setLightbox(null)}
                aria-label="Закрыть"
                className="absolute -right-3 -top-3 flex size-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="site-shell">
        {/* Section number */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-number section-number-dark"
        >
          No. 01 / О Soy Ella
        </motion.span>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-10 max-w-3xl sm:mt-12 lg:mt-14"
        >
          <p className="font-serif text-2xl italic text-charcoal/50 sm:text-3xl md:text-4xl lg:text-[2.5rem]">
            Не массовый нетворкинг. Качество важнее количества.
          </p>
        </motion.blockquote>

        {/* Main title - LARGE editorial */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mega-title mt-12 max-w-5xl font-display text-wine sm:mt-16"
        >
          Пространство, где женщины знакомятся, растут и выходят на новый уровень.
        </motion.h2>

        {/* Two-column content */}
        <div className="mt-14 grid gap-10 sm:mt-20 lg:grid-cols-2 lg:gap-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base leading-relaxed text-charcoal/60 sm:text-lg"
          >
            Мы создаем среду, в которой легко быть собой, говорить по-настоящему и находить своих. Без пустых знакомств и конкуренции.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base leading-relaxed text-charcoal/60 sm:text-lg"
          >
            Каждая встреча продумана как личный вечер: сильные спикеры, теплый контакт, премиальные партнеры и девушки, с которыми хочется оставаться на связи.
          </motion.p>
        </div>

        {/* Image grid — editorial asymmetric layout */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:mt-20 sm:gap-4 lg:mt-16 lg:h-[480px] lg:grid-cols-[3fr_2fr] lg:grid-rows-2 xl:h-[520px] 2xl:h-[560px]">
          {/* Left: founders — tall, spans 2 rows on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="group relative col-span-2 aspect-[3/2] cursor-pointer overflow-hidden lg:col-span-1 lg:row-span-2 lg:aspect-auto"
            onClick={() => setLightbox({ src: "/soy-ella/hero.jpg", alt: "Организаторы SOY ELLA" })}
          >
            <Image
              src="/soy-ella/hero.jpg"
              alt="Организаторы SOY ELLA"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="editorial-photo object-cover object-[center_38%] transition-transform duration-1000 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pb-5 pl-5 pt-14 lg:pb-8 lg:pl-8">
              <p className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
                Founders
              </p>
              <p className="mt-1 font-serif text-sm italic text-white/90">
                Silvia & Elena
              </p>
            </div>
          </motion.div>

          {/* Right top: community */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="group relative aspect-square cursor-pointer overflow-hidden lg:aspect-auto"
            onClick={() => setLightbox({ src: "/soy-ella/girls.jpg", alt: "Участницы SOY ELLA" })}
          >
            <Image
              src="/soy-ella/girls.jpg"
              alt="Участницы SOY ELLA — женское комьюнити в Мадриде"
              fill
              sizes="(min-width: 1024px) 40vw, 50vw"
              className="editorial-photo object-cover object-[center_25%] transition-transform duration-1000 group-hover:scale-[1.03]"
            />
          </motion.div>

          {/* Right bottom: detail */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="group relative aspect-square cursor-pointer overflow-hidden lg:aspect-auto"
            onClick={() => setLightbox({ src: "/soy-ella/IMG_4749.PNG", alt: "Детали встречи SOY ELLA" })}
          >
            <Image
              src="/soy-ella/IMG_4749.PNG"
              alt="Детали встречи SOY ELLA"
              fill
              sizes="(min-width: 1024px) 40vw, 50vw"
              className="editorial-photo-warm object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
            />
          </motion.div>
        </div>

        {/* Principles */}
        <ul className="mt-16 grid border-t border-charcoal/10 sm:mt-24 lg:mt-20 sm:grid-cols-3">
          {PRINCIPLES.map((item, i) => (
            <motion.li
              key={item.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * i }}
              className="border-b border-charcoal/10 py-10 sm:border-b-0 sm:border-r sm:border-charcoal/10 sm:px-8 sm:py-14 sm:last:border-r-0 md:px-10"
            >
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold-muted">
                {item.n}
              </span>
              <h3 className="section-h3 mt-5 font-serif text-wine">
                {item.t}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-charcoal/60 sm:text-lg">
                {item.d}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
