'use client'

import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'

export const NavLink = ({
  href,
  children,
  className,
  ...props
}: {
  href: string
  children: React.ReactNode
  className?: string
}) => {
  return (
    <Link href={href} {...props} className={cn('nav_link relative font-medium', className)}>
      {children}
    </Link>
  )
}
