import { useTranslations } from 'next-intl'
import { Typography } from './ui/typography'
import { images } from '@/lib/constants'
import { ImageTextCard } from './image-text-card'

export const EngineeringSection = () => {
  const t = useTranslations('about.engineering')

  return (
    <section className="animate-wiggle 2xl:container mx-auto ">
      <div className="relative px-1.25 pt-3.5 md:pt-10 md:pb-7.5 md:px-5">
        <div className="grid grid-cols-1 gap-2.5 lg:gap-2 lg:grid-cols-2">
          <div className="flex-1">
            <Typography className="md:sticky md:top-[150px] md:z-1" variant="Sharp Grotesk H2">
              {t('title')}
            </Typography>
          </div>
          <div className="flex-1 relative">
            <div className="flex flex-row py-3 overflow-x-auto -mx-1.25 md:mx-0 gap-0 md:py-0 md:gap-3 scrollbar-hide md:flex-col">
              <ImageTextCard imageSrc={images.innovativeEngineering1} description={t('content1')} />
              <ImageTextCard imageSrc={images.innovativeEngineering2} description={t('content2')} />
              <ImageTextCard imageSrc={images.innovativeEngineering3} description={t('content3')} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
