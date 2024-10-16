import { ExternalTemplate } from '@/components/external-template'
import { List, Point, Text, Title } from '@/components/legal'

import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

type PrivacyProps = {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: PrivacyProps): Promise<Metadata> {
  const t = await getTranslations({ locale })

  return {
    title: t('privacy_meta_title'),
    description: t('privacy_meta_description'),
  }
}

export default function Privacy({ params: { locale } }: PrivacyProps) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('privacy')

  return (
    <ExternalTemplate container>
      <Title>{t('title')}</Title>
      <Text medium>{t('introduction.title')}</Text>
      <Text>{t('introduction.content1')}</Text>

      <Point>
        <Title sub>{t('who_we_are.title')}</Title>
        <List dangerouslySetInnerHTML={{ __html: t.raw('who_we_are.content1') }} />
      </Point>

      <Point>
        <Title sub>{t('data_we_collect.title')}</Title>
        <Text>{t('data_we_collect.content1')}</Text>
        <List decimal dangerouslySetInnerHTML={{ __html: t.raw('data_we_collect.content2') }} />
      </Point>

      <Point>
        <Title sub>{t('purpose_data_collection.title')}</Title>
        <Text>{t('purpose_data_collection.content1')}</Text>
        <List dangerouslySetInnerHTML={{ __html: t.raw('purpose_data_collection.content2') }} />
      </Point>

      <Point>
        <Title sub>{t('legal_basis.title')}</Title>
        <Text>{t('legal_basis.content1')}</Text>
        <List dangerouslySetInnerHTML={{ __html: t.raw('legal_basis.content2') }} />
      </Point>

      <Point>
        <Title sub>{t('sharing.title')}</Title>
        <Text>{t('sharing.content1')}</Text>
        <List decimal dangerouslySetInnerHTML={{ __html: t.raw('sharing.content2') }} />
      </Point>

      <Point>
        <Title sub>{t('your_rights.title')}</Title>
        <Text>{t('your_rights.content1')}</Text>
        <List dangerouslySetInnerHTML={{ __html: t.raw('your_rights.content2') }} />
      </Point>

      <Point>
        <Title sub>{t('data_retention.title')}</Title>
        <Text>{t('data_retention.content1')}</Text>{' '}
      </Point>

      <Point>
        <Title sub>{t('cookies.title')}</Title>
        <Text>{t('cookies.content1')}</Text>{' '}
      </Point>

      <Point>
        <Title sub>{t('security.title')}</Title>
        <Text>{t('security.content1')}</Text>{' '}
      </Point>

      <Point>
        <Title sub>{t('changes_policy.title')}</Title>
        <Text>{t('changes_policy.content1')}</Text>
        <Text>{t('changes_policy.content2')}</Text>
        <Text>{t('changes_policy.content3')}</Text>
        <List dangerouslySetInnerHTML={{ __html: t.raw('changes_policy.content4') }} />
      </Point>
    </ExternalTemplate>
  )
}
