'use client'

import { Dialog, DialogContent } from './ui/dialog'
import { useTranslations } from 'next-intl'
import { Typography } from './ui/typography'
import { useIsMobile } from '@/hooks/useIsMobile'
import { cn } from '@/lib/utils'
import { SubscribeForm } from './subscribe-form'

type ClaimRewardDialogProps = {
  open: boolean
  onOpenChange: () => void
}

export const ClaimRewardDialog = ({ open, onOpenChange }: ClaimRewardDialogProps) => {
  const t = useTranslations('reward_dialog')
  const isMobile = useIsMobile()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0">
        <div className="bg-[url(/images/secondary-to-primary-illustration.svg)] text-white bg-right-bottom bg-no-repeat bg-cover py-[70px] md:py-6 px-[33px] lg:px-[110px]">
          <h4 className={cn('text-[24px] leading-[30px] md:text-[40px] md:leading-[51px]')}>
            {t(isMobile ? 'mobile_title' : 'title')}
          </h4>
          <Typography className="hidden pt-2.5 md:block" variant="Sharp Grotesk Body 1">
            {t('description')}
          </Typography>
        </div>
        <div className="bg-[#FAFAFA] py-[35px] px-[33px] lg:px-[110px]">
          <SubscribeForm inModal />
        </div>
      </DialogContent>
    </Dialog>
  )
}
