import { cn } from '@/lib/utils'

export const Title = ({ sub = false, children }: { sub?: boolean; children: React.ReactNode }) => {
  const Component = sub ? 'h2' : 'h1'

  return (
    <Component className="text-3xl leading-[44px] font-medium mb-3 md:text-7xl md:leading-[110px]">
      {children}
    </Component>
  )
}

export const Text = ({ medium = false, children }: { medium?: boolean; children: React.ReactNode }) => {
  return (
    <p
      className={cn('text-base leading-[26px] max-w-[900px] md:text-xl md:leading-[32px]', {
        'font-medium': medium,
      })}
    >
      {children}
    </p>
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

export const Point = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-3.75">{children}</div>
}
