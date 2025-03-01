"use client";

import { useLoadingValue } from '@/context/loadingValueContext';
import { useViewportHeight } from '@/hooks/useVIewportHeight';
import { gsap } from '@/lib/gsap-loader';
import { useGSAP } from '@gsap/react';
import { Link } from "next-view-transitions";
import React from 'react';

const Hero = () => {

    const height = useViewportHeight();

    const { loadingValue } = useLoadingValue();

    useGSAP(() => {

      if(loadingValue === 100) {
        const tl = gsap.timeline();

        tl.delay(0.5)

        tl.to(".main-text", {
          duration: 2.5,
          opacity: 1
        })

        tl.to(".description-text", {
          duration: 2.5,
          opacity: 1
        }, "<")

        tl.to(".action-button", {
          duration: 2.5,
          opacity: 1
        }, "<")

        tl.to(".gradient", {
          opacity: 0.65,
          duration: 2.5,
        }, "<")

      }
    }, [loadingValue])

  return (
    <div style={{ height: height ? height : "100svh" }} className="pt-20 w-full hero">
      <div className="relative w-full h-full px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32 flex flex-col pt-10 md:pt-0 justify-center">
        <div className="border-4 flex justify-center py-[1px] border-white w-7 h-14 lg:w-8 lg:h-16 rounded-full bottom-14 lg:bottom-10 right-10 sm:right-14 md:right-20 lg:right-24 xl:right-32 absolute main-text opacity-0">
          <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-white animate-prompt-scroll transition-all"></div>
        </div>
        <div className='flex flex-col gap-8 md:gap-10 lg:gap-12 -translate-y-20 md:translate-y-0'>
            <div className='flex flex-col gap-3 md:gap-6'>
                <p className='font-extrabold lg:font-bold text-4xl max-w-[75%] sm:max-w-full md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl main-text opacity-0'>WE DESIRE TO CREATE</p>
                <p className='font-normal text-sm sm:text-base md:text-lg lg:text-2xl 2xl:text-3xl lg:max-w-[85%] max-w-[95%] description-text opacity-0'>We are an innovative marketing firm that comprises of an exceptional team of markerting and industry experts built to help our clients achieve profitable growth through creating, implementing and sustaining marketing strategies</p>
            </div>
            <Link href="/work" className='grid place-items-center rounded-full px-4 py-2 border-accent pointer:hover:bg-accent pointer:active:opacity-65 transition-all border w-fit actionable action-button opacity-0'>
                <p className='font-semibold text-sm md:text-base lg:text-lg 2xl:text-xl text-white'>See Our Work</p> 
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero;
