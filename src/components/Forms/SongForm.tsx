import { createSong, deleteSong, editSong } from "@/utils/serverUtils";
import { Song } from "@/utils/types";
import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

interface iEditCoverProps {
  song: Song | null;
  handleBack: () => void;
  artist_id?: string;
}
export default function SongForm({
  song,
  handleBack,
  artist_id,
}: iEditCoverProps) {
  const [title, setTitle] = useState(song?.title || "");
  const [src, setSrc] = useState(song?.src || "");
  const [img, setImg] = useState(song?.img || "");
  const [is_cover, setIsCover] = useState(song?.is_cover ?? true);
  const [songwriter, setSongwriter] = useState(song?.songwriter || "");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!title || !songwriter) return;

    if (song?.id) {
      // Editing existing song
      await editSong(song.id, { title, songwriter, src, img, is_cover });
    } else if (artist_id) {
      // Creating new song
      await createSong(Number(artist_id), {
        title,
        songwriter,
        src,
        img,
        is_cover,
      });
    } else {
      console.error("Cannot create song: artist_id is required");
      return;
    }
    handleBack();
  }

  async function handleDelete(id: number) {
    await deleteSong(id);
    handleBack();
  }

  return (
    <div className="bg-myBlack-dark p-4 flex flex-col items-center justify-center w-screen h-screen absolute inset-0 overflow-y-hidden">
      <h2>{song ? "Edit Cover" : "Add Song"}</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-2 w-[90%] max-w-[50rem] mb-2"
      >
        <TextInput
          id="title"
          label="Title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextInput
          id="songwriter"
          label="Songwriter"
          placeholder="Songwriter"
          value={songwriter}
          required
          onChange={(e) => setSongwriter(e.target.value)}
        />
        <TextInput
          id="src"
          label="Path to audio file"
          placeholder="/audio/songs/song.mp3 (optional)"
          value={src}
          onChange={(e) => setSrc(e.target.value)}
        />
        <TextInput
          id="img"
          label="Image"
          placeholder="Image"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <div className="flex items-center justify-center gap-2">
          <label htmlFor="is_cover">Is cover</label>
          <input
            id="is_cover"
            type="checkbox"
            checked={is_cover}
            onChange={(e) => setIsCover(e.target.checked)}
          />
        </div>
        <Button label="Save" color="BLUE" type="submit" />
      </form>
      <div className="flex flex-col items-center justify-center gap-2">
        {song?.id && (
          
          <Button
            label={`Delete "${song.title.substring(0, 13)}..."`}
            color="PINK"
            onClick={() => handleDelete(song.id)}
          />
        )}
        <Button label="Cancel" color="GRAY" onClick={() => handleBack()} />
      </div>
    </div>
  );
}
