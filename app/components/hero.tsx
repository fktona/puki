'use client'
import React from 'react'
import Nav from './nav'
import Image from 'next/image'
import { useScroll } from '../context/scroll'


export default function Hero() {
  const {homeRef} = useScroll() as any;
  return (
    <div ref={homeRef}
     className='relative   w-[100%] min-h-[100vh] md:min-h-fit overflow-x-hidden z-20 '>
      <div className=' absolute right-[-35%] md:right-[-60px] opacity-100
       md:w-[60%] w-[151%] bottom-0 md:h-[90%] '>
      <Image src='/teddy.svg' width={940} height={940} alt='puki' className='relative 
      heroflow w-full h-full '/>
      </div>
     <Nav />
     <div className=' relative z-10 mt-[50px]   lg:mt-[50px] md:px-[107px] px-[25px]  text-[60px] '>
        <div className=' font-bold text-white'><p className='md:text-[50px] text-[30px] 
        leading-[87%]'>Welcome To </p>
        <p className='lg:text-[190px] md:text-[140px] text-[110px] leading-[87%] text-[#FFB500]'>pukionsol</p></div>
        <p className='text-white text-lg lg:mt-[50px] mt-8 text-[29px] md:text-[50px]  '>The baddest bear on the block (chain)</p>
        <button className='herobtn lg:px-[50px] bg-[#4E3133] px-[24px] mt-[60px] text-[35px] md:text-[64px] md:py-[6.7px]'>
        Grab  $PUKI
        </button>

        <div className=' flex pb-10 items-center gap-8 mt-[60px] md:px-10'>
          <Image src='/telegram.png' width={30} height={30} alt='telegram' />
          <Image src='/x.png' width={30} height={30} alt='x' />
          <Image src='/sc.png' width={30} height={30} alt='sc' />
        </div>
     
     </div>

             
    </div>
  )
}
