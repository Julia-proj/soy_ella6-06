import { IntroAnimation } from "@/components/intro-animation"
import { SiteNav } from "@/components/site-nav"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { NextEventSection } from "@/components/sections/next-event-section"
import { ExpertsSection } from "@/components/sections/experts-section"
import { FeaturedOrganizerSection } from "@/components/sections/featured-organizer-section"
import { ForWhoSection } from "@/components/sections/for-who-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FinalCtaSection } from "@/components/sections/final-cta-section"
import { StickyMobileCta } from "@/components/sticky-mobile-cta"
import { SiteFooter } from "@/components/site-footer"
import { MarqueeText } from "@/components/marquee-text"

export default function Page() {
  return (
    <>
      <IntroAnimation />
      <main>
        <HeroSection />
        <AboutSection />
        <NextEventSection />
        <ExpertsSection />
        <FeaturedOrganizerSection />
        <ForWhoSection />
        <GallerySection />
        <MarqueeText variant="black" text="NETWORKING · ENERGÍA · BELLEZA · CRECIMIENTO" />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <SiteNav />
      <StickyMobileCta />
    </>
  )
}
