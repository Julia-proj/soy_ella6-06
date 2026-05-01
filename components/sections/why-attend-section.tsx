"use client"

import { motion } from "framer-motion"
import { Mic, Sparkles, Users, Wine, Gift, Heart } from "lucide-react"

const ITEMS = [
  { icon: Mic,      t: "Экспертные выступления", d: "Спикеры уровня, короткие форматы, живые вопросы." },
  { icon: Sparkles, t: "Beauty инновации",       d: "Новые подходы к уходу, волосам и коже." },
  { icon: Users,    t: "Нетворкинг",             d: "Знакомства, которые остаются не на один вечер." },
  { icon: Wine,     t: "Закуски и напитки",      d: "Премиальное меню от партнеров." },
  { icon: Gift,     t: "Подарки партнеров",      d: "Каждая уходит с welcome box." },
  { icon: Heart,    t: "Новые знакомства",       d: "Девушки, с которыми хочется дружить." },
] as const

export function WhyAttendSection() {
  return (
    <section
      aria-label="Что тебя ждёт на встрече"
      className="section-pad bg-parchment text-charcoal"
    >
      <div className="site-shell">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-number section-number-dark"
        >
          No. 04 / Программа
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mega-title mt-8 font-display text-wine sm:mt-10"
        >
          Что тебя ждёт
        </motion.h2>

        <ul className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <motion.li
              key={item.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.07 * i }}
              className="invitation-card p-7 sm:p-8"
            >
              <item.icon size={22} strokeWidth={1.5} className="text-wine/60" />
              <h3 className="section-h3 mt-4 font-serif text-wine">{item.t}</h3>
              <p className="mt-3 text-base leading-relaxed text-charcoal/60 sm:text-lg">{item.d}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
