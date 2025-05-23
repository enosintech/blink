"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const canImages = [
  "/images/america.webp",
  "/images/antman.webp",
  "/images/black-panther.webp",
  "/images/black-widow.webp",
  "/images/falcon.webp",
  "/images/hawkeye.webp",
  "/images/hulk.webp",
  "/images/ironman.webp",
  "/images/loki.webp",
  "/images/spiderman.webp",
  "/images/strange.webp",
  "/images/thanos.webp",
  "/images/thor.webp",
]

const PassionHero = () => {

  const [activeCan, setActiveCan] = useState(0);

  const totalCans = canImages.length;
  
  const handleNext = () => {
    setActiveCan((prev) => (prev + 1) % totalCans);
  };
  
  const handlePrev = () => {
    setActiveCan((prev) => (prev - 1 + totalCans) % totalCans);
  };

  const getCanStyle = (index: number) => {
    let relativePosition = index - activeCan;
  
    if (relativePosition > totalCans / 2) {
      relativePosition -= totalCans;
    } else if (relativePosition < -totalCans / 2) {
      relativePosition += totalCans;
    }
  
    const xOffset = relativePosition * 180;
    const yOffset = Math.abs(relativePosition) * 40;
    const rotation = relativePosition * 3;
    const scale = relativePosition === 0 ? 1.2 : 1;
  
    const isAtEdge = Math.abs(relativePosition) === Math.floor(totalCans / 2);
    const opacity = isAtEdge ? 0 : 1;
  
    return {
      x: xOffset,
      y: relativePosition === 0 ? 40 : yOffset,
      rotate: rotation,
      scale: scale,
      zIndex: totalCans - Math.abs(relativePosition),
      opacity,
    };
  };
  

  useEffect(() => {
    console.log(activeCan)
  }, [activeCan])

  return (
    <div className="bg-gradient-to-b pt-14 flex flex-col items-center from-transparent via-5% to-[99%] via-black to-transparent w-full px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32">
      <p className="font-bold text-neutral-400 text-sm md:text-base">FUEL THE LEGEND IN YOU</p>
      <div className="mt-5 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center">
        <p className="">Red Bull</p>
        <p className="">Avengers Assemble Editions</p>
      </div>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center mt-5 md:max-w-[80%] lg:max-w-[60%]">
        Fuse classic energy with bold, heroic flavours. Choose your can. Power up.
      </p>
    
      <div className="w-full mt-20 h-[550px] relative">
        <div className="absolute left-1/2 bottom-20 transform -translate-x-1/2 w-full">
          {canImages.map((image, index) => (
            <motion.div
              key={index}
              className={`absolute w-72 lg:h-[30rem] h-[28rem] rounded-lg`}
              initial={getCanStyle(index)}
              animate={getCanStyle(index)}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 1
              }}
              style={{
                left: "50%",
                marginLeft: "-144px",
                bottom: "0",
                transformOrigin: "bottom center",
                willChange: "opacity, transform" 
              }}
            >
                <Image fill src={image} alt={"superhero-can"} className="object-cover" />
            </motion.div>
          ))}
        </div>
        
        <div className="absolute -top-[8%] sm:top-0 lg:top-10 left-0 right-0 flex justify-center gap-[12rem] md:gap-[32rem] xl:gap-[60rem] z-50">
          <button 
            onClick={handlePrev}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={handleNext}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassionHero;