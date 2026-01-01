import LinkPhoto from "@/components/LinkPhoto/LinkPhoto";
import YouTubeLite from "@/components/YouTube/YouTube";

export default function Music() {
  return (
    <>
      <div className="flex justify-evenly items-center  gap-2 flex-wrap bg-black py-[3rem] border-b-2 border-myWhite-base">
        <LinkPhoto
          size="w-[7rem] h-[7rem] md:w-[15rem] md:h-[15rem]"
          src="/images/auntVickiTristan.png"
          alt="Aunt Vicki Band"
          text="Aunt Vicki"
          linkto="https://www.auntvicki.rocks/"
          target="blank"
        />

        <LinkPhoto
          size="w-[7rem] h-[7rem] md:w-[15rem] md:h-[15rem]"
          src="/images/wifeIslandLake.jpg"
          alt="Acoustic Duo"
          text="Aunt Vicki Duo"
          linkto="https://www.auntvicki.rocks/duo"
          target="blank"
        />

      <LinkPhoto
          size="w-[7rem] h-[7rem] md:w-[15rem] md:h-[15rem]"
          src="/images/tinySunPiano.png"
          alt="Tiny Sun Studio"
          text="Tiny Sun"
          linkto="https://www.tinysunstudio.com/"
          target="blank"
        />


      <LinkPhoto
          size="w-[7rem] h-[7rem] md:w-[15rem] md:h-[15rem]"
          src="/images/leeStage1.png"
          alt="Lee Dyer Solo"
          text="Lee Dyer Solo"
          linkto="/music/solo"
        />
      </div>
      <div id="videos" className="flex flex-col md:flex-row justify-evenly items-center gap-4 flex-wrap bg-black pb-[3rem] border-b-2 border-myWhite-base">
        <YouTubeLite id="Yg_q40mY48c" title='Original - Lights Out'/>
        <YouTubeLite id="SrD2nilSt2I" title='Original - Vigil'/>
        <YouTubeLite id="aiFS5uEtRlA" title='Original - Time Is On Your Side'/>
        

        <YouTubeLite id="IHQknZV8hLA" title='Original - Out Of My Mind'/>
        <YouTubeLite id="QMCSdp_kxps" title='Original - Body Like A Cave'/>
      </div>
    </>
  );
}
