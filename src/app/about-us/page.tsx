"use client"

import { useViewportHeight } from '@/hooks/useVIewportHeight';
import React from 'react'

const About = () => {

  const height = useViewportHeight();

  return (
    <div className="w-full bg-accent" style={{height: height ? height : "100svh"}}>
      the team
    </div>
  )
}

export default About;
