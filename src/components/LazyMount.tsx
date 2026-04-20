'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

interface LazyMountProps {
  children: ReactNode
  rootMargin?: string
  minHeight?: number | string
  id?: string
  className?: string
  ariaLabel?: string
  as?: 'div' | 'section'
}

// Defers mount until the placeholder scrolls within `rootMargin` of the viewport,
// so next/dynamic chunks only download when the user actually approaches them.
export default function LazyMount({
  children,
  rootMargin = '600px 0px',
  minHeight = 300,
  id,
  className,
  ariaLabel,
  as = 'div',
}: LazyMountProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (mounted) return
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setMounted(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setMounted(true)
            observer.disconnect()
            break
          }
        }
      },
      { rootMargin }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [mounted, rootMargin])

  const Tag = as
  return (
    <Tag
      ref={ref as React.Ref<HTMLElement & HTMLDivElement>}
      id={id}
      className={className}
      aria-label={ariaLabel}
      style={!mounted ? { minHeight } : undefined}
    >
      {mounted ? children : null}
    </Tag>
  )
}
