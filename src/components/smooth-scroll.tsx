"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from 'react';

const SmoothScroll = ({ children } : { children: ReactNode }) => {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 2 }}>
        {children}
    </ReactLenis>
  )
}

export default SmoothScroll;