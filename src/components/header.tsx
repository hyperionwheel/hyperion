'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useWindowScroll, useWindowSize } from 'react-use'
import { Button } from '@/components/ui/button'
import { Link, usePathname } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { HyperionLogo } from '@/components/icons/hyperion-logo'
import { ToggleButton } from '@/components/toggle-button'
import { HeaderMenu } from '@/components/header-menu'
import dynamic from 'next/dynamic'
import { useLenis } from 'lenis/react'

type HeaderProps = {
  variant: 'transparent' | 'white'
  isAsideVisible: boolean
  onAsideToggle: () => void
  mobileCTA?: boolean
}

const ClaimRewardDialog = dynamic(() => import('./claim-reward-dialog').then((mod) => mod.ClaimRewardDialog), {
  ssr: false,
})

export const Header = ({ variant, isAsideVisible, mobileCTA = false, onAsideToggle }: HeaderProps) => {
  const t = useTranslations('header')

  const headerRef = useRef<HTMLHeadingElement>(null)

  const [isDialogOpen, setDialogOpen] = useState(false)

  const lines = useLenis()
  const size = useWindowSize()
  const pathname = usePathname()
  const scroll = useWindowScroll()

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
      data-mobile-cta={mobileCTA}
      data-header-variant={variant}
      className="header fixed top-0 left-0 w-full py-2 z-[99]"
    >
      <div className="2xl:container mx-auto relative px-1.25 flex items-normal justify-between z-[1] md:px-5 md:items-center">
        <div className="logo flex flex-1">
          <Link href="/" className="logo focus-visible:outline-none">
            <span
              className={cn('block', {
                'animate-logo': pathname === '/' && scroll.y > size.height - headerHeight,
              })}
            >
              <HyperionLogo width={77} height={77} />
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <HeaderMenu className="hidden md:block" />
          <Button
            className={cn('cta', {
              'hidden md:block': !mobileCTA,
            })}
            onClick={() => {
              lines?.stop()
              setDialogOpen(true)
            }}
          >
            {t('cta')}
          </Button>
        </div>
        <ToggleButton isOpen={isAsideVisible} toggleMenu={onAsideToggle} />
      </div>

      <ClaimRewardDialog
        open={isDialogOpen}
        onOpenChange={() => {
          lines?.start()
          setDialogOpen(false)
        }}
      />
    </header>
  )
}
