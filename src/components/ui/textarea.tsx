import * as React from 'react'

import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, error, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[123px] w-full rounded-md border border-transparent bg-transparent px-3 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:border-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:text-disabled disabled:bg-[#F5F5F5]',
        className,
        {
          'border-error text-error placeholder:text-error focus-visible:border-error ring-error': !!error,
        }
      )}
      ref={ref}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'
