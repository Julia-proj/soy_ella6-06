"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const EXIT_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1]
const INTRO_KEY = "se-intro-v2"

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: GRAIN_SVG,
        backgroundSize: "180px 180px",
        opacity: 0.045,
        mixBlendMode: "multiply",
      }}
    />
  )
}

export function IntroAnimation() {
  const [visible, setVisible] = useState(true)
  const [exiting, setExiting] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (sessionStorage.getItem(INTRO_KEY)) {
      setVisible(false)
      return
    }

    document.body.style.overflow = "hidden"

    if (shouldReduceMotion) {
      const timer = setTimeout(() => {
        sessionStorage.setItem(INTRO_KEY, "1")
        setVisible(false)
        document.body.style.overflow = ""
      }, 450)

      return () => {
        clearTimeout(timer)
        document.body.style.overflow = ""
      }
    }

    const timers = [
      setTimeout(() => setExiting(true), 1850),
      setTimeout(() => {
        sessionStorage.setItem(INTRO_KEY, "1")
        setVisible(false)
        document.body.style.overflow = ""
      }, 2800),
    ]

    return () => {
      timers.forEach(clearTimeout)
      document.body.style.overflow = ""
    }
  }, [shouldReduceMotion])

  if (!visible) return null

  return (
    <motion.div
      className="fixed inset-0 z-[300] overflow-hidden bg-brand-cream text-brand-blue-deep"
      initial={{ opacity: 1 }}
      animate={exiting ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.55, delay: exiting ? 0.35 : 0, ease: EXIT_EASE }}
    >
      <Grain />

      <motion.div
        className="relative z-10 flex min-h-svh flex-col items-center justify-center px-6 text-center"
        animate={exiting ? { y: -18, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: exiting ? 0.45 : 0.8, ease: exiting ? EXIT_EASE : EASE }}
      >
        <motion.h1
          className="font-display text-6xl font-normal leading-none text-brand-blue-deep sm:text-8xl md:text-9xl lg:text-[8.5rem]"
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.28, ease: EASE }}
        >
          Soy Ella
        </motion.h1>
      </motion.div>
    </motion.div>
  )
}
