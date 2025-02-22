"use client";

import { services } from '@/constants';
import { Tilt } from 'react-tilt';
import React from 'react'

const Services = () => {

  return (
    <div className='w-full pt-14 lg:pt-24 pb-10 px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32'>
        <div>
            <p className='text-accent text-sm md:text-base px-1'>SERVICES</p>
            <p className="text-2xl md:text-3xl lg:text-5xl font-semibold mt-3 text-white">Our Services Cover a Wide Range of Areas</p>
        </div>

        <div className='w-full h-[60vh] sm:h-[75vh] md:h-[100vh] lg:h-[60vh] xl:h-[80vh] mt-10 lg:flex-row flex-col-reverse flex gap-2 md:gap-4'>
            <div className="lg:w-[70%] w-full h-[60%] lg:h-full grid grid-row-2 grid-cols-3 gap-2 md:gap-4">
                {services.map((service, idx) => (
                    <Tilt key={idx}>
                        <div className='w-full h-full bg-black border-accent rounded-lg border-2'></div>
                    </Tilt>
                ))}
            </div>
            <div className='w-full lg:w-[30%] h-[40%] lg:h-full bg-black border-accent border-2 rounded-lg'></div>
        </div>
    </div>
  )
}

export default Services;
