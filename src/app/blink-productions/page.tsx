import SectionFooter from '@/components/section-footer'
import Image from 'next/image'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { videofolio } from '@/constants'

const BlinkProductions = () => {
  return (
    <>
      <div className='pt-24 sm:px-14 md:px-20 lg:px-24 xl:px-32 px-10 w-full'>
          <div className="flex flex-col-reverse lg:flex-row justify-between w-full pb-10 pt-2">
            <div className='lg:max-w-[50%] 2xl:max-w-[40%]'>
              <p className='text-sm lg:text-lg font-medium text-justify mt-10 lg:mt-0'>
                Blink Productions delivers high-quality video production and editing, transforming ideas into captivating visual stories. From concept to final cut, we create compelling content for brands, ensuring every frame engages and inspires.
              </p>
            </div>
            <div className='h-[30vh] sm:h-[35vh] md:h-[45vh] lg:h-[35vh] relative w-full lg:w-[40%] xl:w-[30%] bg-gradient-to-t from-black via-transparent to-transparent'>
              <Image src="/images/astro.png" alt="astronaut" fill className='z-[-1] object-cover object-top' />
            </div>
          </div>
          <div className="mt-4 w-full">
            <p className="font-semibold text-sm lg:text-base mb-3">Intro</p>
            <div className="w-full h-[30vh] sm:h-[40vh] lg:w-[45%] 2xl:w-[40%] overflow-hidden rounded-lg border border-accent relative">
              <video controls playsInline className='w-full h-full object-cover'>
                <source src="/videos/showreel.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className='mt-14 w-full'>
            <p className='font-bold text-lg sm:text-xl lg:text-2xl'>Videofolio</p>
            <div className='w-full mt-4 flex justify-center relative'>
              <Carousel className='w-[80%] sm:w-[90%] lg:w-full'>
                <CarouselContent>
                  {videofolio.map((video) => (
                    <CarouselItem key={video.name} className='md:basis-1/2 2xl:basis-1/3'>
                      <div className="py-4 pt-3 px-4 bg-black border border-accent rounded-md">
                        <div className='overflow-hidden w-full h-40 sm:h-56 lg:h-72 rounded-md bg-black'>
                          <iframe className='w-full h-full object-contain' src={video.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <p className='text-accent mt-2 font-bold text-sm lg:text-xl'>{video.name}</p>
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

export default BlinkProductions
