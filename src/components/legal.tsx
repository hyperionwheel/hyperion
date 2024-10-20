import { cn } from '@/lib/utils'
import { Typography } from './ui/typography'

export const Title = ({ sub = false, children }: { sub?: boolean; children: React.ReactNode }) => {
  return (
    <Typography variant={sub ? 'Sharp Grotesk H2' : 'Sharp Grotesk H1'} className="mb-3">
      {children}
    </Typography>
  )
}

export const Text = ({ medium = false, children }: { medium?: boolean; children: React.ReactNode }) => {
  return (
    <Typography variant={medium ? 'Sharp Grotesk Caption Bold' : 'Sharp Grotesk Body 1'} className="max-w-[900px]">
      {children}
    </Typography>
  )
}

export const List = ({
  decimal = false,
  ...rest
}: {
  decimal?: boolean
  dangerouslySetInnerHTML?: {
    __html: string
  }
}) => {
  const Component = decimal ? 'ol' : 'ul'

  return (
    <Component
      className={cn('list-disc text-base ml-[28px] li:leading-[26px] max-w-[900px] md:text-xl md:li:leading-[32px]', {
        'list-decimal': decimal,
      })}
      {...rest}
    />
  )
}

export const Point = ({ children }: { children: React.ReactNode }) => <div className="mt-3.75">{children}</div>
