"use client";

import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";
import BioSection from "@/components/BioSection/BioSection";
import FramedPhoto from "@/components/FramedPhoto/FramedPhoto";
import ShowsSection from "@/components/ShowsSection/ShowsSection";
import YouTubeLite from "@/components/YouTube/YouTube";
import Link from "next/link";
import "dotenv/config";
import { adminEmails, SOLO_ARTIST_ID, SOLO_CALENDAR_ID } from "@/utils/consts";
import CoverList from "@/components/CoverList/CoverList";
import SongForm from "@/components/Forms/SongForm";
import VideoForm from "@/components/Forms/VideoForm";
import VideoList from "@/components/VideoList/VideoList";
import { useEffect, useState } from "react";
import { Song, Video } from "@/utils/types";
import { useSession } from "next-auth/react";

export default function SoloAct() {
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
        `/api/music/videos?artist_id=${SOLO_ARTIST_ID}&is_featured=true`
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
      title: "Morning Light",
      src: "../audio/solo/morningLight.mp3",
      artist: "Tiny Sun",
      img: "/images/maskedBackground.jpeg",
    },
    {
      id: "2",
      title: "Audrey",
      src: "../audio/solo/audrey.mp3",
      artist: "Tiny Sun",
      img: "/images/maskedBackground.jpeg",
    },
    {
      id: "3",
      title: "Erin Dawn",
      src: "../audio/solo/erinDawn.mp3",
      artist: "Tiny Sun",
      img: "/images/maskedBackground.jpeg",
    },
  ];

  if (isSongFormOpen) {
    return (
      <SongForm
        song={selectedSong}
        handleBack={closeSongForm}
        artist_id={SOLO_ARTIST_ID}
      />
    );
  }

  if (isVideoFormOpen) {
    return (
      <VideoForm
        video={selectedVideo}
        handleBack={closeVideoForm}
        defaultArtistId={SOLO_ARTIST_ID}
      />
    );
  }

  return (
    <div className="bg-[url(/images/maskedBackground.jpeg)] bg-cover bg-top text-myWhite-dark flex flex-wrap items-center justify-center gap-4 p-4">
      <BioSection mdWidth="md:w-[40rem]" padding="p-4">
        <p>
          <span className="text-3xl text-myWhite-light">Lee Dyer</span> is a
          singer-songwriter with over 20 years of performance experience,
          originally from Northern Michigan and now based in Charlotte, NC.
        </p>
        <p className="mt-4">
          His solo work is minimal and melodic - drawing influence from artists
          like Elliott Smith and the Beatles. Fingerpicked guitar, melody, and
          lyrics are the focus, blending select covers with a deep catalog of
          original songs released under the name{" "}
          <span className="text-myOrange-base">Tiny Sun</span>.
        </p>

        <Link href="/contact" className="text-myBlue-base">
          Contact
        </Link>

        <div className="w-full flex items-center gap-2 mt-4">
          <FramedPhoto location="/images/leeSinging.jpeg" />
          <div className="hidden md:block">
            <FramedPhoto location="/images/leeBlueStanding.jpg" />
          </div>
        </div>
      </BioSection>
      <ShowsSection calendarId={SOLO_CALENDAR_ID} />

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
        <CoverList
          artist_id={SOLO_ARTIST_ID}
          onEditSong={openSongForm}
          refreshKey={songRefreshKey}
        />
      </div>

      {/* Video List */}
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl mb-4">Videos</h2>
        <VideoList
          artist_id={SOLO_ARTIST_ID}
          onEditVideo={openVideoForm}
          refreshKey={videoRefreshKey}
        />
      </div>
    </div>
  );
}
