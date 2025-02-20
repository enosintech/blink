import { navLinks } from '@/constants';
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

        <div className='w-full h-full flex items-center justify-between px-32 relative z-10'>
            <Link href={"/"} className='relative w-40 h-12 actionable'>
                <Image fill alt="blink logo" src="/images/logo.png" className='object-contain overflow-visible' />
            </Link>
            <div className='flex items-center gap-14'>
                {navLinks.map((link) => (
                    <Link href={link.link} key={link.name}>
                        <p className='font-medium actionable pointer:hover:text-accent pointer:active:opacity-75 transition-all text-base'>{link.name}</p>
                    </Link>
                ))}
                <div className='rounded-full grid place-items-center bg-accent pointer:hover:bg-neutral-900 cursor-pointer actionable transition-all px-3 py-2'>
                    <p className='font-medium text-base'>Let's Talk</p>
                </div>
            </div>  
        </div>
    </nav>
  )
}

export default Navbar;
