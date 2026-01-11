import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(_req: NextRequest) {
  const artist_id = _req.nextUrl.searchParams.get("artist_id");
  const is_cover = _req.nextUrl.searchParams.get("is_cover");
  if (!artist_id || !is_cover) {
    return NextResponse.json(
      { error: "Artist ID and is_cover are required" },
      { status: 400 }
    );
  }
  const response = await query(
    "SELECT * FROM music.songs WHERE is_cover = $1 AND artist_id = $2",
    [is_cover, artist_id]
  );
  console.log({ response });
  return NextResponse.json(response.rows);
}