import { images } from '@/lib/constants'
import { getUploadCareUrl } from '@/lib/uploadcare'
import { useTranslations } from 'next-intl'
import { SubscribeForm } from './subscribe-form'

export const SignupBanner = () => {
  const t = useTranslations('signup_banner')
  const image = getUploadCareUrl({ src: images.promoBackground })

  return (
    <section className="2xl:container mx-auto">
      <div className="py-5 px-1.25 md:py-8 md:px-5">
        <div style={{ backgroundImage: `url(${image})` }} className="py-6 px-4 bg-cover bg-right">
          <p className="font-medium text-[24px] text-white md:text-[60px]">{t('title')}</p>
          <SubscribeForm className="mt-[20px]" />
        </div>
      </div>
    </section>
  )
}
