"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const Promo = () => {
  const headingRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const isControlsVisible = true;
  
  const isInView = useInView(headingRef, { once: true });

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && videoRef.current) {
      const progressRect = progressRef.current.getBoundingClientRect();
      const clickPosition = (e.clientX - progressRect.left) / progressRect.width;
      videoRef.current.currentTime = clickPosition * duration;
    }
  };

  // Update current time and progress bar
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      setCurrentTime(video.currentTime);
      const progressPercentage = (video.currentTime / video.duration) * 100;
      if (progressBarRef.current) {
        gsap.to(progressBarRef.current, {
          width: `${progressPercentage}%`,
          duration: 0.1
        });
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleVideoEnd = () => {
      setIsPlaying(false);
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  // Animate controls visibility
  useEffect(() => {
    if (controlsRef.current) {
      gsap.to(controlsRef.current, {
        opacity: isControlsVisible ? 1 : 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [isControlsVisible]);

  return (
    <div className="w-full pt-5 lg:pt-24 pb-10 px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32">
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-accent text-sm md:text-base px-1">PROMO</p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-2xl md:text-3xl lg:text-5xl font-semibold mt-3 text-white"
        >
          Three Years of Blink
        </motion.p>
      </motion.div>

      <div 
        className="w-full h-[280px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-md bg-black p-2 mt-10"
      >
        <div className="w-full h-full rounded bg-black overflow-hidden relative">
          <video 
            ref={videoRef}
            preload="metadata" 
            className="w-full h-full object-cover bg-black cursor-pointer" 
            muted={isMuted}
            onClick={togglePlay}
          >
            <source src="/videos/showreel.mp4" type="video/mp4" />
          </video>
          
          <div 
            ref={controlsRef}
            className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-md h-[15%] flex flex-col"
          >

            <div 
              ref={progressRef}
              className="w-full h-[15%] bg-black/30 cursor-pointer"
              onClick={handleProgressBarClick}
            >
              <div 
                ref={progressBarRef}
                className="h-full bg-accent"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>
            
            <div className="flex items-center justify-between w-full h-[85%] pr-2">
                <div className="flex h-full bg-black">
                    <div className="h-full w-10 md:w-14 lg:w-20 2xl:w-32 bg-black grid place-items-center">
                        <button 
                        onClick={togglePlay} 
                        className="text-white hover:text-accent transition-colors"
                        >
                        {isPlaying ? <Pause className="size-4 md:size-[2.5vw]" /> : <Play className="size-4 md:size-[2.5vw]" />}
                        </button>
                    </div>
                    <div className="h-full w-10 md:w-14 lg:w-20 2xl:w-32 bg-accent/80 grid place-items-center">
                        <button 
                        onClick={toggleMute} 
                        className="text-white hover:text-accent transition-colors"
                        >
                        {isMuted ? <VolumeX className="size-4 md:size-[2.5vw]" /> : <Volume2 className="size-4 md:size-[2.5vw]" />}
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                    <p className="font-bold text-[8px] md:text-sm xl:text-base 2xl:text-[1.2vw]">3 Year Showreel</p>
                    <div className="text-white text-[8px] md:text-sm">
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;