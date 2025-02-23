"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Promo = () => {

    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { once: true });
    
  return (
    <div className="w-full pt-14 lg:pt-24 pb-10 px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32">

        <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <p className="text-accent text-sm md:text-base px-1">PROMO</p>
            <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-5xl font-semibold mt-3 text-white"
            >
                Three Years of Blink
            </motion.p>
        </motion.div>

        <div className="w-full h-[280px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-lg bg-neutral-950 p-2 mt-10">
            <div className="w-full h-full rounded-md bg-black overflow-hidden relative">
                <video preload="metadata" className="w-full h-full object-cover bg-black" muted={false} controls>
                    <source src="/videos/showreel.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
      
    </div>
  )
}

export default Promo;