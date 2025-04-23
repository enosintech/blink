"use client";

import { redBullMotion } from '@/constants';
import Image from 'next/image';
import React from 'react'

const PassionExplore = () => {
  return (
    <div className='bg-gradient-to-b from-black via-black to-transparent rounded-t-xl pt-20 flex flex-col items-center px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32'>
        <div className='w-full mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
          {redBullMotion.map((item, index, array) => (
            <div
              key={item.id}
              className={`w-full h-[500px] sm:h-[800px] md:h-[500px] lg:h-[600px] xl:h-[450px] 2xl:h-[70vh] rounded-lg relative overflow-hidden`}
            >
              <Image src={item.image} alt="motion images" fill className='object-cover' />
            </div>
          ))}
        </div>
    </div>
  )
}

export default PassionExplore;