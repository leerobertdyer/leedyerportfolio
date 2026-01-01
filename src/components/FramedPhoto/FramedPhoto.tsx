import Image from "next/image";

export default function FramedPhoto({location}: {location: string}) {
    return (
        <div className=" w-[300px] h-[300px] border-myWhite-light border-2 overflow-hidden rounded-md">
            <Image
            src={location}
            alt="hero"
            width={250}
            height={250}
            className="object-cover w-full h-full" />
        </div>
    )
}