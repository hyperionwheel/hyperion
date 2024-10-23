import { getUploadCareUrl } from '@/lib/uploadcare'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export const TextImageSection = ({
  title,
  description,
  overlay = true,
  format = 'image',
  source,
}: {
  title: string
  description?: string
  overlay?: boolean
  format?: 'image' | 'video'
  source: string
}) => {
  const Title = (
    <h2
      className={cn(
        'font-medium',
        'text-[34px] md:text-[48px] xl:text-[86px]',
        'leading-[43px] md:leading-[60px] xl:leading-[110px]',
        {
          'lg:max-w-[500px]': overlay,
        },
        {
          'lg:max-w-[1000px]': !overlay,
        }
      )}
    >
      {title}
    </h2>
  )

  return (
    <section className="2xl:container mx-auto">
      <div className="relative py-5 px-1.25 md:py-8 md:px-5">
        {!overlay && Title}
        <div className={cn('flex flex-col gap-2 lg:flex-row', overlay ? '' : 'lg:mt-3')}>
          <div className="flex-1">
            <div className={overlay ? 'xl:absolute' : 'xl:relative'}>
              {overlay && Title}
              {description && (
                <p className="text-base mt-3 max-w-full lg:mt-0 md:text-xl lg:max-w-[555px]">{description}</p>
              )}
            </div>
          </div>
          <div className="mt-3 lg:mt-0 flex justify-end lg:max-w-[650px] xl:max-w-[787px]">
            {format === 'image' && (
              <Image className="w-full " src={getUploadCareUrl({ src: source })} alt={title} width={787} height={460} />
            )}
            {format === 'video' && (
              <video playsInline autoPlay loop muted preload="meta">
                <source src={source} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
