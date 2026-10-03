'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { HiArrowRight, HiX } from 'react-icons/hi'
import { useTranslation } from '../../hooks/useTranslation'

const ACCENT = '#4b0082'
const INK = '#0a0a0a'
const STORAGE_KEY = 'evoubap-jarvis-promo-closed'
const APPEAR_DELAY_MS = 2500

export default function JarvisPromo() {
  const { t } = useTranslation()
  const p = t.jarvisPromo
  const reduceMotion = useReducedMotion()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return
    } catch {
      // stockage indisponible : on affiche quand même la pub
    }
    const timer = setTimeout(() => setVisible(true), APPEAR_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setVisible(false)
    try {
      sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // rien à faire
    }
  }

  const hidden = reduceMotion ? { opacity: 0 } : { x: '-120%', opacity: 0 }

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          aria-label={p.badge}
          initial={hidden}
          animate={{ x: 0, opacity: 1 }}
          exit={hidden}
          transition={{ type: 'tween', duration: 0.6, ease: 'easeOut' }}
          className="fixed bottom-[30px] left-4 sm:left-[30px] z-[900] w-[min(20rem,calc(100vw-8rem))] bg-white border border-black/15 border-l-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
          style={{ color: INK, borderLeftColor: ACCENT }}
        >
          <Link
            href="/formations/jarvis"
            className="group block p-4 pr-10 no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4b0082]"
            style={{ color: INK }}
          >
            <span
              className="block font-mono text-[10px] uppercase tracking-[0.22em] mb-2"
              style={{ color: ACCENT }}
            >
              {p.badge}
            </span>
            <span className="block font-extrabold text-lg leading-tight tracking-tight mb-1.5">
              {p.title}
            </span>
            <span className="block text-sm leading-snug text-black/65 mb-3">
              {p.text}
            </span>
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: ACCENT }}
            >
              {p.cta}
              <HiArrowRight
                aria-hidden="true"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </span>
          </Link>

          <button
            type="button"
            onClick={handleClose}
            aria-label={p.close}
            className="absolute top-2 right-2 p-1.5 bg-transparent border-none cursor-pointer text-black/45 hover:text-black transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4b0082]"
          >
            <HiX aria-hidden="true" className="w-4 h-4" />
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
