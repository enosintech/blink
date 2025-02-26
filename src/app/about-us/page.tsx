"use client"

import { useViewportHeight } from '@/hooks/useVIewportHeight';
import React from 'react'

const About = () => {

  const height = useViewportHeight();

  return (
    <div className="w-full" style={{height: height ? height : "100svh"}}>
      should i put a carousel or list them out? i should probably get feedback before i complete this so i dont waste my time
    </div>
  )
}

export default About;
