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
import React from 'react'
import { digitalPackagegs, services } from '@/constants';
import Image from 'next/image';
import SectionFooter from '@/components/section-footer';

const Services = () => {

  useGSAP(() => {

    gsap.to(".gradient", {
        opacity: 0.65,
        duration: 1.0
    })

  }, [])

  return (
    <div className="pt-24 pl-10 sm:pl-14 md:pl-20 lg:pl-24 xl:pl-32 px-1 sm:px-14 md:px-20 lg:px-24 xl:px-32">
      <p className='text-sm lg:text-base font-medium'>
        At Blink, we blend creativity with strategy to craft marketing solutions that captivate audiences and drive results. Whether you&apos;re looking to build a strong brand identity, develop engaging content, or execute high-impact digital campaigns, our team is here to turn your vision into reality. From branding and design to social media management, content creation, and performance marketing, we offer a full suite of services tailored to your unique needs. With a data-driven approach and a passion for storytelling, we help businesses stand out in a crowded marketplace, connect with their audience, and achieve meaningful growth. Explore our services and discover how Blink can bring your brand to life.
      </p>
      <div className="mt-20">
        <p className='font-bold text-xl lg:text-2xl'>Our Core Services</p>
        <div className="w-[70%] mt-14 relative">
          <Carousel className='w-full min-w-full translate-x-[15%] lg:translate-x-0'>
            <CarouselContent>
              {services.map((service) => (
                <CarouselItem key={service.name} className='lg:basis-1/2'>
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
              <p className="font-semibold">Digital Packages</p>
              <div className="w-[70%] mt-10 relative">
                <Carousel className='w-full min-w-full translate-x-[15%] lg:translate-x-0'>
                  <CarouselContent>
                    {digitalPackagegs.map((digital) => (
                      <CarouselItem key={digital.name} className='lg:basis-1/2'>
                        <div className='py-2 pt-3 px-4 min-h-[420px] bg-black border border-accent relative rounded-md'>
                          <div className="relative size-12">
                            <Image src={digital.icon} alt="service icon" fill className='object-cover invert' />
                          </div>
                          <p className="mt-3 text-sm sm:text-base font-bold">{digital.name}</p>
                          <ol className="mt-5 list-decimal list-inside">
                            {digital.points.map((point) => (
                              <li key={point} className="text-xs sm:text-sm text-muted-foreground">{point}</li>
                            ))}
                          </ol>
                          <div className="absolute bottom-2 left-2">
                            <p className='text-sm md:text-base'>From</p>
                            <p className="font-extrabold text-2xl md:text-3xl">{digital.price} <span>ZMW</span></p>
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
        <SectionFooter />
      </div>
    </div>
  )
}

export default Services;
