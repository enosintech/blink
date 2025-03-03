"use client"

import { team } from '@/constants';
import { useViewportHeight } from '@/hooks/useVIewportHeight';
import { gsap } from '@/lib/gsap-loader';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import React, { useRef } from 'react'

const About = () => {

  const slider = useRef<HTMLDivElement | null>(null);
  const sliderTrigger = useRef<HTMLDivElement | null>(null);

  const height = useViewportHeight();

  useGSAP(() => {

    const panels = gsap.utils.toArray(".panel");

    const tl = gsap.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: sliderTrigger.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => "+=" + slider.current?.offsetWidth,
      }
    })

    tl.to(panels, {
      xPercent: -(100 * (panels.length - 1))
    })

  }, [])

  return (
    <div ref={sliderTrigger} className="w-full pt-20 px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32 relative" style={{height: height ? height : "100svh"}}>
      <div ref={slider} className='w-fit h-full flex relative'>
        {team.map((worker, idx) => (
          <div key={idx} className='w-[80vw] panel md:w-[70vw] lg:w-[40vw] h-full flex justify-start'>
            <div className='flex flex-col w-[90%] h-[85%] sm:h-full'>
              <div className='w-full h-[85%] rounded-lg border border-accent relative overflow-hidden bg-black'>
                <Image src={worker.image} alt="worker image" fill className='object-cover object-top' />
              </div>
              <div className="w-full h-[15%] mt-2">
                <p className="font-semibold lg:text-lg">{worker.name}</p>
                <p className='text-sm lg:text-base text-muted-foreground'>{worker.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About;
