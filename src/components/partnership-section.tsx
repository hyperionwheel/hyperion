import { Link } from '@/i18n/routing'
import { Button } from './ui/button'
import { useTranslations } from 'next-intl'

export const PartnershipSection = () => {
  const t = useTranslations('home')

  return (
    <section className="2xl:container mx-auto">
      <div className="bg-[url(/images/partnership-illustration-home.svg)] min-h-[560px] bg-[length:800px] bg-[65%_bottom] bg-no-repeat bg-primary-main md:bg-bottom md:bg-contain">
        <div className="py-2.5 px-1.25 md:py-6 md:px-4 gap-2.5">
          <h2 className="font-medium text-white text-[34px] mx-w-full leading-[43px] md:max-w-[600px] md:text-[66px] md:leading-[84px] ">
            {t('partnership_title')}
          </h2>
          <p className="text-base mt-2.5 max-w-full text-white md:text-xl md:max-w-[555px]">
            {t('partnership_description')}
          </p>
          <Button asChild variant="secondary" className="w-full mt-2.5 md:w-auto">
            <Link href="/partnership">{t('partnership_cta')}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
