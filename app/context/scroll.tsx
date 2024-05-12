"use client";
import { useRef, useContext, createContext } from "react";

type ScrollContextType = {
  aboutRef: React.RefObject<HTMLDivElement>;
  homeRef: React.RefObject<HTMLDivElement>;
  coinRef: React.RefObject<HTMLDivElement>;
  dexRef: React.RefObject<HTMLDivElement>;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
};

export const ScrollContext = createContext<ScrollContextType | null>(null);

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const coinRef = useRef<HTMLDivElement>(null);
  const dexRef = useRef<HTMLDivElement>(null);


  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <ScrollContext.Provider
      value={
        {
          aboutRef,
          homeRef,
          coinRef,
          dexRef,
          scrollToSection,
        } as ScrollContextType
      }
    >
      {children}
    </ScrollContext.Provider>
  );
}
export function useScroll() {
  return useContext(ScrollContext);
}
