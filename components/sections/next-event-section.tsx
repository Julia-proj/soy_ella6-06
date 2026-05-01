"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { openBookingModal } from "@/lib/booking-events"

export function NextEventSection() {
  return (
    <section
      id="event"
      aria-label="Следующая встреча SOY ELLA"
      className="relative overflow-hidden"
    >
      {/* ── TOP ZONE — premium dark blue ───────────────────────── */}
      <div className="relative overflow-hidden text-brand-cream" style={{ backgroundColor: "#010816" }}>
        {/* Desktop: photo left, content right — full-bleed */}
        <div className="relative z-10 lg:grid lg:grid-cols-[50fr_50fr] lg:items-stretch xl:grid-cols-[52fr_48fr]">

          {/* PHOTO COLUMN — left on desktop, hidden on mobile */}
          <motion.figure
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="hidden overflow-hidden lg:block lg:p-5 xl:p-6"
          >
            <div className="relative h-full min-h-[390px] w-full overflow-hidden rounded-2xl xl:min-h-[430px]">
              <Image
                src="/soy-ella/IMG_4920.jpeg"
                alt="Beauty Day — следующая встреча SOY ELLA"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="editorial-photo-warm object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20" />
              <p className="absolute bottom-5 left-6 text-[0.55rem] font-medium uppercase tracking-[0.2em] text-white/35">
                Beauty Day · Madrid
              </p>
            </div>
          </motion.figure>

          {/* CONTENT COLUMN — right on desktop, full-width on mobile */}
          <div className="flex flex-col justify-center gap-6 px-[max(5vw,1.25rem)] py-14 md:px-[max(8vw,3rem)] md:py-16 lg:gap-5 lg:px-10 lg:py-8 xl:px-14 xl:py-10">

            {/* Badge + title */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="section-number section-number-light"
              >
                No. 02 / Следующая встреча
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 }}
                className="mt-6 font-display text-[clamp(3.6rem,6vw,5rem)] leading-[0.92] text-brand-cream sm:mt-8 lg:mt-4"
              >
                Beauty
                <br />
                <span className="text-gold-muted">Day.</span>
              </motion.h2>

              {/* Mobile-only photo — after title, before metadata */}
              <motion.figure
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.15 }}
                className="mt-8 overflow-hidden lg:hidden"
              >
                <div className="relative aspect-[3/2] sm:aspect-[16/10]">
                  <Image
                    src="/soy-ella/IMG_4920.jpeg"
                    alt="Beauty Day — следующая встреча SOY ELLA"
                    fill
                    sizes="100vw"
                    className="editorial-photo-warm object-cover object-center"
                  />
                </div>
              </motion.figure>

              {/* Metadata */}
              <motion.dl
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-6 sm:gap-10 lg:mt-5 lg:pt-4"
              >
                <div>
                  <dt className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-gold-muted sm:text-[0.65rem]">
                    Дата
                  </dt>
                  <dd className="mt-1 font-serif text-base text-brand-cream sm:text-lg lg:text-base">30 мая</dd>
                </div>
                <div>
                  <dt className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-gold-muted sm:text-[0.65rem]">
                    Локация
                  </dt>
                  <dd className="mt-1 font-serif text-base text-brand-cream sm:text-lg lg:text-base">Madrid</dd>
                </div>
                <div>
                  <dt className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-gold-muted sm:text-[0.65rem]">
                    Места
                  </dt>
                  <dd className="mt-1 font-serif text-base text-brand-cream sm:text-lg lg:text-base">Ограничены</dd>
                </div>
              </motion.dl>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold-muted">
                Участие включает
              </span>
              <p className="mt-3 text-base leading-relaxed text-brand-cream/75 lg:text-sm">
                Welcome box, премиальные закуски и напитки, все выступления экспертов, нетворкинг и знакомства с участницами.
              </p>
            </motion.div>

            {/* Payment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="border-t border-white/10 pt-6"
            >
              {/* Deadline */}
              <div className="mb-6 flex items-start gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-muted"
                  style={{ boxShadow: "0 0 6px 1px rgba(196,162,101,0.5)" }}
                />
                <div>
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/60 sm:text-[0.7rem]">
                    Свободных мест осталось мало
                  </p>
                  <p className="mt-0.5 font-display italic text-xl leading-tight text-gold-muted sm:text-2xl">
                    регистрация до 23 мая
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {/* Primary — полная оплата */}
                <a
                  href="https://buy.stripe.com/8x29AT8nv9YfdK48WLdnW1U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-full bg-wine px-6 py-4 transition-all duration-300 hover:scale-[1.015] hover:bg-wine-light hover:shadow-[0_8px_32px_rgba(92,26,27,0.35)] active:scale-[0.99] sm:px-7"
                >
                  <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "300%" }}
                    transition={{
                      duration: 0.75,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 3.5,
                      delay: 2,
                    }}
                  />
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-cream sm:text-[0.72rem]">
                    Оплатить участие
                  </span>
                  <span className="shrink-0 font-sans text-lg font-semibold tabular-nums tracking-tight text-cream">
                    180 €
                  </span>
                </a>

                {/* Secondary — депозит (открывает модалку) */}
                <div>
                  <button
                    type="button"
                    onClick={openBookingModal}
                    className="flex w-full items-center justify-between gap-4 rounded-full border border-cream/25 px-6 py-4 transition-all duration-300 hover:border-cream/40 hover:bg-white/[0.04] sm:px-7"
                  >
                    <span className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-cream/70 sm:text-[0.72rem]">
                      Забронировать место
                    </span>
                    <span className="shrink-0 font-sans text-lg font-semibold tabular-nums tracking-tight text-cream">
                      50 €
                    </span>
                  </button>
                  <p className="mt-2 px-1 text-[0.58rem] leading-relaxed text-white/30">
                    Фиксирует место. Остаток 130 € оплатишь ближе к дате.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-center text-[0.52rem] font-medium uppercase tracking-[0.18em] text-white/35">
                Stripe · Безопасная оплата · Оплата в €
              </p>
            </motion.div>
          </div>



        </div>
      </div>

    </section>
  )
}
