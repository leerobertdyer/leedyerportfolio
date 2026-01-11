"use client";

import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";
import BioSection from "@/components/BioSection/BioSection";
import FramedPhoto from "@/components/FramedPhoto/FramedPhoto";
import ShowsSection from "@/components/ShowsSection/ShowsSection";
import YouTubeLite from "@/components/YouTube/YouTube";
import Link from "next/link";
import "dotenv/config";
import { adminEmails, DUO_ARTIST_ID, DUO_CALENDAR_ID } from "@/utils/consts";
import CoverList from "@/components/CoverList/CoverList";
import SongForm from "@/components/Forms/SongForm";
import VideoForm from "@/components/Forms/VideoForm";
import VideoList from "@/components/VideoList/VideoList";
import { useEffect, useState } from "react";
import { Song, Video } from "@/utils/types";
import { useSession } from "next-auth/react";

export default function DuoAct() {
  const { data: session } = useSession();

  // Song form state
  const [isSongFormOpen, setIsSongFormOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [songRefreshKey, setSongRefreshKey] = useState(0);

  // Video form state
  const [isVideoFormOpen, setIsVideoFormOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [videoRefreshKey, setVideoRefreshKey] = useState(0);

  // Featured video state
  const [featuredVideo, setFeaturedVideo] = useState<Video | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(adminEmails.includes(session?.user?.email || ""));
  }, [session]);

  useEffect(() => {
    const fetchFeaturedVideo = async () => {
      const resp = await fetch(
        `/api/music/videos?artist_id=${DUO_ARTIST_ID}&is_featured=true`
      );
      if (resp.ok) {
        const data = await resp.json();
        setFeaturedVideo(data);
      }
    };
    fetchFeaturedVideo();
  }, [videoRefreshKey]);

  function openSongForm(song: Song | null = null) {
    setSelectedSong(song);
    setIsSongFormOpen(true);
  }

  function closeSongForm() {
    setSongRefreshKey((k) => k + 1);
    setIsSongFormOpen(false);
    setSelectedSong(null);
  }

  function openVideoForm(video: Video | null = null) {
    setSelectedVideo(video);
    setIsVideoFormOpen(true);
  }

  function closeVideoForm() {
    setVideoRefreshKey((k) => k + 1);
    setIsVideoFormOpen(false);
    setSelectedVideo(null);
  }

  const allSongs = [
    {
      id: "1",
      title: "Bergamot",
      src: "../audio/auntVickiDuo/bergamot.mp3",
      artist: "Aunt Vicki",
      img: "/images/avStudio.WebP",
    },
    {
      id: "2",
      title: "The Names Of Things",
      src: "../audio/auntVickiDuo/namesOfThings.mp3",
      artist: "Aunt Vicki",
      img: "/images/avStudio.WebP",
    },
    {
      id: "3",
      title: "The Crowd",
      src: "../audio/auntVickiDuo/theCrowd.mp3",
      artist: "Aunt Vicki",
      img: "/images/avStudio.WebP",
    },
  ];

  if (isSongFormOpen) {
    return (
      <SongForm
        song={selectedSong}
        handleBack={closeSongForm}
        artist_id={DUO_ARTIST_ID}
      />
    );
  }

  if (isVideoFormOpen) {
    return (
      <VideoForm
        video={selectedVideo}
        handleBack={closeVideoForm}
        defaultArtistId={DUO_ARTIST_ID}
      />
    );
  }

  return (
    <div className="bg-[url(/images/avStudio.WebP)] bg-cover bg-left text-myWhite-dark flex flex-wrap items-center justify-center gap-4 p-4">
      <BioSection>
        <p>
          <span className="text-3xl text-myPink-dark">Aunt Vicki Duo</span> is a
          married singer-songwriter combo originally from Northern Michigan and
          now based in Charlotte, NC.
        </p>
        <p className="mt-4">
          Folk-oriented mostly-acoustic music heavily dependent on harmonies,
          the songs are a wide range of old-timey-to-modern, embracing anything
          with good lyrics good song structure.
        </p>
        <div className="my-4 w-full text-center">
          <span className="text-myPink-base">Aunt Vicki</span> also performs as
          a{" "}
          <Link
            href="https://www.auntvicki.rocks"
            className="text-myBlue-light underline"
            target="_blank"
          >
            full four peice retro rock band.
          </Link>
        </div>

        <Link href="/contact" className="text-myBlue-base">
          Contact AV Duo
        </Link>

        <div className="w-full flex items-center justify-center gap-2 mt-4">
          <FramedPhoto location="/images/grafittiDuo.jpg" />
          <div className="hidden md:block">
            <FramedPhoto location="/images/backsDuo.jpg" />
          </div>
        </div>
      </BioSection>
      <ShowsSection calendarId={DUO_CALENDAR_ID} />
      <AudioPlayer songs={allSongs} />

      {/* Featured Video */}
      <div className="w-full flex justify-center">
        {featuredVideo ? (
          <YouTubeLite
            youtube_id={featuredVideo.youtube_id}
            title={featuredVideo.title}
            onEdit={isAdmin ? () => openVideoForm(featuredVideo) : undefined}
          />
        ) : (
          <p className="text-myWhite-light">No featured video set</p>
        )}
      </div>

      {/* Cover List */}
      <div className="w-full h-fit flex flex-col items-center">
        <div className="bg-myBlack-dark bg-opacity-90 rounded-md p-4 flex flex-col items-center justify-center w-[20rem] md:w-[40rem] h-fit ">
          <h2 className="text-2xl">Current cover List</h2>
          <div className="text-myWhite-light flex flex-col items-start text-sm md:text-lg">
            <CoverList
              artist_id={DUO_ARTIST_ID}
              onEditSong={openSongForm}
              refreshKey={songRefreshKey}
            />
          </div>
        </div>
      </div>

      {/* Video List */}
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl mb-4">Videos</h2>
        <VideoList
          artist_id={DUO_ARTIST_ID}
          onEditVideo={openVideoForm}
          refreshKey={videoRefreshKey}
        />
      </div>
    </div>
  );
}
