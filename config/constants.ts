export const EVENT_CONFIG = {
  date: "6 июня",
  location: "Madrid",
  venue: "Palacio Santoña",
  venueAddress: "C. de las Huertas, 13, Centro, 28012 Madrid",
  time: "17:00",
  registrationDeadline: "23 мая",
  eventName: "Beauty Day",
  eventNumber: "No. 04",
} as const

export const PAYMENT_CONFIG = {
  stripeDepositUrl: "https://buy.stripe.com/00wcN56fn7Q7eO8c8XdnW1T",
  stripeFullPaymentUrl: "https://buy.stripe.com/8x29AT8nv9YfdK48WLdnW1U",
  depositAmount: 50,
  fullPaymentAmount: 180,
  remainingAmount: 130,
} as const

export const STORAGE_KEYS = {
  booking: "se-booking-v1",
  intro: "se-intro-v2",
} as const

export const EVENT_CONFIG_KEYS = {
  bookingOpen: "booking:open",
} as const

export const NAVIGATION_LINKS = [
  { href: "#about", label: "О нас" },
  { href: "#event", label: "Встреча" },
  { href: "#experts", label: "Эксперты" },
  { href: "#gallery", label: "Галерея" },
] as const

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/soy_ella.madrid/",
} as const
