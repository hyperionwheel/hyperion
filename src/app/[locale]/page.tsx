import { AnimatedLogoSection } from '@/components/animated-logo-section'
import { ExternalTemplate } from '@/components/external-template'
import { HeroSection } from '@/components/hero-section'
import { OffersSection } from '@/components/offers-section'
import { ParallaxSection } from '@/components/parallax-section'
import { PartnershipSection } from '@/components/partnership-section'
import { SignupBanner } from '@/components/signup-banner'
import { TextImageSection } from '@/components/text-image-section'
import { TimelineSection } from '@/components/timeline-section'
import { images } from '@/lib/constants'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

type HomeProps = {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: HomeProps): Promise<Metadata> {
  const t = await getTranslations({ locale })

  return {
    title: t('home_meta_title'),
    description: t('home_meta_description'),
  }
}

export default function Home({ params: { locale } }: HomeProps) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('home')

  return (
    <ExternalTemplate headerVariant="transparent" animation>
      <HeroSection format="video" source="/videos/hero.mp4" title={t('hero_title')} animation />
      <TextImageSection
        title={t('discover_cyprus_views_title')}
        description={t('discover_cyprus_views_description')}
        imageSrc={images.interactiveCabins}
        overlay={false}
      />
      <TimelineSection />
      <PartnershipSection />
      <TextImageSection
        title={t('unforgettable_views_title')}
        description={t('unforgettable_views_description')}
        imageSrc={images.unforgettableViews}
      />
      <ParallaxSection imageSrc={images.hero1} />
      <TextImageSection
        title={t('interactive_cabins_title')}
        description={t('interactive_cabins_description')}
        imageSrc={images.interactiveCabins}
      />
      <OffersSection
        offers={[
          {
            title: t('seasonal_events_title'),
            description: t('seasonal_events_description'),
            imageSrc: images.seasonalEvents,
          },
          {
            title: t('advanced_technology_title'),
            description: t('advanced_technology_description'),
            imageSrc: images.advancedTechnology,
          },
          {
            title: t('family_fun_title'),
            description: t('family_fun_description'),
            imageSrc: images.familyFun,
          },
          {
            title: t('cyprus_experience_title'),
            description: t('cyprus_experience_description'),
            imageSrc: images.cyprusExperience,
          },
        ]}
      />
      <SignupBanner />
      <ParallaxSection imageSrc={images.hero2} />
    </ExternalTemplate>
  )
}
