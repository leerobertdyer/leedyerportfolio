import { ReactNode } from "react";

interface BioSectionProps {
  children: ReactNode;
  mdWidth?: string; // e.g. "md:w-[45rem]" or "md:w-[40rem]"
  padding?: string; // e.g. "p-6" or "p-4"
  photosJustifyCenter?: boolean;
}

export default function BioSection({
  children,
  mdWidth = "md:w-[45rem]",
  padding = "p-6",
}: BioSectionProps) {
  return (
    <div
      className={`bg-myBlack-dark bg-opacity-90 rounded-md ${padding} flex flex-col items-center justify-center w-[20rem] ${mdWidth} h-[38rem] text-sm md:text-lg`}
    >
      {children}
    </div>
  );
}

