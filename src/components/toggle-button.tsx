'use client'

import { cn } from '@/lib/utils'

export const ToggleButton = ({
  isOpen,
  toggleMenu,
  className,
}: {
  isOpen: boolean
  toggleMenu: () => void
  className?: string
}) => (
  <button
    type="button"
    onClick={toggleMenu}
    className={cn('toggle group w-[52px] h-[52px] relative z-[30] focus:outline-none md:hidden', className)}
  >
    <div
      className="w-[52px] h-0.25 bg-white rounded absolute transition-transform duration-300 ease-in-out"
      style={{
        transform: isOpen ? 'rotate(45deg) translateY(0px)' : 'translateY(-10px)',
      }}
    />
    <div
      className={`w-[52px] h-0.25 bg-white rounded absolute transition-opacity duration-300 ease-in-out ${
        isOpen ? 'opacity-0' : 'opacity-100'
      }`}
    />
    <div
      className="w-[52px] h-0.25 bg-white rounded absolute transition-transform duration-300 ease-in-out"
      style={{
        transform: isOpen ? 'rotate(-45deg) translateY(0px)' : 'translateY(10px)',
      }}
    />
  </button>
)
