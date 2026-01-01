"use client";

import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";
import FramedPhoto from "@/components/FramedPhoto/FramedPhoto";
import YouTubeLite from "@/components/YouTube/YouTube";
import Link from "next/link";

export default function duoAct() {
  const allSongs = [
    {
      id: "1",
      title: "Bergamot",
      src: "../audio/auntVickiDuo/bergamot.mp3",
      artist: "Aunt Vicki",
      img: "/images/avStudio.WebP",
    },
    {
      id: "2",
      title: "The Names Of Things",
      src: "../audio/auntVickiDuo/namesOfThings.mp3",
      artist: "Aunt Vicki",
      img: "/images/avStudio.WebP",
    },
    {
      id: "3",
      title: "The Crowd",
      src: "../audio/auntVickiDuo/theCrowd.mp3",
      artist: "Aunt Vicki",
      img: "/images/avStudio.WebP",
    },
  ];
  return (
    <div className="bg-[url(/images/avStudio.WebP)] bg-cover bg-left text-myWhite-dark flex flex-wrap items-center justify-center gap-4 p-4">
      <div className="bg-myBlack-dark bg-opacity-90 rounded-md p-4 flex flex-col items-center justify-center w-[20rem] md:w-[40rem] h-fit text-sm md:text-lg">
        <p>
          <span className="text-3xl text-myPink-dark">Aunt Vicki Duo</span> is a
          married singer-songwriter combo originally from Northern Michigan and
          now based in Charlotte, NC.
        </p>
        <p className="mt-4">
          Folk-oriented mostly-acoustic music heavily dependent on harmonies,
          the songs are a wide range of old-timey-to-modern, embracing anything
          with good lyrics good song structure.
        </p>
        <div className="my-4 w-full">
          <span className="text-myPink-base">Aunt Vicki</span> also performs as
          a{" "}
          <Link
            href="https://www.auntvicki.rocks"
            className="text-myBlue-light underline"
            target="_blank"
          >
            full four peice retro rock band.
          </Link>
        </div>

        <Link href="/contact" className="text-myBlue-base">
          Contact AV Duo
        </Link>

        <div className="w-full flex items-center gap-2 mt-4">
          <FramedPhoto location="/images/grafittiDuo.jpg" />
          <div className="hidden md:block">
            <FramedPhoto location="/images/backsDuo.jpg" />
          </div>
        </div>
      </div>

      <AudioPlayer songs={allSongs} />

      <div className="w-full flex justify-center">
        <YouTubeLite
          id="NJvm1hzxNeQ"
          title="Cover - Dolly & Porter: Someone I Used To Know"
        />
      </div>
      <YouTubeLite id="IHQknZV8hLA" title="Original - Out Of My Mind" />

      <div className="w-full h-fit flex flex-col items-center">
        <div className="bg-myBlack-dark bg-opacity-90 rounded-md p-4 flex flex-col items-center justify-center w-[20rem] md:w-[40rem] h-fit ">
          <h2 className="text-2xl">Current cover List</h2>
          <div className="text-myWhite-light flex flex-col items-start text-sm md:text-lg">
            <p>
              Somebody I used To Know -{" "}
              <span className="text-myPink-light">
                Dolly Parten & Porter Wagner
              </span>
            </p>
            <p>
              You Belong to Me -{" "}
              <span className="text-myPink-light">Patsy Cline</span>
            </p>
            <p>
              The End of the World -{" "}
              <span className="text-myPink-light">Skeeter Davis</span>
            </p>
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
          <YouTubeLite id="QMCSdp_kxps" title="Original - Body Like A Cave" />
        </div>
      </div>
    </div>
  );
}
