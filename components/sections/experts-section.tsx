"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram } from "lucide-react"

const BODA_CARDS = [
  {
    name: "Palacio Santoña",
    image: "/images/boda/boda-palacio.jpg",
    text: "Интерьеры с историей, атмосфера старого Мадрида и пространство, которое сразу задаёт особое настроение вечера.",
    tag: "Venue",
    size: "wide" as const,
    rotate: 0,
  },
  {
    name: "Lera Ruma con Amazónico",
    image: "/images/boda/boda-lera-amazonico.jpg",
    text: "Живой разговор без фильтров о том, как строить личный бренд, проявляться и становиться заметной.",
    tag: "Talk",
    size: "normal" as const,
    rotate: -1.5,
  },
  {
    name: "DOT.BRAND",
    image: "/images/boda/boda-dot-brand.jpg",
    text: "Украинский бренд одежды с сильной эстетикой, выразительными силуэтами и вещами, которые подчёркивают характер женщины.",
    tag: "Fashion",
    size: "normal" as const,
    rotate: 1,
  },
  {
    name: "Christina Cosmetics",
    image: "/images/boda/boda-christina-cosmetics.jpg",
    text: "Beauty show о современных технологиях ухода за кожей лица, инновационной косметике и подходе к красоте через науку.",
    tag: "Skincare",
    size: "normal" as const,
    rotate: -1,
  },
  {
    name: "Matcha Atelier",
    image: "/images/boda/boda-matcha-atelier.jpg",
    text: "Дегустация matcha и знакомство с ароматной, более лёгкой альтернативой кофе.",
    tag: "Experience",
    size: "normal" as const,
    rotate: 1.5,
  },
  {
    name: "b·bar Madrid",
    image: "/images/boda/boda-bbar-cocktails.jpg",
    text: "Специально для события команда b·bar подготовит персональные коктейли Soy Ella. Бармен будет готовить их прямо на ваших глазах.",
    tag: "Cocktails",
    size: "wide" as const,
    rotate: 0,
    instagram: "https://www.instagram.com/b.bar.madrid?igsh=Y2F6NHAzc256aXkz",
  },
  {
    name: "El presentador Andrey",
    image: "/images/boda/boda-andrey.jpg",
    text: "Атмосфера вечера, лёгкость, энергия и тот самый человек, который не даст событию превратиться в скучную лекцию.",
    tag: "Host",
    size: "normal" as const,
    rotate: -1.5,
  },
  {
    name: "Soy Ella & Keratin Madrid",
    image: "/images/boda/boda-keratin-madrid.jpg",
    text: "Елена расскажет, как ухаживать за волосами, чтобы они росли, были блестящими, здоровыми и выглядели ухоженно каждый день.",
    tag: "Hair Care",
    size: "normal" as const,
    rotate: 1,
  },
  {
    name: "Leame Skin & Leame Beauty Zone",
    image: "/images/boda/boda-leame.jpg",
    text: "Подарки для гостей и детали, которые делают вечер не просто полезным, а запоминающимся.",
    tag: "Gifts",
    size: "normal" as const,
    rotate: -1,
  },
]

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
          <span className="inline-block bg-white/90 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-wine backdrop-blur-sm">
            {card.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">
        <h3 className="font-serif text-xl font-medium leading-snug text-wine sm:text-2xl">
          {card.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-warm-gray sm:text-base">
          {card.text}
        </p>
        {card.instagram && (
          <a
            href={card.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-gold-muted transition-opacity hover:opacity-70"
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
      <div className="site-shell relative z-10 pb-10 pt-16 sm:pt-20">
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
          className="mt-8 font-display italic sm:mt-10"
          style={{
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
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
          className="mt-5 font-serif italic text-xl text-cream/70 sm:text-2xl"
        >
          не просто встреча, а beauty experience
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-cream/55 sm:text-lg"
        >
          30 мая в Palacio Santoña мы собираем женщин, бренды и экспертов
          в формате, где красота, стиль, нетворкинг и вдохновение соединяются в один вечер.
        </motion.p>

        {/* Ornament divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="divider-ornament mt-12 max-w-xs text-gold-muted"
        >
          <span className="text-lg">◆</span>
        </motion.div>
      </div>

      {/* ── CARDS — mobile horizontal scroll ─────── */}
      <div className="relative z-10 pb-4 pt-2 lg:hidden">
        <div className="flex gap-4 overflow-x-auto px-5 pb-6 [scroll-snap-type:x_mandatory] [-webkit-overflow-scrolling:touch]">
          {BODA_CARDS.map((card, i) => (
            <div
              key={card.name}
              className="w-[85vw] shrink-0 [scroll-snap-align:start]"
            >
              <InvitationCard card={{ ...card, rotate: 0 }} index={i} />
            </div>
          ))}
        </div>
      </div>

      {/* ── CARDS — desktop grid ──────────────────── */}
      <div className="site-shell relative z-10 hidden pb-16 pt-2 lg:block">
        <div className="grid grid-cols-3 gap-5 xl:gap-6">
          {BODA_CARDS.map((card, i) => (
            <div
              key={card.name}
              className={card.size === "wide" ? "col-span-2" : "col-span-1"}
            >
              <InvitationCard card={card} index={i} />
            </div>
          ))}
        </div>
      </div>

      {/* ── EVENT INFO CARD ───────────────────────── */}
      <div className="site-shell relative z-10 pb-20 pt-8 sm:pb-24">
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
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-wine/60">
                30 мая · 17:00
              </p>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-wine/60">
                Palacio Santoña
              </p>
              <p className="text-[0.6rem] text-warm-gray">
                C. de las Huertas, 13, Centro, 28012 Madrid
              </p>
            </div>

            {/* Wax seal ornament */}
            <div className="my-6 divider-ornament text-wine/30">
              <span className="text-base text-wine/40">◆</span>
            </div>

            <a
              href="#event"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-wine px-8 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:bg-wine-light"
            >
              Забронировать место
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
