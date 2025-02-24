"use client";

import { useViewportHeight } from '@/hooks/useVIewportHeight';
import React from 'react'

const OurSpace = () => {
    const height = useViewportHeight();
  
    return (
      <div className="w-full bg-red-500" style={{height: height ? height : "100svh"}}>
        our space
      </div>
    )
}

export default OurSpace
