import React from 'react'

const Video = () => {
  return (
    <div className='w-full h-screen promo border-t-2 border-accent relative'>
        <video className='w-full h-full absolute top-0 left-0 object-cover z-[5]' autoPlay muted loop controls={false} playsInline>
            <source src="/videos/showreel.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none"></div>
    </div>
  )
}

export default Video;
