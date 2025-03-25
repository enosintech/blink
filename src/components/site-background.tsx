"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from "three";
import React from 'react'
import { useViewportHeight } from '@/hooks/useVIewportHeight';
import { gsap } from '@/lib/gsap-loader';
import { useGSAP } from '@gsap/react';
import { useLoadingValue } from '@/context/loadingValueContext';
import { useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';

const SiteBackground = () => {
    const [timelineComplete, setTimelineComplete] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const uniformsRef = useRef({
        u_time: { value: 0.5 },
        u_resolution: { value: new THREE.Vector2() },
        u_gradientX: { value: 0.0 },
        u_gradientY: { value: 0.0 },
        u_scale: { value: 1.0 },
        u_amplitude: { value: 2.0 }
    });

    const { loadingValue } = useLoadingValue();
    const pathname = usePathname();

    const VELOCITY_CONFIG = {
        initial: 0.01,
        acceleration: 0.001,
        friction: 0.99,
        minVelocity: 0.004,
        maxVelocity: 0.06
    };

    const velocityRef = useRef(VELOCITY_CONFIG.initial);

    const lenis = useLenis(() => {
        if (loadingValue !== 100 && !timelineComplete) {
            lenis?.scrollTo(0, { immediate: true, force: true });
            lenis?.stop();
        } else {
            lenis?.start();
        }
    }, [loadingValue, timelineComplete]);

    const calculateVelocity = useCallback((currentVelocity: number, isIncreasing: boolean = false) => {
        let newVelocity = currentVelocity;
        
        if (isIncreasing) {
            newVelocity = Math.min(
                Math.max(
                    currentVelocity + VELOCITY_CONFIG.acceleration, 
                    VELOCITY_CONFIG.minVelocity
                ), 
                VELOCITY_CONFIG.maxVelocity
            );
        } else {
            newVelocity = Math.max(
                currentVelocity * VELOCITY_CONFIG.friction, 
                VELOCITY_CONFIG.minVelocity
            );
        }

        return newVelocity;
    }, [VELOCITY_CONFIG.acceleration, VELOCITY_CONFIG.friction, VELOCITY_CONFIG.maxVelocity, VELOCITY_CONFIG.minVelocity]);

    useGSAP(() => {
        gsap.set(".gradient", { opacity: 1 });
        gsap.set(uniformsRef.current.u_amplitude, { value: 2.0 });

        if (loadingValue !== 100) {
            const loadingFactor = loadingValue / 100;
            
            velocityRef.current = calculateVelocity(velocityRef.current, true);

            gsap.to(uniformsRef.current.u_time, {
                value: uniformsRef.current.u_time.value + velocityRef.current * loadingFactor, 
                duration: 0.2,
                ease: "power2.out",
            });
        }

        if (loadingValue === 100) {
            const tl = gsap.timeline({
                onComplete: () => setTimelineComplete(true)
            });

            tl.to(".vanish-down", {
                opacity: 0,
                duration: 0.5,  
                pointerEvents: "none",
            })
            .to(uniformsRef.current.u_time, {
                value: uniformsRef.current.u_time.value + 2.0,
                duration: 2.5,
            })
            .to(uniformsRef.current.u_amplitude, {
                value: 1.5,
                duration: 2.5,
            }, "<")
            .to(".gradient", {
                opacity: 0.65,
                duration: 2.5,
            }, "<");
        }
    }, [loadingValue]);

    useGSAP(() => {
        if (pathname === "/") {
            gsap.fromTo(".gradient", 
                { opacity: 0.65 },
                {
                    opacity: 0.25,
                    scrollTrigger: {
                        trigger: ".bg-trigger",
                        start: "top bottom",
                        end: "top center",
                        scrub: true
                    }
                }
            );

            gsap.fromTo(uniformsRef.current.u_amplitude, 
                { value: 1.5 },
                {
                    value: 1.0,
                    scrollTrigger: {
                        trigger: ".bg-trigger",
                        start: "top bottom",
                        end: "top center",
                        scrub: true
                    }
                }
            );
        }
    }, [pathname]);

    useEffect(() => {
        if (!containerRef.current) return;

        sceneRef.current = new THREE.Scene();
        cameraRef.current = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        rendererRef.current = new THREE.WebGLRenderer({ alpha: true });
        rendererRef.current.setClearColor(0x000000, 1);
        rendererRef.current.setSize(
            containerRef.current.clientWidth, 
            containerRef.current.clientHeight
        );
        containerRef.current.appendChild(rendererRef.current.domElement);

        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
            uniforms: uniformsRef.current,
            vertexShader,
            fragmentShader,
        });

        const mesh = new THREE.Mesh(geometry, material);
        sceneRef.current.add(mesh);

        uniformsRef.current.u_resolution.value.x = containerRef.current.clientWidth;
        uniformsRef.current.u_resolution.value.y = containerRef.current.clientHeight;

        let animationFrameId: number;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;

            rendererRef.current.render(sceneRef.current, cameraRef.current);

            velocityRef.current = calculateVelocity(velocityRef.current);
        };
  
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            rendererRef.current?.dispose();
        };
    }, [calculateVelocity]);

    useEffect(() => {
        const handleResize = () => {
            if (!containerRef.current || !rendererRef.current) return;
            
            rendererRef.current.setSize(
                containerRef.current.clientWidth,
                containerRef.current.clientHeight
            );
            uniformsRef.current.u_resolution.value.x = containerRef.current.clientWidth;
            uniformsRef.current.u_resolution.value.y = containerRef.current.clientHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!timelineComplete) return;
    
        const handleMouseMove = () => {
            velocityRef.current = calculateVelocity(velocityRef.current, true);

            gsap.to(uniformsRef.current.u_time, {
                value: uniformsRef.current.u_time.value + velocityRef.current,
                duration: 0.2,
                ease: "power2.out",
            });
        };

        const animate = () => {
            velocityRef.current = calculateVelocity(velocityRef.current);

            gsap.to(uniformsRef.current.u_time, {
                value: uniformsRef.current.u_time.value + velocityRef.current,
                duration: 0.2,
                ease: "power2.out",
            });
            requestAnimationFrame(animate);
        };

        animate();
      
        window.addEventListener('mousemove', handleMouseMove as EventListener);
    
        return () => {
            window.removeEventListener('mousemove', handleMouseMove as EventListener);
        };
    }, [timelineComplete, pathname, calculateVelocity]);

    const height = useViewportHeight();

    return (
        <>
            <div 
                className='fixed top-0 left-0 w-full bg-black z-[-1] h-[1500px] sm:h-[100lvh]' 
                style={{ opacity: `${loadingValue}%` }}
            >
                <div className='w-full h-full gradient opacity-100'>
                    <div className={`w-full h-full ${pathname.startsWith("/blink-productions") && "opacity-0"}`}>
                        <div ref={containerRef} className='w-full h-full'></div>
                    </div>
                </div>
            </div>
            <div 
                className='fixed z-[1] top-0 left-0 w-full vanish-down' 
                style={{ height: height ? height : "100svh" }} 
            />
        </>
    );
};

export default SiteBackground;

const vertexShader = `
    void main() {
        gl_Position = vec4(position, 1.0);
    }
`;

const fragmentShader = `
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform float u_gradientX;
    uniform float u_gradientY;
    uniform float u_scale;
    uniform float u_amplitude;

    void main() {
        vec2 uv = (2.0 * gl_FragCoord.xy - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
        
        for(float i = 1.0; i < 10.0; i++) {
            uv.x += 0.6 / i * cos(i * (u_amplitude + 0.5) * uv.y + u_time);
            uv.y += 0.6 / i * cos(i * (u_amplitude - 0.5) * uv.x + u_time);
        }
        
        vec3 orangeColor = vec3(0.953, 0.459, 0.133);
        vec3 blackColor = vec3(0.0);
        
        float pattern = abs(sin(u_time - uv.y - uv.x));
        
        pattern = pow(pattern, 4.0); 
        vec3 finalColor = mix(blackColor, orangeColor, pattern * 0.4);
        
        gl_FragColor = vec4(finalColor, 1.0);
    }
`;