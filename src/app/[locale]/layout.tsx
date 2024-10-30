import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { locales } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import Providers from '@/components/providers'
import { ReactLenis } from '@/lib/lines'
import { GoogleAnalytics } from '@/components/google-analytics'

type Props = {
  params: { locale: string }
}

const sharpGrotesk = localFont({
  src: [
    {
      path: '../fonts/Book20.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Medium23.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
})

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale })

  return {
    title: t('home_meta_title'),
    description: t('home_meta_description'),
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID as string} />
      <ReactLenis root>
        <body className={cn('min-h-screen bg-[#FAFAFA]', sharpGrotesk.className)}>
          <Providers locale={locale} messages={messages}>
            {children}
          </Providers>
        </body>
      </ReactLenis>
    </html>
  )
}
