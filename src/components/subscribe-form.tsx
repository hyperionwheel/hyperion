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
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'

export const SubscribeForm = ({ className }: { className?: string }) => {
  const t = useTranslations()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof subscribeSchema>>({
    resolver: zodResolver(subscribeSchema),
  })

  const submitHandler = () => {
    // TODO
  }

  const buttonClasses = ['text-white', 'hover:bg-white', 'hover:border-white', 'hover:text-primary-main', 'w-full']

  return (
    <form className={className} onSubmit={handleSubmit(submitHandler)}>
      <div className="flex flex-col gap-2.5 md:flex-row">
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-2.5">
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
            <Button
              type="submit"
              className={cn('hidden md:w-[56px] md:flex', buttonClasses)}
              variant="outlined"
              size="icon"
            >
              <SendIcon />
            </Button>
          </div>
          <div className="flex space-x-2">
            <Controller
              name="termsAndConditions"
              control={control}
              render={({ field }) => (
                <>
                  <Checkbox
                    id="email"
                    name={field.name}
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    checked={field.value}
                  />
                  <label
                    htmlFor="email"
                    className="text-[12px] cursor-pointer text-white leading-[20px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
                  </label>
                </>
              )}
            />
          </div>
          <Button type="submit" className={cn('flex md:hidden', buttonClasses)} variant="outlined" size="icon">
            <SendIcon />
          </Button>
        </div>
      </div>
    </form>
  )
}
