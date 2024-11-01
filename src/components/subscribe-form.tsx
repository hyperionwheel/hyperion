'use client'

import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from './ui/input'
import { subscribeSchema } from '@/lib/schemas'
import { Button } from './ui/button'
import { SendIcon } from '@/components/icons/send'
import { Checkbox } from '@/components/ui/checkbox'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { createSubscribeEntity } from '@/lib/actions'
import { Typography } from './ui/typography'
import { useState } from 'react'
import { useIsMobile } from '@/hooks/useIsMobile'

const defaultValues = {
  email: '',
  termsAndConditions: undefined,
}

export const SubscribeForm = ({ className, inModal }: { className?: string; inModal?: boolean }) => {
  const t = useTranslations()
  const pathname = usePathname()

  const [isLoading, setLoading] = useState(false)
  const [isSubmitted, setSubmitted] = useState(false)

  const isMobile = useIsMobile()

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof subscribeSchema>>({
    resolver: zodResolver(subscribeSchema),
    defaultValues,
  })

  const submitHandler = async ({ email }: z.infer<typeof subscribeSchema>) => {
    setLoading(true)

    const result = await createSubscribeEntity({ email, pathname })

    setLoading(false)

    if (result?.error) {
      return
    }

    reset(defaultValues)
    setSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Typography className={cn('text-white uppercase py-2', { 'text-black': inModal })} variant="Sharp Grotesk Body 1">
        {t('subscribe.message.submitted')}
      </Typography>
    )
  }

  return (
    <form className={cn('mt-2.5', className)} onSubmit={handleSubmit(submitHandler)} noValidate>
      <div className="subscribe-form-grid">
        <div className="[grid-area:input]">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="email"
                className="md:w-[400px]"
                error={!!errors.email}
                placeholder={t('subscribe.email.label')}
              />
            )}
          />
        </div>
        <div className="[grid-area:checkbox]">
          <Controller
            name="termsAndConditions"
            control={control}
            render={({ field }) => (
              <Checkbox
                name={field.name}
                checked={field.value}
                onCheckedChange={field.onChange}
                onBlur={field.onBlur}
                ref={field.ref}
                error={!!errors.termsAndConditions}
                label={
                  <span
                    className={cn({
                      'text-black': inModal,
                    })}
                  >
                    {t.rich('subscribe.terms_privacy.label', {
                      terms: (chunks) => (
                        <Link href="/terms" target="_blank">
                          {chunks}
                        </Link>
                      ),
                      privacy: (chunks) => (
                        <Link href="/privacy" target="_blank">
                          {chunks}
                        </Link>
                      ),
                    })}
                  </span>
                }
              />
            )}
          />
        </div>
        <div className="[grid-area:button]">
          <Button
            suppressHydrationWarning
            loading={isLoading}
            type="submit"
            fullWidth={isMobile}
            variant="outlined"
            className={isLoading ? 'bg-primary-light' : ''}
            size="icon"
          >
            <SendIcon />
          </Button>
        </div>
      </div>
    </form>
  )
}
