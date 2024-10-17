import { ExternalTemplate } from '@/components/external-template'

import { Metadata } from 'next'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

type FAQProps = {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: FAQProps): Promise<Metadata> {
  const t = await getTranslations({ locale })

  return {
    title: t('FAQ_meta_title'),
    description: t('FAQ_meta_description'),
  }
}

export default function FAQ({ params: { locale } }: FAQProps) {
  unstable_setRequestLocale(locale)

  return (
    <ExternalTemplate container>
      <h1>FAQ</h1>
    </ExternalTemplate>
  )
}
