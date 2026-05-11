import type { Metadata, Viewport } from "next"
import { Manrope, Cormorant_Garamond, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { RevealController } from "@/components/reveal-controller"
import { BookingModal } from "@/components/booking-modal"
import { EVENT_CONFIG } from "@/config/constants"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  display: "swap",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://soyella.es"
const ogImage = "/soy-ella/og-image.jpg"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SOY ELLA — закрытое женское комьюнити в Мадриде",
  description:
    `SOY ELLA — премиальное комьюнити для русскоговорящих женщин в Мадриде. Нетворкинг, рост, окружение уровня. Следующая встреча: BEAUTY DAY, ${EVENT_CONFIG.date}.`,
  applicationName: "SOY ELLA",
  alternates: {
    canonical: "/",
  },
  icons: {
    apple: "/soy-ella/apple-icon.png",
  },
  openGraph: {
    title: "SOY ELLA — закрытое женское комьюнити в Мадриде",
    description: "Премиальное комьюнити для роста, окружения и возможностей",
    url: "/",
    siteName: "SOY ELLA",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "SOY ELLA — Beauty Day в Мадриде",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOY ELLA — Beauty Day в Мадриде",
    description: `Премиальное женское комьюнити в Мадриде. Следующая встреча: BEAUTY DAY, ${EVENT_CONFIG.date}.`,
    images: [ogImage],
  },
}

export const viewport: Viewport = {
  themeColor: "#5C1A1B",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${manrope.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased text-foreground">
        {children}
        <RevealController />
        <BookingModal />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
