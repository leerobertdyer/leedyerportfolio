import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(_req: NextRequest) {
  const artist_id = _req.nextUrl.searchParams.get("artist_id");
  const is_featured = _req.nextUrl.searchParams.get("is_featured");
  const show_on_main = _req.nextUrl.searchParams.get("show_on_main");

  // Main page videos
  if (show_on_main === "true") {
    const response = await query(
      "SELECT * FROM music.videos WHERE show_on_main = true"
    );
    return NextResponse.json(response.rows);
  }

  // Featured video for an artist
  if (artist_id && is_featured === "true") {
    const response = await query(
      "SELECT * FROM music.videos WHERE artist_id = $1 AND is_featured = true LIMIT 1",
      [artist_id]
    );
    return NextResponse.json(response.rows[0] || null);
  }

  // Non-featured videos for an artist (video list)
  if (artist_id && is_featured === "false") {
    const response = await query(
      "SELECT * FROM music.videos WHERE artist_id = $1 AND is_featured = false",
      [artist_id]
    );
    return NextResponse.json(response.rows);
  }

  // All videos for an artist
  if (artist_id) {
    const response = await query(
      "SELECT * FROM music.videos WHERE artist_id = $1",
      [artist_id]
    );
    return NextResponse.json(response.rows);
  }

  // All videos
  const response = await query("SELECT * FROM music.videos");
  return NextResponse.json(response.rows);
}