"use client";

import React from 'react'

const PassionExplore = () => {
  return (
    <div className='bg-gradient-to-b from-black via-black to-transparent rounded-t-xl pt-40 flex flex-col items-center px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32'>
        <p className='font-semibold text-2xl sm:text-3xl md:text-4xl'>Explore Redbull x Avengers</p>
        <div className='w-full mt-5 grid grid-rows-6 grid-cols-1 sm:grid-rows-4 sm:grid-cols-2 lg:grid-rows-2 gap-2 lg:grid-cols-4'>
            <div className='h-[300px] lg:h-[350px] rounded-lg bg-green-500 row-span-1 col-span-1 sm:col-span-2 flex items-center justify-center'>
                <p className='font-bold text-red-600'>motion assets come here</p>
            </div>
            <div className='rounded-lg bg-green-500 row-span-1 col-span-1'></div>
            <div className='rounded-lg bg-green-500 row-span-1 col-span-1'></div>
            <div className='rounded-lg bg-green-500 row-span-1 col-span-1'></div>
            <div className='rounded-lg bg-green-500 row-span-1 col-span-1'></div>
            <div className='rounded-lg bg-green-500 row-span-1 col-span-1 sm:col-span-2'></div>
        </div>
    </div>
  )
}

export default PassionExplore;