# SKILL.md — Базовые правила разработки

> Этот файл ВСЕГДА читается первым перед любыми изменениями в проекте.
> Положи его в корень проекта или в .claude/skills/

---

## 0. ПЕРЕД ЛЮБЫМ ИЗМЕНЕНИЕМ

```
ОБЯЗАТЕЛЬНЫЙ ПОРЯДОК:
1. Прочитай ВЕСЬ файл/компонент, который собираешься менять
2. Проверь, нет ли дублирования логики в других файлах
3. Определи, как изменение повлияет на мобильную версию
4. После каждого изменения — мысленная проверка на 375px, 768px, 1440px
5. НЕ УДАЛЯЙ рабочий код, пока не убедился что замена работает
```

---

## 1. RESPONSIVE — ЖЕЛЕЗНЫЕ ПРАВИЛА

### Mobile-first: пиши СНАЧАЛА мобильный стиль

```css
/* ПРАВИЛЬНО: база = мобильный */
.card { padding: 16px; font-size: 14px; }

@media (min-width: 768px) { .card { padding: 24px; font-size: 16px; } }
@media (min-width: 1280px) { .card { padding: 32px; font-size: 18px; } }

/* НЕПРАВИЛЬНО: десктоп-first */
.card { padding: 32px; }
@media (max-width: 768px) { .card { padding: 16px; } }
```

### Breakpoints (стандарт)

```
375px  — iPhone SE / маленький телефон (ТЕСТИРУЙ ТУТ ПЕРВЫМ)
390px  — iPhone 14/15/16 (основной мобильный)
428px  — iPhone Pro Max
768px  — iPad / планшет
1024px — iPad Pro / маленький ноутбук
1280px — ноутбук
1440px — десктоп
1920px — большой экран
```

### Обязательные проверки

```
✅ Текст не вылезает за экран на 375px
✅ Кнопки min-height: 48px (tap target по гайдам Apple/Google)
✅ Горизонтальный скролл ОТСУТСТВУЕТ (кроме намеренных каруселей)
✅ Изображения не ломают layout (max-width: 100%, height: auto)
✅ Шрифт читаемый: body min 14px mobile, 16px desktop
✅ Отступы не слишком большие на мобильном (padding max 16-20px по бокам)
✅ Модальные окна и sticky элементы не перекрывают контент
✅ Формы и инпуты 100% ширины на мобильном
✅ Ничего не скрыто случайно через overflow: hidden
```

### Типографика — fluid scaling

```css
/* Используй clamp() вместо фиксированных размеров для заголовков */
h1 { font-size: clamp(1.75rem, 4vw + 0.5rem, 4rem); }
h2 { font-size: clamp(1.5rem, 3vw + 0.5rem, 3rem); }
h3 { font-size: clamp(1.25rem, 2vw + 0.5rem, 2rem); }
body { font-size: clamp(0.875rem, 1vw + 0.5rem, 1.125rem); }

/* Line-height: заголовки 1.1-1.2, body 1.5-1.7 */
```

### Изображения

```tsx
// ВСЕГДА в Next.js:
import Image from 'next/image'

<Image
  src="/images/photo.jpg"
  alt="Описательный alt текст"  // ВСЕГДА заполняй
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="..."
  priority={isAboveFold}  // true для hero/первого экрана
/>

// CSS для responsive images:
// object-fit: cover для карточек
// object-fit: contain для лого
```

### Контейнеры

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: clamp(16px, 4vw, 80px);
  padding-right: clamp(16px, 4vw, 80px);
}
```

---

## 2. SOLID КОД

### Структура компонентов

```
✅ Один компонент = один файл
✅ Компонент < 200 строк (иначе разбивай)
✅ Нет хардкода строк — выноси в константы/объекты данных
✅ Нет inline styles (кроме dynamic значений)
✅ Props типизированы (TypeScript interface/type)
✅ Ключи в map() — уникальные и стабильные, НЕ индексы
```

### Данные отдельно от компонентов

```tsx
// ПРАВИЛЬНО: данные в отдельном файле или в начале файла
const PROGRAM_ITEMS = [
  { id: 'palacio', title: 'Palacio Santoña', text: '...', image: '/images/...' },
  { id: 'lera', title: 'Lera Ruma', text: '...', image: '/images/...' },
] as const;

// Компонент просто рендерит
{PROGRAM_ITEMS.map(item => <Card key={item.id} {...item} />)}

// НЕПРАВИЛЬНО: текст прямо в JSX, copy-paste карточек
```

### Не повторяй себя (DRY)

```
Перед созданием нового компонента — проверь:
1. Есть ли похожий компонент в проекте?
2. Можно ли расширить существующий через props/variants?
3. Два компонента отличаются только стилем? → один компонент + variant prop
```

### Производительность

```
✅ Lazy loading для изображений ниже fold (loading="lazy")
✅ Priority loading для hero изображения
✅ Шрифты через next/font (не CDN ссылки)
✅ Не импортируй всю библиотеку ради одной функции
✅ CSS animations вместо JS где возможно
✅ will-change только на элементах которые реально анимируются
```

---

## 3. UX/UI ПРАВИЛА

### Иерархия

```
Визуальная иерархия на КАЖДОМ экране:
1. Один главный элемент (заголовок или CTA) — самый крупный/яркий
2. Второстепенный контент — заметно мельче
3. Поддерживающие элементы — самые тихие

