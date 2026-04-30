"use client"

import type { MouseEvent, ReactNode } from "react"

type TransitionLinkProps = {
  children: ReactNode
  className?: string
  href: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export function TransitionLink({ children, className, href, onClick }: TransitionLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)
    if (event.defaultPrevented || !href.startsWith("#")) return
    event.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
