"use client";

import { gsap } from '@/lib/gsap-loader';
import { useGSAP } from '@gsap/react';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { motion } from "framer-motion";
import { useLoadingValue } from '@/context/loadingValueContext';
import { noTriggerToAnimations } from '@/lib/animations';

const AboutUsNav = () => {

    const { loadingValue } = useLoadingValue();

    const [ activeIndex, setActiveIndex ] = useState(0)

    const aboutBlink = ["Marketing is war. We don't play defense, we conquer. At Blink, we don't just market, we strategize, disrupt and dominate. Forget marketing as you know it. This is Blink. Victory is the only option.", "At Blink, we aim to lead the way as a Smart Agency. By harnessing the power of AI, we will drive efficiency, scalability, sustainability and productivity, revolutionizing the way we work and deliver exceptional results for our clients."]

    useGSAP(() => {

        gsap.to(".gradient", {
            opacity: 0.65,
            duration: 1.0
        })

    }, [])
    
    useGSAP(() => {
        if(loadingValue === 100) {
            noTriggerToAnimations(".about-us-screen", {
            duration: 2.5,
            opacity: 1,
            delay: 0.5
            })
        }
    }, [loadingValue])
    
  return (
    <div className="pt-24 px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32 w-full flex flex-col justify-between about-us-screen opacity-0">
      <div className="w-full mt-10 py-1 flex flex-col">
        <div className="w-full flex lg:flex-row lg:items-center flex-col justify-between">
            <div className='flex flex-col'>
                <div className='flex items-center gap-3 text-base md:text-lg xl:text-xl font-medium'>
                    <div onClick={() => setActiveIndex(0)} className={`px-4 py-1 rounded-full border cursor-pointer select-none pointer:hover:opacity-80 pointer:active:opacity-60 transition-all ${activeIndex === 0 ? "border-white" : "border-transparent"}`}>
                        <p>About</p>
                    </div>
                    <div onClick={() => setActiveIndex(1)} className={`px-4 py-1 rounded-full border cursor-pointer select-none pointer:hover:opacity-80 pointer:active:opacity-60 transition-all ${activeIndex === 1 ? "border-white" : "border-transparent"}`}>
                        <p>Our Goal</p>
                    </div>
                </div>
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="mt-8 min-h-[250px] md:min-h-[150px] overflow-visible">
                        <p className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-medium md:text-justify">{aboutBlink[activeIndex]}</p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsNav;
