"use client";

import { useViewportHeight } from '@/hooks/useVIewportHeight';
import { triggerToAnimations } from '@/lib/animations';
import { gsap } from '@/lib/gsap-loader';
import { useGSAP } from '@gsap/react';
import React from 'react'

const PassionBanner = () => {

    const height = useViewportHeight();

    useGSAP(() => {

        const banners = gsap.utils.toArray(".passion-banner") as HTMLElement[];

        banners.forEach((banner) => {
            triggerToAnimations(banner, {
                opacity: 1,
                y: 0,
                duration: 0.5
            }, {
                trigger: banner,
                start: "top 80%",
                toggleActions: "play none none reverse",
            })
        })

    }, [])

  return (
    <div className='px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32 w-full flex flex-col items-center gap-20 text-center pt-32 pb-14'>
        <div className='flex flex-col items-center passion-banner translate-y-20 opacity-0'>
            <p className='text-lg md:text-xl xl:text-2xl font-extrabold'>FLAVOUR</p>
            <p className='font-medium text-sm md:text-base xl:text-lg mt-2 max-w-[90%] md:max-w-[80%] xl:max-w-[70%] text-center'>It’s all about choice. Every Red Bull Edition flavor is different, but all contain the same functional ingredients as the original Red Bull Energy Drink.</p>
        </div>
        <div className='flex flex-col items-center passion-banner translate-y-20 opacity-0'>
            <p className='text-lg md:text-xl xl:text-2xl font-extrabold'>SEASONAL</p>
            <p className='font-medium text-sm md:text-base xl:text-lg mt-2 max-w-[90%] md:max-w-[80%] xl:max-w-[70%] text-center'>New Red Bull Energy Drink flavors are released seasonally. These limited-time flavors are available for a short period. Do not miss the chance to try them while they last.</p>
        </div>
        <div className='flex flex-col items-center passion-banner translate-y-20 opacity-0'>
            <p className='text-lg md:text-xl xl:text-2xl font-extrabold'>SUGARFREE</p>
            <p className='font-medium text-sm md:text-base xl:text-lg mt-2 max-w-[90%] md:max-w-[80%] xl:max-w-[70%] text-center'>Some Red Bull Editions are also available without sugars. Same wiiings and same fantastic flavors, just sugar-free.</p>
        </div>
    </div>
  )
}

export default PassionBanner;