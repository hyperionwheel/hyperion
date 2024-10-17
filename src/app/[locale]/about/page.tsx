import { ExternalTemplate } from '@/components/external-template'

import { Metadata } from 'next'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

type AboutProps = {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: AboutProps): Promise<Metadata> {
  const t = await getTranslations({ locale })

  return {
    title: t('about_meta_title'),
    description: t('about_meta_description'),
  }
}

export default function About({ params: { locale } }: AboutProps) {
  unstable_setRequestLocale(locale)

  return (
    <ExternalTemplate container>
      <h1>About</h1>
    </ExternalTemplate>
  )
}
