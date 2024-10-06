'use client'

import { getUploadCareUrl } from '@/lib/uploadcare'
import Image from 'next/image'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'

export const ParallaxSection = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <section className="mx-auto">
      <div className="py-2.5 md:py-4">
        <ParallaxBanner className="h-[480px] md:h-[600px] relative">
          <ParallaxBannerLayer expanded={false} speed={-10}>
            <Image fill src={getUploadCareUrl({ src: imageSrc })} alt="Image" style={{ objectFit: 'cover' }} />
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </div>
    </section>
  )
}
