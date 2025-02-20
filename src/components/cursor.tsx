"use client";

import { noTriggerToAnimations } from '@/lib/animations';
import { gsap } from '@/lib/gsap-loader';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'

const Cursor = () => {

    const cursorRef = useRef<HTMLDivElement | null>(null);

    const checkIsTouchDevice = () => {
        if (typeof window !== "undefined") {
          return "ontouchstart" in window;
        }
        return false;
    };

    const isTouchDevice = checkIsTouchDevice();

    useGSAP(() => {

        if(isTouchDevice) {
            return;
        }

        gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

        const onMouseMove = (e: MouseEvent) => {

            const target = e.target as Element | null;

            const isActionable = target?.closest(".actionable");

            noTriggerToAnimations(cursorRef.current, {
                duration: 0.7,
                x: e.clientX,
                y: e.clientY,
                transform: `scale(${isActionable ? 0.5 : 1})`,
                ease: "power4",
                overwrite: "auto",
                opacity: 1
            })
        }

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };

    }, [isTouchDevice])

  return (
    <div ref={cursorRef} className='size-4 z-[9999] opacity-0 pointer:opacity-100 fixed top-0 left-0 rounded-full select-none pointer-events-none bg-accent'></div>
  )
}

export default Cursor;