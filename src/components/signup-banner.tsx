import { useTranslations } from 'next-intl'
import { SubscribeForm } from './subscribe-form'

export const SignupBanner = () => {
  const t = useTranslations('signup_banner')
  return (
    <section className="2xl:container mx-auto">
      <div className="py-5 px-1.25 md:py-8 md:px-5">
        <div className="bg-[url(/images/secondary-to-primary-illustration.svg)] bg-cover bg-right-bottom bg-no-repeat py-6 px-4 bg-covert">
          <p className="font-medium text-[24px] text-white md:leading-[76px] md:text-[60px]">{t('title')}</p>
          <SubscribeForm />
        </div>
      </div>
    </section>
  )
}
