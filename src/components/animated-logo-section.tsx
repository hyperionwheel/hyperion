'use client'

import { useHomeAnimationStore } from '@/hooks/useHomeAnimationStore'
import { AnimatedLogo } from './animations/logo/logo'

export const AnimatedLogoSection = () => {
  const { setLogoAnimated } = useHomeAnimationStore()
  const isLogoAnimated = useHomeAnimationStore((state) => state.isLogoAnimated)

  if (isLogoAnimated) return null

  return (
    <section className="absolute overflow-hidden top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%]">
      <AnimatedLogo onComplete={setLogoAnimated} />
    </section>
  )
}
