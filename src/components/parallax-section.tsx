'use client'

import { getUploadCareUrl } from '@/lib/uploadcare'
import Image from 'next/image'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'

export const ParallaxSection = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <section className="mx-auto">
      <div className="py-2.5 md:py-4">
        <ParallaxBanner className="h-[600px] relative">
          <ParallaxBannerLayer speed={-10}>
            <Image fill src={getUploadCareUrl({ src: imageSrc })} alt="Image" />
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </div>
    </section>
  )
}
