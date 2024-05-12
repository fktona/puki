import Image from 'next/image'
export default function Items() {
    
  return (
    <div className='relative lg:py-[97px] md:py-[50px] py-[50px] '>
        <h1 className='w-full relative  lg:text-[72px] text-[51px] mb-10 text-center'>
        PUKI SHIT
        </h1>
        
        <div className='lg:px-[100px]  grid gap-8 lg:grid-cols-4 px-[25px] md:grid-cols-2 grid-cols-1'>
            {
                Array.from('1234').map((o , i) => (
                    <div key={i} className=' flex flex-col p-4 items-start gap-3 rounded-[35px] 
                    z-30 bg-[#4A3233]'>
                        <Image src={`/item${o}.svg`} alt='item' width={100} height={100} className=' 
                         w-full aspect-square'/>
                        <p className='lg:text-[30px] text-[25px]  text-center w-full px-8 md:px-2 '>{i == 0 && <><span className='text-[#FFB500]'>100% </span> LIQUIDITY NUKED! WE BREATHE FIRE NOW!</>}</p>
                        <p className='lg:text-[30px] text-[25px] text-center w-full px-8 md:px-2  '>{i == 1 && <><span className='text-[#FFB500]'>1,000,000,000 $PUKI </span><br/>TOKENS MINTED, YO! $PUKI'S
                         THE PLUG!</>}</p>
                         <p className='lg:text-[30px] text-[25px] text-center w-full px-8 md:px-2'>{i == 2 && <><span className='text-[#FFB500]'>REVOKED + MINT ANDFREEZE DISABLED!</span></>}</p>
                        <p className='lg:text-[30px] text-[25px] text-center px-8 md:px-2'>{i == 3 && <><span className='text-[#FFB500]'>$PUKI</span>  ain't payin' no taxes! Buy, sell, trade with Zero fe</>}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
