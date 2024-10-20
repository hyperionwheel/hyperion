import Image from 'next/image'
import { Typography } from './ui/typography'
import { getUploadCareUrl } from '@/lib/uploadcare'

export const ImageTextCard = ({ imageSrc, description }: { imageSrc: string; description: string }) => {
  return (
    <div className="min-w-[calc(100%_-_40px)] mx-1.25 md:mx-0 md:h-auto md:w-auto">
      <Image
        className="min-h-[300px] md:min-h-auto"
        alt={description}
        src={getUploadCareUrl({ src: imageSrc })}
        width={672}
        height={446}
      />
      <Typography className="pt-2.5" variant="Sharp Grotesk Body 1">
        {description}
      </Typography>
    </div>
  )
}
