import { Animation } from '@/components/animation'
import animationData from './data.json'

export const AnimatedLogo = () => {
  return <Animation data={animationData} width={150} height={150} loop={false} />
}
