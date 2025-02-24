"use client";

import { navLinks } from '@/constants';
import { useGSAP } from '@gsap/react';
import { Link } from "next-view-transitions";
import { motion } from 'framer-motion';
import Image from 'next/image';

import React, { useEffect, useState } from 'react'
import { gsap } from '@/lib/gsap-loader';
import { usePathname } from 'next/navigation';
import { useLoadingValue } from '@/context/loadingValueContext';
import { useLenis } from 'lenis/react';

const Navbar = () => {

    const [ navVisible , setNavVisible ] = useState(false);

    const pathname = usePathname();

    const { loadingValue } = useLoadingValue();

    const lenis = useLenis();

    const handleLetsTalk = () => {
        if(navVisible) {
            setNavVisible(false)
        }

        lenis?.scrollTo(lenis.rootElement.scrollHeight, {duration: 4, lerp: 0.1})

    }

    useGSAP(() => {

        if(navVisible) {
            const tl = gsap.timeline();

            tl.to(".mobile-nav", {
                opacity: 1,
                height: 160,
                pointerEvents: "all",
            })

            tl.to(".mobile-nav-buttons", {
                width: "100%",
            }, "<")

            tl.to(".mobile-nav-text", {
                opacity: 1,
            }, "-=0.5")

        } else {

            const tl = gsap.timeline();

            tl.to(".mobile-nav-text", {
                opacity: 0,
            })

            tl.to(".mobile-nav-buttons", {
                width: 0,
            }, "-=0.5")

            tl.to(".mobile-nav", {
                opacity: 0,
                height: 0,
                pointerEvents: "none"
            }, "<")
        }

    }, [navVisible] )
    
    useGSAP(() => {
    
        if(loadingValue === 100) {
            const tl = gsap.timeline();

            tl.delay(0.5)

            tl.to(".scroller", {
                opacity: 1,
                duration: 2.5,
            }, "<")

            tl.to(".nav-bar", {
                opacity: 1,
                duration: 2.5,
            }, "<")

        }
    }, [loadingValue])

    useEffect(() => {
        setNavVisible(false)
    }, [pathname])

  return (
    <nav className='fixed w-full h-20 top-0 left-0 z-[100]'>

        <div className="gradient-blur">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div className="absolute w-full h-0 top-[100%]  left-0 bg-[rgba(0,0,0,0.3)] mobile-nav pointer-events-none opacity-0 backdrop-blur flex flex-col lg:hidden font-semibold sm:text-base text-sm">
            {navLinks.map((link) => (
                <Link href={link.link} key={link.name} className={`w-0 ${pathname === "/" ? "h-1/4" : "h-1/3"} px-10 mobile-nav-buttons sm:px-14 md:px-20 flex items-center border-t border-accent pointer:hover:opacity-80 pointer:active:opacity-60 cursor-pointer actionable`}>
                    <p className={`${pathname === link.link ? "text-accent" : "text-white"} opacity-0 mobile-nav-text`}>{link.name}</p>
                </Link>
            ))}
            {pathname === "/" && 
                <div onClick={handleLetsTalk} className="w-0 h-1/4 bg-accent px-10 sm:px-14 md:px-20 mobile-nav-buttons flex items-center gap-2 pointer:hover:opacity-80 pointer:active:opacity-60 cursor-pointer actionable">
                    <p className="opacity-0 mobile-nav-text">Let&apos;s Talk</p>
                </div>
            }
        </div>

        <div className='w-full h-full flex items-center justify-between px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32 relative z-10 opacity-0 nav-bar'>
            <Link href={"/"} className='relative w-24 sm:w-36 md:w-40 2xl:w-[10vw] h-12 actionable'>
                <Image fill alt="blink logo" src="/images/logo.png" className='object-contain overflow-visible' />
            </Link>
            <div className='lg:hidden cursor-pointer actionable' onClick={() => setNavVisible((prev) => !prev)}>
                <motion.svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-7 sm:size-10 md:size-12"
                >
                    <motion.path
                    stroke="currentColor"
                    initial={false}
                    animate={navVisible ? { d: "M6 6L18 18" } : { d: "M4 7h16" }}
                    transition={{ duration: 0.4, ease: "anticipate" }}
                    />
                    <motion.path
                    stroke="currentColor"
                    initial={false}
                    animate={navVisible ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.2, ease: "backOut" }}
                    d="M4 12h16"
                    />
                    <motion.path
                    stroke="currentColor"
                    initial={false}
                    animate={navVisible ? { d: "M6 18L18 6" } : { d: "M4 17h16" }}
                    transition={{ duration: 0.4, ease: "anticipate" }}
                    />
                </motion.svg>
            </div>
            <div className='lg:flex hidden text-base 2xl:text-[1vw] items-center gap-14'>
                {navLinks.map((link) => (
                    <Link href={link.link} key={link.name}>
                        <p className={`font-medium actionable pointer:hover:text-accent pointer:active:opacity-75 transition-all ${pathname === link.link ? "text-accent" : "text-white"}`}>{link.name}</p>
                    </Link>
                ))}
                {pathname === "/" && 
                    <div onClick={handleLetsTalk} className='rounded-full justify-center flex items-center gap-2 bg-accent pointer:hover:bg-neutral-900 cursor-pointer actionable transition-all px-3 py-2'>
                        <p className='font-medium'>Let&apos;s Talk</p>
                    </div>
                }
            </div>  
        </div>
    </nav>
  )
}

export default Navbar;
