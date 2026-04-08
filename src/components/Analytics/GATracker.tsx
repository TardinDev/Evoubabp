'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { initGA, logPageView } from '@/utils/analytics'

export default function GATracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    if (id) initGA(id)
  }, [])

  useEffect(() => {
    logPageView()
  }, [pathname, searchParams])

  return null
}
