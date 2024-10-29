'use client'

import React, { useId } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    label: React.ReactNode | string
    error?: boolean
  }
>(({ className, label, error, ...props }, ref) => {
  const id = useId()

  return (
    <div className="flex space-x-2">
      <CheckboxPrimitive.Root
        id={id}
        ref={ref}
        className={cn(
          'peer h-2.5 w-2.5 shrink-0 rounded-[4px] transition-colors border border-transparent bg-white shadow focus-visible:border-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:text-disabled disabled:bg-[#F5F5F5] data-[state=checked]:bg--main data-[state=checked]:text-primary-main',
          {
            'border-error': error,
          },
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
          <CheckIcon className="h-2.5 w-2.5" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label
        htmlFor={id}
        className="text-[8px] leading-[10px] cursor-pointer text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sm:text-[12px] sm:leading-[16px] md:leading-[20px]"
      >
        {label}
      </label>
    </div>
  )
})

Checkbox.displayName = CheckboxPrimitive.Root.displayName
