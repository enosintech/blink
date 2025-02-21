"use client";

import { useViewportHeight } from '@/hooks/useVIewportHeight';
import Link from 'next/link';
import React from 'react'

const Hero = () => {

    const height = useViewportHeight();

  return (
    <div style={{ height: height ? height : "100svh" }} className="pt-20 w-full">
      <div className="w-full h-full pl-10 sm:pl-14 md:pl-20 lg:pl-24 xl:pl-32 flex flex-col justify-center">
        <div className='flex flex-col gap-8 md:gap-10 lg:gap-12'>
            <div className='flex flex-col gap-3 md:gap-6'>
                <p className='font-bold text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5vw] 2xl:leading-none main-text opacity-0'>WE DESIRE TO CREATE</p>
                <p className='font-normal text-xs sm:text-base md:text-lg lg:text-2xl 2xl:text-[1.65vw] 2xl:leading-none lg:max-w-[75%] max-w-[85%] description-text opacity-0'>We are an innovative marketing firm that comprises of an exceptional team of markerting and industry experts built to help our clients achieve profitable growth through creating, implementing and sustaining marketing strategies</p>
            </div>
            <Link href="#" className='grid place-items-center rounded-full px-4 py-2 border-accent pointer:hover:bg-accent pointer:active:opacity-65 transition-all border w-fit actionable action-button opacity-0'>
                <p className='font-semibold text-sm md:text-base lg:text-lg 2xl:text-[1.15vw] text-white'>See Our Work</p> 
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
