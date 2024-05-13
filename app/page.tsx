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
import Social from "./components/socials";
import { useState } from "react";
export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <MusicProvider>
    <ScrollProvider>
    <MenuProvider>
    <main className=" ">
      { !show ?
      <FrontPage show={show}
      setShow={setShow} />

       : <div>
      <MobileNav />
      <Hero />
      <Social/>
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
