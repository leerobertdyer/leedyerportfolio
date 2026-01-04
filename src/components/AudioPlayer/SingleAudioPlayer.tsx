import { Song } from "@/components/AudioPlayer/AudioPlayer";
import AudioWave from "@/components/AudioWave/AudioWave";
import Image from "next/image";
import { PiPlayPauseBold } from "react-icons/pi";

interface iSingleAudioPlayer {
  song: Song;
  bgColor: string;
  handlePlayPause: (id: string) => void;
  currentPlayingId: string;
  resetId: string;
  resetToBeginning: (id: string) => void;
}

export default function SingleAudioPlayer({
  song,
  bgColor,
  handlePlayPause,
  currentPlayingId,
  resetId,
  resetToBeginning,
}: iSingleAudioPlayer) {
  const { id, title, src, artist, img } = song;

  return (
    <div
      id="mainOuterAudioPlayerDiv"
      className={`
            ${bgColor === "PINK" ? "bg-myPink-light" : "bg-myBlue-light"}
                w-full p-2
                flex flex-col justify-between items-center
                `}
    >
      <p
          className="text-lg text-white font-changa"
        >
          {artist} - <span className="text-myBlack-light">{title}</span>
        </p>
      <div
        id="audioImageWaveAndButtonsDiv"
        className="flex items-center w-full border-white bg-white border-2 rounded-lg pr-2"
      >
        <div
          id="audioPlayerImageDiv"
          className="
            relative
            w-[5rem] h-[5rem] 
            rounded-lg overflow-hidden
            border-2 border-white
            hover:cursor-pointer
            hover:scale-105
            transition-all duration-300 ease-in-out
            "
          onClick={() => handlePlayPause(id)}
        >
          <Image
            src={img || "/images/vintageFlowers.jpeg"}
            width={150}
            height={150}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-grow flex flex-col items-center justify-between text-xs">
          <AudioWave
            src={src}
            onPlayPause={() => handlePlayPause(id)}
            isPlaying={currentPlayingId === id}
            reset={resetId === id}
          />
        </div>
        <div
          className="
            border-myBlack-base border-2 p-2 
            rounded-md 
            text-[.75rem]
            flex flex-col
            justify-center items-center
            hover:bg-myBlack-base hover:text-white
            hover:cursor-pointer
            "
          onClick={() => handlePlayPause(id)}
        >
          <PiPlayPauseBold size={33} />
        </div>
      </div>
    </div>
  );
}
