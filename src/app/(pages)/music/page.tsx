"use client";

import LinkPhoto from "@/components/LinkPhoto/LinkPhoto";
import YouTubeLite from "@/components/YouTube/YouTube";
import VideoForm from "@/components/Forms/VideoForm";
import Button from "@/components/Button/Button";
import { adminEmails } from "@/utils/consts";
import { Video } from "@/utils/types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Music() {
  const { data: session } = useSession();

  const [videos, setVideos] = useState<Video[]>([]);
  const [isVideoFormOpen, setIsVideoFormOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(adminEmails.includes(session?.user?.email || ""));
  }, [session]);

  useEffect(() => {
    const fetchVideos = async () => {
      const resp = await fetch("/api/music/videos?show_on_main=true");
      if (resp.ok) {
        const data = await resp.json();
        setVideos(data);
      }
    };
    fetchVideos();
  }, [refreshKey]);

  function openVideoForm(video: Video | null = null) {
    setSelectedVideo(video);
    setIsVideoFormOpen(true);
  }

  function closeVideoForm() {
    setRefreshKey((k) => k + 1);
    setIsVideoFormOpen(false);
    setSelectedVideo(null);
  }

  if (isVideoFormOpen) {
    return (
      <VideoForm
        video={selectedVideo}
        handleBack={closeVideoForm}
      />
    );
  }

  return (
    <>
      {/* Hidden OG image for Instagram scraping */}
      <img
        src="/images/leeStage1.png"
        alt="Lee Dyer Solo"
        style={{ display: "none" }}
      />
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-2 flex-wrap bg-black py-[3rem] border-b-2 border-myWhite-base">
        <LinkPhoto
          size="w-[15rem] h-[15rem]"
          src="/images/auntVickiTristan.png"
          alt="Aunt Vicki Band"
          text="Aunt Vicki"
          linkto="https://www.auntvicki.rocks/"
          target="blank"
        />
        <LinkPhoto
          size="w-[15rem] h-[15rem]"
          src="/images/wifeIslandLake.jpg"
          alt="Acoustic Duo"
          text="Aunt Vicki Duo"
          linkto="music/duo"
        />
        <LinkPhoto
          size="w-[15rem] h-[15rem]"
          src="/images/leeStage1.png"
          alt="Lee Dyer Solo"
          text="Lee Dyer Solo"
          linkto="/music/solo"
        />
        <LinkPhoto
          size="w-[15rem] h-[15rem]"
          src="/images/tinySunPiano.png"
          alt="Tiny Sun Studio"
          text="Tiny Sun Studio"
          linkto="https://www.tinysunstudio.com/"
          target="blank"
        />
      </div>
      <div
        id="videos"
        className="flex flex-col md:flex-row justify-evenly items-center gap-4 flex-wrap bg-black pb-[3rem] border-b-2 border-myWhite-base pt-8"
      >
        {isAdmin && (
          <div className="w-full flex justify-center mb-4">
            <Button
              label="Add Video to Main Page"
              color="BLUE"
              onClick={() => openVideoForm(null)}
            />
          </div>
        )}
        {videos.map((video) => (
          <YouTubeLite
            key={video.id}
            youtube_id={video.youtube_id}
            title={video.title}
            onEdit={isAdmin ? () => openVideoForm(video) : undefined}
          />
        ))}
        {videos.length === 0 && (
          <p className="text-myWhite-light">No videos yet</p>
        )}
      </div>
    </>
  );
}
