'use client'
import FrontPage from "./components/front";
import Nav from "./components/nav";
import Hero from "./components/hero";
import About from "./about";
import MenuProvider from "./context/MenuContext";
import ScrollProvider from "./context/scroll";
import Items from "./components/items";
import Process from "./process";
import Grab from "./grab";  
import Footer from "./components/footer";
import MobileNav from "./components/mobileNav";
import MusicProvider from "./context/audioContext";
import { useState } from "react";
export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <MusicProvider>
    <ScrollProvider>
    <MenuProvider>
    <main className=" relative max-w-[1440px] mx-auto">
      { !show ?
      <FrontPage show={show}
      setShow={setShow} />

       : <div>
      <MobileNav />
      <Hero />
      <About />
      <Items />
      <Process/>
      <Grab />
      <Footer />
      </div>
}
          </main>
    </MenuProvider>
    </ScrollProvider>
    </MusicProvider>
  );
}
