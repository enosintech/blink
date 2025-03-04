'use client';

import { gsap } from '@/lib/gsap-loader';
import { useGSAP } from '@gsap/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import React from 'react'
import { work } from '@/constants';
import SectionFooter from '@/components/section-footer';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const Work = () => {


  useGSAP(() => {

    gsap.to(".gradient", {
        opacity: 0.65,
        duration: 1.0
    })

  }, [])

  return (
    <>
      <div className="w-screen sm:px-14 md:px-20 lg:px-24 xl:px-32 px-10 overflow-x-hidden">
        <p className='pt-24 text-sm lg:text-xl xl:text-3xl font-medium text-justify mt-10'>At Blink, we create bold, data-driven marketing strategies that captivate audiences and drive real results. From eye-catching campaigns to seamless brand experiences, our work speaks for itself. Explore our latest projects and see how we turn ideas into impact.</p>
        <div className="mt-20">
          <p className='font-bold text-lg sm:text-xl lg:text-2xl'>Our Recent Work</p>
          <div className='w-full flex justify-center mt-8 relative'>
            <Carousel className='w-[80%] sm:w-[90%] lg:w-full'>
              <CarouselContent>
                {work.map((work) => (
                  <CarouselItem key={work.name} className='xl:basis-1/2 2xl:basis-1/3'>
                    <div className="py-4 pt-3 px-4 bg-black border border-accent rounded-md">
                      <div>
                        <p className='font-semibold text-xl'>{work.name}</p>
                        <p className="mt-1 text-muted-foreground text-base">{work.type}</p>
                      </div>
                      <div className="mt-4 rounded-md overflow-hidden relative w-full h-36 lg:h-72">
                        {work.mediaType === "img" ? 
                          <Image src={work.media} alt="work media" fill className="object-cover" />
                        : 
                          <video className="w-full h-full object-cover" autoPlay loop muted controls={false} playsInline>
                            <source src={work.media} type="video/mp4" />
                          </video>
                        }
                      </div>
                      <div className="mt-4 flex flex-col lg:flex-row lg:items-center flex-wrap lg:text-base items-start text-sm gap-4">
                        {work.categories.map((cate) => (
                          <div key={cate} className="border-accent border w-fit min-w-fit rounded-full px-3 py-2">
                            <p className="font-medium text-accent truncate">
                              {cate}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4">
                        <div className="flex items-center cursor-pointer actionable pointer:hover:opacity-80 pointer:active:opacity-60 w-fit gap-2 border-accent border rounded-full px-3 py-2">
                          <ArrowUpRight className='size-6 xl:size-7' />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className='bg-neutral-900 border-accent text-accent pointer:hover:text-neutral-900 pointer:hover:bg-accent' />
              <CarouselNext className='bg-neutral-900 border-accent text-accent pointer:hover:text-neutral-900 pointer:hover:bg-accent' />
            </Carousel>
          </div>
        </div>
      </div>
      <SectionFooter />
    </>
  )
}

export default Work;
