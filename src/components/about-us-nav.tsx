"use client";

import { gsap } from '@/lib/gsap-loader';
import { useGSAP } from '@gsap/react';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

const AboutUsNav = () => {

    const pathname = usePathname();

    useGSAP(() => {

        gsap.to(".gradient", {
            opacity: 0.65,
            duration: 1.0
        })

    }, [])
    
  return (
    <div className="pt-24 px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32 w-full flex flex-col justify-between">
      <div className='w-full py-1'>
        <div className="border-2 border-white grid place-items-center p-2 w-fit rounded-full">
            <p className="font-semibold text-xs lg:text-base">ESTABLISHED IN 2022</p>
        </div>
      </div>
      <div className="w-full mt-10 py-1 flex flex-col">
        <div className="w-full flex lg:flex-row lg:items-center flex-col justify-between">
            <div className='flex flex-col lg:max-w-[40%]'>
                <div>
                    <p className="text-[10px] lg:text-base">Who are We</p>
                </div>
                <div className="mt-4">
                    <p className="text-xs lg:text-lg 2xl:text-2xl font-medium">Blink is an award-winning marketing agency based in Lusaka, Zambia, renowned for its innovative strategies, creative excellence, and exceptional brand-building expertise that helps businesses stand out in a competitive market.</p>
                </div>
            </div>
            <div className='lg:w-[40%] 2xl:w-[35%] w-full mt-14'>
                <p className="font-semibold text-sm lg:text-base mb-3">3 Years of Blink</p>
                <div className="w-full h-[80%] lg:h-[90%] bg-black rounded border border-accent overflow-hidden">
                    <video className="w-full h-full object-cover" controls playsInline={true} preload="metadata">
                        <source src="/videos/showreel.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
        <div className="w-full py-2 team-trigger pin-me flex items-center gap-6 mt-8 text-base lg:text-base">
            <Link href="/about-us">
                <p className={`font-bold ${pathname === "/about-us" ? "text-accent" : "text-white"} pointer:hover:opacity-80 pointer:active:opacity-60 actionable`}>MEET THE TEAM</p>
            </Link>
            <Link href="/about-us/our-space">
                <p className={`font-bold ${pathname === "/about-us/our-space" ? "text-accent" : "text-white"} pointer:hover:opacity-80 pointer:active:opacity-60 actionable`}>OUR SPACE</p>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutUsNav;
