'use client'

import { SubscribeForm } from './subscribe-form'
import { Dialog, DialogContent } from './ui/dialog'
import { useTranslations } from 'next-intl'
import { Typography } from './ui/typography'

type ClaimRewardDialogProps = {
  open: boolean
  onOpenChange: () => void
}

export const ClaimRewardDialog = ({ open, onOpenChange }: ClaimRewardDialogProps) => {
  const t = useTranslations('reward_dialog')

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[url(/images/secondary-to-primary-illustration.svg)] text-white bg-right-bottom bg-no-repeat bg-cover py-6 lg:px-[110px]">
        <Typography variant="Sharp Grotesk H3">{t('title')}</Typography>
        <Typography className="py-3" variant="Sharp Grotesk Body 1">
          {t('description')}
        </Typography>
        <SubscribeForm />
      </DialogContent>
    </Dialog>
  )
}
