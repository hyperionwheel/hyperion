import { cn } from '@/lib/utils'
import { Footer } from './footer'
import { Headroom } from './headroom'

export const ExternalTemplate = ({
  children,
  container = false,
  variant = 'default',
}: {
  children: React.ReactNode
  variant?: 'default' | 'hero'
  container?: boolean
}) => {
  return (
    <div className={cn('flex flex-col min-h-screen', { 'pt-[116px]': variant === 'default' })}>
      <Headroom variant={variant} />

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
