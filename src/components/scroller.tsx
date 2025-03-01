"use client";

import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap-loader";
import rocket from "../assets/animations/rocket.json";
import { useViewportHeight } from "@/hooks/useVIewportHeight";
import { usePathname } from "next/navigation";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Scroller = () => {
  // Properly type your refs with HTMLDivElement
  const rocketRef = useRef<HTMLDivElement | null>(null);
  const scrollLineRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const height = useViewportHeight();
  
  // Use a ref to track if the component is mounted
  const isMounted = useRef(false);
  
  // Set mounted on initial render
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useGSAP(() => {
    // Always clear previous ScrollTriggers for this component
    ScrollTrigger.getAll().forEach(trigger => {
      // Check if the trigger is associated with this component
      if (trigger.vars && trigger.vars.trigger === document.documentElement) {
        trigger.kill();
      }
    });

    // Small delay to ensure DOM is ready after route change
    const initAnimation = () => {
      if (rocketRef.current && scrollLineRef.current && isMounted.current) {
        // Now TypeScript knows scrollLineRef.current is HTMLDivElement
        const scrollLine = scrollLineRef.current;
        const availableHeight = scrollLine.offsetHeight;
        
        gsap.to(rocketRef.current, {
          y: availableHeight,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "clamp(top top)",
            end: "clamp(bottom bottom)",
            scrub: 2.5,
            invalidateOnRefresh: true,
          }
        });
        
      }
    };
    
    // Delay animation setup slightly to ensure DOM is ready
    setTimeout(initAnimation, 100);
    
    // Clean up function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && trigger.vars.trigger === document.documentElement) {
          trigger.kill();
        }
      });
    };
  }, [pathname, height]);

  return (
    <div 
      style={{ height: height ? height : "100svh"}} 
      className='fixed top-0 left-0 w-8 sm:w-10 lg:w-14 pt-24 scroller opacity-0 pointer-events-none z-40'
    >
      <div className='w-full h-full flex flex-col items-center'>
        <div 
          ref={scrollLineRef} 
          className='w-0 h-[90%] rotate-180 scroll-container border-[0.5px] border-white flex flex-col items-center relative'
        >
          <div 
            ref={rocketRef} 
            className='size-8 sm:size-10 lg:size-12 2xl:size-14 rotate-180 transition-all'
          >
            <Lottie animationData={rocket} loop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroller;