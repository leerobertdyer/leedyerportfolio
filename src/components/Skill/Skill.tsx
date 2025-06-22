"use client";
import { LinkProps } from "@/utils/types";

type PropsDefinition = {
  name: string;
  description: string;
  links: LinkProps[]
  handleSkillClick: (description: string, links: LinkProps[]) => void;
};

export default function Skill({
  name,
  description,
  handleSkillClick,
  links
}: PropsDefinition) {
  return (
    <>
      <div
        className="
        text-leeBlack-dark
        hover:bg-leeBlack-dark hover:text-leeWhite-light 
        hover:cursor-pointer 
        transition-none 
        w-[6rem] h-[3rem] 
        bg-white border-2 border-leeWhite-dark 
        rounded-lg 
        flex justify-center items-center text-center"
        onClick={() => {
          handleSkillClick(description, links);
        }}
      >
        <h2>{name}</h2>
      </div>
    </>
  );
}
