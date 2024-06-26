'use client'
import React from 'react'
import Image from 'next/image'
import { useScroll } from './context/scroll'
export default function About() {
  const {aboutRef} = useScroll() as any;
  return (
    <section className=' bgg relative '>
      <div className='relative  bg-[#341A1D]/80'>
    <div ref={aboutRef} 
    className=' relative  max-w-[1440px] mx-auto  flex justify-between flex-col lg:flex-row 
    items-center px-[25px] py-[50px]  md:gap-10 gap-6  lg:px-[107px]
     lg:py-[91px] md:py-[65px] md:px-[50px] '>
      
     
     <div className=''>
     <h1 className='lg:text-[72px] md:text-[50px] text-[35px]'>About</h1>
        <p className='lg:text-[45px] text-[20px] md:text-[35px] mt-[35px]  md:mt-[60px]'>
        Yo! They call me <span className='text-[#FFB500]'>$PUKI</span> , the baddest bear on the block (chain).
         Been high rollers all my life, from gamblin' to that digital coin craze. 
         Now the joke's on them - I am the damn coin! These digital streets ain't 
         ready for a G like me. Every other coin's gonna be lookin' up from the gutter. 
        They'll all know the name: <span className='text-[#FFB500]'>$PUKI</span>
        </p>
        </div>
        <Image src='/cteddy.svg' alt='about' width={450} height={520} className='lg:min-w-[450px] lg:h-[520px] w-[100%] aspect-square ' />
        
    </div>
    </div>
    </section>
    
  )
}

