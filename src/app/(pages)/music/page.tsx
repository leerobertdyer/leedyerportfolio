import LinkPhoto from "@/components/LinkPhoto/LinkPhoto";
import YouTubeLite from "@/components/YouTube/YouTube";

export default function Music() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly items-center mt-4 gap-4 flex-wrap bg-black pb-[3rem]">
        <h2 className="mt-4 pb-4 w-full text-center border-b-2 border-leeWhite-base">Band Websites</h2>
        <LinkPhoto
          src="/images/auntVickiTristan.png"
          alt="Aunt Vicki Band"
          text="Aunt Vicki"
          linkto="https://www.auntvicki.rocks/"
          target="blank"
        />

        <LinkPhoto
          src="/images/wifeIslandLake.jpg"
          alt="Wife Island Duo"
          text="Aunt Vicki (Acoustic Duo)"
          linkto="https://www.auntvicki.rocks/duo"
          target="blank"
        />

        <LinkPhoto
          src="/images/tinySunPiano.png"
          alt="Wife Island Duo"
          text="Tiny Sun"
          linkto="https://www.tinysunstudio.com/"
          target="blank"
        />
      </div>
      <div id="videos" className="flex flex-col md:flex-row justify-evenly items-center mt-4 gap-4 flex-wrap bg-black pb-[3rem]">
        <h2 className="mt-4 pb-4 w-full text-center border-b-2 border-leeWhite-base">Videos</h2>

        <h3 className="mt-4 w-full text-center">Aunt Vicki</h3>
        <YouTubeLite id="Yg_q40mY48c" title='Original - Lights Out'/>
        <YouTubeLite id="SrD2nilSt2I" title='Original - Vigil'/>
        <YouTubeLite id="aiFS5uEtRlA" title='Original - Time Is On Your Side'/>
        
        <h3 className="mt-4 w-full text-center">Tiny Sun</h3>
        <YouTubeLite id="77kikByulrw" title='Cover - Elliot Smith "Memory Lane"'/>        
        <YouTubeLite id="JupdC5IBrT8" title='Original - The Golden Hour'/>
        <YouTubeLite id="sqLORIPKybk" title='Original - Emily Rose'/>
        <YouTubeLite id="C-dldzvBR7I" title='Cover - CCR - "Lodi"'/>
        <YouTubeLite id="cxlv6LJ3VaY" title='Cover - Johnny Cash - "I Walk The Line"'/>

        <h3 className="mt-4 w-full text-center">Aunt Vicki Duo</h3>
        <YouTubeLite id="IHQknZV8hLA" title='Original - Out Of My Mind'/>
        <YouTubeLite id="QMCSdp_kxps" title='Original - Body Like A Cave'/>
      </div>
    </>
  );
}
