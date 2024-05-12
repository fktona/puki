"use client";
import {
  useContext,
  useState,
  createContext,
  useRef,
  use,
  useEffect,
} from "react";
import { ReactNode } from "react";
// import MusicPlayer from "../components/music";

const musicContext = createContext<any>(null);

const MusicProvider = ({ children }: { children: ReactNode }) => {
  const [playAudio, setPlayAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const handleplayAudio = () => {
    if (playAudio) {
      audioRef.current?.pause();
      setPlayAudio(false);
    } else {
      audioRef.current?.play();
      setPlayAudio(true);
    }
  };
  return (
    <musicContext.Provider value={{ playAudio, handleplayAudio }}>
      <div>
        <audio ref={audioRef} src="/play.m4a" loop />
      </div>

      {children}
      {/* <MusicPlayer /> */}
    </musicContext.Provider>
  );
};
export default MusicProvider;
export const useMusic = () => useContext(musicContext);
