'use client'

import { useState } from 'react'
import { Aside } from './aside'
import { Header } from './header'

export const Headroom = () => {
  const [isAsideVisible, setAsideVisible] = useState<boolean>(false)

  const toggleAsideVisibility = () => setAsideVisible((prev) => !prev)

  return (
    <>
      <Header isAsideVisible={isAsideVisible} onAsideToggle={toggleAsideVisibility} />
      <Aside open={isAsideVisible} />
    </>
  )
}
