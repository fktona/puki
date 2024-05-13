import React from 'react'
import Image from 'next/image'

export default function Social() {
  return (
    <div className=' flex bg-[#170D14] cursor-pointer  items-center lg:gap-8 gap-6  justify-center py-[30px] lg:py-[55px] px-[26px]'>
    <div className='bg-white/5 lg:w-[100px] w-[80px] flex items-center aspect-square justify-center  hover:scale-110 transition-all duration-300 p-4 lg:rounded-[22px] rounded-md'><Image src='/telegram.svg' width={50} height={50} alt='telegram' /></div>
    <div className='bg-white/5 lg:w-[100px] w-[80px] flex items-center aspect-square justify-center hover:scale-110 transition-all duration-300 lg:rounded-[22px] rounded-md'><Image src='/x.svg' width={50} height={50} alt='x' /></div>
    <div className='bg-white/5 lg:w-[100px] w-[80px] flex items-center aspect-square justify-center hover:scale-110 transition-all duration-300 lg:rounded-[22px] rounded-md'><Image src='/sc.svg' width={50} height={50} alt='sc' /></div>
    <div className='bg-white/5 lg:w-[100px] w-[80px] flex items-center aspect-square justify-center hover:scale-110  transition-all duration-300 lg:rounded-[22px] rounded-md'><Image src='/ss.svg' width={40} height={40} alt='sc' /></div>
  </div>

  )
}
