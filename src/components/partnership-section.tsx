import { images } from '@/lib/constants'
import { getUploadCareUrl } from '@/lib/uploadcare'
import { Button } from './ui/button'
import { useTranslations } from 'next-intl'

export const PartnershipSection = () => {
  const t = useTranslations('home')
  const image = getUploadCareUrl({ src: images.partnership })

  return (
    <section className="2xl:container mx-auto">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="min-h-[560px] bg-[length:160%] bg-no-repeat bg-primary-main bg-bottom md:bg-contain"
      >
        <div className="py-2.5 px-1.25 md:py-6 md:px-4 gap-2.5">
          <h2 className="font-medium text-white text-[34px] mx-w-full leading-[43px] md:max-w-[600px] md:text-[66px] md:leading-[84px] ">
            {t('partnership_title')}
          </h2>
          <p className="text-base mt-2.5 max-w-full text-white md:text-xl md:max-w-[555px]">
            {t('partnership_description')}
          </p>
          <Button variant="secondary" className="w-full mt-2.5 md:w-auto">
            {t('partnership_cta')}
          </Button>
        </div>
      </div>
    </section>
  )
}