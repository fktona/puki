import React from 'react'
import Image from 'next/image'

export default function Social() {
  return (
    <div className=' bg-[#170D14]'>
    <div className=' flex cursor-pointer max-w-[1440px] mx-auto items-center lg:gap-8 gap-6  justify-center py-[30px] lg:py-[55px] px-[26px]'>
    <a href='https://t.me/pukionsol' target='_blank' className='bg-white/5 lg:w-[100px] w-[80px] flex items-center aspect-square justify-center  hover:scale-110 transition-all duration-300 p-4 lg:rounded-[22px] rounded-md'><Image src='/telegram.svg' width={50} height={50} alt='telegram' /></a>
    <div className='bg-white/5 lg:w-[100px] w-[80px] flex items-center aspect-square justify-center hover:scale-110 transition-all duration-300 lg:rounded-[22px] rounded-md'><Image src='/x.svg' width={50} height={50} alt='x' /></div>
    <div className='bg-white/5 lg:w-[100px] w-[80px] flex items-center aspect-square justify-center hover:scale-110 transition-all duration-300 lg:rounded-[22px] rounded-md'><Image src='/dex.svg' width={50} height={50} alt='sc' /></div>
    <div className='bg-white/5 lg:w-[100px] w-[80px] flex items-center aspect-square justify-center hover:scale-110  transition-all duration-300 lg:rounded-[22px] rounded-md'><Image src='/ss.svg' width={40} height={40} alt='sc' /></div>
  </div>
  </div>

  )
}
