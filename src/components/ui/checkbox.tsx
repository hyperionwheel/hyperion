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
    <div
      className={cn('flex space-x-2 transition-colors', {
        'bg-[#FF5E5E] text-[#F5F5F5] p-1.25 rounded-[8px]': error,
      })}
    >
      <CheckboxPrimitive.Root
        id={id}
        ref={ref}
        className={cn(
          'peer h-2.5 w-2.5 shrink-0 rounded-[4px] transition-colors border border-[#0D0D0D] bg-white shadow focus-visible:border-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:text-disabled disabled:bg-[#F5F5F5] data-[state=checked]:bg--main data-[state=checked]:text-primary-main',
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
        className={cn(
          'text-[8px] leading-[10px] cursor-pointer text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sm:text-[12px] sm:leading-[16px] md:leading-[20px]'
        )}
      >
        {label}
      </label>
    </div>
  )
})

Checkbox.displayName = CheckboxPrimitive.Root.displayName
