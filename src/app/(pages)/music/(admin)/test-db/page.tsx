'use client'
import { Song } from "@/components/AudioPlayer/AudioPlayer";
import { useEffect, useState } from "react";

export default function DBTEST() {
    const [songs, setSongs] = useState<Song[]>();


    useEffect(() => {
        async function getSongs() {
            const resp = await fetch("/api/data/songs");
            const json = await resp.json();
            setSongs(json);
        }
        getSongs()
    }, [])

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen text-white">
            {songs && songs.map((song, key) => <div key={key}>TITLE: {song.title}</div>)}
        </div>
    )
}