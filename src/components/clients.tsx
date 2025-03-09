"use client";

import React, { useRef} from 'react'
import { motion, useInView } from 'framer-motion'; 

import { clients } from '@/constants'; 
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from '@/lib/gsap-loader';

const Clients = () => {

  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });

  useGSAP(() => {

    ScrollTrigger.create({
      trigger: ".promo",
      start: "top bottom",
      end: "bottom center",
      pin: ".clients",
      pinSpacing: false
    })

  }, []) 

  return (
    <div className="pt-14 lg:pt-24 pb-10 clients px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32 mt-5 md:mt-12 flex flex-col">
      <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
      >
          <p className="text-accent text-sm md:text-base px-1">CLIENTS</p>
          <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-2xl md:text-3xl lg:text-5xl font-semibold mt-3 text-white"
          >
           We Partner with Leading Brands
          </motion.p>
      </motion.div>

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
