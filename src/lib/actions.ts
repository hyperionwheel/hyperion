'use server'

import { googleSheet } from './google-sheet'
import { sendEmail } from './sendgrid'
import { SubscribeConfirmation } from '@/emails/subscribe-confirmation'
import { PartnershipConfirmation } from '@/emails/partnership-confirmation'

export async function createSubscribeEntity({ email, pathname }: { email: string; pathname: string }) {
  const date = new Date().toISOString()

  try {
    await googleSheet.loadInfo()
    const sheet = googleSheet.sheetsByIndex[0]

    const addSheetPromise = sheet.addRow({
      date,
      email,
      pathname,
    })

    const sendEmailPromise = sendEmail({
      to: email,
      subject: 'Welcome to Hyperion!',
      react: SubscribeConfirmation(),
    })

    await Promise.all([addSheetPromise, sendEmailPromise])
  } catch (e) {
    console.error(e)

    return {
      error: 'Failed to create the record.',
    }
  }
}

export async function createPartnershipEntity({
  name,
  companyName,
  email,
  partnershipInterests,
  message,
  pathname,
}: {
  name: string
  companyName: string
  email: string
  partnershipInterests: string
  message: string
  pathname: string
}) {
  const date = new Date().toISOString()

  try {
    await googleSheet.loadInfo()
    const sheet = googleSheet.sheetsByIndex[1]

    const addSheetPromise = sheet.addRow({
      date,
      email,
      pathname,
      name,
      company_name: companyName,
      partnership_interests: partnershipInterests,
      message,
    })

    const sendEmailPromise = sendEmail({
      to: email,
      subject: 'Partnering with Hyperion',
      react: PartnershipConfirmation({ name }),
    })

    await Promise.all([addSheetPromise, sendEmailPromise])
  } catch (e) {
    console.error(e)

    return {
      error: 'Failed to create the record.',
    }
  }
}
