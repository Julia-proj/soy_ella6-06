"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const IMAGES = [
  { src: "/soy-ella/gallery-speaker2.PNG", alt: "Участницы SOY ELLA" },
  { src: "/soy-ella/gallery-speaker.PNG", alt: "Флористика встречи SOY ELLA" },
  { src: "/soy-ella/gallery-communication.PNG", alt: "Букет и сервировка встречи" },
  { src: "/soy-ella/salmon.jpeg", alt: "Премиальные закуски на встрече" },
  { src: "/soy-ella/reir.JPG", alt: "Выступление эксперта SOY ELLA" },
  { src: "/soy-ella/ambiente.jpeg", alt: "Выступление эксперта SOY ELLA" },
  { src: "/soy-ella/vstrechi.jpg", alt: "Девушки на встрече SOY ELLA" },
  { src: "/soy-ella/gallery-girls.jpg", alt: "Девушки на встрече SOY ELLA" },
]

export function GallerySection() {
  return (
    <section id="gallery" aria-label="Галерея встреч" className="bg-brand-cream py-16 text-brand-blue sm:py-24 lg:py-16">
      <div className="site-shell mb-12 sm:mb-16 lg:mb-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-number section-number-dark"
        >
          No. 06 / Атмосфера
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mega-title mt-8 max-w-2xl font-display text-brand-blue sm:mt-10"
        >
          Наши встречи в кадре
        </motion.h2>
      </div>

      {/* Gallery grid — uniform equal tiles */}
      <div className="site-shell">
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4 lg:gap-3">
          {IMAGES.slice(0, 8).map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.06 * index }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-brand-sand"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                style={{ filter: "saturate(0.94) contrast(1.02)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
