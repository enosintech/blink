import Image from 'next/image';
import React from 'react'

const SectionFooter = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start items-center gap-10 xl:max-h-80 h-[500px] relative mt-10">
        <div className='size-36 relative'>
            <Image unoptimized src="/images/blink-eye.gif" alt="blinking eye" fill className="object-contain overflow-visible" />
        </div>
        <div>
            <div>
                <p className="font-bold text-lg">CONTACT US AT</p>
                <a href="mailTo:info@blink.co.zm">
                    <p className="pointer:hover:text-accent pointer:active:opacity-80 transition-all actionable font-medium">INFO@BLINK.CO.ZM</p>
                </a>
            </div>
        </div>
      <p className="text-accent text-xs font-bold absolute bottom-3">© {new Date().getFullYear()} Blink Marketing Solutions - All Rights Reserved</p>
    </div>
  )
}

export default SectionFooter;
