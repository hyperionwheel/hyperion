import { ExternalTemplate } from '@/components/external-template'

import { Metadata } from 'next'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

type PartnershipProps = {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: PartnershipProps): Promise<Metadata> {
  const t = await getTranslations({ locale })

  return {
    title: t('partnership_meta_title'),
    description: t('partnership_meta_description'),
  }
}

export default function Partnership({ params: { locale } }: PartnershipProps) {
  unstable_setRequestLocale(locale)

  return (
    <ExternalTemplate container>
      <h1>Partnership</h1>
    </ExternalTemplate>
  )
}
