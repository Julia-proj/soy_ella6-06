"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const IMAGES = [
  { src: "/soy-ella/gallery-speaker2.PNG", alt: "Участницы SOY ELLA",           caption: "Участницы" },
  { src: "/soy-ella/gallery-speaker.PNG",  alt: "Флористика встречи SOY ELLA",  caption: "Флористика" },
  { src: "/soy-ella/gallery-communication.PNG", alt: "Букет и сервировка",      caption: "Детали" },
  { src: "/soy-ella/salmon.jpeg",          alt: "Премиальные закуски",           caption: "Закуски" },
  { src: "/soy-ella/reir.JPG",             alt: "Выступление эксперта SOY ELLA", caption: "Эксперты" },
  { src: "/soy-ella/ambiente.jpeg",        alt: "Атмосфера встречи SOY ELLA",   caption: "Атмосфера" },
  { src: "/soy-ella/vstrechi.jpg",         alt: "Девушки на встрече SOY ELLA",  caption: "Встреча" },
  { src: "/soy-ella/gallery-girls.jpg",    alt: "Девушки на встрече SOY ELLA",  caption: "Знакомства" },
]

export function GallerySection() {
  return (
    <section id="gallery" aria-label="Галерея встреч" className="bg-cream py-16 text-charcoal sm:py-24 lg:py-16">
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
          className="mega-title mt-8 max-w-2xl font-display text-wine sm:mt-10"
        >
          Наши встречи в кадре
        </motion.h2>
      </div>

      <div className="site-shell">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
          {IMAGES.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.06 * index }}
              className="group"

            >
              <div className="bg-white p-2 pb-4 shadow-[0_6px_24px_rgba(92,26,27,0.10)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:shadow-[0_14px_40px_rgba(92,26,27,0.18)]">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    style={{ filter: "saturate(0.92) contrast(1.02)" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
