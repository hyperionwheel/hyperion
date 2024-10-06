import { useTranslations } from 'next-intl'
import { OfferCard } from '@/components/offer-card'
import { images } from '@/lib/constants'

export const OffersSection = () => {
  const t = useTranslations('home')

  return (
    <section className="2xl:container mx-auto">
      <div className="py-2.5 px-1.25 md:py-4 md:px-5">
        <div className="grid grid-cols-1 gap-2.5 lg:gap-2 lg:grid-cols-2">
          <OfferCard
            title={t('seasonal_events_title')}
            description={t('seasonal_events_description')}
            imageSrc={images.seasonalEvents}
          />
          <OfferCard
            title={t('advanced_technology_title')}
            description={t('advanced_technology_description')}
            imageSrc={images.advancedTechnology}
          />
          <OfferCard
            title={t('family_fun_title')}
            description={t('family_fun_description')}
            imageSrc={images.familyFun}
          />
          <OfferCard
            title={t('cyprus_experience_title')}
            description={t('cyprus_experience_description')}
            imageSrc={images.cyprusExperience}
          />
        </div>
      </div>
    </section>
  )
}
