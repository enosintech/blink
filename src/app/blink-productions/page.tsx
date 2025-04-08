"use client";

import SectionFooter from '@/components/section-footer'
import React from 'react'
import { videofolio } from '@/constants'
import { useGSAP } from '@gsap/react';
import { noTriggerToAnimations } from '@/lib/animations';
import { useLoadingValue } from '@/context/loadingValueContext';

const BlinkProductions = () => {

  const { loadingValue } = useLoadingValue();

  useGSAP(() => {
      if(loadingValue === 100) {
          noTriggerToAnimations(".productions-screen", {
          duration: 2.5,
          opacity: 1,
          delay: 0.5
          })
      }
  }, [loadingValue])

  return (
    <>
      <div className='pt-24 sm:px-14 md:px-20 lg:px-24 xl:px-32 px-10 w-full productions-screen opacity-0'>
          <div className="flex flex-col-reverse lg:flex-row justify-between w-full pb-10 pt-2">
            <div className=''>
              <p className='text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium text-justify'>
                Lights. Camera. Disruption... Where storytelling meets strategy, creativity collides with AI, and every frame is crafted to leave a mark. Forget the ordinary, we’re here to challenge conventions and create narratives that resonate. This is storytelling without limits. This is Blink Productions.
              </p>
            </div>
          </div>
          <div className="mt-4 w-full">
            <p className="font-semibold text-sm lg:text-base mb-3">Intro</p>
            <div className="w-full h-[280px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[90svh] overflow-hidden rounded-lg border border-accent relative">
              <video controls playsInline preload='metadata' className='w-full h-full object-cover'>
                <source src="/videos/productions.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className='mt-14 w-full'>
            <p className='font-bold text-lg sm:text-xl lg:text-2xl'>Videofolio</p>
            <div className='w-full mt-4 flex flex-wrap justify-between gap-3 relative'>
              {videofolio.map((iframe) => (
                <div key={iframe.name} className='w-full md:w-[48%] xl:w-[32%] py-4 pt-3 px-4 bg-black border border-accent rounded-md'>
                  <div data-lenis-prevent  className='overflow-hidden w-full h-40 sm:h-56 lg:h-72 rounded-md bg-black'>
                    <iframe data-lenis-prevent className='w-full h-full object-contain' src={iframe.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  </div>
                  <p className='text-accent mt-2 font-bold text-sm lg:text-xl'>{iframe.name}</p>
                </div>
              ))}
            </div>
          </div>
      </div>
      <SectionFooter />
    </>
  )
}

export default BlinkProductions
