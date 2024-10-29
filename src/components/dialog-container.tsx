'use client'

import { useClaimDialogStore } from '@/hooks/useClaimDialogStore'
import { ClaimRewardDialog } from './claim-reward-dialog'
import { useLenis } from 'lenis/react'

export const DialogContainer = () => {
  const lines = useLenis()
  const { close: closeClaimDialog } = useClaimDialogStore()
  const isClaimDialogOpen = useClaimDialogStore((state) => state.isOpen)

  if (isClaimDialogOpen) {
    return (
      <ClaimRewardDialog
        open={isClaimDialogOpen}
        onOpenChange={() => {
          lines?.start()
          closeClaimDialog()
        }}
      />
    )
  }

  return null
}
