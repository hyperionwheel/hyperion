import { useTranslations } from 'next-intl'
import Link from 'next/link'

export const LegalMenu = () => {
  const t = useTranslations('footer')

  return (
    <ul className="flex flex-col gap-2.5 md:gap-7.5 sm:flex-row">
      <li>{t('copyright')}</li>
      <li>
        <Link href="" target="_blank">
          {t('privacy')}
        </Link>
      </li>
      <li>
        <Link href="" target="_blank">
          {t('terms')}
        </Link>
      </li>
    </ul>
  )
}