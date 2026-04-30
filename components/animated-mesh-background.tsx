"use client"

/**
 * AnimatedMeshBackground
 * Uses brand palette: brand-blue-deep base + yellow / cream / navy glow blobs.
 * Slow, editorial. Place as first child of `relative overflow-hidden`.
 */

import { motion } from "framer-motion"

const BLOBS = [
  {
    // Brand-yellow — large, top-left, punchy
    style: {
      width: "72%",
      height: "72%",
      top: "-25%",
      left: "-18%",
      background:
        "radial-gradient(circle, rgba(247,233,125,0.65) 0%, rgba(247,210,60,0.28) 45%, transparent 68%)",
      filter: "blur(48px)",
    },
    animate: {
      x: [0, 75, -35, 85, 0],
      y: [0, -50, 80, 25, 0],
      scale: [1, 1.10, 0.93, 1.08, 1],
    },
    duration: 14,
  },
  {
    // Bright cobalt — bottom-right, strong presence
    style: {
      width: "65%",
      height: "65%",
      bottom: "-22%",
      right: "-18%",
      background:
        "radial-gradient(circle, rgba(70,130,220,0.60) 0%, rgba(40,90,180,0.20) 50%, transparent 70%)",
      filter: "blur(52px)",
    },
    animate: {
      x: [0, -80, 40, -65, 0],
      y: [0, 55, -70, -30, 0],
      scale: [1, 1.12, 0.91, 1.07, 1],
    },
    duration: 16,
  },
  {
    // Warm gold — centre, bridges yellow and blue
    style: {
      width: "50%",
      height: "50%",
      top: "20%",
      left: "28%",
      background:
        "radial-gradient(circle, rgba(212,165,32,0.45) 0%, rgba(212,165,32,0.10) 52%, transparent 70%)",
      filter: "blur(55px)",
    },
    animate: {
      x: [0, -55, 40, -40, 0],
      y: [0, 60, -45, 65, 0],
      scale: [1, 0.93, 1.10, 0.96, 1],
    },
    duration: 12,
  },
]

export function AnimatedMeshBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
      style={{ background: "#1e3148" }}
    >
      {/* Animated blobs — vivid, move along edges */}
      {BLOBS.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={blob.style}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Vignette overlay — dark centre keeps text readable,
          transparent edges let blobs shine through */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 65% at 50% 50%, rgba(30,49,72,0.82) 0%, rgba(30,49,72,0.45) 55%, transparent 100%)",
        }}
      />
    </div>
  )
}
