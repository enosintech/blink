"use client";

import { useViewportHeight } from '@/hooks/useVIewportHeight';
import React from 'react'

const Footer = () => {

    const height = useViewportHeight();

  return (
    <footer className="w-full pt-14 lg:pt-24 pb-10 px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32" style={{ height: height ? height : "100svh"}}>
        footer
    </footer>
  )
}

export default Footer;
