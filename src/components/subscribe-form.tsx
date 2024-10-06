'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from './ui/input'
import { subscribeSchema } from '@/lib/schemas'
import { Button } from './ui/button'
import { SendIcon } from './icons/send'

export const SubscribeForm = ({ className }: { className?: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof subscribeSchema>>({
    resolver: zodResolver(subscribeSchema),
  })

  const submitHandler = () => {}

  return (
    <form className={className} onSubmit={handleSubmit(submitHandler)}>
      <div className="flex flex-col gap-2.5 md:flex-row">
        <div className="flex flex-col">
          <Input
            type="email"
            className="md:w-[400px]"
            error={!!errors?.email?.message}
            {...register('email', { required: true })}
            placeholder="Input your email here"
          />
        </div>
        <Button
          type="submit"
          className="text-white hover:bg-white hover:border-white hover:text-primary-main w-full md:w-[56px]"
          variant="outlined"
          size="icon"
        >
          <SendIcon />
        </Button>
      </div>
    </form>
  )
}
