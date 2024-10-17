import { useBreakpoint } from './useBreakpoint'

export const useIsMobile = () => useBreakpoint() === 'sm'
