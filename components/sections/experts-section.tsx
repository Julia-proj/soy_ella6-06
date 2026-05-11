"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import { BODA_CARDS } from "@/config/event-data"
import { EVENT_CONFIG } from "@/config/constants"

function InvitationCard({
  card,
  index,
}: {
  card: (typeof BODA_CARDS)[number]
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.06 * index, ease: [0.22, 1, 0.36, 1] }}
      className="invitation-card overflow-hidden"
      style={card.rotate !== 0 ? { transform: `rotate(${card.rotate}deg)` } : undefined}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${card.size === "wide" ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
        <Image
          src={card.image}
          alt={card.name}
          fill
          sizes="(min-width: 1024px) 66vw, (min-width: 640px) 50vw, 85vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.04]"
          style={{ filter: "saturate(0.92) contrast(1.02)" }}
        />
        {/* Tag overlay */}
        <div className="absolute left-4 top-4">
          <span className="inline-block bg-white/90 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-wine backdrop-blur-sm sm:text-[0.75rem]">
            {card.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">
        <h3 className="font-serif text-xl font-medium leading-snug text-wine sm:text-2xl lg:text-[1.3rem]">
          {card.name}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-warm-gray sm:text-lg lg:text-[1.05rem]">
          {card.text}
        </p>
        {card.instagram && (
          <a
            href={card.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-gold-muted transition-opacity hover:opacity-70"
          >
            <Instagram size={13} strokeWidth={1.5} />
            Instagram
          </a>
        )}
      </div>
    </motion.article>
  )
}

export function ExpertsSection() {
  return (
    <section
      id="experts"
      aria-label="Boda con Beauty — программа вечера"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#5C1A1B" }}
    >
      {/* Subtle noise overlay on wine bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          opacity: 0.04,
          mixBlendMode: "overlay",
        }}
      />

      {/* ── HEADER ─────────────────────────────────── */}
      <div className="site-shell relative z-10 pb-10 pt-16 sm:pt-20 md:pb-12 lg:pb-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-number section-number-wine"
        >
          El universo Soy Ella
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.1 }}
          className="mt-6 sm:mt-8 lg:mt-8 font-display italic"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 1,
            letterSpacing: "-0.01em",
            fontWeight: 400,
            color: "#FBF7F0",
          }}
        >
          Boda con Beauty
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 sm:mt-5 font-serif italic text-xl text-cream/70 sm:text-2xl"
        >
          не просто встреча, а beauty experience
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-5 sm:mt-6 max-w-2xl text-base leading-relaxed text-cream/55 sm:text-lg lg:text-[1.1rem]"
        >
          {EVENT_CONFIG.date} в {EVENT_CONFIG.venue} мы собираем женщин, бренды и экспертов
          в формате, где красота, стиль, нетворкинг и вдохновение соединяются в один вечер.
        </motion.p>

        {/* Ornament divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="divider-ornament mt-10 sm:mt-12 lg:mt-10 max-w-xs text-gold-muted"
        >
          <span className="text-lg">◆</span>
        </motion.div>
      </div>

      {/* ── CARDS — responsive grid ───────────────── */}
      <div className="site-shell relative z-10 pb-12 pt-2 sm:pb-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-6 2xl:grid-cols-3">
          {BODA_CARDS.map((card, i) => (
            <div
              key={card.name}
              className={card.size === "wide" ? "sm:col-span-2 lg:col-span-2 xl:col-span-2" : ""}
            >
              <InvitationCard card={card} index={i} />
            </div>
          ))}
        </div>
      </div>

      {/* ── EVENT INFO CARD ───────────────────────── */}
      <div className="site-shell relative z-10 pb-20 pt-6 sm:pb-24 sm:pt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mx-auto max-w-lg text-center"
        >
          <div
            className="invitation-card relative px-8 py-12 sm:px-12 sm:py-14"
            style={{ transform: "rotate(-0.5deg)" }}
          >
            {/* Decorative corner lines */}
            <div className="absolute left-4 top-4 h-5 w-5 border-l border-t border-wine/30" />
            <div className="absolute right-4 top-4 h-5 w-5 border-r border-t border-wine/30" />
            <div className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-wine/30" />
            <div className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-wine/30" />

            <p className="font-display italic text-3xl font-normal text-wine sm:text-4xl">
              Boda con Beauty
            </p>

            <div className="mt-6 space-y-2">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-wine/60 sm:text-[0.8rem]">
                {EVENT_CONFIG.date} · {EVENT_CONFIG.time}
              </p>
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-wine/60 sm:text-[0.8rem]">
                {EVENT_CONFIG.venue}
              </p>
              <p className="text-[0.7rem] text-warm-gray sm:text-[0.75rem]">
                {EVENT_CONFIG.venueAddress}
              </p>
            </div>

            {/* Wax seal ornament */}
            <div className="my-6 divider-ornament text-wine/30">
              <span className="text-base text-wine/40">◆</span>
            </div>

            <a
              href="#event"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-wine px-8 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cream transition-all duration-300 hover:bg-wine-light"
            >
              Забронировать место
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
