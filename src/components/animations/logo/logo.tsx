import { Animation } from '@/components/animation'
import animationData from './data.json'

export const AnimatedLogo = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <Animation
      data={animationData}
      width={180}
      height={180}
      loop={false}
      eventListeners={[
        {
          eventName: 'complete',
          callback: onComplete,
        },
      ]}
    />
  )
}
