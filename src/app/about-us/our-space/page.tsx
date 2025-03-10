"use client";

import { officeImgs } from '@/constants';
import { useViewportHeight } from '@/hooks/useVIewportHeight';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

const OurSpace = () => {
    const height = useViewportHeight();

    const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    thumbnailRefs.current[activeIndex]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });

    if (officeImgs[activeIndex].type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [activeIndex]);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? officeImgs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === officeImgs.length - 1 ? 0 : prev + 1));
  };

  const renderMedia = () => {
    const currentItem = officeImgs[activeIndex];
    
    if (currentItem.type === 'video') {
      return (
        <video
          ref={videoRef}
          src={currentItem.src}
          className="w-full h-full rounded-t-lg object-contain bg-black"
          controls
          playsInline
          muted
        />
      );
    }
    
    return (
      <Image
        src={currentItem.src}
        alt={currentItem.description}
        className="object-contain rounded-t-lg bg-black w-full h-full"
        fill
      />
    );
  };
  
    return (
      <div className="w-full px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32 pt-20" style={{height: height ? height : "100svh"}}>
        <div className="w-full h-full">
          <div className='w-full h-[80%] relative rounded-t-lg overflow-hidden'>
            <div className="w-full h-full relative rounded-t-lg">
              {renderMedia()}
            </div>

            <button 
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black border border-accent p-2 rounded-full pointer:hover:opacity-80 pointer:active:opacity-60 transition-colors"
          >
            <ChevronLeft className="w-8 h-8 text-accent" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black border border-accent p-2 rounded-full pointer:hover:opacity-80 pointer:active:opacity-60 transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-accent" />
          </button>

          <div className="absolute top-0 left-0 right-0 p-4 bg-black/50 text-white">
            <p className="text-base md:text-lg font-bold">{officeImgs[activeIndex].description}</p>
            <p className="text-sm mt-1 font-light opacity-75">
              {activeIndex + 1} / {officeImgs.length}
            </p>
          </div>

          </div>

          <div className='w-full h-[20%] rounded-b-lg bg-primary flex overflow-x-auto'>
        {officeImgs.map((item, index) => (
            <div
              key={item.id}
              ref={el => {thumbnailRefs.current[index] = el}}
              onClick={() => setActiveIndex(index)}
              className={`h-full min-w-[200px] cursor-pointer transition-all duration-300 overflow-hidden ${
                index === activeIndex ? 'ring-2 ring-accent opacity-100' : 'opacity-50 hover:opacity-75'
              }`}
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                />
              ) : (
                <div className='w-full h-full relative'>
                  <Image
                    src={item.src}
                    alt={item.description}
                    className="object-cover"
                    fill
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        </div> 
      </div>
    )
}

export default OurSpace
