'use client'

import { useTranslations } from 'next-intl'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'

export const HeroSection = () => {
  const t = useTranslations('home')

  return (
    <section>
      <ParallaxBanner className="relative h-screen h-[100svh] text-white flex items-end bg-primary-main overflow-hidden mb-30">
        <ParallaxBannerLayer speed={-10}>
          <video autoPlay loop muted preload="meta" className="absolute w-full h-full top-0 object-cover">
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </ParallaxBannerLayer>
        <div className="relative 2xl:container mx-auto z-[1] px-1.25 pb-3 w-full md:pb-5 md:px-5">
          <h1 className="text-[34px] leading-[44px] text-white max-w-[90%] font-medium md:leading-[110px] md:text-[86px] md:max-w-[900px] ">
            {t('hero_title')}
          </h1>
        </div>
        <div className="absolute inset-0 bg-hero-gradient" />
      </ParallaxBanner>
    </section>
  )
}
