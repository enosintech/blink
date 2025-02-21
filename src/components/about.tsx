"use client";

import { triggerToAnimations } from '@/lib/animations';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {

    useGSAP(() => {

        triggerToAnimations(".scale-img", {
            scale: 1
        }, {
            trigger: ".imgTrigger",
            start: "top bottom",
            end: "bottom top",
            scrub: 5,
        })
    }, [])

  return (
    <div className='pt-24 w-full text-white px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32 relative z-10 bg-trigger pb-32'>
      <div className='w-full py-3 relative'>
        <p className='tracking-tight font-medium text-white/80 px-1 all-text text-sm sm:text-base lg:text-[1.3vw]'>We are a 360 Marketing Agency</p>
        <p className='text-white tracking-tight font-normal text-xl sm:text-4xl lg:text-5xl mt-4'>
          Dedicated to crafting innovative solutions that inspire and convert. We offer comprehensive marketing solutions, from SEO and social media to content creation and brand strategy.
          Combining data-driven insights with creativity, we craft compelling narratives and bold designs that drive results.
        </p>
        <Link href="#" className='grid place-items-center rounded-full px-4 py-2 mt-10 border-accent pointer:hover:bg-accent pointer:active:opacity-65 transition-all border w-fit actionable'>
            <p className='font-medium text-sm md:text-base lg:text-lg 2xl:text-[1.15vw] text-white'>Learn About Us</p> 
        </Link>
      </div>
      <div className='mt-20 md:mt-32 w-full h-[450px] md:h-[600px] rounded-xl overflow-hidden relative imgTrigger'>
        <Image src="/images/office.webp" alt="blink office" fill className='object-cover scale-125 scale-img' />
      </div>
    </div>
  )
}

export default About;
