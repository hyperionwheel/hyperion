'use client'

import { useClaimDialogStore } from '@/hooks/useClaimDialogStore'
import { Button } from './ui/button'
import { useLenis } from 'lenis/react'

export const ClaimOfferButton = ({ label }: { label: string }) => {
  const lines = useLenis()
  const { open: openClaimDialog } = useClaimDialogStore()

  return (
    <Button
      className="w-full md:w-auto mt-3"
      onClick={() => {
        lines?.stop()
        openClaimDialog()
      }}
    >
      {label}
    </Button>
  )
}
