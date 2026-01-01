"use client";
import LoadingWheel from "@/components/LoadingWheel/LoadingWheel";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

type PropsDefinition = {
  src: string;
  onPlayPause: () => void;
  reset: boolean;
  isPlaying?: boolean;
};

export default function AudioWave({
  src,
  isPlaying = false,
  onPlayPause,
  reset,
}: PropsDefinition) {
  const waveContainer = useRef(null);
  const waveSurferRef = useRef<WaveSurfer | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (waveSurferRef.current) {
      waveSurferRef.current.seekTo(0);
      waveSurferRef.current.pause();
    }
  }, [reset]);

  useEffect(() => {
    if (waveContainer.current && !waveSurferRef.current) {
      waveSurferRef.current = WaveSurfer.create({
        container: waveContainer.current,
        waveColor: "#FF9A1F",
        progressColor: "#0e6b8b",
        cursorWidth: 4,
        cursorColor: "#e0389a",
        height: 60,
        url: src,
        barWidth: 3,
        barRadius: 50,
        barGap: 2,
      });
    }

    waveSurferRef.current?.on("ready", () => {
      setIsReady(true);
    });

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        if (isHovered) onPlayPause();
      }
    };

    if (isPlaying) {
      waveSurferRef.current?.play();
    } else {
      waveSurferRef.current?.pause();
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [
    isHovered,
    src,
    isPlaying,
    onPlayPause,
  ]);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div
      className="
    w-full
    bg-white 
    rounded-md p-2 my-[2px]
    hover:cursor-pointer
    hover:bg-tinyBlack-base hover:bg-opacity-50
    transition-all duration-300 ease-in-out"
    >
      <div
        id="waveform"
        className="h-[4rem]"
        ref={waveContainer}
        onDoubleClick={() => onPlayPause()}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        {!isReady && <LoadingWheel />}
      </div>
    </div>
  );
}
