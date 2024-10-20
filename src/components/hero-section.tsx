'use client'

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import { Typography } from './ui/typography'
import { getUploadCareUrl } from '@/lib/uploadcare'
import Image from 'next/image'

type HeroSectionProps = {
  format: 'image' | 'video'
  title?: string
  description?: string
  source: string
}

export const HeroSection = ({ title, description, format, source }: HeroSectionProps) => {
  return (
    <section>
      <ParallaxBanner className="relative h-[100svh] text-white flex items-end bg-primary-main overflow-hidden mb-30">
        <ParallaxBannerLayer speed={-12}>
          {format === 'video' && (
            <video playsInline autoPlay loop muted preload="meta" className="absolute w-full h-full top-0 object-cover">
              <source src={source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {format === 'image' && (
            <Image fill src={getUploadCareUrl({ src: source })} alt="Image" style={{ objectFit: 'cover' }} />
          )}
        </ParallaxBannerLayer>
        <div className="relative 2xl:container mx-auto z-[1] px-1.25 pb-3 w-full md:pb-5 md:px-5">
          <Typography variant="Sharp Grotesk H1" className=" text-white max-w-[90%] md:max-w-[1020px] ">
            {title}
          </Typography>
          {description && (
            <Typography variant="Sharp Grotesk Body 1" className="max-w-[555px] mt-3">
              {description}
            </Typography>
          )}
        </div>
        <div className="absolute inset-0 bg-hero-gradient" />
      </ParallaxBanner>
    </section>
  )
}
