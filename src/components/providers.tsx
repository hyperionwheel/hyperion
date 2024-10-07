'use client'

import { ParallaxProvider } from 'react-scroll-parallax'
import { AbstractIntlMessages, IntlConfig, NextIntlClientProvider } from 'next-intl'

export default function Providers({
  locale,
  messages,
  timeZone = 'Asia/Nicosia',
  children,
}: {
  locale: string
  timeZone?: IntlConfig['timeZone']
  messages: AbstractIntlMessages
  children: React.ReactNode
}) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale} timeZone={timeZone}>
      <ParallaxProvider>{children}</ParallaxProvider>
    </NextIntlClientProvider>
  )
}
