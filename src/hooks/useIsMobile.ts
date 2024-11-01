'use client'

import { useEffect, useState } from 'react'
import { useBreakpoint } from './useBreakpoint'

export const useIsMobile = () => {
  const breakpoint = useBreakpoint()
  const [isMobile, setMobile] = useState(false)

  useEffect(() => setMobile(breakpoint === 'sm'), [breakpoint])

  return isMobile
}
