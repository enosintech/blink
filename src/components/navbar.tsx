import { navLinks } from '@/constants';
import { Menu } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
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

        <div className='w-full h-full flex items-center justify-between px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32 relative z-10 opacity-0 nav-bar'>
            <Link href={"/"} className='relative w-32 sm:w-36 md:w-40 2xl:w-[10vw] h-12 actionable'>
                <Image fill alt="blink logo" src="/images/logo.png" className='object-contain overflow-visible' />
            </Link>
            <div className='lg:hidden cursor-pointer actionable'>
                <Menu className='size-8 sm:size-10 md:size-12' />
            </div>
            <div className='lg:flex hidden text-base 2xl:text-[1vw] items-center gap-14'>
                {navLinks.map((link) => (
                    <Link href={link.link} key={link.name}>
                        <p className='font-medium actionable pointer:hover:text-accent pointer:active:opacity-75 transition-all'>{link.name}</p>
                    </Link>
                ))}
                <div className='rounded-full grid place-items-center bg-accent pointer:hover:bg-neutral-900 cursor-pointer actionable transition-all px-3 py-2'>
                    <p className='font-medium'>Let's Talk</p>
                </div>
            </div>  
        </div>
    </nav>
  )
}

export default Navbar;
