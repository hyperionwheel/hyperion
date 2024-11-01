'use client'

import { useClaimDialogStore } from '@/hooks/useClaimDialogStore'
import { useLenis } from 'lenis/react'
import dynamic from 'next/dynamic'

const ClaimRewardDialog = dynamic(() => import('./claim-reward-dialog').then((mod) => mod.ClaimRewardDialog))

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
