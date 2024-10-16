'use client'

import { useState } from 'react'
import { Aside } from './aside'
import { Header } from './header'

type HeadroomProps = {
  variant: 'default' | 'hero'
}

export const Headroom = ({ variant }: HeadroomProps) => {
  const [isAsideVisible, setAsideVisible] = useState<boolean>(false)

  const toggleAsideVisibility = () => setAsideVisible((prev) => !prev)

  return (
    <>
      <Header variant={variant} isAsideVisible={isAsideVisible} onAsideToggle={toggleAsideVisibility} />
      <Aside open={isAsideVisible} />
    </>
  )
}
