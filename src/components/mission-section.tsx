import { useTranslations } from 'next-intl'
import { Container } from './container'
import { Typography } from './ui/typography'
import { PinkOutlineCard } from './pink-outline-card'

export const MissionSection = () => {
  const t = useTranslations('about.mission')

  return (
    <section>
      <Container>
        <div className="max-w-[1000px]">
          <Typography variant="Sharp Grotesk H2">{t('title')}</Typography>
          <Typography className="mt-3" variant="Sharp Grotesk Body 1">
            {t('description')}
          </Typography>
        </div>
        <div className="grid grid-cols-1 mt-2.5 gap-2.5 md:mt-[51px] md:gap-2 md:grid-cols-2">
          <PinkOutlineCard description={t('content1')} />
          <PinkOutlineCard description={t('content2')} />
        </div>
        <div className="bg-[url(/images/primary-to-secondary-illustration.svg)] bg-primary-main bg-right-bottom bg-no-repeat bg-cover mt-4 py-[60px] px-[33px] md:px-[40px] md:py-[117px] md:mt-2">
          <p className="text-white font-medium text-base leading-[20px] md:text-[36px] md:leading-[46px]">
            {t('mission.content3')}
          </p>
        </div>
      </Container>
    </section>
  )
}
