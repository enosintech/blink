"use client";

import { work } from '@/constants';
import { gsap } from '@/lib/gsap-loader';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";

const WorkListing = ({ children, title, type, categories } : { children: ReactNode, title: string, categories: string[], type: string }) => {
    return (
      <div className='w-full h-full flex flex-col p-1'>
        <div className='w-full flex-1 rounded-md overflow-hidden relative'>

            <div className="absolute w-full h-[20%] md:h-[15%] z-10 flex items-center justify-center">
                <div className="text-accent text-[10px] leading-[1rem] sm:text-xs h-[60%] md:text-sm bg-neutral-950 px-3 md:px-4 rounded-full gap-2 md:gap-3 font-bold flex items-center justfiy-evenly">
                    <div className="actionable pointer:hover:opacity-80 pointer:active:opacity-60 cursor-pointer">
                        <p>VIEW ON BEHANCE</p>
                    </div>
                    <div className="w-0 h-[60%] border-[0.5px] border-accent"></div>
                    <div className="actionable pointer:hover:opacity-80 pointer:active:opacity-60 cursor-pointer">
                        <p>VIEW IN WORK</p>
                    </div>
                </div>
            </div>

            {children}
        </div>
        <div className='w-full h-fit min-h-[15%] flex flex-col justify-evenly'>
          <div className='w-full flex items-center mt-1'>
            <p className='text-white font-bold text-lg md:text-2xl px-1'>{title}</p>
          </div>
          <div className='w-full flex items-center flex-wrap gap-2 mt-2 mb-2'>
            <div className='border-accent border-2 text-accent rounded-full px-2 py-1'>
              <p className='font-semibold tracking-tighter text-xs truncate'>{type}</p>
            </div>
            {categories.map((cate) => (
              <div key={cate} className='border-white border-2 text-white rounded-full px-2 py-1'>
                <p className='font-semibold tracking-tighter text-[10px] leading-[1rem] truncate'>{cate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

const Work = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { once: true });

    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    // Minimum swipe distance required (in pixels)
    const minSwipeDistance = 50;

    const updateCarousel = (newIndex: number) => {
        const timeline = gsap.timeline();
        
        // Calculate indices for previous, current, and next cards
        const prevIndex = (newIndex - 1 + work.length) % work.length;
        const nextIndex = (newIndex + 1) % work.length;
    
        // Reset all cards
        cardsRef.current.forEach((card) => {
          if (card) {
            timeline.set(card, {
              x: 0,
              scale: 0.7,
              opacity: 0.5,
              zIndex: 0,
            }, 0);
          }
        });
    
        // Animate previous card
        if (cardsRef.current[prevIndex]) {
          timeline.to(cardsRef.current[prevIndex], {
            x: '-60%',
            scale: 0.8,
            opacity: 0.7,
            zIndex: 1,
            duration: 0.5,
            ease: 'power2.out',
          }, 0);
        }
    
        if (cardsRef.current[newIndex]) {
          timeline.to(cardsRef.current[newIndex], {
            x: 0,
            scale: 1,
            opacity: 1,
            zIndex: 2,
            duration: 0.5,
            ease: 'power2.out',
          }, 0);
        }
    
        if (cardsRef.current[nextIndex]) {
          timeline.to(cardsRef.current[nextIndex], {
            x: '60%',
            scale: 0.8,
            opacity: 0.7,
            zIndex: 1,
            duration: 0.5,
            ease: 'power2.out',
          }, 0);
        }
      };
    
      const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + work.length) % work.length);
      };
    
      const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % work.length);
      };

      const onTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
        setStartX(e.targetTouches[0].clientX);
        setIsDragging(true);
      };
    
      const onTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        
        setTouchEnd(e.targetTouches[0].clientX);
        
        const currentX = e.targetTouches[0].clientX;
        const dragDistance = currentX - startX;
        
        cardsRef.current.forEach((card, index) => {
          if (!card) return;
          
          if (index === currentIndex) {
            gsap.to(card, {
              x: dragDistance,
              duration: 0.1,
            });
          } else if (index === (currentIndex - 1 + work.length) % work.length) {
            gsap.to(card, {
              x: -window.innerWidth * 0.6 + dragDistance,
              duration: 0.1,
            });
          } else if (index === (currentIndex + 1) % work.length) {
            gsap.to(card, {
              x: window.innerWidth * 0.6 + dragDistance,
              duration: 0.1,
            });
          }
        });
      };
    
      const onTouchEnd = () => {
        setIsDragging(false);
    
        if (!touchStart || !touchEnd) return;
    
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
    
        if (isLeftSwipe) {
          handleNext();
        } else if (isRightSwipe) {
          handlePrevious();
        } else {
          updateCarousel(currentIndex);
        }
    
        setTouchStart(null);
        setTouchEnd(null);
      };

      useEffect(() => {
        updateCarousel(currentIndex);
      }, [currentIndex]);

  return (
    <div className='w-full pt-14 lg:pt-24 pb-10 px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32 flex items-center flex-col justify-center'>
        
        <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='w-full'
        >
            <p className="text-accent text-sm md:text-base px-1">OUR WORK</p>
            <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-5xl font-semibold mt-3 text-white"
            >
            Explore Our Recent Successful Work
            </motion.p>
        </motion.div>

        <div className='carousel rectangle relative w-full h-[80svh] sm:h-[100svh] mt-3 flex items-center justify-center overflow-hidden' ref={carouselRef} onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {work.map((item, index) => (
            <div
                key={item.name}
                ref={(el) => {(cardsRef.current[index] = el)}}
                className='carousel-card absolute w-[85%] sm:w-[75%] md:w-[65%] lg:w-[55%] 2xl:w-[45%] h-[65%] md:h-[75%] lg:h-[80%] rounded-xl bg-neutral-950 p-2 transform transition-transform duration-500'
            >
                <div className="w-full h-full bg-black rounded-md">
                    <WorkListing title={item.name} categories={item.categories} type={item.type}>
                        <div className='w-full h-full bg-black relative'>
                            {item.mediaType === "img" ?
                                <Image fill alt="portfolio image" src={item.media} className="object-cover" />    
                            : 
                            <video className='w-full h-full object-cover' autoPlay loop playsInline muted>
                                <source src={item.media} type='video/mp4' />
                            </video>
                            }
                        </div>
                    </WorkListing>
                </div>
            </div>
            ))}
        </div>

        <div className='carousel-buttons w-fit flex items-center gap-3 -translate-y-10'>
            <div
                onClick={handlePrevious}
                className='bg-neutral-900 grid place-items-center rounded-full p-2 actionable pointer:hover:opacity-80 pointer:active:opacity-60 cursor-pointer'
            >
                <ChevronLeft className='text-accent size-8 xl:size-10' />
            </div>
            <div
                onClick={handleNext}
                className='bg-neutral-900 grid place-items-center rounded-full p-2 actionable pointer:hover:opacity-80 pointer:active:opacity-60 cursor-pointer'
            >
                <ChevronRight className='text-accent size-8 xl:size-10' />
            </div>
        </div>
    </div>
  )
}

export default Work;
