type Span = {
    text: string;
  };
  
  export default function Span({ text }: Span) {
    return (
      <span className="
      inline-block
      text-bold text-myPink-lighter 
      p-2 rounded-sm 
      bg-myBlack-base
      m-[.25rem] 
      text-xs sm:text-lg lg:text-[1.25rem]">
       {text}
      </span>
    );
  }
  