import { useLayoutEffect, useState } from 'react'

export const useWindowScroll = () => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })

  const handleScroll = () => {
    setScrollPosition({ x: window.scrollX, y: window.scrollY })
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollPosition
}
