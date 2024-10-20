'use client'

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
import { useIntersection } from 'react-use'
import { useEffect, useRef, useState } from 'react'

export const TimelineSection = () => {
  const t = useTranslations('home')

  const [isVisible, setIsVisible] = useState(false)

  const intersectionRef = useRef<HTMLDivElement>(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      setIsVisible(true)
    }
  }, [intersection])

  console.log(intersection)

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
    <section className="animate-wiggle 2xl:container mx-auto ">
      <div className="relative px-1.25 md:px-5">
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
      <div className="relative py-5 md:py-10">
        <Timeline ref={intersectionRef}>
          {timelines.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                className={cn(`transition-all duration-700 ease-in-out opacity-0 translate-y-2`, {
                  'opacity-100 translate-y-0': isVisible,
                })}
                style={{ transitionDelay: `${index * 500}ms` }}
              >
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
              <TimelineContent
                className={cn(`transition-all duration-700 ease-in-out opacity-0 -translate-y-2`, {
                  'opacity-100 translate-y-0': isVisible,
                })}
                style={{ transitionDelay: `${index * 500}ms` }}
              >
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
