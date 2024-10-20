'use client'

import { images } from '@/lib/constants'
import { SubscribeForm } from './subscribe-form'
import { Dialog, DialogContent } from './ui/dialog'
import { getUploadCareUrl } from '@/lib/uploadcare'
import { useTranslations } from 'next-intl'
import { Typography } from './ui/typography'

type ClaimRewardDialogProps = {
  open: boolean
  onOpenChange: () => void
}

export const ClaimRewardDialog = ({ open, onOpenChange }: ClaimRewardDialogProps) => {
  const t = useTranslations('reward_dialog')

  const image = getUploadCareUrl({ src: images.promoBackground })

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        style={{ backgroundImage: `url(${image})` }}
        className="text-white bg-right bg-no-repeat bg-cover py-6 lg:px-[110px]"
      >
        <Typography variant="Sharp Grotesk H3">{t('title')}</Typography>
        <Typography className="py-3" variant="Sharp Grotesk Body 1">
          {t('description')}
        </Typography>
        <SubscribeForm />
      </DialogContent>
    </Dialog>
  )
}
