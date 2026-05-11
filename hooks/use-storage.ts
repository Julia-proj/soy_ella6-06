import { useCallback } from "react"

export function useStorage() {
  const setItem = useCallback((key: string, value: string) => {
    try {
      sessionStorage.setItem(key, value)
    } catch {
      // Private browsing may block sessionStorage
    }
  }, [])

  const getItem = useCallback((key: string): string | null => {
    try {
      return sessionStorage.getItem(key)
    } catch {
      return null
    }
  }, [])

  const removeItem = useCallback((key: string) => {
    try {
      sessionStorage.removeItem(key)
    } catch {
      // Private browsing may block sessionStorage
    }
  }, [])

  return { setItem, getItem, removeItem }
}
