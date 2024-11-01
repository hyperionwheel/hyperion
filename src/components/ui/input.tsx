import * as React from 'react'

import { cn } from '@/lib/utils'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, error, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-[56px] w-full text-black rounded-md border border-primary-main bg-transparent px-3 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:border-black focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:text-disabled disabled:bg-[#F5F5F5]',
        {
          'border-error text-error placeholder:text-error focus-visible:border-error ring-error': !!error,
        },
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = 'Input'
