"use client";
import { useEffect, useState } from "react";

export default function UploadSong() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [status, setStatus] = useState<string | undefined>("");
  const [file, setFile] = useState<File | undefined>();

  async function handleSubmit() {
    if (!title || !artist || !file) {
      setStatus("Missing required fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("artist", artist);
    formData.append("file", file);

    const response = await fetch("/api/storage/upload", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    console.log("DATA: ", data);
  }

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        setStatus(undefined);
      }, 3000);
    }
  }, [status]);

  const handleClick = () => {
    document.getElementById("file")?.click();
  };

  return (
    <div className="w-[30rem] h-fit flex flex-col items-center justify-center gap-2 bg-black p-4  text-amber-500 border-2 border-amber-500 rounded-md">
      <div className="flex flex-col items-center gap-[2px]">
        <label htmlFor="title">Song Title</label>
        <input
          id="title"
          className="rounded-md"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-center gap-[2px]">
        <label htmlFor="artist">Artist</label>
        <input
          id="artist"
          className="rounded-md mb-6"
          type="text"
          onChange={(e) => setArtist(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-center gap-[2px] w-full ">
        <label htmlFor="file">File</label>
        <button
          onClick={handleClick}
          className="bg-amber-500 text-black border-amber-200 w-[15rem]border-2 rounded-md p-2 cursor-pointer hover:bg-amber-800 hover:text-amber-200"
        >
          {file ? "Change" : "Upload"}
        </button>
        <input
          id="file"
          hidden
          type="file"
          accept=".mp3"
          onChange={(e) =>
            setFile(e.target.files ? e.target.files[0] : undefined)
          }
        />
      </div>
      {status && (
        <div className="w-full text-red-500 text-center text-[10px]">
          {status}
        </div>
      )}
      <button
        className="bg-amber-500 text-black border-amber-200 w-[15rem]border-2 rounded-md p-2 cursor-pointer hover:bg-amber-800 hover:text-amber-200"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
