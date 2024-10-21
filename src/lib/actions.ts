'use server'

import { googleSheet } from './google-sheet'

export async function createSubscribeEntity({ email, pathname }: { email: string; pathname: string }) {
  const date = new Date().toISOString()

  try {
    await googleSheet.loadInfo()
    const sheet = googleSheet.sheetsByIndex[0]
    await sheet.addRow({ date, email, pathname })
  } catch (e) {
    console.log(e)

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
    await sheet.addRow({
      date,
      email,
      pathname,
      name,
      company_name: companyName,
      partnership_interests: partnershipInterests,
      message,
    })
  } catch (e) {
    console.log(e)

    return {
      error: 'Failed to create the record.',
    }
  }
}
