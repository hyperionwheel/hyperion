'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useWindowScroll } from 'react-use'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { HyperionLogo } from '@/components/icons/hyperion-logo'
import { ToggleButton } from '@/components/toggle-button'
import { HeaderMenu } from '@/components/header-menu'

type HeaderProps = {
  variant: 'default' | 'hero'
  isAsideVisible: boolean
  onAsideToggle: () => void
}

export const Header = ({ variant, isAsideVisible, onAsideToggle }: HeaderProps) => {
  const t = useTranslations('header')

  const scroll = useWindowScroll()
  const [scrollRatio, setScrollRatio] = useState(0)

  const headerRef = useRef<HTMLHeadingElement>(null)

  const isScrolled = scroll.y >= 116
  const logoSize = isAsideVisible ? 77 : 84

  useEffect(() => {
    setScrollRatio(scroll.y / (document.body.scrollHeight - window.innerHeight))
  }, [scroll.y])

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current?.classList.toggle('is-scrolled', isScrolled)
      headerRef.current?.classList.toggle('is-menu', isAsideVisible)
    }
  }, [isScrolled, isAsideVisible])

  return (
    <header
      ref={headerRef}
      className={cn('header relative top-0 left-0 w-full py-2 z-[999] text-black', {
        'header-hero': variant === 'hero',
        fixed: isScrolled || variant === 'hero',
      })}
    >
      <div className="2xl:container mx-auto relative px-1.25 z-[1] flex items-normal justify-between md:px-5 md:items-center">
        <div className={cn('flex flex-1 ', { hidden: isAsideVisible })}>
          <Link href="/" className="logo focus-visible:outline-none ">
            <span
              className="block"
              style={{
                transform: `rotate(${scrollRatio * 360 * 2}deg)`,
              }}
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
