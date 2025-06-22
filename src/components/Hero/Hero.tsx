import Span from "@/components/Span/Span";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col">
      <div className="h-fit flex justify-evenly items-center py-4">
        <div className="w-[8rem] h-[8rem] overflow-hidden rounded-xl ml-2">
          <Image
            src="/images/profilePicSmaller.jpg"
            alt="hero"
            width={455}
            height={455}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-start ml-2">
          <h1 className="text-4xl font-bold animate-slide-in-right">
            Hi, {`I'm`} Lee
          </h1>
          <p className="text-md animate-slide-in-right-slower">A Full-Stack</p>
          <p className="text-md animate-slide-in-right-slowest">
            Software Engineer
          </p>
          <p className="text-md ">
            With a focus in
            <span className="block text-center text-sm sm:text-xl text-leePink-lighter animate-fade-in-slowest">
              React | TypeScript | Node.js
            </span>
          </p>
        </div>
      </div>
      <div
        className="
        flex flex-wrap
        text-center p-2 my-2 
        mx-auto
        bg-leeWhite-light 
        w-[92%] h-fit max-w-[55rem]
        text-leeBlack-dark 
        rounded-sm"
      >
        <div className="w-[95%] m-auto lg:text-[1.5rem]">
          <p>I specialize in</p>
          <Span text="React" />
          <Span text="TypeScript" /> 
          <Span text="Tailwind" />
          <Span text="Node.js" />
          <Span text="AWS" />
          <Span text="Vitest" />
        </div>
      </div>
    </div>
  );
}
