"use client";

import { gsap } from '@/lib/gsap-loader';
import { useGSAP } from '@gsap/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import React, { useState } from 'react'
import { brandingPackages, digitalPackages, services } from '@/constants';
import Image from 'next/image';
import SectionFooter from '@/components/section-footer';
import { Check } from 'lucide-react';

const Services = () => {

  const  [ toggle, setToggle ] = useState("digital")

  useGSAP(() => {

    gsap.to(".gradient", {
        opacity: 0.65,
        duration: 1.0
    })

  }, [])

  return (
    <>
      <div className="pt-24 px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32">
        <p className='text-sm lg:text-xl xl:text-3xl font-medium text-justify'>
          At Blink, we fuse creativity with strategy to deliver marketing solutions that engage audiences and drive results. From branding and content creation to digital campaigns and performance marketing, we craft tailored strategies to help businesses stand out and grow. Let us bring your vision to life.
        </p>
        <div className="mt-20">
          <p className='font-bold text-xl lg:text-2xl'>Our Core Services</p>
          <div className="w-full mt-14 relative flex justify-center">
            <Carousel className='w-[80%] sm:w-[90%] lg:w-full min-[2000px]:w-[75%]'>
              <CarouselContent>
                {services.map((service) => (
                  <CarouselItem key={service.name} className='lg:basis-1/2 2xl:basis-1/3'>
                    <div className="py-4 pt-3 px-4 lg:min-h-72 bg-black border border-accent rounded-md">
                      <div className="relative size-6">
                        <Image src={service.icon} alt="service icon" fill className='object-cover invert' />
                      </div>
                      <div className="text-sm sm:text-base lg:text-lg">
                        <p className="mt-3 font-bold">{service.name}</p>
                        <p className="mt-4 font-medium text-muted-foreground">
                          {service.description}
                        </p>
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
        <div className="mt-20"> 
          <p className='font-bold text-xl lg:text-2xl'>SME Packages</p>
          <p className='font-medium text-sm lg:text-base mt-5'>At Blink, we help small and medium-sized businesses grow with tailored, budget-friendly marketing. From branding to digital strategy, our SME packages deliver impactful solutions to engage your audience and drive success. Explore our packages and elevate your business today.</p>
          <div className="mt-10">
                <div className='w-full py-1 flex items-center justify-center'>
                  <div className='min-w-fit sm:text-base text-sm w-64 sm:w-72 flex items-center rounded-full bg-neutral-950'>
                    <div onClick={() => setToggle("digital")} className={`${toggle === "digital" ? "bg-accent" : ""} rounded-full cursor-pointer pointer:hover:opacity-80 pointer:active:opacity-60 actionable w-1/2 flex items-center justify-center py-2 transition-all`}>
                      <p className='font-semibold'>Digital</p>
                    </div>
                    <div onClick={() => setToggle("branding")} className={`${toggle === "branding" ? "bg-accent" : ""} rounded-full cursor-pointer pointer:hover:opacity-80 pointer:active:opacity-60 actionable w-1/2 flex items-center justify-center py-2 transition-all`}>
                      <p className='font-semibold'>Branding</p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center mt-10 relative">
                  {toggle === "digital" 
                  ?
                    <Carousel className='w-[80%] sm:w-[90%] lg:w-full min-[320px]:text-center'>
                      <CarouselContent>
                        {digitalPackages.map((digital) => (
                          <CarouselItem key={digital.name} className='lg:basis-1/2 2xl:basis-1/3'>
                            <div className='py-5 pb-10 px-3 md:px-5 lg:px-8 bg-black border border-accent relative rounded-md flex flex-col items-start h-[500px] max-h-[500px]'>
                              <p className='text-accent font-semibold text-xl'>{digital.name}</p>
                              <div className='mt-4'>
                                <p className='font-extrabold text-3xl sm:text-4xl'>K {digital.price}</p>
                                <p className='font-medium text-lg'>Exclusive of VAT</p>
                              </div>
                              <div className='mt-4 flex flex-col gap-2'>
                                {digital.points.map((point) => (
                                  <div key={point} className='flex items-center w-full gap-4'>
                                    <Check className="size-4 lg:size-5  text-accent" />
                                    <p className='font-medium text-[10px] sm:text-xs md:text-sm text-muted-foreground'>{point}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className='bg-neutral-900 border-accent text-accent pointer:hover:text-neutral-900 pointer:hover:bg-accent' />
                      <CarouselNext className='bg-neutral-900 border-accent text-accent pointer:hover:text-neutral-900 pointer:hover:bg-accent' />
                    </Carousel>
                  :
                  <Carousel className='w-[80%] sm:w-[90%] lg:w-full'>
                    <CarouselContent>
                      {brandingPackages.map((digital) => (
                        <CarouselItem key={digital.name} className='lg:basis-1/2 2xl:basis-1/3'>
                          <div className='py-5 pb-10 px-8 bg-black border border-accent relative rounded-md flex flex-col items-start h-[500px] max-h-[500px]'>
                            <p className='text-accent font-semibold text-xl'>{digital.name}</p>
                            <div className='mt-4'>
                              <p className='font-extrabold text-3xl sm:text-4xl'>K {digital.price}</p>
                              <p className='font-medium text-lg'>Exclusive of VAT</p>
                            </div>
                            <div className='mt-4 flex flex-col gap-2'>
                              {digital.points.map((point) => (
                                <div key={point} className='flex items-center gap-2'>
                                  <Check className="size-5 text-accent" />
                                  <p className='font-medium text-muted-foreground'>{point}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className='bg-neutral-900 border-accent text-accent pointer:hover:text-neutral-900 pointer:hover:bg-accent' />
                    <CarouselNext className='bg-neutral-900 border-accent text-accent pointer:hover:text-neutral-900 pointer:hover:bg-accent' />
                  </Carousel>
                  }
                </div>
          </div>
        </div>
      </div>
      <SectionFooter />
    </>
  )
}

export default Services;
