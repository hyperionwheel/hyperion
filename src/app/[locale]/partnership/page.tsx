import { Container } from '@/components/container'
import { ExternalTemplate } from '@/components/external-template'
import { PartnershipForm } from '@/components/partnership-form'
import { Typography } from '@/components/ui/typography'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
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

  const t = useTranslations('partnership')

  return (
    <ExternalTemplate mobileCTA>
      <div
        className={`bg-primary-main bg-none md:bg-[url(/images/partnership-Illustration.svg)] bg-[calc(50%_+_310px)_210px] bg-no-repeat pt-[121px] pb-[38px] md:pt-[167px] md:pb-[237px]`}
      >
        <Container>
          <div className="text-white md:max-w-[671px]">
            <Typography variant="Sharp Grotesk Body 1">{t('description')}</Typography>
          </div>
          <div className="mt-5 md:max-w-[557px]">
            <PartnershipForm />
          </div>
        </Container>
      </div>
    </ExternalTemplate>
  )
}
