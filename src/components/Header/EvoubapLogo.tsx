'use client'

import { useEffect, useState } from 'react'

type EvoubapLogoProps = {
  className?: string
  ariaLabel?: string
}

const EvoubapLogo = ({ className, ariaLabel = 'Evoubap — Transformation Digitale' }: EvoubapLogoProps) => {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null
    const onScroll = () => {
      setIsScrolling(true)
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setIsScrolling(false), 180)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 260"
      fill="none"
      role="img"
      aria-label={ariaLabel}
      className={className}
    >
      <defs>
        <linearGradient id="evoubapWingGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="evoubapWingGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>

      <g transform="translate(30, 30)">
        <g className={`evoubap-wings${isScrolling ? ' is-flapping' : ''}`}>
          <path
            d="M 100,100 Q 40,30 20,60 Q 5,95 30,120 Q 60,135 100,100 Z"
            fill="url(#evoubapWingGrad1)"
            opacity="0.95"
          />
          <path
            d="M 100,100 Q 55,155 40,175 Q 65,195 95,165 Q 100,140 100,100 Z"
            fill="url(#evoubapWingGrad1)"
            opacity="0.75"
          />
          <path
            d="M 100,100 Q 160,30 180,60 Q 195,95 170,120 Q 140,135 100,100 Z"
            fill="url(#evoubapWingGrad2)"
            opacity="0.95"
          />
          <path
            d="M 100,100 Q 145,155 160,175 Q 135,195 105,165 Q 100,140 100,100 Z"
            fill="url(#evoubapWingGrad2)"
            opacity="0.75"
          />
          <circle cx="45" cy="80" r="4" fill="#FFFFFF" opacity="0.6" />
          <circle cx="155" cy="80" r="4" fill="#FFFFFF" opacity="0.6" />
        </g>

        <ellipse cx="100" cy="115" rx="4" ry="45" fill="#1E1B4B" />
        <path d="M 100,70 Q 90,55 85,45" stroke="#1E1B4B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M 100,70 Q 110,55 115,45" stroke="#1E1B4B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="85" cy="45" r="2.5" fill="#1E1B4B" />
        <circle cx="115" cy="45" r="2.5" fill="#1E1B4B" />
      </g>

      <g transform="translate(250, 130)">
        <text
          x="0"
          y="0"
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontSize="58"
          fontWeight="700"
          fill="#1E1B4B"
          letterSpacing="-2"
        >
          evoubap
        </text>
        <text
          x="4"
          y="28"
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontSize="12"
          fontWeight="500"
          fill="#7C3AED"
          letterSpacing="6"
        >
          TRANSFORMATION DIGITALE
        </text>
      </g>
    </svg>
  )
}

export default EvoubapLogo
