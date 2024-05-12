"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useScroll } from "../context/scroll";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import { useMenu } from "../context/MenuContext";
export default function MobileNav({}: {}) {
  const {
    scrollToSection,
    aboutRef,
    homeRef,
    coinRef,
    dexRef,
  } = useScroll() as any;

  const { handleOpenMenu ,openMenu } = useMenu();
  const [aniLeft, setAniLeft] = useState<boolean>(false);
  const handleCloseMenu = (section?: any) => {
    if (section) {
      scrollToSection(section);
    }
    setAniLeft(true);
    setTimeout(() => {
      handleOpenMenu();
    }, 1000);
  };
  const segment = useSelectedLayoutSegment();
  return (
    <>
    { openMenu &&
    <nav
      className={`lg:hidden top-0 menu fixed bottom-0 w-[80%] z-[100]  h-full`}>
        <Image alt='puki' src='/cteddy.svg' width={98} height={62}  className="absolute  "/>
        <ul className="flex flex-col gap-8 justify-center items-start w-fit mx-auto    ">
          <li
            onClick={() => handleCloseMenu(aboutRef)}
            className={`text-white text-3xl font-bold cursor-pointer
             text-start  bottom-0 overflow-hidden relative mb-2 
              ${aniLeft ? "left-[]" : "left-0"}
            `}
          >
           <span className=" menuli">Home</span>
          </li>
          <li
            onClick={() => handleCloseMenu(homeRef)}
            className={`text-white text-3xl font-bold overflow-hidden cursor-pointer ${
              aniLeft ? "left-[]" : "left-0"
            }`}
          >
            <span className="menuli">About</span>
          </li>
          <li
            onClick={() => handleCloseMenu(coinRef,)}
            className={`text-white text-3xl font-bold overflow-hidden cursor-pointer ${
              aniLeft ? "left-[]" : "left-0"
            }`}
          >
            <span className="menuli">Buy $COIN</span>
          </li>
          <li
            onClick={() => handleCloseMenu(dexRef)}
            className={`text-white text-3xl font-bold overflow-hidden cursor-pointer ${
              aniLeft ? "left-[]" : "left-0"
            }`}
          >
            <span className="menuli">Dexscreener</span>
          </li>
        </ul>
    
    </nav>
    }
    </>
  );
}
