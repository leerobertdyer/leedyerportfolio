'use client'
import About from "@/components/About/About";
import Skill from "@/components/Skill/Skill";
import { SKILLS } from "@/utils/consts";
import { LinkProps } from "@/utils/types";
import { useState } from "react";

export default function Skills() {
    const [isSkill, setIsSkill] = useState(false);
    const [skillDescription, setSkillDescription] = useState("")
    const [links, setLinks] = useState<LinkProps[]>([])    

  function handleSkillClick(description: string, links: LinkProps[] ) {
    setIsSkill(true)
    setSkillDescription(description)
    setLinks(links)
  }

  return (
    <div className="my-4 flex flex-col items-center justify-center">
      <h2 className="text-2xl text-myBlack-dark bg-myPink-light w-full text-center py-2">
        Skills
        </h2>
          <About isSkill={isSkill} setIsSkill={setIsSkill} skillDescription={skillDescription} links={links}/>
      <div className="w-[90%] p-2 flex justify-center gap-2 flex-wrap">
       {SKILLS.map(({ name, description, links }) => (
        <Skill
          key={name}
          name={name}
          description={description}
          handleSkillClick={handleSkillClick}
          links={links}
        />
       ))}
      </div>
    </div>
  );
}
