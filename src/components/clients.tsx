"use client";

import React from 'react'
import { motion } from 'framer-motion'; 

import { clients } from '@/constants'; 
import Image from 'next/image';

const Clients = () => {
  return (
    <div className="pt-14 lg:pt-24 pb-10 px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32 mt-5 md:mt-12 flex items-center flex-col">
      <p className="text-accent text-xl md:text-3xl lg:text-4xl text-center font-semibold">700+ TRUSTED CLIENTS</p>

      <div className="relative w-full mt-4 overflow-hidden client-carousel h-[350px] md:h-[450px] flex items-center">

        <motion.div
          className="flex space-x-10 w-max"
          animate={{ x: ["0%", "-50%"] }} 
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 50, 
          }}
        >
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div key={index} className="size-40 sm:size-52 md:size-56 lg:size-60 xl:size-72 relative flex-shrink-0">
                <Image fill alt="client-logo" className='object-contain overflow-visible' src={client.image} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Clients;
