"use client";

import PassionBanner from '@/components/passion-banner';
import PassionContent from '@/components/passion-content';
import PassionExplore from '@/components/passion-explore';
import PassionHero from '@/components/passion-hero';
import { redbullAvengers } from '@/constants';
import { useLoadingValue } from '@/context/loadingValueContext';
import { noTriggerToAnimations } from '@/lib/animations';
import { useGSAP } from '@gsap/react';
import React from 'react'

const Passion = () => {

  const { loadingValue } = useLoadingValue();

  useGSAP(() => {
      if(loadingValue === 100) {
          noTriggerToAnimations(".passion-screen", {
            duration: 2.5,
            opacity: 1,
            delay: 0.5
          })
      }
  }, [loadingValue])

  return (
    <div className='overflow-x-hidden passion-screen opacity-0'>
      <PassionHero />
      <PassionBanner />
      {redbullAvengers.map((item) => (
        <PassionContent key={item.name} isLimited={item.isLimited} leftOrRight={item.leftOrRight} name={item.name} description={item.description} link={item.link} image={item.image} color={item.color} />
      ))}
      <PassionExplore />
    </div>
  )
}

export default Passion;