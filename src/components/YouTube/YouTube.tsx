"use client";
// components/YouTubeLite.js
import { useState } from "react";

export default function YouTubeLite({ id, title }: { id: string, title: string }) {
  const [load, setLoad] = useState(false);

  return load ? (
    <iframe
      src={`https://www.youtube.com/embed/${id}?autoplay=1`}
      title="YouTube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-[255px] h-[157px] md:w-[560px] md:h-[315px]"
    />
  ) : (
    <div
      onClick={() => setLoad(true)}
      style={{
        backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`,
      }}
      className="w-[255px] h-[157px] md:w-[560px] md:h-[315px] aspect-video bg-cover bg-center cursor-pointer relative border-2 rounded-md"
    >
      <div className="absolute top-0 right-0 py-2 text-center text-xs md:text-lg z-90 bg-black bg-opacity-100 w-full">
        {title}
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-5xl bg-black bg-opacity-40 rounded-md">
        ▶
      </div>
    </div>
  );
}
