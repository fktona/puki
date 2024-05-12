import Image from "next/image"

export default function Footer() {
  return (
    <footer className='bg-[#341A1D] md:px-[100px] px-[25px] flex flex-col-reverse 
    lg:flex-row justify-between gap-[80px]   py-[50px]  items-center lg:items-end'>
    
            <p className='lg:text-[37px] md:text-[28px] text-[24px]'>
            $PUKI 2024 ALL RIGHTS RESERVED.
            </p>
            <div className="flex flex-col  items-center justify-start">
                <div className="flex relative justify-center ">
            <Image src='/sol.png' width={38} height={38} alt='sol' className="relative rounded-full" />
            <Image src='/footer.png' width={40} height={40} alt='puki' className="relative z-10 -left-4"  />
            </div>
            <p className='lg:text-[37px] md:text-[28px] text-[24px]'>PUKI ON SOLANA</p>
            </div>
            <div className="flex flex-col justify-center gap-3 lg:max-w-[30%]">
                <p className='lg:text-[37px] md:text-[28px]  lg:text-start text-[24px]'>Disclaimer</p>
                <p className='lg:text-[20px] md:text-[18px] text-[16px] '>Yo, $PUKI ain't no suit and tie kinda coin. This is pure entertainment, 
                    a meme for the streets. Don't expect lambos or mansions, 
                    but you might get a good laugh. Entertainment purposes only.</p>
                    </div>

    </footer>
  )
}