Если всё одинакового размера — ничего не выделяется = плохой UX
```

### CTA (Call to Action)

```
✅ Одна главная CTA на экран (primary)
✅ Контрастная к фону (бордовый на cream или наоборот)
✅ Текст = действие ("Забронировать место", не "Нажми")
✅ Min-width: 200px на десктопе, 100% на мобильном
✅ Min-height: 48px (tap target)
✅ Hover состояние (десктоп) + active состояние (мобильный)
✅ Не больше 2 CTA рядом (primary + secondary/ghost)
```

### Spacing система

```css
/* Используй кратные 4px или 8px */
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
--space-4xl: 96px;
--space-5xl: 128px;

/* Секции: вертикальные отступы */
section { padding-block: clamp(48px, 8vw, 128px); }
```

### Sticky / Fixed элементы

```
✅ Sticky header: max-height 64px, полупрозрачный фон + blur
✅ Sticky CTA (pop-up оплаты): 
   — появляется после скролла 30-40% страницы
   — НЕ блокирует контент (position: fixed, bottom)
   — Имеет кнопку закрытия (X)
   — Z-index не конфликтует с навигацией
   — На мобильном: full-width bar внизу, max-height 80px
   — НЕ перекрывает footer
✅ Cookie/popup: закрывается по клику вне + по X + по Escape
```

### Scroll анимации (2026 стандарт)

```css
/* CSS-only reveal при скролле — нативный, без JS библиотек */
@supports (animation-timeline: scroll()) {
  .reveal {
    animation: reveal-up linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 40%;
  }

  @keyframes reveal-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

/* Fallback для старых браузеров */
@supports not (animation-timeline: scroll()) {
  .reveal {
    opacity: 1;
    transform: none;
  }
}

/* Staggered delay для списков карточек */
.card:nth-child(1) { animation-delay: 0ms; }
.card:nth-child(2) { animation-delay: 80ms; }
.card:nth-child(3) { animation-delay: 160ms; }
```

```tsx
// Если нужна поддержка Safari (animation-timeline ещё limited):
// Intersection Observer fallback
'use client'
import { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return ref
}
```

### Easing кривые (premium feel)

```css
/* Luxury easing — мягкий, не «резиновый» */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
--ease-in-out-cubic: cubic-bezier(0.65, 0, 0.35, 1);

/* Используй для: */
transition: transform 0.6s var(--ease-out-expo);
transition: opacity 0.5s var(--ease-out-quart);

/* НИКОГДА: linear, ease (скучно), ease-in (неестественно) */
```

### Цвета и контраст

```
✅ Текст на фоне: контраст ≥ 4.5:1 (WCAG AA)
✅ Крупный текст (>18px bold или >24px): ≥ 3:1
✅ Не полагайся только на цвет (добавляй иконки, текст)
✅ Hover/focus/active состояния для ВСЕХ интерактивных элементов
✅ Focus-visible outline для keyboard navigation
```

---

## 4. ЧЕКЛИСТ ПЕРЕД КОММИТОМ

```
□ npm run build — без ошибок
□ Проверка на 375px (Chrome DevTools)
□ Проверка на 768px
□ Проверка на 1440px
□ Горизонтальный скролл отсутствует на всех breakpoints
□ Все изображения имеют alt текст
□ Все ссылки работают (особенно Stripe / payment)
□ Sticky элементы не перекрывают друг друга
□ Шрифты загружаются (нет FOIT)
□ Кнопки кликабельны на мобильном (48px min)
□ Анимации не мешают чтению
□ Console без ошибок
□ Lighthouse Mobile score > 85
```

---

## 5. СТИЛЕВАЯ КОНСИСТЕНТНОСТЬ

```
Перед изменением любого стиля:
1. Проверь CSS переменные — используй их, не хардкодь цвета
2. Проверь spacing — используй систему (4px/8px кратные)
3. Проверь типографику — не создавай новый размер шрифта без причины
4. Проверь радиусы — используй единый border-radius из системы
5. Проверь тени — максимум 2-3 варианта теней на весь сайт

ОДИН СТИЛЬ = одна палитра + одна система шрифтов + один spacing + один подход к карточкам/кнопкам/рамкам.
Если элемент выглядит «не отсюда» — переделай его под общую систему.
```

---

## 6. ACCESSIBILITY (a11y) — МИНИМУМ

```
✅ Семантический HTML: <header>, <nav>, <main>, <section>, <footer>
✅ Заголовки по порядку: h1 → h2 → h3 (не прыгай)
✅ Кнопки = <button>, ссылки = <a> (не наоборот)
✅ aria-label для иконок без текста
✅ alt для всех <img> / Image
✅ prefers-reduced-motion: reduce — отключай анимации
✅ prefers-color-scheme — если есть темная/светлая тема
```

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
