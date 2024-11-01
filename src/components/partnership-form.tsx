'use client'

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
import { TextField } from './ui/text-field'

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

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
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
      <div className="flex flex-col gap-2">
        <div className="flex flex-col w-full gap-2 md:flex-row">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t('partnership.name.label')}
                placeholder={t('partnership.name.placeholder')}
                error={!!errors.name}
              />
            )}
          />
          <Controller
            name="companyName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={t('partnership.company_name.label')}
                placeholder={t('partnership.company_name.placeholder')}
                error={!!errors.companyName}
              />
            )}
          />
        </div>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="email"
              label={t('partnership.email_address.label')}
              placeholder={t('partnership.email_address.placeholder')}
              error={!!errors.email}
            />
          )}
        />
        <Controller
          name="partnershipInterests"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={t('partnership.partnership_interests.label')}
              placeholder={t('partnership.partnership_interests.placeholder')}
              error={!!errors.partnershipInterests}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={t('partnership.message.label')}
              placeholder={t('partnership.message.placeholder')}
              error={!!errors.message}
              multiline
            />
          )}
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
