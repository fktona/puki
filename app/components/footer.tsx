import Image from "next/image"

export default function Footer() {
  return (
    <footer className='bg-[#341A1D] md:px-[120px] flex flex-col-reverse 
    lg:flex-row justify-between lg:gap-[100px] gap-8  md:py-[50px] items-center lg:items-end'>
    
            <p className='lg:text-[37px] md:text-[28px] text-[24px]'>
            $PUKI 2024 ALL RIGHT RESERVED.
            </p>
            <div className="flex flex-col justify-center ">
                <div className="flex relative justify-center">
            <Image src='/sol.png' width={38} height={38} alt='sol' className="relative rounded-full" />
            <Image src='/footer.png' width={40} height={40} alt='sol' className="relative z-10 -left-4"  />
            </div>
            <p className='lg:text-[37px] md:text-[28px] text-[24px]'>PUKI ON SOLANS</p>
            </div>
            <div className="flex flex-col justify-center gap-3 max-w-[400px]">
                <p className='lg:text-[37px] md:text-[28px] text-center lg:text-start text-[24px]'>Disclaimer</p>
                <p className='lg:text-[20px] md:text-[18px] text-[16px] '>Yo, $PUKI ain't no suit and tie kinda coin. This is pure entertainment, 
                    a meme for the streets. Don't expect lambos or mansions, 
                    but you might get a good laugh. Entertainment purposes only.</p>
                    </div>

    </footer>
  )
}
