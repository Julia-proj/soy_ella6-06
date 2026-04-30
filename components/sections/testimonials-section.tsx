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
      className="section-pad bg-brand-cream text-brand-blue"
    >
      <div className="site-shell">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-number section-number-dark"
        >
          No. 07 / Отзывы
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mega-title mt-8 max-w-3xl font-display text-brand-blue sm:mt-10"
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
              className="border-l-[2px] border-brand-yellow py-8 pl-7 sm:py-10 sm:pl-8"
            >
              <span
                aria-hidden
                className="font-serif text-6xl leading-none text-brand-yellow/70 sm:text-7xl"
              >
                &ldquo;
              </span>
              <blockquote className="mt-3">
                <p className="font-serif text-xl font-medium leading-relaxed text-brand-ink sm:text-2xl">
                  {review.text}
                </p>
              </blockquote>
              <footer className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-ink">
                  {review.name}
                </p>
                <p className="mt-1.5 text-[0.65rem] uppercase tracking-[0.14em] text-brand-ink/45">
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
