import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'

type TypographyPropsVariant =
  | 'Sharp Grotesk H1'
  | 'Sharp Grotesk H2'
  | 'Sharp Grotesk H3'
  | 'Sharp Grotesk Body 1'
  | 'Sharp Grotesk Caption Bold'

const defaultVariantMapping: Record<
  TypographyPropsVariant,
  keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'p'>
> = {
  'Sharp Grotesk H1': 'h1',
  'Sharp Grotesk H2': 'h2',
  'Sharp Grotesk H3': 'h3',
  'Sharp Grotesk Body 1': 'p',
  'Sharp Grotesk Caption Bold': 'p',
}

const typographyVariants = cva('', {
  variants: {
    variant: {
      'Sharp Grotesk H1': 'font-medium text-3xl leading-[44px] md:text-7xl md:leading-[110px]',
      'Sharp Grotesk H2': 'font-medium text-3xl leading-[44px] md:text-7xl md:leading-[110px]',
      'Sharp Grotesk H3': 'font-medium text-[40px] leading-[51px]',
      'Sharp Grotesk Body 1': 'text-base leading-[26px] md:text-xl md:leading-[32px]',
      'Sharp Grotesk Caption Bold': 'font-medium text-base leading-[26px] md:text-xl md:leading-[32px]',
    },
  },
  defaultVariants: {
    variant: 'Sharp Grotesk Body 1',
  },
})

export interface TypographyProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {}

export const Typography = ({ className, variant = 'Sharp Grotesk Body 1', children, ...props }: TypographyProps) => {
  const Component = defaultVariantMapping[variant as TypographyPropsVariant]

  return (
    <Component className={cn(typographyVariants({ variant, className }))} {...props}>
      {children}
    </Component>
  )
}

Typography.displayName = 'Typography'
