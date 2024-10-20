import { cn } from '@/lib/utils'
import { Footer } from './footer'
import { Headroom } from './headroom'

export const ExternalTemplate = ({
  children,
  container = false,
  headerVariant = 'white',
  offsetHeader = false,
  mobileCTA = false,
  animation = false,
}: {
  children: React.ReactNode
  headerVariant?: 'transparent' | 'white'
  container?: boolean
  offsetHeader?: boolean
  mobileCTA?: boolean
  animation?: boolean
}) => {
  return (
    <div className={cn('flex flex-col min-h-screen', { 'pt-[116px]': offsetHeader })}>
      <Headroom variant={headerVariant} mobileCTA={mobileCTA} animation={animation} />

      <main className="flex-1">
        <div
          className={cn({
            '2xl:container mx-auto px-1.25 py-3.75 md:px-5 md:py-5': container,
          })}
        >
          {children}
        </div>
      </main>

      <Footer />
    </div>
  )
}
