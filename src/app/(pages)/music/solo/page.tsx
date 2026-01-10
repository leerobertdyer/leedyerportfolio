"use client";

import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";
import BioSection from "@/components/BioSection/BioSection";
import FramedPhoto from "@/components/FramedPhoto/FramedPhoto";
import ShowsSection from "@/components/ShowsSection/ShowsSection";
import YouTubeLite from "@/components/YouTube/YouTube";
import Link from "next/link";
import "dotenv/config";
import { SOLO_CALENDAR_ID } from "@/utils/consts";

export default function soloAct() {

  const allSongs = [
    {
      id: "1",
      title: "Morning Light",
      src: "../audio/solo/morningLight.mp3",
      artist: "Tiny Sun",
      img: "/images/maskedBackground.jpeg",
    },

    {
      id: "2",
      title: "Audrey",
      src: "../audio/solo/audrey.mp3",
      artist: "Tiny Sun",
      img: "/images/maskedBackground.jpeg",
    },
    {
      id: "3",
      title: "Erin Dawn",
      src: "../audio/solo/erinDawn.mp3",
      artist: "Tiny Sun",
      img: "/images/maskedBackground.jpeg",
    },
  ];
  return (
    <div className="bg-[url(/images/maskedBackground.jpeg)] bg-cover bg-top text-myWhite-dark flex flex-wrap items-center justify-center gap-4 p-4">
      <BioSection mdWidth="md:w-[40rem]" padding="p-4">
        <p>
          <span className="text-3xl text-myWhite-light">Lee Dyer</span> is a
          singer-songwriter with over 20 years of performance experience,
          originally from Northern Michigan and now based in Charlotte, NC.
        </p>
        <p className="mt-4">
          His solo work is minimal and melodic - drawing influence from artists
          like Elliott Smith and the Beatles. Fingerpicked guitar, melody, and
          lyrics are the focus, blending select covers with a deep catalog of
          original songs released under the name <span className="text-myOrange-base">Tiny Sun</span>.
        </p>

        <Link href="/contact" className="text-myBlue-base">
          Contact
        </Link>

        <div className="w-full flex items-center gap-2 mt-4">
          <FramedPhoto location="/images/leeSinging.jpeg" />
          <div className="hidden md:block">
            <FramedPhoto location="/images/leeBlueStanding.jpg" />
          </div>
        </div>
      </BioSection>
      <ShowsSection calendarId={SOLO_CALENDAR_ID} />

      <AudioPlayer songs={allSongs} />

      <div className="w-full flex justify-center">
        <YouTubeLite
          id="09O7zjKqaRg"
          title="Cover - CCR: Lookin Out My Back Door"
        />
      </div>

      <YouTubeLite id="77kikByulrw" title="Cover - Elliot Smith: Memory Lane" />

      <div className="w-full h-fit flex flex-col items-center">
        <div className="bg-myBlack-dark bg-opacity-90 rounded-md p-4 flex flex-col items-center justify-center w-[20rem] md:w-[40rem] h-fit ">
          <h2 className="text-2xl">Current cover List</h2>
          <div className="text-myWhite-light flex flex-col items-start text-sm md:text-lg">
            <p>
              Boots Of Italian Leather -{" "}
              <span className="text-myPink-light">Bob Dylan</span>
            </p>
            <p>
              Lodi - <span className="text-myPink-light">CCR</span>
            </p>
            <p>
              Lookin Out My Back Door -{" "}
              <span className="text-myPink-light">CCR</span>
            </p>
            <p>
              Every Breath You Take -{" "}
              <span className="text-myPink-light">The Police</span>
            </p>
            <p>
              Dang Me - <span className="text-myPink-light">Roger Miller</span>
            </p>
            <p>
              Tall Tall Buildings -{" "}
              <span className="text-myPink-light">John Hartford</span>
            </p>
            <p>
              These Days - <span className="text-myPink-light">Niko Case</span>
            </p>
            <p>
              Summers End -{" "}
              <span className="text-myPink-light">John Prine</span>
            </p>
            <p>
              Thirteen - <span className="text-myPink-light">Big Star</span>
            </p>
            <p>
              Mrs. Robinson -{" "}
              <span className="text-myPink-light">Simon & Garfunkle</span>
            </p>
            <p>
              Margaritaville -{" "}
              <span className="text-myPink-light">Jimmy Buffet</span>
            </p>
            <p>
              Memory Lane -{" "}
              <span className="text-myPink-light">Elliot Smith</span>
            </p>
            <p>
              Walk The Line -{" "}
              <span className="text-myPink-light">Johnny Cash</span>
            </p>
            <p>
              I Still Miss Someone -{" "}
              <span className="text-myPink-light">Johnny Cash</span>
            </p>
            <p>
              Everything Is Free Now -{" "}
              <span className="text-myPink-light">Gillian Welch</span>
            </p>
            <p>
              I’m only sleeping -{" "}
              <span className="text-myPink-light">The Beatles</span>
            </p>
            <p>
              Yesterday - <span className="text-myPink-light">The Beatles</span>
            </p>
            <p>
              Blackbird - <span className="text-myPink-light">The Beatles</span>
            </p>
            <p>
              When I’m sixty four -{" "}
              <span className="text-myPink-light">The Beatles</span>
            </p>
            <p>
              Norwegian wood -{" "}
              <span className="text-myPink-light">The Beatles</span>
            </p>
            <p>
              Let it breathe -{" "}
              <span className="text-myPink-light">The Water Liars</span>
            </p>
          </div>
        </div>
      </div>
      <YouTubeLite id="JupdC5IBrT8" title="Original - The Golden Hour" />
      <YouTubeLite id="C-dldzvBR7I" title="Cover - CCR: Lodi/" />
      <YouTubeLite
        id="cxlv6LJ3VaY"
        title="Cover - Johnny Cash: I Walk The Line"
      />
      {/* <YouTubeLite id="sqLORIPKybk" title='Original - Emily Rose'/> */}
    </div>
  );
}
