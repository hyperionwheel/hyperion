'use client'

import { useTranslations } from 'next-intl'
import { Button } from './ui/button'
import { Link } from '@/i18n/routing'
import { useWindowScroll } from '@/hooks/use-window-scroll'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/icons/logo'
import { ToggleButton } from './toggle-button'
import { HeaderMenu } from './header-menu'
import { Aside } from './aside'
import { useState } from 'react'

export const Header = () => {
  const t = useTranslations('header')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const { y } = useWindowScroll()

  const isScrolled = y >= 116

  const logoSize = isOpen ? '77px' : '84px'

  return (
    <>
      <header
        className={cn('header fixed top-0 left-0 w-full py-2 z-[999]', {
          'is-scrolled': isScrolled,
          'is-menu': isOpen,
        })}
      >
        <div className="2xl:container mx-auto relative px-1.25 z-[1] flex items-normal justify-between md:px-5 md:items-center">
          <div className={cn('flex flex-1', { hidden: isOpen })}>
            <Link href="/">
              <Logo width={logoSize} height={logoSize} fill={isScrolled ? '#0D0D0D' : '#FFF'} />
            </Link>
          </div>
          <div>
            <HeaderMenu className={cn('hidden md:block', { 'text-black': isScrolled })} />
          </div>
          <div>
            <Button className="hidden md:block">{t('cta')}</Button>
            <ToggleButton isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </header>
      <Aside className={isOpen ? 'visible' : ''} />
    </>
  )
}
