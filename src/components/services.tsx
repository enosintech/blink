"use client";

import { services } from '@/constants';
import { Tilt } from 'react-tilt';
import React, { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from "framer-motion";

const Services = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { once: true });

    const nextService = () => {
        setActiveIndex((prev) => (prev + 1) % services.length);
    };

    const prevService = () => {
        setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    };

  return (
    <div className='w-full pt-5 md:pt-14 lg:pt-24 pb-10 px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32'>

        <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <p className="text-accent text-sm md:text-base px-1">SERVICES</p>
            <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-5xl font-semibold mt-3 text-white"
            >
            Our Services Cover a Wide Range of Areas
            </motion.p>
        </motion.div>

        <div className='w-full h-[600px]  sm:h-[650px] md:h-[750px] lg:h-[600px] xl:h-[650px] 2xl:h-[90vh] mt-10 lg:flex-row flex-col-reverse flex gap-2 md:gap-4'>
            <div className="lg:w-[70%] w-full h-[45%] sm:h-[60%] lg:h-full grid grid-row-2 grid-cols-3 gap-2 md:gap-4">
                {services.map((service, idx) => (
                    <Tilt key={service.name}>
                        <div className={`w-full h-full ${activeIndex === idx ? "bg-accent text-black border-none" : "bg-black border-accent border-2"} transition-all rounded-lg border-2 flex flex-col p-2 xl:p-3 justify-between`} onClick={() => setActiveIndex(idx)}>
                            <div className="relative size-8 sm:size-10 md:size-14 xl:size-16">
                                <Image src={service.icon} alt="service icon" fill className={`object-cover ${activeIndex === idx ? "" : "invert"}`} />
                            </div>
                            <p className="font-bold tracking-tight text-[10px] leading-[1rem] sm:text-sm md:text-base xl:text-lg 2xl:text-xl">{service.name}</p>
                        </div>
                    </Tilt>
                ))}
            </div>
            <div className='w-full lg:w-[30%] h-[55%] sm:h-[40%] lg:h-full bg-black border-accent border-2 rounded-lg relative pt-6 lg:pt-4 p-3 px-4'>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={services[activeIndex].name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="space-y-2 md:space-y-4 w-full h-full flex flex-col relative"
                    >
                        <div className="space-y-2 md:space-y-4"> 
                            <div className="relative size-10 md:size-14 xl:size-16">
                                <Image src={services[activeIndex].icon} alt="service icon" fill className="object-cover invert" />
                            </div>

                            <p className="font-bold tracking-tight text-xl md:size-2xl 2xl:text-3xl">{services[activeIndex].name}</p>
                        </div>

                        <p className="text-white/70 mt-5 font-medium text-sm md:text-base 2xl:text-lg">{services[activeIndex].description}</p>

                        <Link href={"/services"} className="mt-3 actionable">
                            <p className="text-accent text-sm md:text-base xl:text-lg font-bold pointer:hover:opacity-80 pointer:active:opacity-60">Learn More</p>
                        </Link>
                    </motion.div>
                </AnimatePresence>


                <div className='absolute bottom-4 right-4 flex items-center gap-3'>
                    <div onClick={prevService} className='bg-neutral-900 grid place-items-center rounded-full p-2 actionable pointer:hover:opacity-80 pointer:active:opacity-60 cursor-pointer'>
                        <ChevronLeft className='text-accent size-6 xl:size-8' />
                    </div>
                    <div onClick={nextService} className='bg-neutral-900 grid place-items-center rounded-full p-2 actionable pointer:hover:opacity-80 pointer:active:opacity-60 cursor-pointer'>
                        <ChevronRight className='text-accent size-6 xl:size-8' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services;


