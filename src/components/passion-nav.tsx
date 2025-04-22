"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const PassionNav = () => {

    const pathname = usePathname();

  return (
    <div className='w-fit p-1 rounded-full border-2 border-white flex items-center justify-center text-lg'>
        <Link href={"/passion"} className={`px-3 py-1 rounded-full actionable font-semibold ${pathname === "/passion" ? "bg-accent" : ""} text-white`}>
            RedBull x Avengers
        </Link>
        <div className={`px-3 py-1 rounded-full font-semibold text-sm text-white`}>
            More Projects TBA
        </div>
    </div>
  )
}

export default PassionNav;