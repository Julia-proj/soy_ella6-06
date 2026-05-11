export type CardSize = "normal" | "wide"

export interface BodaCard {
  name: string
  image: string
  text: string
  tag: string
  size: CardSize
  rotate: number
  instagram?: string
}

export const BODA_CARDS: BodaCard[] = [
  {
    name: "Palacio Santoña",
    image: "/images/boda/palacio-interior.jpg",
    text: "Интерьеры с историей, атмосфера старого Мадрида и пространство, которое сразу задаёт особое настроение вечера.",
    tag: "Venue",
    size: "wide",
    rotate: 0,
  },
  {
    name: "Lera Ruma con Amazónico",
    image: "/images/boda/boda-lera-amazonico.jpg",
    text: "Живой разговор без фильтров о том, как строить личный бренд, проявляться и становиться заметной.",
    tag: "Talk",
    size: "normal",
    rotate: -1.5,
  },
  {
    name: "DOT.BRAND",
    image: "/images/boda/boda-dot-brand.jpg",
    text: "Украинский бренд одежды с сильной эстетикой, выразительными силуэтами и вещами, которые подчёркивают характер женщины.",
    tag: "Fashion",
    size: "normal",
    rotate: 1,
  },
  {
    name: "Christina Cosmetics",
    image: "/images/boda/boda-christina-cosmetics.jpg",
    text: "Beauty show о современных технологиях ухода за кожей лица, инновационной косметике и подходе к красоте через науку.",
    tag: "Skincare",
    size: "normal",
    rotate: -1,
  },
  {
    name: "Matcha Atelier",
    image: "/images/boda/boda-matcha-atelier.jpg",
    text: "Дегустация matcha и знакомство с ароматной, более лёгкой альтернативой кофе.",
    tag: "Experience",
    size: "normal",
    rotate: 1.5,
  },
  {
    name: "b·bar Madrid",
    image: "/images/boda/boda-bbar-cocktails.jpg",
    text: "Специально для события команда b·bar подготовит персональные коктейли Soy Ella. Бармен будет готовить их прямо на ваших глазах.",
    tag: "Cocktails",
    size: "wide",
    rotate: 0,
    instagram: "https://www.instagram.com/b.bar.madrid?igsh=Y2F6NHAzc256aXkz",
  },
  {
    name: "El presentador Andrey",
    image: "/images/boda/boda-andrey.jpg",
    text: "Атмосфера вечера, лёгкость, энергия и тот самый человек, который не даст событию превратиться в скучную лекцию.",
    tag: "Host",
    size: "normal",
    rotate: -1.5,
  },
  {
    name: "Soy Ella & Keratin Madrid",
    image: "/images/boda/boda-keratin-madrid.jpg",
    text: "Елена Александрова — со-организатор Soy Ella и эксперт по уходу за волосами. На встрече представит онлайн курс системы персонализированного  домашнего профессионального восстановления волос для девушек, которые ценят качество и время",
    tag: "Hair Care",
    size: "normal",
    rotate: 1,
    instagram: "https://www.instagram.com/curso_keratin_madrid/",
  },
  {
    name: "Leame Skin & Leame Beauty Zone",
    image: "/images/boda/boda-leame.jpg",
    text: "Подарки для гостей и детали, которые делают вечер не просто полезным, а запоминающимся.",
    tag: "Gifts",
    size: "normal",
    rotate: -1,
  },
]
