'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { useWindowScroll, useWindowSize } from 'react-use'
import { Button } from '@/components/ui/button'
import { Link, usePathname } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { HyperionLogo } from '@/components/icons/hyperion-logo'
import { ToggleButton } from '@/components/toggle-button'
import { HeaderMenu } from '@/components/header-menu'
import { useIsMobile } from '@/hooks/useIsMobile'

type HeaderProps = {
  variant: 'default' | 'hero'
  isAsideVisible: boolean
  onAsideToggle: () => void
}

export const Header = ({ variant, isAsideVisible, onAsideToggle }: HeaderProps) => {
  const t = useTranslations('header')

  const headerRef = useRef<HTMLHeadingElement>(null)

  const size = useWindowSize()
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const scroll = useWindowScroll()

  const logoSize = isMobile ? 77 : 84
  const headerHeight = headerRef.current?.offsetHeight ?? 0
  const isScrolled = scroll.y > headerHeight

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current?.classList.toggle('is-scrolled', isScrolled)
      headerRef.current?.classList.toggle('is-menu', isAsideVisible)
    }
  }, [isScrolled, isAsideVisible])

  return (
    <header
      ref={headerRef}
      className={cn('header fixed top-0 left-0 w-full py-2 z-[999] text-black', {
        'header-hero': variant === 'hero',
      })}
    >
      <div className="2xl:container mx-auto relative px-1.25 z-[1] flex items-normal justify-between md:px-5 md:items-center">
        <div className={cn('flex flex-1 ', { hidden: isAsideVisible })}>
          <Link href="/" className="logo focus-visible:outline-none ">
            <span
              className={cn('block', {
                'animate-logo': pathname === '/' && scroll.y > size.height - headerHeight,
              })}
            >
              <HyperionLogo width={logoSize} height={logoSize} />
            </span>
          </Link>
        </div>
        <div>
          <HeaderMenu className={cn('hidden md:block')} />
        </div>
        <div>
          <Button className="hidden md:block">{t('cta')}</Button>
          <ToggleButton isOpen={isAsideVisible} toggleMenu={onAsideToggle} />
        </div>
      </div>
    </header>
  )
}
