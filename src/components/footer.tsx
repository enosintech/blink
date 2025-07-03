"use client";

import { socials } from '@/constants';
import { useLenis } from 'lenis/react';
import { ChevronUp } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {

    const lenis = useLenis();

    const handleBackToTop = () => {
        if(lenis) {
            lenis.scrollTo(0, {duration: 4, lerp: 0.1})
        }
    }

  return (
    <footer className="w-full pt-14 lg:pt-24 pb-10 relative z-20 px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32 bg-black flex flex-col xl:items-center gap-10">
        <div className='relative size-44 sm:size-56 lg:size-72'>
            <Image fill src="/images/blink-eye.gif" alt="blink logo animated" unoptimized priority className='object-contain' />
        </div>
        <div>
            <div className="xl:text-center">
                <p className='font-extrabold text-xl sm:text-2xl lg:text-3xl'>GOT A PROJECT IN MIND?</p>

                <div className='mt-5 text-sm sm:text-base lg:text-lg'>
                    <p className='font-medium'>CONTACT US AT</p>
                    <a href="mailTo:info@blink.co.zm" className='w-fit cursor-pointer pointer:hover:text-accent pointer:active:opacity-80 actionable inline-block transition-all'>
                        <p className='font-light'>INFO@BLINK.CO.ZM</p>
                    </a>
                </div>

                <div className='mt-14 text-xs sm:text-sm lg:text-base'>
                    <p className='font-medium'>CONNECT WITH US ON</p>
                    <div className='flex items-center xl:justify-center flex-wrap mt-3 gap-4 md:gap-6'>
                        {socials.map((social) => (
                            <a key={social.name} href={social.link} target="_blank" className='inline-block cursor-pointer actionable transition-all pointer:hover:text-accent pointer:active:opacity-80'>
                                <p key={social.name}>{social.name}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full mt-5 py-2 flex lg:flex-row flex-col lg:items-center justify-between'>
            <div>
                <p className='font-semibold text-xs xl:text-base'>House No.2, 32 A Leopards Lane, Kabulonga, Lusaka</p>
                <p className='text-muted-foreground mt-1 lg:mt-0 text-xs'>{new Date().getFullYear()} Blink Marketing Solutions - All Rights Reserved</p>
            </div>
            <div onClick={handleBackToTop} className='bg-black w-fit mt-10 lg:mt-0 rounded-full border border-accent p-2 md:p-3 cursor-pointer pointer:hover:opacity-80 pointer:active:opacity-60 actionable grid place-items-center'>
                <ChevronUp className='size-5 md:size-6' />
            </div>
        </div>
    </footer>
  )
}

export default Footer;
