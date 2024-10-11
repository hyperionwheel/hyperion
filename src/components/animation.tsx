import Lottie, { LottieProps } from 'react-lottie'

export const Animation = ({
  data,
  className,
  loop = true,
  autoplay = true,
  width = 64,
  height = 64,
  eventListeners,
}: {
  data: object
  loop?: boolean
  autoplay?: boolean
  width?: number | string
  height?: number | string
  eventListeners?: LottieProps['eventListeners']
  className?: string
}) => {
  return (
    <div className={className}>
      <Lottie
        options={{ animationData: data, loop, autoplay }}
        width={width}
        height={height}
        style={{ width, height }}
        eventListeners={eventListeners}
      />
    </div>
  )
}
