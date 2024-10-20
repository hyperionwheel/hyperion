'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { contactFormSchema } from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from './ui/button'

export const PartnershipForm = () => {
  const t = useTranslations('partnership')

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  })

  const submitHandler = () => {
    // TODO
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="flex flex-col gap-1.25">
        <Controller
          name="name"
          control={control}
          render={({ field }) => {
            return <Input {...field} placeholder={t('name.label')} error={!!errors.name} />
          }}
        />
        <Controller
          name="companyName"
          control={control}
          render={({ field }) => {
            return <Input {...field} placeholder={t('company_name.label')} error={!!errors.companyName} />
          }}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => {
            return <Input {...field} placeholder={t('email_address.label')} error={!!errors.email} />
          }}
        />
        <Controller
          name="partnershipInterests"
          control={control}
          render={({ field }) => {
            return (
              <Input {...field} placeholder={t('partnership_interests.label')} error={!!errors.partnershipInterests} />
            )
          }}
        />
        <Controller
          name="message"
          control={control}
          render={({ field }) => {
            return <Textarea {...field} placeholder={t('message.label')} error={!!errors.message} />
          }}
        />
      </div>

      <Button className="w-full mt-2 md:w-auto" type="submit" variant="secondary">
        {t('cta')}
      </Button>
    </form>
  )
}
