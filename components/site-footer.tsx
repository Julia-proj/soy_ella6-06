import { Instagram, MapPin } from "lucide-react"
import { TransitionLink } from "@/components/ui/transition-link"
import { NAVIGATION_LINKS, SOCIAL_LINKS } from "@/config/constants"

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-wine-deep pb-12 text-cream sm:pb-16 lg:pb-20">

      {/* Footer content */}
      <div className="site-shell py-14 sm:py-20">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12">

          <div className="lg:col-span-5">
            <p className="font-display italic text-2xl tracking-[0.05em] text-cream sm:text-3xl">
              Soy Ella
            </p>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-cream/50 sm:text-lg">
              Закрытое женское комьюнити в Мадриде. Место, где рождается дружба,
              проекты и большие идеи.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-gold-muted sm:text-[0.65rem]">
              Навигация
            </p>
            <ul className="mt-6 space-y-3 text-base text-cream/50">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <TransitionLink href={link.href} className="transition-colors hover:text-cream">
                    {link.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-gold-muted sm:text-[0.65rem]">
              Контакты
            </p>
            <ul className="mt-6 space-y-3 text-base text-cream/50">
              <li>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-cream"
                >
                  <Instagram className="size-4" aria-hidden />
                  Instagram
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4" aria-hidden />
                  Madrid
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-cream/10 pt-10 text-[0.6rem] font-medium uppercase tracking-[0.15em] text-cream/30 sm:mt-20 sm:flex-row sm:text-[0.65rem]">
          <p>© {new Date().getFullYear()} Soy Ella · Madrid</p>
          <p>Сделано с вниманием к деталям</p>
        </div>
      </div>

    </footer>
  )
}
