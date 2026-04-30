"use client"

import { motion } from "framer-motion"

interface MarqueeTextProps {
  variant?: "blue" | "yellow" | "cream" | "black"
  text?: string
  className?: string
}

export function MarqueeText({ variant = "blue", text, className = "" }: MarqueeTextProps) {
  const phrase = text ?? "Soy Ella"
  const repeated = Array(10).fill(phrase + "   ·   ").join("")

  const styles: Record<string, string> = {
    blue:   "bg-brand-blue text-white",
    yellow: "bg-brand-yellow text-brand-blue",
    cream:  "bg-brand-cream text-brand-blue border-y border-brand-blue/10",
    black:  "bg-black text-white",
  }

  return (
    <div
      className={`overflow-hidden py-4 sm:py-5 ${styles[variant]} ${className}`}
      aria-hidden
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 35,
          ease: "linear",
        }}
      >
        {[0, 1].map((i) => (
          <span
            key={i}
            className="font-display text-2xl uppercase tracking-[0.3em] sm:text-3xl md:text-4xl lg:text-5xl"
          >
            {repeated}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
