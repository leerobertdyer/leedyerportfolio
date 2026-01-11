"use client";

import { useState } from "react";

interface YouTubeLiteProps {
  youtube_id: string;
  title: string;
  onEdit?: () => void;
}

export default function YouTubeLite({ youtube_id, title, onEdit }: YouTubeLiteProps) {
  const [load, setLoad] = useState(false);

  return load ? (
    <div className="relative">
      <iframe
        src={`https://www.youtube.com/embed/${youtube_id}?autoplay=1`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-[255px] h-[157px] md:w-[560px] md:h-[315px]"
      />
      {onEdit && (
        <button
          onClick={onEdit}
          className="absolute top-2 left-2 bg-myBlue-base text-white px-2 py-1 rounded text-xs hover:bg-myBlue-dark z-10"
        >
          Edit
        </button>
      )}
    </div>
  ) : (
    <div
      onClick={() => setLoad(true)}
      style={{
        backgroundImage: `url(https://i.ytimg.com/vi/${youtube_id}/hqdefault.jpg)`,
      }}
      className="w-[255px] h-[157px] md:w-[560px] md:h-[315px] aspect-video bg-cover bg-center cursor-pointer relative border-2 rounded-md"
    >
      <div className="absolute top-0 right-0 py-2 text-center text-xs md:text-lg z-90 bg-black bg-opacity-100 w-full">
        {title}
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-5xl bg-black bg-opacity-40 rounded-md">
        ▶
      </div>
      {onEdit && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          className="absolute top-2 left-2 bg-myBlue-base text-white px-2 py-1 rounded text-xs hover:bg-myBlue-dark z-10"
        >
          Edit
        </button>
      )}
    </div>
  );
}
