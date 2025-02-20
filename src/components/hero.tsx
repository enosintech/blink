"use client";

import { useViewportHeight } from '@/hooks/useVIewportHeight';
import { ArrowUpRight} from "lucide-react";
import React from 'react'

const Hero = () => {

    const height = useViewportHeight();

  return (
    <div style={{ height: height ? height : "100svh" }} className="pt-20 w-full">
      <div className="w-full h-full px-32 flex flex-col justify-center">
        <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-6'>
                <p className='font-bold text-7xl'>WE DESIRE TO CREATE</p>
                <p className='font-normal text-xl max-w-[75%]'>We are an innovative marketing firm that comprises of an exceptional team of markerting and industry experts built to help our clients achieve profitable growth through creating, implementing and sustaining marketing strategies</p>
            </div>
            <div className='grid place-items-center rounded-full px-4 py-2 border-accent border w-fit'>
                <p className='font-medium text-lg text-white'>View Projects</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
