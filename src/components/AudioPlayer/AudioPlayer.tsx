"use client";
import SingleAudioPlayer from "@/components/AudioPlayer/SingleAudioPlayer";
import AudioWave from "@/components/AudioWave/AudioWave";
import Image from "next/image";
import { useState } from "react";
import { PiPlayPauseBold, PiSkipBack } from "react-icons/pi";

export type Song = {
  id: string;
  title: string;
  src: string;
  artist: string;
  img?: string;
};

type PropsDefinition = {
  songs: Song[];
};

export default function AudioPlayer({ songs }: PropsDefinition) {
  const [currentPlayingId, setCurrentPlayingId] = useState<string | null>(null);
  const [resetId, setResetId] = useState<string | null>(null);

  function handlePlayPause(id: string) {
    setCurrentPlayingId((prev) => (prev === id ? null : id));
  }

  function resetToBeginning(id: string) {
    setCurrentPlayingId(null);
    setResetId(id);
    setTimeout(() => setResetId(null), 0);
  }

  return (
    <>
      <div
        className="
    w-[95vw] sm:w-[75vw] max-w-[45rem] m-auto
    border-2 border-white rounded-xl 
    overflow-hidden 
    mt-4 
    text-center"
      >
          {songs.map((song, key) => (
            <div key={key}>
              <SingleAudioPlayer
                song={song}
                resetId={resetId ?? ""}
                resetToBeginning={resetToBeginning}
                bgColor={key % 2 === 0 ? "PINK" : "BLUE"}
                currentPlayingId={currentPlayingId ?? ""}
                handlePlayPause={handlePlayPause}
              />
            </div>
          ))}

        {/* <div id="showHideAllSongs" className="bg-myWhite-dark">
          <p
            className="text-myBlack-dark p-2 rounded-md cursor-pointer border-myBlack-dark border-2"
            onClick={() => setShowAllSongs(!showAllSongs)}
          >
            {showAllSongs ? "Collapse" : "Show More"}
          </p>
        </div> */}
      </div>
    </>
  );
}
