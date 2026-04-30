export const BOOKING_OPEN_EVENT = "booking:open" as const

export function openBookingModal(): void {
  if (typeof window === "undefined") return
  window.dispatchEvent(new CustomEvent(BOOKING_OPEN_EVENT))
}
