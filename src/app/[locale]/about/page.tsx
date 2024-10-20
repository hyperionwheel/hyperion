import { EngineeringSection } from '@/components/engineering-section'
import { ExternalTemplate } from '@/components/external-template'
import { HeroSection } from '@/components/hero-section'
import { MissionSection } from '@/components/mission-section'
import { OffersSection } from '@/components/offers-section'
import { TextImageSection } from '@/components/text-image-section'
import { images } from '@/lib/constants'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
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
  const t = useTranslations('about')

  return (
    <ExternalTemplate headerVariant="transparent">
      <HeroSection
        format="image"
        source={images.aboutHero}
        title={t('hero_title')}
        description={t('hero_description')}
      />
      <TextImageSection
        title={t('where_sea_meets_sky_title')}
        description={t('where_sea_meets_sky_description')}
        imageSrc={images.unforgettableViews}
        overlay={false}
      />
      <OffersSection
        offers={[
          {
            title: t('offer.cart1.title'),
            description: t('offer.cart1.description'),
            imageSrc: images.beyondTheWheel,
          },
          {
            title: t('offer.cart2.title'),
            description: t('offer.cart2.description'),
            imageSrc: images.groundFloor,
          },
          {
            title: t('offer.cart3.title'),
            description: t('offer.cart3.description'),
            imageSrc: images.firstFloor,
          },
          {
            title: t('offer.cart4.title'),
            description: t('offer.cart4.description'),
            imageSrc: images.rooftop,
          },
        ]}
      />
      <EngineeringSection />
      <MissionSection />
    </ExternalTemplate>
  )
}
