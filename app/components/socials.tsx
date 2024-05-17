import React from 'react'
import Image from 'next/image'

export default function Social() {
  return (
    <div className=' bg-[#170D14]'>
    <div className=' flex cursor-pointer max-w-[1440px] mx-auto items-center lg:gap-8 gap-6  justify-center py-[30px] lg:py-[55px] px-[26px]'>
    <a href='https://t.me/pukionsol' target='_blank' className='bg-white/5 lg:w-[100px] w-[80px] flex items-center aspect-square justify-center  hover:scale-110 transition-all duration-300 p-4 lg:rounded-[22px] rounded-md'><Image src='/telegram.svg' width={50} height={50} alt='telegram' /></a>
    <a href="https://twitter.com/pukionsolana" target='_blank'><div className='bg-white/5 lg:w-[100px] w-[80px] flex items-center aspect-square justify-center hover:scale-110 transition-all duration-300 lg:rounded-[22px] rounded-md'><Image src='/x.svg' width={50} height={50} alt='x' /></div></a>
    <a href="https://dexscreener.com/solana/GwjR1knoW4KMcBGPKrURwvntqUyRenoaF4YyzwR8VYoy" target='_blank'>
    <div className='bg-white/5 lg:w-[100px] w-[80px] flex items-center
     aspect-square justify-center hover:scale-110 transition-all duration-300
      lg:rounded-[22px] rounded-md'><Image src='/dex.svg' width={50} height={50} alt='sc' /></div></a>
    <a href="https://www.dextools.io/app/en/solana/pair-explorer/GwjR1knoW4KMcBGPKrURwvntqUyRenoaF4YyzwR8VYoy?t=1715966314296&__cf_chl_rt_tk=bqyKu3FHvfxyzTLonEuzQb5feJmTQKBufRb.Ql7xd9Q-1715980132-0.0.1.1-1493" target='_blank'>
    <div className='bg-white/5 lg:w-[100px] w-[80px] flex items-center aspect-square justify-center hover:scale-110
      transition-all duration-300 lg:rounded-[22px] rounded-md'><Image src='/ss.svg' width={40} height={40} alt='sc' /></div></a>
  </div>
  </div>

  )
}
