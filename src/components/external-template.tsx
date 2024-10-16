import { cn } from '@/lib/utils'
import { Footer } from './footer'
import { Headroom } from './headroom'

type ExternalTemplateProps = {
  children: React.ReactNode
  variant?: 'default' | 'hero'
  container?: boolean
}

export const ExternalTemplate = ({ children, container = false, variant = 'default' }: ExternalTemplateProps) => {
  return (
    <>
      <Headroom variant={variant} />

      <main
        className={cn('flex flex-col flex-1', {
          '2xl:container mx-auto px-1.25 py-8 md:px-5': container,
        })}
      >
        {children}
      </main>

      <Footer />
    </>
  )
}
