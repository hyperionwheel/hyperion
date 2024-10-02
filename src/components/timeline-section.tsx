import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from './ui/timeline'
import { TimelineDotIcon, TimelineDotVariant } from './icons/timeline-dot'

export const TimelineSection = () => {
  const t = useTranslations('home')

  const timelines = [
    {
      size: 58,
      variant: 'completed',
      connectors: [true, true],
      oppositeContent: 'Acceptence from President Office',
      content: null,
    },
    {
      size: 48,
      variant: 'active',
      connectors: [true, true],
      oppositeContent: null,
      content: 'Acceptance Building Permit',
    },
    {
      size: 38,
      variant: 'inactive',
      connectors: [false, false],
      content: null,
      oppositeContent: 'Constrution',
    },
    {
      size: 28,
      variant: 'inactive',
      connectors: [false, false],
      oppositeContent: null,
      content: 'Open ceremony',
    },
  ]

  return (
    <section className="2xl:container mx-auto ">
      <div className="relative py-2.5 px-1.25 md:py-6 md:px-5">
        <h2
          className={cn(
            'font-medium',
            'text-[34px] md:text-[48px] xl:text-[86px]',
            'leading-[43px] md:leading-[60px] xl:leading-[110px]',
            `lg:max-w-[1100px]`
          )}
        >
          {t('timeline_title')}
        </h2>
        <p className="text-base mt-3 max-w-full md:text-xl lg:max-w-[450px]">{t('timeline_description')}</p>
      </div>
      <div className="relative mt-4.5 mb-5 md:py-10">
        <Timeline>
          {timelines.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent>
                <p className="text-sm">{item.oppositeContent}</p>
                {item.oppositeContent && (
                  <div className="flex flex-1 flex-col items-center rotate-[0deg]">
                    <span className="flex-1 w-px bg-black flex-grow-1"></span>
                    <span className="self-baseline p-0.5 rounded-[100%] bg-black"></span>
                  </div>
                )}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector active={item.connectors[0]} />
                <TimelineDot>
                  <TimelineDotIcon variant={item.variant as TimelineDotVariant} size={item.size} />
                </TimelineDot>
                <TimelineConnector active={item.connectors[1]} />
              </TimelineSeparator>
              <TimelineContent>
                <p className="text-sm">{item.content}</p>
                {item.content && (
                  <div className="flex flex-1 flex-col items-center rotate-[180deg]">
                    <span className="flex-1 w-px bg-black flex-grow-1"></span>
                    <span className="self-baseline p-0.5 rounded-[100%] bg-black"></span>
                  </div>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  )
}
