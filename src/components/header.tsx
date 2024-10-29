'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { useWindowScroll } from 'react-use'
import { Button } from '@/components/ui/button'
import { Link, usePathname } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { HyperionLogo } from '@/components/icons/hyperion-logo'
import { ToggleButton } from '@/components/toggle-button'
import { HeaderMenu } from '@/components/header-menu'
import { useLenis } from 'lenis/react'
import { useHomeAnimationStore } from '@/hooks/useHomeAnimationStore'
import { useClaimDialogStore } from '@/hooks/useClaimDialogStore'

type HeaderProps = {
  variant: 'transparent' | 'white'
  isAsideVisible: boolean
  onAsideToggle: () => void
  mobileCTA?: boolean
  animation?: boolean
}

export const Header = ({
  variant,
  isAsideVisible,
  mobileCTA = false,
  animation = false,
  onAsideToggle,
}: HeaderProps) => {
  const t = useTranslations('header')

  const headerRef = useRef<HTMLHeadingElement>(null)

  const { open: openClaimDialog } = useClaimDialogStore()

  const lines = useLenis()
  const pathname = usePathname()
  const scroll = useWindowScroll()

  const { setLogoAnimated } = useHomeAnimationStore()
  const isLogoAnimated = useHomeAnimationStore((state) => state.isLogoAnimated)

  const headerHeight = headerRef.current?.offsetHeight ?? 0
  const isScrolled = scroll.y > headerHeight

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current?.classList.toggle('is-scrolled', isScrolled)
      headerRef.current?.classList.toggle('is-menu', isAsideVisible)
    }

    if (isScrolled || isLogoAnimated) setLogoAnimated()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrolled, isAsideVisible])

  const animationClasses = cn({
    'opacity-0 duration-300': animation,
    'opacity-1': isLogoAnimated && animation,
  })

  return (
    <header
      ref={headerRef}
      data-mobile-cta={mobileCTA}
      data-header-variant={variant}
      className="header fixed top-0 left-0 w-full py-2 z-[99]"
    >
      <div className="2xl:container mx-auto relative px-1.25 flex items-normal justify-between z-[1] md:px-5 md:items-center">
        <div className={cn('logo flex flex-1', animationClasses)}>
          <Link href="/" className="logo focus-visible:outline-none">
            <span suppressHydrationWarning className={cn('block', { 'animate-logo': pathname === '/' && isScrolled })}>
              <HyperionLogo width={77} height={77} />
            </span>
          </Link>
        </div>
        <div className={cn('flex items-center', animationClasses)}>
          <HeaderMenu className="hidden md:block" />
          <Button
            className={cn('cta', {
              'hidden md:block': !mobileCTA,
            })}
            onClick={() => {
              lines?.stop()
              openClaimDialog()
            }}
          >
            {t('cta')}
          </Button>
        </div>
        <div className={cn(animationClasses)}>
          <ToggleButton isOpen={isAsideVisible} toggleMenu={onAsideToggle} />
        </div>
      </div>
    </header>
  )
}
