import { Animation } from '@/components/animation'
import animationData from './data.json'

export const AnimatedLogo = ({ className }: { className?: string }) => (
  <Animation data={animationData} width={84} height={84} loop={false} />
)
