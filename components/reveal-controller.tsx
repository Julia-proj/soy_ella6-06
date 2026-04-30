"use client"

import { useEffect } from "react"

export function RevealController() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const element = entry.target as HTMLElement
          const delay = Number.parseInt(element.dataset.delay || "0", 10)
          const show = () => element.classList.add("is-visible")

          window.setTimeout(show, Number.isFinite(delay) ? delay : 0)
          observer.unobserve(element)
        })
      },
      { threshold: 0.06, rootMargin: "0px" },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return null
}
