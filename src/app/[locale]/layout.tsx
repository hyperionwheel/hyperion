import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { locales } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import Providers from '@/components/providers'

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
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={cn('flex min-h-screen flex-col bg-[#FAFAFA]', sharpGrotesk.className)}>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
