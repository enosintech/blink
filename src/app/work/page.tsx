'use client';

import { gsap } from '@/lib/gsap-loader';
import { useGSAP } from '@gsap/react';
import React from 'react'
import { work } from '@/constants';
import SectionFooter from '@/components/section-footer';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useLoadingValue } from '@/context/loadingValueContext';
import { noTriggerToAnimations } from '@/lib/animations';

const Work = () => {

  const { loadingValue } = useLoadingValue();

  useGSAP(() => {

    gsap.to(".gradient", {
        opacity: 0.65,
        duration: 1.0
    })

  }, [])

  useGSAP(() => {
      if(loadingValue === 100) {
          noTriggerToAnimations(".work-screen", {
          duration: 2.5,
          opacity: 1,
          delay: 0.5
          })
      }
  }, [loadingValue])

  return (
    <>
      <div className="w-screen sm:px-14 md:px-20 lg:px-24 xl:px-32 px-10 overflow-x-hidden work-screen opacity-0">
        <p className='pt-24 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium text-justify mt-10'>At Blink, we create bold, data-driven marketing strategies that captivate audiences and drive real results. From eye-catching campaigns to seamless brand experiences, our work speaks for itself. Explore our latest projects and see how we turn ideas into impact.</p>
        <div className="mt-20">
          <p className='font-bold text-lg sm:text-xl lg:text-2xl'>Work Showcase</p>
          <div className='w-full flex flex-wrap gap-4 mt-8 relative'>
            {work.map((work) => (
                <div key={work.name} className="pb-4 overflow-hidden w-full lg:w-[48%] 2xl:w-[32%] bg-black border border-accent rounded-md group">

                  <div className="overflow-hidden relative w-full h-[22rem]">
                    <div className='w-full h-full absolute group-hover:opacity-0 transition-all duration-500 z-10 bg-gradient-to-b from-black via-black/40 to-transparent'></div>
                    <div className='absolute z-20 top-0 px-4 pt-4'>
                      <p className='font-bold text-xl'>{work.name}</p>
                      <p className="mt-1 text-muted-foreground text-base">{work.type}</p>
                    </div>
                    <div className='w-full h-full relative overflow-hidden'>
                      {work.mediaType === "img" ? 
                        <Image src={work.media} alt="work media" fill className="object-cover" />
                      : 
                        <video className="w-full h-full object-cover" autoPlay loop muted controls={false} playsInline>
                          <source src={work.media} type="video/mp4" />
                        </video>
                      }
                    </div>
                  </div>
                  <div className="mt-4 px-4 flex flex-col lg:flex-row lg:items-center flex-wrap lg:text-base items-start text-sm gap-4">
                    {work.categories.map((cate) => (
                      <div key={cate} className="border-accent border w-fit min-w-fit rounded-full px-3 py-2">
                        <p className="font-medium text-accent truncate">
                          {cate}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 px-4">
                    <div className="flex items-center cursor-pointer actionable pointer:hover:opacity-80 pointer:active:opacity-60 w-fit gap-2 border-accent border rounded-full px-3 py-2">
                      <ArrowUpRight className='size-6 xl:size-7' />
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
      <SectionFooter />
    </>
  )
}

export default Work;

