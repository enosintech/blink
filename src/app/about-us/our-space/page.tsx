"use client";

import { useViewportHeight } from '@/hooks/useVIewportHeight';
import React from 'react'

const OurSpace = () => {
    const height = useViewportHeight();
  
    return (
      <div className="w-full" style={{height: height ? height : "100svh"}}>
        i should definitely use a carousel with an activeIndex for each image on this one. Easy. 
      </div>
    )
}

export default OurSpace
