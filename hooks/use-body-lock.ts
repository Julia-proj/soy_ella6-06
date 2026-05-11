import { useEffect } from "react"

export function useBodyLock(locked: boolean) {
  useEffect(() => {
    if (typeof window === "undefined") return

    document.body.style.overflow = locked ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [locked])
}
