import { create } from 'zustand'

type HomeAnimationState = {
  isLogoAnimated: boolean
  setLogoAnimated: () => void
}

export const useHomeAnimationStore = create<HomeAnimationState>()((set) => ({
  isLogoAnimated: false,
  setLogoAnimated: () => set((state) => ({ ...state, isLogoAnimated: true })),
}))
