"use client";

import { adminEmails } from "@/utils/consts";
import { Video } from "@/utils/types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import YouTubeLite from "../YouTube/YouTube";

interface VideoListProps {
  artist_id: string;
  onEditVideo: (video: Video | null) => void;
  refreshKey?: number;
}

export default function VideoList({
  artist_id,
  onEditVideo,
  refreshKey = 0,
}: VideoListProps) {
  const { data: session } = useSession();

  const [videos, setVideos] = useState<Video[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const getVideos = async () => {
      const resp = await fetch(
        `/api/music/videos?artist_id=${artist_id}&is_featured=false`
      );

      if (!resp.ok) {
        throw new Error("Failed to fetch videos");
      }
      const data = await resp.json();
      setVideos(data);
    };
    getVideos();
  }, [artist_id, refreshKey]);

  useEffect(() => {
    setIsAdmin(adminEmails.includes(session?.user?.email || ""));
  }, [session]);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {isAdmin && (
        <Button
          label="Add Video"
          color="BLUE"
          onClick={() => onEditVideo(null)}
        />
      )}
      <div className="flex flex-wrap justify-center gap-4">
        {videos.map((video) => (
          <div key={video.id} className="relative">
            <YouTubeLite
              youtube_id={video.youtube_id}
              title={video.title}
              onEdit={isAdmin ? () => onEditVideo(video) : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

