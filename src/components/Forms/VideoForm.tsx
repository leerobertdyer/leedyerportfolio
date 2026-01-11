import { createVideo, deleteVideo, editVideo } from "@/utils/serverUtils";
import { Video } from "@/utils/types";
import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { DUO_ARTIST_ID, SOLO_ARTIST_ID, AUNT_VICKI_ARTIST_ID } from "@/utils/consts";

interface VideoFormProps {
  video: Video | null;
  handleBack: () => void;
  defaultArtistId?: string;
}

const ARTISTS = [
  { id: SOLO_ARTIST_ID, name: "Lee Dyer" },
  { id: AUNT_VICKI_ARTIST_ID, name: "Aunt Vicki" },
  { id: DUO_ARTIST_ID, name: "Aunt Vicki Duo" },
];

export default function VideoForm({
  video,
  handleBack,
  defaultArtistId,
}: VideoFormProps) {
  const [title, setTitle] = useState(video?.title || "");
  const [youtube_id, setYoutubeId] = useState(video?.youtube_id || "");
  const [artist_id, setArtistId] = useState(
    video?.artist_id?.toString() || defaultArtistId || SOLO_ARTIST_ID
  );
  const [is_featured, setIsFeatured] = useState(video?.is_featured ?? false);
  const [show_on_main, setShowOnMain] = useState(video?.show_on_main ?? false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!title || !youtube_id || !artist_id) return;

    const fields = {
      title,
      youtube_id,
      artist_id: Number(artist_id),
      is_featured,
      show_on_main,
    };

    if (video?.id) {
      await editVideo(video.id, fields);
    } else {
      await createVideo(fields);
    }
    handleBack();
  }

  async function handleDelete(id: number) {
    await deleteVideo(id);
    handleBack();
  }

  return (
    <div className="bg-myBlack-dark p-4 flex flex-col items-center justify-center w-screen h-screen absolute inset-0 overflow-y-hidden">
      <h2 className="text-xl mb-4">{video ? "Edit Video" : "Add Video"}</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-2 w-[90%] max-w-[50rem] mb-2"
      >
        <TextInput
          id="title"
          label="Title"
          placeholder="Original - Song Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextInput
          id="youtube_id"
          label="YouTube Video ID"
          placeholder="e.g. dQw4w9WgXcQ"
          value={youtube_id}
          onChange={(e) => setYoutubeId(e.target.value)}
          required
        />
        <div className="flex flex-col items-start w-full">
          <label htmlFor="artist_id" className="text-sm mb-1">
            Artist
          </label>
          <select
            id="artist_id"
            value={artist_id}
            onChange={(e) => setArtistId(e.target.value)}
            className="w-full p-2 rounded bg-myBlack-light text-myWhite-base border border-myWhite-dark"
          >
            {ARTISTS.map((artist) => (
              <option key={artist.id} value={artist.id}>
                {artist.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-center gap-4 mt-2">
          <div className="flex items-center gap-2">
            <input
              id="is_featured"
              type="checkbox"
              checked={is_featured}
              onChange={(e) => setIsFeatured(e.target.checked)}
            />
            <label htmlFor="is_featured">Featured (above cover list)</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              id="show_on_main"
              type="checkbox"
              checked={show_on_main}
              onChange={(e) => setShowOnMain(e.target.checked)}
            />
            <label htmlFor="show_on_main">Show on main page</label>
          </div>
        </div>
        <Button label="Save" color="BLUE" type="submit" />
      </form>
      <div className="flex flex-col items-center justify-center gap-2">
        {video?.id && !is_featured && (
          <Button
            label={`Delete "${video.title.substring(0, 13)}..."`}
            color="PINK"
            onClick={() => handleDelete(video.id)}
          />
        )}
        {video?.id && is_featured && (
          <p className="text-myPink-light text-sm">
            Uncheck &quot;Featured&quot; to enable deletion
          </p>
        )}
        <Button label="Cancel" color="GRAY" onClick={() => handleBack()} />
      </div>
    </div>
  );
}

