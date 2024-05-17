'use client'
import { useState } from 'react'
import Nav from './nav'
import Image from 'next/image'
import { useScroll } from '../context/scroll'


export default function Hero() {
  const {homeRef} = useScroll() as any;
  const [copySuccess, setCopySuccess] = useState('');

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText('GwjR1knoW4KMcBGPKrURwvntqUyRenoaF4YyzwR8VYoy');
    setCopySuccess('Copied!');
  } catch (err) {
    setCopySuccess('Failed to copy!');
  }  finally {
    setTimeout(() => {
      setCopySuccess('');
    }, 1000);
  }
};


  return (
    <section className='bgg1'>
    <div ref={homeRef}
     className='relative max-w-[1440px] mx-auto    w-[100%] min-h-[100vh] md:min-h-fit overflow-hidden z-20 '>
      <div className=' absolute right-[-55%] md:right-[-25px] opacity-100
       md:w-[65%] lg:w-[60%]   p-5  w-[171%] bottom-[-15px] ] '>
      <Image src='/teddy.svg' width={940} height={940} alt='puki' className='relative 
      heroflow w-full h-full '/>
      </div>
     <Nav />
     <div className=' relative mt-[80px] z-50  md:pb-[180px] 
      lg:mt-[50px] md:px-[107px] px-[25px]  text-[60px] '>
        <div className=' font-bold text-white'><p className='md:text-[50px] text-[30px] 
        leading-[87%]'>Welcome To </p>
        <p className='lg:text-[190px] md:text-[140px] text-[110px] leading-[87%] text-[#FFB500]'>pukionsol</p></div>
        <p className='text-white text-lg lg:mt-[50px] mt-8 text-[32px] md:text-[50px]  '>The baddest bear on the block (chain)</p>
        <a href="https://dexscreener.com/solana/GwjR1knoW4KMcBGPKrURwvntqUyRenoaF4YyzwR8VYoy" target='_blank'><button className='herobtn lg:px-[50px] bg-[#4E3133] px-[24px] mt-[80px]  text-[35px] md:text-[64px] md:py-[6.7px]'>
        Grab  $PUKI
        </button></a>

        <div className='absolute space-y-6 lg:bottom-5 w-fit mt-6'>
         <p className='md:text-[30px] text-[25px] '>Contract Address:</p>
         <div onClick={copyToClipboard} className='md:text-[24px] px-3 py-1 rounded-md flex gap-2 bg-white/10 text-[18px]'><span>
          GwjR1knoW4KMcBGPKrURwvntq<br/>UyRenoaF4YyzwR8VYoy</span>
          <Image alt='copy' src={'/copy.svg'} width={40} height={40} className=' cursor-pointer '/>
             </div>
             {copySuccess && <div className='absolute top-[-20px] right-0 mx-auto z-50 md:text-[24px] px-3 py-1 rounded-md flex gap-2 bg-white/20 text-[18px] '>{copySuccess}</div>}  
        </div>

       
     </div>

             
    </div>
    </section>
  )
}
