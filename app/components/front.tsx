'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useMusic } from '../context/audioContext'

export default function FrontPage({ show , setShow}: { show: boolean , setShow: any}) {
  const { handleplayAudio } = useMusic() as any;
  const [fade , setFade] = useState(false)

  const handleShow = () => {
    setFade(true)
    setTimeout(() => {
      setShow(true)
    }, 1000);
    handleplayAudio()
  }
  return (
    <div className={`relative w-full min-h-[100vh]  flex justify-center ${fade && 'flow'} items-center  bg-[#21121B]`}>
    <div className='flex flex-col justify-around gap-10'>
      <div className={`relative w-full h-full front flex justify-center items-center `}>
        <Image src='/cteddy.svg' width={200} height={200} alt='eye ' className='relative z-10 vlg:w-[500px]  lg:w-[300px] lg:aspect-square'  />
        <Image src='/eye.png' width={200} height={200} alt='eye' className='absolute lg:w-[300px] vlg:w-[500px] lg:aspect-square '/>
        </div>
        <button onClick={handleShow}
         className='frontButton lg:px-[50px] py-[20px] lg:text-[47px] lg:py-[6.7px] vlg:text-[87px]'>
            LET ME IN
        </button>
    </div>

    </div>
  )
}
