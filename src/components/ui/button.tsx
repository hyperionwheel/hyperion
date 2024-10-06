import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:shadow-[0_0_7px_0_#FFF] disabled:pointer-events-none disabled:bg-neutral-100 disabled:text-disabled',
  {
    variants: {
      variant: {
        primary: 'bg-primary-main text-zinc-50 hover:bg-primary-light',
        secondary: 'bg-secondary-main text-zinc-50 hover:bg-secondary-light',
      },
      size: {
        md: 'px-3 h-6 py-[14.5px] rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = 'button', asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : 'button'

    return <Component ref={ref} type={type} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  }
)

Button.displayName = 'Button'
