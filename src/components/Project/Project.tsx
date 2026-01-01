import { LinkProps } from "@/utils/types";
import Image from "next/image";

type Project = {
  link: string;
  name: string;
  description: string;
  image: string;
  github: string | undefined;
  id: string
};

export default function Project({
  link,
  name,
  description,
  image,
  github,
  id
}: Project) {
  return (
    <div className="mt-2" id={id}>
      <h1 className="w-full bg-myWhite-light text-myBlack-dark py-2 text-xl text-center">
        {name}
      </h1>
      <h2 className="bg-white p-2 my-4 mx-auto w-[80%] text-center text-myBlack-dark rounded-md">
        {description}
      </h2>
      <a
        className="block text-blue-500 underline text-center w-full"
        href={link}
        target="_blank"
      >
        Link To Live Site
      </a>
      {github && (
        <a
          className="block text-myPink-light underline text-center w-full pb-2"
          href={github}
          target="_blank"
        >
          GitHub Repo
        </a>
      )}
      <div className="overflow-hidden rounded-sm 
      w-[20rem] h-[20rem]
      sm:w-[30rem] sm:h-[30rem] 
      m-auto border-2 border-white">
        <a href={link} target="_blank">
          <Image
            src={image}
            alt={name}
            width={1200}
            height={1200}
            className="object-cover w-full h-full"
          />
        </a>
      </div>
    </div>
  );
}
