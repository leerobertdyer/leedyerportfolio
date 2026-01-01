import LinkPhoto from "@/components/LinkPhoto/LinkPhoto";
import YouTubeLite from "@/components/YouTube/YouTube";

export const metadata = {
  title: "Lee Dyer - Music",
  description: "Lee Dyer - Alt/Acoustic/Folk/Indie",
  openGraph: {
    title: "Lee Dyer - Music",
    description: "Lee Dyer - Alt/Acoustic/Folk/Indie",
    url: "https://www.leedyer.com/music",
    images: [
      {
        url: "https://www.leedyer.com/images/leeStage1.png",
        width: 1200,
        height: 630,
        alt: "Lee Dyer Singing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lee Dyer - Music",
    description: "Lee Dyer - Alt/Acoustic/Folk/Indie",
    images: [
      "https://www.leedyer.com/images/leeStage1.png",
      "https://www.leedyer.com/images/leeBlueKneeling.jpg",
    ],
  },
};

export default function Music() {
  return (
    <>
      {/* Hidden OG image for Instagram scraping */}
      <img
        src="/images/leeStage1.png"
        alt="Lee Dyer Solo"
        style={{ display: "none" }}
      />
      <div className="flex flex-col md:flex-row justify-evenly items-center  gap-2 flex-wrap bg-black py-[3rem] border-b-2 border-myWhite-base">
        <LinkPhoto
          size="w-[15rem] h-[15rem]"
          src="/images/auntVickiTristan.png"
          alt="Aunt Vicki Band"
          text="Aunt Vicki"
          linkto="https://www.auntvicki.rocks/"
          target="blank"
        />
        <LinkPhoto
          size="w-[15rem] h-[15rem]"
          src="/images/wifeIslandLake.jpg"
          alt="Acoustic Duo"
          text="Aunt Vicki Duo"
          linkto="music/duo"
          target="blank"
        />
        <LinkPhoto
          size="w-[15rem] h-[15rem]"
          src="/images/leeStage1.png"
          alt="Lee Dyer Solo"
          text="Lee Dyer Solo"
          linkto="/music/solo"
        />
        <LinkPhoto
          size="w-[15rem] h-[15rem]"
          src="/images/tinySunPiano.png"
          alt="Tiny Sun Studio"
          text="Tiny Sun Studio"
          linkto="https://www.tinysunstudio.com/"
          target="blank"
        />
      </div>
      <div
        id="videos"
        className="flex flex-col md:flex-row justify-evenly items-center gap-4 flex-wrap bg-black pb-[3rem] border-b-2 border-myWhite-base pt-8"
      >
        <YouTubeLite
          id="Yg_q40mY48c"
          title='Original - Aunt Vicki "Lights Out"'
        />
        <YouTubeLite id="Pg2Ox9pJlvM" title='Original - Tiny Sun "Ageless"' />
        <YouTubeLite id="SrD2nilSt2I" title='Original - Aunt Vicki "Vigil"' />
        <YouTubeLite
          id="aiFS5uEtRlA"
          title='Original - Aunt Vicki "Time Is On Your Side"'
        />
      </div>
    </>
  );
}
