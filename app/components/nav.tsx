'use client'
import Image from 'next/image'
import { useMenu } from '../context/MenuContext'
import { useScroll } from '../context/scroll'
import { delay, motion } from 'framer-motion'

export default function Nav() {

  const { scrollToSection,
    aboutRef,
    homeRef,
    coinRef,
    dexRef,
   } = useScroll() as any;

  const { openMenu, handleOpenMenu } = useMenu();

  const bounce = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 , y: 20},
    visible: { opacity: 1 , y: 0},
  };

  
  return (
    <nav className='relative w-full  flex justify-between z-[50]
     items-center  lg:px-[109px]   px-5 md:mt-[26px]'>
      <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.2, delay:1 }}>
        
        <Image alt='puki' src='/cteddy.svg' width={170} height={170} />
        </motion.div>
        <ul className=' text-[33px]  font-normal cursor-pointer text-white 
        md:flex hidden lg:gap-[40px] 
        gap-10 justify-center items-center'>
            <motion.li
             variants={bounce}
             initial="hidden"
             animate="visible"
             transition={{ type:'spring', duration: 0.2, delay:1.2 }}
              className='navHover px-4 py-2 rounded-[89px] transition-all li duration-300'
               onClick={() => scrollToSection(homeRef) }>Home</motion.li>
            <motion.li
             variants={bounce}
             initial="hidden"
             animate="visible"
             transition={{ duration: 0.2, delay: 1.3 , damping:60 }}
              className='navHover px-4 py-2 rounded-[89px] transition-all li duration-300'
               onClick={() => scrollToSection(aboutRef)}>About</motion.li>
            <motion.li
             variants={bounce}
             initial="hidden"
             animate="visible"
             transition={{ duration: 0.2, delay: 1.4 }}
              className='navHover px-4 py-2 rounded-[89px] transition-all li duration-300' 
              >Buy $PUKI</motion.li>
            <motion.li 
             variants={bounce}
             initial="hidden"
             animate="visible"
             transition={{ duration: 0.2, delay: 1.5 }}
             className='navHover px-4 py-2 rounded-[89px] transition-all li duration-300'
            >Dexscreener</motion.li>
        </ul>

        <motion.div
        variants={bounce}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.2, delay: 1}}
        onClick={handleOpenMenu}
        className="gap-[3px] z-[77777] md:hidden cursor-pointer relative flex flex-col"
      >
        <span
          className={`${openMenu ? "rotate-45 top-1" : ""} transition-all duration-300 delay-75 w-[42px]   h-[6px] relative bg-white`}
        ></span>
        <span
          className={` ${openMenu ? "-rotate-45 bottom-1" : ""} w-[42px]  transition-all duration-300 delay-75 relative  h-[6px] bg-white`}
        ></span>
        <span
          className={`${openMenu ? "-bottom-3" : ""} transition-all duration-300  w-[42px] relative   h-[6px] bg-white`}
        ></span>
      </motion.div>


    </nav>
  )
}
