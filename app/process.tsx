'use client'
import React from 'react'
import Image from 'next/image'
import { useScroll } from './context/scroll';

export default function Process() {
  const {coinRef} = useScroll() as any;
  return (
    <main className=' bgg  relative '>
      <section className=' bg-[#341A1D]/80'>
    <div  ref={coinRef}
    className='lg:px-[120px] max-w-[1440px] mx-auto lg:py-[100px]  px-[25px] py-[50px] '>
        <h1 className='w-full text-center lg:text-[82px] text-[47px]'>How To GET DA $PUKI</h1>
        <div className='md:space-y-[104px] space-y-[60px]'>
            <div className='flex flex-col md:flex-row justify-center
             text-start items-center lg:mt-[106px] mt-[50px] lg:gap-[150px] md:gap-[50px] gap-[40px]'>
              <div className='lg:space-y-8 space-y-8 md:max-w-[50%]'>  
                <h3 className='lg:text-[48px] text-[30px]'>Create DA Solana wallet</h3>
                <p className='lg:text-[36px] text-[25px]  text-start'>Create a Phantom or Solflare Wallet using either a desktop computer or an 
                    iOS/Android mobile device.
                     That will allow you to buy, sell, send, and receive 
                     <span className='text-[#F5A435]'> $PUKI</span></p>
            </div>
            <Image src='/process1.svg' width={490} height={312} alt='eye' className='rounded-[11px]' />         
        </div>

        
        <div className='flex flex-col md:flex-row-reverse justify-center
             text-start items-center lg:mt-[106px] mt-[50px] lg:gap-[150px] md:gap-[50px] gap-[40px]'>
          <div className='lg:space-y-8 space-y-5 md:max-w-[50%]'>  
                <h3 className='lg:text-[48px] text-[30px]'> Send SOL to your wallet</h3>
                <p className='lg:text-[36px] text-[25px]  text-start'>You can buy SOL or transfer
                 it from exchanges like <span className='text-[#F5A435]'> OKX, Coinbase & Binance</span></p>
            </div>
            <Image src='/process2.svg' width={490} height={312} alt='eye' className='rounded-[11px]' />         
        </div>


        <div className='flex flex-col  md:flex-row justify-center
             text-start items-center lg:mt-[106px] mt-[50px] lg:gap-[150px] md:gap-[50px] gap-[40px]'>
        <div className='lg:space-y-8 space-y-5 md:max-w-[50%]'>  
                <h3 className='lg:text-[48px] text-[30px]'> Connect YA & Swap PA</h3>
                <p className='lg:text-[36px] text-[25px]  text-start'>Go to Jupiter and connect yA wallet AND click
                 ‘Connect wallet’ selecting DA Phantom. Press ‘Select a token’ and enter da token to da contract
                 address to find da <span className='text-[#F5A435]'>$PUKI</span>
                  and start your swap from SOL to <span className='text-[#F5A435]'>$PUKI </span></p>
            </div>
            <div className='bg-[#F5A435] rounded-[11px]'>
            <Image src='/process3.svg' width={490} height={312} alt='eye' /> 
            </div>        
        </div>


        </div>
    </div>
    </section>
    </main>
  )
}
