"use client";

import Image from "next/image";
import Link from "next/link";

interface LinkPhoto {
  src: string;
  alt: string;
  text: string;
  linkto: string;
  target?: string;
  size: string
}
export default function LinkPhoto(props: LinkPhoto) {
  const { src, alt, text, linkto, target, size } = props;

  return (
    <Link
      href={linkto}
      target={target ?? ""}
      className={`flex justify-center
        ${size}
        overflow-hidden relative`}
    >
      <Image
        fill
        priority
        className="rounded-md object-cover object-center border-2 border-myWhite-dark"
        src={src}
        alt={alt}
      />
      <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-myWhite-light text-center p-[2px] rounded-b-md text-xs md:text-lg">
        {text}
      </p>
    </Link>
  );
}
