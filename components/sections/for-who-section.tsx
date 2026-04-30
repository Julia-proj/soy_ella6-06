"use client"

import { motion } from "framer-motion"

const ITEMS = [
  { n: "01", t: "Ищешь окружение", d: "Хочешь быть среди тех, кто тоже растет." },
  { n: "02", t: "Хочешь рост", d: "В деле, в теле, в отношениях, в жизни." },
  { n: "03", t: "Умная красота", d: "Красота и здоровье без маркетинговых ловушек." },
  { n: "04", t: "Ценишь качество", d: "Одно премиальное вместо десяти средних." },
  { n: "05", t: "Новая в Мадриде", d: "Ищешь своих и хочешь быстро войти в среду." },
  { n: "06", t: "Знакомства уровня", d: "Женщины, с которыми хочется быть на связи." },
]

export function ForWhoSection() {
  return (
    <section aria-label="Для кого SOY ELLA" className="section-pad overflow-hidden bg-brand-blue text-brand-cream">
      <div className="site-shell">
        {/* Section number */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-number section-number-light"
        >
          No. 05 / Для кого
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mega-title mt-8 max-w-3xl font-display text-brand-cream sm:mt-10"
        >
          Для тебя, если ты
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-brand-cream/65 sm:text-lg"
        >
          Если узнаешь себя, значит ты в правильном месте
        </motion.p>

        {/* Grid */}
        <ul className="mt-14 grid gap-px bg-brand-cream/15 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <motion.li
              key={item.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.05 * i }}
              className="group bg-brand-blue p-7 transition-colors duration-500 hover:bg-brand-blue-deep sm:p-8 lg:p-7 xl:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand-yellow">
                  {item.n}
                </span>
              </div>
              <h3 className="section-h3 mt-5 font-serif text-brand-cream">
                {item.t}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-brand-cream/60 sm:text-lg">
                {item.d}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
