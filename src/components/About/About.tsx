import Span from "@/components/Span/Span";
import Link from "next/link";
import { useEffect, useRef } from "react";

type PropsDefinition = {
  isSkill: boolean;
  setIsSkill: (value: boolean) => void;
  skillDescription: string;
  links: { href: string; label: string }[];
};

export default function About({
  isSkill,
  setIsSkill,
  skillDescription,
  links,
}: PropsDefinition) {
    const skillRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(isSkill) {
            skillRef.current?.classList.add("animate-fade-in-slowest")
            setTimeout(() => {
                skillRef.current?.classList.remove("animate-fade-in-slowest")
            }, 300)
        }
    }, [skillDescription, isSkill])

  return (
    <>
      <div className="flex flex-col items-center ">
        <div 
        className="
        p-2 my-2 
        bg-gradient-to-br
        from-myWhite-dark to-myPink-lighter
         w-[92%] h-fit min-h-[7rem] text-myBlack-dark rounded-sm">
          <div
          ref={skillRef} 
          className="flex flex-col justify-center items-center w-[80%] max-w-[60rem] m-auto lg:text-[1.25rem]">
            {isSkill ? (
              <>
                <p className="text-center">{skillDescription}</p>
                {links && links.length > 0 && <p className="pt-2">See it applied in the following:</p>}
                <div className="flex justify-around gap-2 w-full p-2 flex-wrap">
                  {links &&
                    links.map(({ href, label }) => (
                      <Link
                        key={label}
                        className="text-blue-700 hover:cursor-pointer underline text-center w-full"
                        href={href}
                      >
                        {label}
                      </Link>
                    ))}
                </div>
              </>
            ) : (
              <p className="text-center">
                I currently work at Red Ventures as an Associate Software Engineer where I assist in both the architecture of new services and the maintenance of existing ones using a wide variety of technologies. 
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
