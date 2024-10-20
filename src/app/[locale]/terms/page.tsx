import { ExternalTemplate } from '@/components/external-template'
import { List, Point, Text, Title } from '@/components/legal'

import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

type TermsProps = {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: TermsProps): Promise<Metadata> {
  const t = await getTranslations({ locale })

  return {
    title: t('terms_meta_title'),
    description: t('terms_meta_description'),
  }
}

export default function Terms({ params: { locale } }: TermsProps) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('terms')

  return (
    <ExternalTemplate mobileCTA offsetHeader container>
      <Title>{t('title')}</Title>
      <Text medium>{t('introduction.title')}</Text>
      <Text>{t('introduction.content1')}</Text>
      <Point>
        <Title sub>{t('company_information.title')}</Title>
        <List dangerouslySetInnerHTML={{ __html: t.raw('company_information.content1') }} />
      </Point>
      <Point>
        <Title sub>{t('definitions.title')}</Title>
        <List dangerouslySetInnerHTML={{ __html: t.raw('definitions.content1') }} />
      </Point>
      <Point>
        <Title sub>{t('use_website.title')}</Title>
        <Text>{t('use_website.content1')}</Text>
        <List dangerouslySetInnerHTML={{ __html: t.raw('use_website.content2') }} />
      </Point>
      <Point>
        <Title sub>{t('ticket_purchases.title')}</Title>
        <List dangerouslySetInnerHTML={{ __html: t.raw('ticket_purchases.content1') }} />
      </Point>
      <Point>
        <Title sub>{t('user_accounts.title')}</Title>
        <Text>{t('user_accounts.content1')}</Text>
      </Point>
      <Point>
        <Title sub>{t('promotional_offers.title')}</Title>
        <Text>{t('promotional_offers.content1')}</Text>
      </Point>
      <Point>
        <Title sub>{t('limitation.title')}</Title>
        <Text>{t('limitation.content1')}</Text>
        <List dangerouslySetInnerHTML={{ __html: t.raw('limitation.content2') }} />
      </Point>
      <Point>
        <Title sub>{t('governing_law.title')}</Title>
        <Text>{t('governing_law.content1')}</Text>
      </Point>
      <Point>
        <Title sub>{t('security.title')}</Title>
        <Text>{t('security.content1')}</Text>
      </Point>
      <Point>
        <Title sub>{t('changes_terms.title')}</Title>
        <Text>{t('changes_terms.content1')}</Text>
        <Text>{t('changes_terms.content2')}</Text>
        <Text>{t('changes_terms.content3')}</Text>
        <List dangerouslySetInnerHTML={{ __html: t.raw('changes_terms.content4') }} />
      </Point>
    </ExternalTemplate>
  )
}
