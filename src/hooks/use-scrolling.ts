import { useEffect, useState } from 'react'

const useScrolling = (): boolean => {
  const [scrolling, setScrolling] = useState<boolean>(false)

  useEffect(() => {
    let scrollingTimeout: NodeJS.Timeout

    const handleScrollEnd = () => {
      setScrolling(false)
    }

    const handleScroll = () => {
      setScrolling(true)
      clearTimeout(scrollingTimeout)
      scrollingTimeout = setTimeout(() => handleScrollEnd(), 200)
    }

    window.addEventListener('scroll', handleScroll, false)

    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  }, [])

  return scrolling
}

export default useScrolling
