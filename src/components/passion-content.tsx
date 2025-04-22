"use client";

import { useViewportHeight } from '@/hooks/useVIewportHeight';
import { triggerToAnimations } from '@/lib/animations';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import React, { useRef } from 'react'

interface PassionContentProps {
    leftOrRight: 'left' | 'right',
    isLimited: boolean,
    name: string,
    description: string,
    image: string,
    link: string,
    color: string,
}

const PassionContent = ({ leftOrRight, isLimited, name, description, image, link, color }: PassionContentProps) => {

    const height = useViewportHeight();
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        triggerToAnimations(".can-back", {
            y: 0,
        }, {
            trigger: ".can-back",
            start: "top 80%",
            end: "top center",
            scrub: true
        })

        triggerToAnimations(".can-text", {
            xPercent: -100,
        }, {
            trigger: ".can-back",
            start: "top 80%",
            end: "top -100%",
            scrub: true
        })

        triggerToAnimations(".can-back2", {
            y: 0,
        }, {
            trigger: ".can-back2",
            start: "top 80%",
            end: "top center",
            scrub: true
        })

        triggerToAnimations(".can-text2", {
            xPercent: -100,
        }, {
            trigger: ".can-back2",
            start: "top 80%",
            end: "top -100%",
            scrub: true
        })
    }, { scope: sectionRef })

  return (
    <div ref={sectionRef} className='px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32 py-10'>
        <div style={{ height: height ? height * 0.8 : "80svh"}} className={`w-full lg:flex hidden ${leftOrRight === "left" ? "flex-row" : "flex-row-reverse" }`}>
            <div className={`w-1/2 h-full flex flex-col justify-center items-center pl-20`}>
                <div className=''>
                    <p className='font-bold text-muted-foreground text-xs 2xl:text-sm'>RED BULL EDITIONS</p>
                    <p className='font-semibold text-4xl 2xl:text-6xl mt-2'>{name}</p>
                    <p className='text-xs 2xl:text-sm max-w-[90%] 2xl:max-w-[80%] mt-2'>{description}</p>
                    <a href={link} target="_blank" className='cursor-pointer inline-block actionable'>
                        <div className='px-5 actinable w-fit py-3 rounded-full bg-accent mt-5'>
                            <p className='font-medium text-sm 2xl:text-base'>See Product</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='w-1/2 h-full flex items-center justify-center'>
                <div style={{ backgroundColor: color}} className='w-[450px] h-[550px] rounded-lg overflow-hidden relative flex justify-center items-end'>
                    {isLimited && 
                        <div className='absolute top-0 bg-black/60 left-0 right-0 mx-auto w-fit px-3 py-2 rounded-b-md'>
                            <p className='font-semibold'>LIMITED EDITION</p>
                        </div>
                    }
                    <p className='absolute left-[101%] top-0 bottom-0 my-auto h-fit text-6xl text-nowrap font-extrabold can-text'>{name} {name} {name} {name} {name} {name} {name} {name} {name} {name} {name} {name}</p>
                    <div className='w-56 h-[33rem] can-back relative translate-y-[20%] will-change-transform'>
                        <Image priority src={image} alt={"ironman"} className='object-cover' fill />
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full lg:hidden flex flex-col items-center py-4'>
            <p className='font-bold text-muted-foreground text-base'>RED BULL EDITIONS</p> 
            <p className='font-semibold text-4xl md:text-5xl text-center mt-2'>{name}</p>
            <p className='text-sm md:text-base mt-4 text-center'>{description}</p>
            <div style={{ backgroundColor: color}} className='w-full sm:w-[450px] h-[550px] mt-5 rounded-lg overflow-hidden relative flex justify-center items-end'>
                {isLimited && 
                    <div className='absolute top-0 bg-black/60 left-0 right-0 mx-auto w-fit px-3 py-2 rounded-b-md'>
                        <p className='font-semibold'>LIMITED EDITION</p>
                    </div>
                }
                <p className='absolute left-[101%] top-0 bottom-0 my-auto h-fit text-6xl text-nowrap font-extrabold can-text2'>{name} {name} {name} {name} {name} {name} {name} {name} {name} {name} {name} {name}</p>
                <div className='w-56 h-[33rem] can-back2 relative translate-y-[20%] will-change-transform'>
                    <Image priority src={image} alt={"superhero can"} className='object-cover' fill />
                </div>
            </div>
            <a href={link} target="_blank" className='cursor-pointer inline-block actionable mt-5'>
                <div className='px-5 actinable w-fit py-3 rounded-full bg-accent mt-5'>
                    <p className='font-medium text-sm md:text-base'>See Product</p>
                </div>
            </a>
        </div>
    </div>
  )
}

export default PassionContent;