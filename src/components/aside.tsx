'use client'

import { cn } from '@/lib/utils'
import { HeaderMenu } from './header-menu'
import { Button } from './ui/button'
import { useTranslations } from 'next-intl'
import { LegalMenu } from './legal-menu'
import { useLenis } from 'lenis/react'
import { useClaimDialogStore } from '@/hooks/useClaimDialogStore'

export const Aside = ({ open }: { open: boolean }) => {
  const t = useTranslations()

  const lines = useLenis()
  const { open: openClaimDialog } = useClaimDialogStore()

  return (
    <aside className={cn('fixed inset-0 invisible z-[21] text-white', { visible: open })}>
      <div className="absolute top-0 right-0 h-full w-full max-w-full overflow-hidden bg-primary-main">
        <div className="flex flex-col justify-between pt-[80px] pb-3 px-1.25 h-full">
          <div>
            <HeaderMenu mobile />
            <Button
              variant="secondary"
              className="w-full mt-3"
              onClick={() => {
                lines?.stop()
                openClaimDialog()
              }}
            >
              {t('header.cta')}
            </Button>
          </div>

          <LegalMenu />
        </div>
      </div>
    </aside>
  )
}
