"use client";

import { triggerToAnimations } from '@/lib/animations';
import { useGSAP } from '@gsap/react';
import { Link } from "next-view-transitions";
import Image from 'next/image';
import SplitType from 'split-type';

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

    useGSAP(() => {
      const split = SplitType.create(".split-text", { types: "words"});

      triggerToAnimations(split.words, {
        color: "white",
        stagger: 0.25
      }, {
        trigger: split.words,
        start: "top 80%",
        end: "top 10%",
        scrub: true,
      })
    })

  return (
    <div className='pt-24 w-full text-white px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32 relative z-10 bg-trigger pb-5 md:pb-20 xl:pb-32'>
      <div className='w-full py-3 relative'>
        <p className='tracking-tight font-medium text-white/80 px-1 all-text text-sm sm:text-base lg:text-lg'>We are a 360 Marketing Firm</p>
        <p className='text-white/5 tracking-tight font-normal text-xl sm:text-4xl xl:text-5xl mt-4 split-text'>
          Dedicated to crafting innovative solutions that inspire and convert. We offer comprehensive marketing solutions, from SEO and social media to content creation and brand strategy.
          Combining data-driven insights with creativity, we craft compelling narratives and bold designs that drive results.
        </p>
        <Link href="/about-us" className='grid place-items-center rounded-full px-4 py-2 mt-10 border-accent pointer:hover:bg-accent pointer:active:opacity-65 transition-all border w-fit actionable'>
            <p className='font-medium text-sm md:text-base lg:text-lg 2xl:text-xl text-white'>Learn About Us</p> 
        </Link>
      </div>
      <div className='mt-20 md:mt-32 w-full h-[220px] sm:h-[300px] md:h-[400px] xl:h-[600px] 2xl:h-[90vh] deep-shadow md:rounded-lg lg:rounded-xl rounded-md overflow-hidden relative imgTrigger'>
        <Image src="/images/office.webp" alt="blink office" fill className='object-cover scale-125 scale-img' />
      </div>
    </div>
  )
}

export default About;
