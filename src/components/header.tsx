'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { useWindowScroll } from 'react-use'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { HyperionLogo } from '@/components/icons/hyperion-logo'
import { ToggleButton } from '@/components/toggle-button'
import { HeaderMenu } from '@/components/header-menu'

export const Header = ({ isAsideVisible, onAsideToggle }: { isAsideVisible: boolean; onAsideToggle: () => void }) => {
  const t = useTranslations('header')

  const scroll = useWindowScroll()

  const headerRef = useRef<HTMLHeadingElement>(null)

  const isScrolled = scroll.y >= 116
  const logoSize = isAsideVisible ? '77px' : '84px'

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current?.classList.toggle('is-scrolled', isScrolled)
      headerRef.current?.classList.toggle('is-menu', isAsideVisible)
    }
  }, [isScrolled, isAsideVisible])

  useEffect(() => {
    if (headerRef.current) {
      const scrollHeight = document.body.scrollHeight - window.innerHeight

      headerRef.current?.style.setProperty('--scroll', String(scroll.y / scrollHeight))
    }
  }, [scroll.y])

  return (
    <header ref={headerRef} className={cn('header fixed top-0 left-0 w-full py-2 z-[999]')}>
      <div className="2xl:container mx-auto relative px-1.25 z-[1] flex items-normal justify-between md:px-5 md:items-center">
        <div className={cn('flex flex-1 text-white', { hidden: isAsideVisible })}>
          <Link className="logo focus-visible:outline-none " href="/">
            <span className="block transition-all duration-500 animate-logo">
              <HyperionLogo width={logoSize} height={logoSize} />
            </span>
          </Link>
        </div>
        <div>
          <HeaderMenu className="hidden md:block" />
        </div>
        <div>
          <Button className="hidden md:block">{t('cta')}</Button>
          <ToggleButton isOpen={isAsideVisible} toggleMenu={onAsideToggle} />
        </div>
      </div>
    </header>
  )
}
