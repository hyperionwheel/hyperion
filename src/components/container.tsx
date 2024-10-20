import { cn } from '@/lib/utils'

export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className="2xl:container mx-auto">
    <div className={cn('px-1.25 md:px-5', className)}>{children}</div>
  </div>
)
