'use client'

import { useTranslations } from 'next-intl'
import { CookieIcon } from './icons/cookie'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'
import { cn, getLocalStorage, setLocalStorage } from '@/lib/utils'
import { COOKIE_CONSENT_KEY } from '@/lib/constants'

export const CookieConsent = () => {
  const t = useTranslations('cookie_consent')

  const [cookieConsent, setCookieConsent] = useState(false)

  useEffect(() => {
    const storedCookieConsent = getLocalStorage(COOKIE_CONSENT_KEY, null)

    setCookieConsent(storedCookieConsent)
  }, [])

  const handleConsent = (consent: boolean) => {
    setCookieConsent(consent)
    setLocalStorage(COOKIE_CONSENT_KEY, consent)
  }
  return (
    <div
      className={cn('fixed bottom-0 left-0 right-0 w-full z-[9999]', {
        hidden: cookieConsent !== null,
      })}
    >
      <div className="flex flex-col gap-2 mx-auto py-2 px-1.25 items-center max-w-[calc(100%_-_20px)] sm:max-w-[480px] my-3 shadow-[0px_2px_8px_0px_#00000033] bg-white rounded-md sm:my-3.75 sm:gap-0 sm:flex-row sm:p-1.25">
        <div className="flex flex-1 flex-col gap-1 items-center sm:flex-row sm:gap-2">
          <CookieIcon />
          <span className="flex sm:text-[14px] sm:leading-[22px]">{t('label')}</span>
        </div>
        <div className="flex flex-col w-full sm:mt-0 sm:w-auto sm:flex-row gap-0.5">
          <Button className="w-full sm:w-auto" size="sm" variant="outlined" onClick={() => handleConsent(false)}>
            {t('reject_all')}
          </Button>
          <Button className="border-[1px] w-full sm:w-auto" size="sm" onClick={() => handleConsent(true)}>
            {t('accept')}
          </Button>
        </div>
      </div>
    </div>
  )
}
