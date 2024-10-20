'use client'

import { useState } from 'react'
import { Aside } from './aside'
import { Header } from './header'

type HeadroomProps = {
  variant: 'transparent' | 'white'
  mobileCTA?: boolean
  animation?: boolean
}

export const Headroom = ({ variant, mobileCTA, animation }: HeadroomProps) => {
  const [isAsideVisible, setAsideVisible] = useState<boolean>(false)

  const toggleAsideVisibility = () => setAsideVisible((prev) => !prev)

  return (
    <>
      <Header
        variant={variant}
        animation={animation}
        mobileCTA={mobileCTA}
        isAsideVisible={isAsideVisible}
        onAsideToggle={toggleAsideVisibility}
      />
      <Aside open={isAsideVisible} />
    </>
  )
}
