import { getUploadCareUrl } from '@/lib/uploadcare'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export const TextImageSection = ({
  title,
  description,
  imageSrc,
  overlay = true,
}: {
  title: string
  description: string
  imageSrc: string
  overlay?: boolean
}) => {
  const image = getUploadCareUrl({ src: imageSrc })

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
      <div className="relative py-2.5 px-1.25 md:py-6 md:px-5">
        {!overlay && Title}
        <div className={cn('flex flex-col gap-2 lg:flex-row', overlay ? '' : 'lg:mt-3')}>
          <div className="flex-1">
            <div className={overlay ? 'xl:absolute' : 'xl:relative'}>
              {overlay && Title}
              <p className="text-base mt-3 max-w-full md:text-xl lg:max-w-[555px]">{description}</p>
            </div>
          </div>
          <div className="mt-3 lg:mt-0 flex justify-end lg:max-w-[650px] xl:max-w-[787px]">
            <Image className="w-full " src={image} alt={title} width={787} height={460} />
          </div>
        </div>
      </div>
    </section>
  )
}
