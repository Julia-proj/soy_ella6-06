"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function FeaturedOrganizerSection() {
  return (
    <section
      aria-label="Один из организаторов встречи - Keratin Madrid"
      className="section-pad relative overflow-hidden bg-brand-cream text-brand-blue"
    >
      <div className="site-shell">
        {/* Section number */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-number section-number-dark"
        >
          No. 04 / Co-organizer
        </motion.span>

        <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_1.1fr] xl:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[3/2] overflow-hidden sm:aspect-[4/3] lg:aspect-[3/2] xl:aspect-[4/3]">
              <Image
                src="/soy-ella/expert-keratin-madrid.jpg"
                alt="Елена Александрова, Keratin Madrid"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="editorial-photo object-cover object-top transition-transform duration-1000 hover:scale-[1.02]"
              />
            </div>
            <p className="mt-4 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-brand-blue/55">
              Елена Александрова · Founder · Keratin Madrid
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h2 className="display-mega font-display text-brand-blue">
              Keratin<span className="lg:hidden"><br /></span><span className="hidden lg:inline"> </span>Madrid
              <span className="sm:hidden"><br /></span>
              <span className="text-brand-butter"> × </span>
              <span className="text-brand-butter">Soy Ella</span>
            </h2>

            <p className="mt-10 max-w-lg text-base leading-relaxed text-brand-ink/65 sm:text-lg">
              Keratin Madrid является одним из организаторов сообщества Soy Ella. Елена Александрова отвечает за экспертную программу и представит на встрече систему домашнего профессионального восстановления волос для девушек, которые ценят качество и время.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 sm:mt-12">
              <a
                href="https://www.instagram.com/curso_keratin_madrid/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-brand-blue px-5 py-4 text-center text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-brand-cream transition-all duration-300 hover:bg-brand-blue-deep sm:w-auto sm:px-8 sm:text-[0.7rem] sm:tracking-[0.2em]"
              >
                Instagram Keratin Madrid
              </a>
              <a
                href="https://www.instagram.com/curso_keratin_madrid/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-brand-blue/30 bg-transparent px-5 py-4 text-center text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-brand-blue transition-all duration-300 hover:border-brand-blue hover:bg-brand-blue hover:text-brand-cream sm:w-auto sm:px-8 sm:text-[0.7rem] sm:tracking-[0.2em]"
              >
                В доступе скоро
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
