'use client'

export const ToggleButton = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu?: () => void }) => (
  <button
    type="button"
    onClick={toggleMenu}
    className="toggle group w-[52px] h-[52px] relative z-[30] focus:outline-none md:hidden"
  >
    <div
      className="bg-current w-[52px] h-0.25 rounded absolute transition-transform duration-300 ease-in-out"
      style={{
        transform: isOpen ? 'rotate(45deg) translateY(0px)' : 'translateY(-10px)',
      }}
    />
    <div
      className={`w-[52px] h-0.25 bg-current rounded absolute transition-opacity duration-300 ease-in-out ${
        isOpen ? 'opacity-0' : 'opacity-100'
      }`}
    />
    <div
      className="w-[52px] h-0.25 bg-current rounded absolute transition-transform duration-300 ease-in-out"
      style={{
        transform: isOpen ? 'rotate(-45deg) translateY(0px)' : 'translateY(10px)',
      }}
    />
  </button>
)
