import { adminEmails } from "@/utils/consts";
import { Song } from "@/utils/types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

interface CoverListProps {
  artist_id: string;
  onEditSong: (song: Song | null) => void;
  refreshKey?: number;
}
export default function CoverList({
  artist_id,
  onEditSong,
  refreshKey = 0,
}: CoverListProps) {
  const { data: session } = useSession();

  const [covers, setCovers] = useState<Song[]>([]);
  const [showEditButton, setShowEditButton] = useState(false);

  useEffect(() => {
    const getCovers = async () => {
      const resp = await fetch(
        `/api/music/songs?artist_id=${artist_id}&is_cover=true`
      );

      if (!resp.ok) {
        throw new Error("Failed to fetch covers");
      }
      const data = await resp.json();
      setCovers(data);
    };
    getCovers();
  }, [artist_id, refreshKey]);

  useEffect(() => {
    setShowEditButton(adminEmails.includes(session?.user?.email || ""));
  }, [session]);

  return (
    <div className="bg-myBlack-dark bg-opacity-90 rounded-md p-4 flex flex-col items-center justify-center w-[20rem] md:w-[40rem] h-fit ">
      <h2 className="text-2xl">Current cover List</h2>
      <div className="text-myWhite-light flex flex-col items-start text-sm md:text-lg">
        {showEditButton && (
          <Button
            label="Add Cover"
            color="BLUE"
            onClick={() => onEditSong(null)}
          />
        )}{" "}
        {covers.map((cover) => (
          <div
            key={cover.id}
            className="flex justify-center items-center gap-2"
          >
            {showEditButton && (
              <button
                className="text-myBlue-base"
                onClick={() => onEditSong(cover)}
              >
                Edit
              </button>
            )}
            <p className="">{cover.title}</p>
            {cover.songwriter && <p className="text-myPink-light">- {cover.songwriter}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
