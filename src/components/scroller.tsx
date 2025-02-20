"use client";

import dynamic from "next/dynamic";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-loader";
import { useLenis } from "lenis/react";

import rocket from "../assets/animations/rocket.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Scroller = () => {

    const rocketRef = useRef<HTMLDivElement | null>(null);
    const scrollLineRef = useRef<HTMLDivElement | null>(null);

    const lenis = useLenis();

    useGSAP(() => {

        if(rocketRef.current && scrollLineRef.current && lenis?.rootElement.offsetHeight) {

            const maxScroll = lenis?.rootElement.offsetHeight;
            const scrollLine = scrollLineRef.current;
            const availableHeight = scrollLine?.offsetHeight;
    
            gsap.to(rocketRef.current, {
                y: availableHeight,
                ease: "none",
                scrollTrigger: {
                  trigger: ".scroller",
                    start: "clamp(top top)",
                    end: () => `+=${maxScroll}`,
                    scrub: 0.5,
                    invalidateOnRefresh: true,
                    onUpdate: self => {
                        const progress = self.progress;
                        const maxY = availableHeight;
                        const newY = Math.min(maxY, Math.max(0, progress * maxY));
                        gsap.set(rocketRef.current, { y: newY });
                    }
                }
            });
        }


    }, [lenis?.rootElement.offsetHeight]);

  return (
    <div className='fixed top-0 left-0 h-screen w-14 pt-24 scroller pointer-events-none z-40'>
      <div className='w-full h-full flex flex-col items-center'>
        <div ref={scrollLineRef} className='w-0 h-[90%] scroll-container border border-white flex flex-col items-center'>
            <div ref={rocketRef} className='size-12 rotate-180'>
                <Lottie animationData={rocket} loop />
            </div>
        </div>
        <div className='size-3 -translate-y-1 rounded-full bg-white'></div>
      </div>
    </div>
  )
}

export default Scroller;