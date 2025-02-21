"use client";

import dynamic from "next/dynamic";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-loader";
import { useLenis } from "lenis/react";

import rocket from "../assets/animations/rocket.json";
import { useViewportHeight } from "@/hooks/useVIewportHeight";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Scroller = () => {

    const rocketRef = useRef<HTMLDivElement | null>(null);
    const scrollLineRef = useRef<HTMLDivElement | null>(null);

    const lenis = useLenis();

    useGSAP(() => {

        if(rocketRef.current && scrollLineRef.current && lenis?.rootElement.offsetHeight) {

            const scrollLine = scrollLineRef.current;
            const availableHeight = scrollLine?.offsetHeight;
    
            gsap.to(rocketRef.current, {
                y: availableHeight,
                ease: "none",
                scrollTrigger: {
                  trigger: document.documentElement,
                  start: "clamp(top top)",
                  end: "bottom bottom",
                  scrub: 5,
                  invalidateOnRefresh: true,
                }
            });
        }


    }, [lenis?.rootElement.offsetHeight]);

    const height = useViewportHeight();

  return (
    <div style={{ height: height ? height : "100svh"}} className='fixed top-0 left-0 w-8 sm:w-10 lg:w-14 pt-24 scroller opacity-0 pointer-events-none z-40'>
      <div className='w-full h-full flex flex-col items-center'>
        <div ref={scrollLineRef} className='w-0 h-[90%] rotate-180 scroll-container border-[0.5px] border-white flex flex-col items-center relative'>
            <div ref={rocketRef} className='size-8 sm:size-10 lg:size-12 rotate-180 transition-all'>
                <Lottie animationData={rocket} loop />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Scroller;