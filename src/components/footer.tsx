import { HyperionLogo } from '@/components/icons/hyperion-logo'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { FacebookIcon } from './icons/facebook'
import { XIcon } from './icons/x'
import { InstagramIcon } from './icons/instagram'
import { LegalMenu } from './legal-menu'

export const Footer = () => {
  const t = useTranslations('footer')

  return (
    <footer className="w-full bg-white text-sm">
      <div className="2xl:container mx-auto">
        <div className="d-flex py-[38px] px-1.25 md:px-5 md:py-[77px]">
          <div className="flex flex-col justify-between md:flex-row">
            <div>
              <Link href="/" className="block w-8">
                <HyperionLogo />
              </Link>

              <p className="w-full mt-4.5 md:max-w-[443px]">{t('about')}</p>
            </div>
            <div className="flex gap-0 mt-3.75 md:mt-0 md:gap-7.5 lg:gap-[148px]">
              <div className="flex-1">
                <h4 className="font-medium text-base whitespace-nowrap">{t('about_title')}</h4>
                <ul className="flex flex-col pt-2.5 gap-1.25">
                  <li>
                    <Link href="" target="_blank">
                      {t('contact')}
                    </Link>
                  </li>
                  <li>
                    <Link href="" target="_blank">
                      {t('testimony')}
                    </Link>
                  </li>
                  <li>
                    <Link href="" target="_blank">
                      {t('rating')}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-base whitespace-nowrap">{t('follow_us_title')}</h4>
                <ul className="flex flex-col pt-2.5 gap-1.25">
                  <li className="flex gap-1.5">
                    <FacebookIcon />
                    <Link href="https://www.facebook.com/hyperion.wheel" target="_blank">
                      Facebook
                    </Link>
                  </li>
                  <li className="flex gap-1.5">
                    <XIcon />
                    <Link href="https://x.com/hyperion_wheel" target="_blank">
                      x.com
                    </Link>
                  </li>
                  <li className="flex gap-1.5">
                    <InstagramIcon />
                    <Link href="https://instagram.com/hyperion_wheel" target="_blank">
                      Instagram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-[55px]">
            <LegalMenu />
          </div>
        </div>
      </div>
    </footer>
  )
}
