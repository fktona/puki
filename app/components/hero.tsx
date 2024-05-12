'use client'
import React from 'react'
import Nav from './nav'
import Image from 'next/image'
import { useScroll } from '../context/scroll'


export default function Hero() {
  const {homeRef} = useScroll() as any;
  return (
    <div ref={homeRef}
     className='relative min-h-[100vh] w-[100%] lg:mb-[80px] overflow-x-hidden z-20 '>
      <div className=' absolute right-0  lg:w-[60%] w-[90%] aspect-square h-[95vh]  top-[5vh] '>
      <Image src='/teddy.png' width={940} height={940} alt='puki' className='relative heroflow w-full h-full'/>
      </div>
     <Nav />
     <div className=' relative z-10 mt-[110px] heroOP  lg:mt-[50px] md:px-[107px] px-[25px]  text-[60px] '>
        <div className=' font-bold text-white    '><p className='md:text-[50px] text-[30px] 
        leading-[87%]'>Welcome To </p>
        <p className='lg:text-[190px] md:text-[140px] text-[110px] leading-[87%] text-[#FFB500]'>pukionsol</p></div>
        <p className='text-white text-lg lg:mt-[50px] mt-8 text-[35px] md:text-[50px]  '>The baddest bear on the block (chain)</p>
        <button className='herobtn lg:px-[50px] bg-[#4E3133] px-[24px] mt-[45px] text-[35px] md:text-[64px] md:py-[6.7px]'>
        Grab  $PUKI
        </button>

        <div className=' flex items-center gap-8 mt-[60px] md:px-10'>
          <Image src='/telegram.png' width={40} height={40} alt='telegram' />
          <Image src='/x.png' width={40} height={40} alt='x' />
          <Image src='/sc.png' width={40} height={40} alt='sc' />
        </div>
     
     </div>

             
    </div>
  )
}