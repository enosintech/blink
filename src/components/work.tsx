"use client";

import { work } from '@/constants';
import { gsap, ScrollTrigger } from '@/lib/gsap-loader';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";
import { useGSAP } from '@gsap/react';

const Work = () => {
    
    const [ mounted, setMounted ] = useState(false);
    const headingRef = useRef(null);

    const isInView = useInView(headingRef, { once: true });

    useEffect(() => {
      setMounted(true)

      return () => setMounted(false)
    }, [])

    useGSAP(() => {
      if(mounted) {

        const cards = document.querySelectorAll(".card-item");
        const numCards = cards.length;

        if (numCards === 0) {
          console.warn("No '.card-item' elements found.");
          return;
        }

        const scaleDecrement = 0.03;
        const maxScale = 1.0;

        const lastCardSt = ScrollTrigger.create({
          trigger: cards[numCards - 1],
          end: "top center"
        })

        cards.forEach((card, index) => {

          const stepsFromEnd = numCards - 1 - index;

          const targetScale = maxScale - (stepsFromEnd * scaleDecrement);

          // @ts-ignore
          card.style.zIndex = index;

          gsap.to(card, {
            scrollTrigger: {
              trigger: card,
              pin: true,
              pinSpacing: false,
              pinType: "transform",
              start: "center center",
              end: () => lastCardSt.end,
              toggleActions: "play none none reverse",
            },
            scale: targetScale,
            duration: 0.7,
            ease: "power3.inOut"
          })

          ScrollTrigger.refresh();
        })

        gsap.to(".pin-text", {
          scrollTrigger: {
            trigger: cards[0],
            pin: ".pin-text",
            pinType: "transform",
            start: "center center",
            end: () => lastCardSt.end,
            toggleActions: "play none none reverse"
          },
        })

      }
    }, [mounted])

  return (
    <div className='w-full pt-10 lg:pt-24 pb-10 px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32 flex items-center flex-col justify-center'>
        
        <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='w-full pin-text mb-10'
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

        <div className='flex flex-col carousel mt-14 w-full'>
          {work.map((item) => (
            <div key={item.name} className='mb-[80px] relative card-item p-5 lg:p-7 2xl:p-9 bg-black border-accent border rounded-2xl h-[500px] w-full flex lg:flex-row flex-col'>
              <div className='w-full lg:h-full h-[40%] sm:h-1/2  lg:w-1/2 rounded-xl relative overflow-hidden'>
                {item.mediaType === "img" ?
                    <Image fill alt="portfolio image" src={item.media} className="object-cover" />    
                : 
                  <video className='w-full h-full object-cover' autoPlay loop playsInline muted>
                      <source src={item.media} type='video/mp4' />
                  </video>
                }
              </div>
              <div className='w-full lg:h-full h-[60%] sm:h-1/2 lg:w-1/2 mt-3 lg:mt-0' >
                <div className='lg:pl-10 lg:pr-5 h-full flex flex-col justify-between'>
                  <div>
                    <p className='font-extrabold text-xl md:text-2xl lg:text-3xl 2xl:text-4xl'>{item.name} {item.subLink && <span className='font-semibold'> — {item.subLink}</span>}</p>
                    <p className='mt-4 text-justify font-medium lg:text-base md:text-sm text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque alias, ex maiores commodi autem at dolorum. </p>
                    <div className='mt-5 flex gap-3'>
                      {item.categories.map((cate) => (
                        <div key={cate} className='border-accent bg-black border text-white rounded-full px-2 md:px-4 py-2'>
                          <p className='font-bold text-[10px] leading-[1rem] md:text-xs lg:text-sm'>{cate}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a className='inline-block cursor-pointer hover:opacity-80 active:opacity-70 actionable' href="https://www.behance.net/Blink_Zambia" target="_blank">
                    <p className='font-bold lg:text-base text-xs md:text-sm'>GO TO BEHANCE &rarr;</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Work;
