"use client";

import { gsap } from '@/lib/gsap-loader';
import { useGSAP } from '@gsap/react';
import React, { RefObject, useRef } from 'react'

const Highlights = () => {

    const projectsRef = useRef<HTMLParagraphElement | null>(null);
    const awardsRef = useRef<HTMLParagraphElement | null>(null);
    const yearsRef = useRef<HTMLParagraphElement | null>(null);

    useGSAP(() => {

        const animateCounter = (ref: RefObject<HTMLParagraphElement | null>, target: number) => {
            gsap.fromTo(
              ref.current,
              { textContent: 0 },
              {
                textContent: target,
                duration: 3,
                ease: "power2.out",
                snap: { textContent: 1 }, 
                scrollTrigger: {
                  trigger: ref.current,
                  start: "top 80%", 
                  toggleActions: "play none none none", 
                },
              }
            );
        };

        animateCounter(projectsRef, 700);
        animateCounter(awardsRef, 5);
        animateCounter(yearsRef, 3);

    }, [])

  return (
    <div className="w-full mt-14 md:mt-20 xl:mt-32 pb-20 px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32">
        <div className='flex items-center flex-wrap gap-20 md:gap-32'>
            <div>
                <p ref={projectsRef} className='font-black text-slate-100 text-4xl sm:text-6xl lg:text-6xl'>700</p>
                <p className='font-medium text-accent lg:text-2xl mt-2'>COMPLETE PROJECTS</p>
            </div>
            <div>
                <p ref={awardsRef} className='font-black text-slate-100 text-4xl sm:text-6xl lg:text-6xl 2xl:text-[3.5vw] 2xl:leading-none'>5X</p>
                <p className='font-medium text-accent lg:text-2xl mt-2'>ACHIEVEMENT AWARDS</p>
            </div>
            <div>
                <p ref={yearsRef} className='font-black text-slate-100 text-4xl sm:text-6xl lg:text-6xl 2xl:text-[3.5vw] 2xl:leading-none'>3</p>
                <p className='font-medium text-accent lg:text-2xl mt-2'>YEARS</p>
            </div>
        </div>
    </div>
  )
}

export default Highlights;
