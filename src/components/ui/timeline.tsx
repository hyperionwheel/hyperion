import React from 'react'

import { cn } from '@/lib/utils'

export const Timeline = React.forwardRef<HTMLDivElement, { className?: string; children: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div ref={ref} className={cn('grid grid-cols-2 items-center md:grid-cols-4', className)}>
        {children}
      </div>
    )
  }
)

Timeline.displayName = 'Timeline'

export const TimelineItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col relative">{children}</div>
}

interface TimelineContentProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode
}

export const TimelineOppositeContent = React.forwardRef<HTMLDivElement, TimelineContentProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-1 justify-start flex-col items-center min-h-[120px] py-2 max-w-[140px] m-auto gap-2',
          className
        )}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

TimelineOppositeContent.displayName = 'TimelineOppositeContent'

export const TimelineContent = React.forwardRef<HTMLDivElement, TimelineContentProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-1 items-center flex-col-reverse justify-end min-h-[120px] p-2 max-w-[150px] m-auto gap-2',
          className
        )}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

TimelineContent.displayName = 'TimelineContent'

export const TimelineSeparator = ({ children }: { children: React.ReactNode }) => {
  return <div className={cn('flex flex-row flex-0 h-full justify-center items-center')}>{children}</div>
}
export const TimelineConnector = ({ active }: { active?: boolean }) => {
  return <span className={cn('h-px bg-disabled grow-[1]', { 'h-[5px] bg-primary-main': active })} />
}

export const TimelineDot = ({ children }: { children: React.ReactNode }) => {
  return <span className="flex self-baseline items-center">{children}</span>
}
