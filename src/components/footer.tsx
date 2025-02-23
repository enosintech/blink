"use client";

import { socials } from '@/constants';
import { useViewportHeight } from '@/hooks/useVIewportHeight';
import Image from 'next/image';
import React from 'react'

const Footer = () => {

    const height = useViewportHeight();

  return (
    <footer className="w-full pt-14 lg:pt-24 pb-10 px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32" style={{ height: height ? height : "100svh"}}>
        <div className="w-full h-full lg:flex-row flex-col flex items-center gap-10">
            <div className="aspect-square md:size-[30vw] size-[35vw] lg:size-[25vw] flex flex-col items-center relative overflow-hidden">
                <Image src="/images/blink-eye.gif" alt="eye animation" fill className="object-contain" unoptimized />
            </div>
            <div className="w-full lg:w-1/2 h-[65%] sm:h-[60%] mt-5 lg:mt-0 lg:h-full px-4 flex flex-col justify-between">
                <div>
                    <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">DO YOU HAVE A PROJECT IN MIND?</p>
                    <div className="mt-5 lg:mt-10">
                        <p className="sm:text-base text-xs font-semibold">CONTACT US AT</p>
                        <a href="mailTo:info@blink.co.zm" className='w-fit'>
                            <p className='text-base sm:text-xl lg:text-2xl tracking-tight pointer:hover:text-accent pointer:active:opacity-80 transition-all actionable'>INFO@BLINK.CO.ZM</p>
                        </a>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="sm:text-base text-sm font-semibold">WE ARE AT</p>
                        <p className="text-lg sm:text-xl lg:text-2xl font-extrabold">
                            ALN House, Mushemi Road, Rhodes Park, Lusaka
                        </p>
                    </div>
                    <div className="mt-6 sm:mt-10">
                        <p className="md:text-base sm:text-sm text-xs font-semibold">CONNECT WITH US ON</p>
                        <div className="flex items-center gap-x-4 gap-y-1 flex-wrap mt-1 sm:mt-0">
                            {socials.map((social) => (
                                <a key={social.name} target="_blank" className="actionable pointer:hover:text-accent pointer:active:opacity-80 cursor-pointer">
                                    <p className='text-xs sm:text-sm md:text-base'>{social.name}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-3 w-full border-t-2 border-accent">
                        <p className="font-bold mt-2 text-accent xl:text-base text-xs sm:text-sm">© {new Date().getFullYear()} Blink Marketing Solutions - All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
