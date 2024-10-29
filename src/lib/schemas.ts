import { z } from 'zod'

export const subscribeSchema = z.object({
  email: z.string().email('Invalid email'),
  termsAndConditions: z.literal(true, { errorMap: () => ({ message: 'You must accept the terms and conditions' }) }),
})

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  companyName: z.string().min(1, 'Company name is required'),
  email: z.string().email('Invalid email address'),
  partnershipInterests: z.string().min(1, 'Partnership interests are required'),
  message: z.string().min(1, 'Message is required'),
  termsAndConditions: z.literal(true, { errorMap: () => ({ message: 'You must accept the terms and conditions' }) }),
})
