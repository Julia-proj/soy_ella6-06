"use client"

import { motion } from "framer-motion"

const REVIEWS = [
  {
    text: "Пришла без ожиданий, ушла с тремя подругами и новым клиентом. Формат редкий для Мадрида.",
    name: "Алина",
    role: "Founder · студия бренд-дизайна",
  },
  {
    text: "Это не про нетворкинг ради нетворкинга. Это про женщин, которые живут интересно и делятся честно.",
    name: "Вика",
    role: "Marketing director",
  },
  {
    text: "Наконец встреча, где вкусно, красиво и полезно. Жду следующей встречи!",
    name: "Мария",
    role: "Архитектор",
  },
  {
    text: "Переехала в Мадрид три месяца назад и нашла своих именно здесь. Спасибо за такое бережное комьюнити.",
    name: "Ксения",
    role: "Продюсер",
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="reviews"
      aria-label="Отзывы участниц"
      className="section-pad bg-wine text-cream"
    >
      <div className="site-shell">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-number section-number-wine"
        >
          No. 07 / Отзывы
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mega-title mt-8 max-w-3xl font-display text-cream sm:mt-10"
        >
          Что говорят участницы
        </motion.h2>

        <ul className="mt-12 grid gap-x-8 gap-y-0 sm:mt-16 sm:grid-cols-2 sm:gap-y-6 lg:mt-14 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-0">
          {REVIEWS.map((review, index) => (
            <motion.li
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.08 * index }}
              className="invitation-card px-6 py-8 sm:px-7 sm:py-10"
              style={{ transform: index % 2 === 0 ? "rotate(-0.5deg)" : "rotate(0.5deg)" }}
            >
              <span
                aria-hidden
                className="font-serif text-5xl leading-none text-cream/30 sm:text-6xl"
              >
                &ldquo;
              </span>
              <blockquote className="mt-2">
                <p className="font-serif italic text-lg font-medium leading-relaxed text-charcoal sm:text-xl">
                  {review.text}
                </p>
              </blockquote>
              <footer className="mt-6 border-t border-wine/10 pt-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-wine">
                  {review.name}
                </p>
                <p className="mt-1 text-[0.6rem] uppercase tracking-[0.14em] text-warm-gray">
                  {review.role}
                </p>
              </footer>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
