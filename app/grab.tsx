'use client'
import React from 'react'
import { useScroll } from './context/scroll'

export default function Grab() {
  const {dexRef} = useScroll() as any;
  return (
    <section ref={dexRef}
     className='grab w-full flex flex-col items-center justify-between lg:space-y-[150px] lg:py-[68px] py-[50px] space-y-[100px]'>
        <h2 className='lg:text-[102px] text-[#F5A435]  text-[45px]'>Get Wild with PUKI</h2>
        <button className='herobtn lg:px-[50px] px-[24px] mt-[45px] text-[35px] lg:text-[64px] lg:py-[6.7px]'>
        Grab  $PUKI
        </button>
     
    </section>
  )
}
