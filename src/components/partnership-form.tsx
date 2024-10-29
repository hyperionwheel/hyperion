'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { contactFormSchema } from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from './ui/button'
import { createPartnershipEntity } from '@/lib/actions'
import { Link, usePathname } from '@/i18n/routing'
import { Typography } from './ui/typography'
import { useState } from 'react'
import { Checkbox } from './ui/checkbox'

const defaultValues = {
  name: '',
  companyName: '',
  email: '',
  partnershipInterests: '',
  message: '',
}

export const PartnershipForm = () => {
  const t = useTranslations()
  const pathname = usePathname()

  const [isLoading, setLoading] = useState(false)
  const [isSubmitted, setSubmitted] = useState(false)

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  })

  const submitHandler = async (data: z.infer<typeof contactFormSchema>) => {
    setLoading(true)

    const result = await createPartnershipEntity({ ...data, pathname })

    setLoading(false)

    if (result?.error) {
      return
    }

    reset(defaultValues)
    setSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Typography className="text-white uppercase pb-2" variant="Sharp Grotesk Body 1">
        {t('partnership.message.submitted')}
      </Typography>
    )
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)} noValidate>
      <div className="flex flex-col gap-1.25">
        <Controller
          name="name"
          control={control}
          render={({ field }) => {
            return <Input {...field} placeholder={t('partnership.name.label')} error={!!errors.name} />
          }}
        />
        <Controller
          name="companyName"
          control={control}
          render={({ field }) => {
            return <Input {...field} placeholder={t('partnership.company_name.label')} error={!!errors.companyName} />
          }}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => {
            return (
              <Input
                {...field}
                type="email"
                placeholder={t('partnership.email_address.label')}
                error={!!errors.email}
              />
            )
          }}
        />
        <Controller
          name="partnershipInterests"
          control={control}
          render={({ field }) => {
            return (
              <Input
                {...field}
                placeholder={t('partnership.partnership_interests.label')}
                error={!!errors.partnershipInterests}
              />
            )
          }}
        />
        <Controller
          name="message"
          control={control}
          render={({ field }) => {
            return <Textarea {...field} placeholder={t('partnership.message.label')} error={!!errors.message} />
          }}
        />
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
                <>
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
                </>
              }
            />
          )}
        />
      </div>

      <Button loading={isLoading} className="w-full mt-2 md:w-auto" type="submit" variant="secondary">
        {t('partnership.cta')}
      </Button>
    </form>
  )
}
