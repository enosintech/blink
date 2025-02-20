import { gsap } from "./gsap-loader";

export const noTriggerToAnimations = (target: gsap.TweenTarget, animationProps: gsap.TweenVars) => {
    gsap.to(target, {
        ...animationProps
    })
};

export const triggerToAnimations = ( target: gsap.TweenTarget, animationProps: gsap.TweenVars, scrollProps: ScrollTrigger.StaticVars ) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            ...scrollProps
        }
    })
};