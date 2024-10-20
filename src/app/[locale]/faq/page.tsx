import { ExternalTemplate } from '@/components/external-template'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { Container } from '@/components/container'

import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
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

  const t = useTranslations('FAQ')

  return (
    <ExternalTemplate headerVariant="white">
      <div className="bg-secondary-main pt-[116px]">
        <Container className="md:pt-[68px] pb-[34px] md:pb-[54px]">
          <Typography className="text-white" variant="Sharp Grotesk H1">
            {t('title')}
          </Typography>
          <Typography className="text-white max-w-[555px] mt-3" variant="Sharp Grotesk Body 1">
            {t('description')}
          </Typography>
          <Button className="w-full md:w-auto mt-3">{t('cta')}</Button>
        </Container>
      </div>

      <Container className="mt-3.75 mb-6 md:mt-1.5">
        <Typography variant="Sharp Grotesk H2">{t('location.title')}</Typography>
        <div className="max-w-[900px]">
          <Typography className="mt-1.5 md:mt-3" variant="Sharp Grotesk Caption Bold">
            {t('location.question1')}
          </Typography>
          <Typography variant="Sharp Grotesk Body 1">{t('location.answer1')}</Typography>
          <Typography className="mt-1.5 md:mt-3" variant="Sharp Grotesk Caption Bold">
            {t('location.question2')}
          </Typography>
          <Typography variant="Sharp Grotesk Body 1">{t('location.answer2')}</Typography>
        </div>

        <Typography className="mt-2.5 md:mt-3.75" variant="Sharp Grotesk H2">
          {t('events_experiences.title')}
        </Typography>
        <div className="max-w-[900px]">
          <Typography className="mt-1.5 md:mt-3" variant="Sharp Grotesk Caption Bold">
            {t('events_experiences.question1')}
          </Typography>
          <Typography variant="Sharp Grotesk Body 1">{t('events_experiences.answer1')}</Typography>
          <Typography className="mt-1.5 md:mt-3" variant="Sharp Grotesk Caption Bold">
            {t('events_experiences.question2')}
          </Typography>
          <Typography variant="Sharp Grotesk Body 1">{t('events_experiences.answer2')}</Typography>
        </div>

        <Typography className="mt-2.5 md:mt-3.75" variant="Sharp Grotesk H2">
          {t('general.title')}
        </Typography>
        <div className="max-w-[900px]">
          <Typography className="mt-1.5 md:mt-3" variant="Sharp Grotesk Caption Bold">
            {t('general.question1')}
          </Typography>
          <Typography variant="Sharp Grotesk Body 1">{t('general.answer1')}</Typography>
          <Typography className="mt-1.5 md:mt-3" variant="Sharp Grotesk Caption Bold">
            {t('general.question2')}
          </Typography>
          <Typography variant="Sharp Grotesk Body 1">{t('general.answer2')}</Typography>
        </div>
      </Container>
    </ExternalTemplate>
  )
}
