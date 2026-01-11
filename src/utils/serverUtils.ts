"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { adminEmails, ALLOWED_SONG_FIELDS, ALLOWED_VIDEO_FIELDS } from "@/utils/consts";
import { query } from "@/lib/db";

export async function checkAdmin() {
  const session = (await getServerSession(authOptions)) || null;
  if (!session || !adminEmails.includes(session.user?.email || "")) {
    throw new Error("Unauthorized");
  }
}

export async function deleteSong(id: number) {
  await checkAdmin();
  await query("DELETE FROM music.songs WHERE id = $1", [id]);
  return { success: true };
}

export async function editSong(songId: number, fields: Record<string, number | string | boolean>) {
  await checkAdmin();

  const entries = Object.entries(fields).filter(
    ([key, value]) => value !== undefined && ALLOWED_SONG_FIELDS.has(key)
  );

  if (entries.length === 0) {
    throw new Error("No valid fields provided");
  }

  const values = entries.map(([, value]) => value);
  const setClause = entries
    .map(([key], i) => `${key} = $${i + 1}`)
    .join(", ");

  await query(
    `UPDATE music.songs SET ${setClause} WHERE id = $${values.length + 1}`,
    [...values, songId]
  );
  return { success: true };
}

export async function createSong(artist_id: number, fields: Record<string, number | string | boolean>) {
  await checkAdmin();

  try {
    const entries = Object.entries(fields).filter(
      ([key, value]) => value !== undefined && ALLOWED_SONG_FIELDS.has(key)
    );

    if (entries.length === 0) {
      throw new Error("No valid fields provided");
    }
    const columns = entries.map(([key]) => key);
    const values = entries.map(([, value]) => value);
    const paramIndexes = values.map((_, i) => `$${i + 1}`);

    const sql = `
        INSERT INTO music.songs (${columns.join(", ")}, artist_id)
        VALUES (${paramIndexes.join(", ")}, $${values.length + 1})
        RETURNING *
        `;
    const result = await query(sql, [...values, artist_id]);
    return { success: true, song: result.rows[0] };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Video CRUD operations

export async function deleteVideo(id: number) {
  await checkAdmin();
  await query("DELETE FROM music.videos WHERE id = $1", [id]);
  return { success: true };
}

export async function editVideo(videoId: number, fields: Record<string, number | string | boolean>) {
  await checkAdmin();

  const entries = Object.entries(fields).filter(
    ([key, value]) => value !== undefined && ALLOWED_VIDEO_FIELDS.has(key)
  );

  if (entries.length === 0) {
    throw new Error("No valid fields provided");
  }

  // If setting as featured, unset any other featured video for this artist first
  if (fields.is_featured === true && fields.artist_id) {
    await query(
      "UPDATE music.videos SET is_featured = false WHERE artist_id = $1 AND id != $2 AND is_featured = true",
      [fields.artist_id, videoId]
    );
  }

  const values = entries.map(([, value]) => value);
  const setClause = entries
    .map(([key], i) => `${key} = $${i + 1}`)
    .join(", ");

  await query(
    `UPDATE music.videos SET ${setClause} WHERE id = $${values.length + 1}`,
    [...values, videoId]
  );
  return { success: true };
}

export async function createVideo(fields: Record<string, number | string | boolean>) {
  await checkAdmin();

  try {
    const entries = Object.entries(fields).filter(
      ([key, value]) => value !== undefined && ALLOWED_VIDEO_FIELDS.has(key)
    );

    if (entries.length === 0) {
      throw new Error("No valid fields provided");
    }

    // If setting as featured, unset any other featured video for this artist first
    if (fields.is_featured === true && fields.artist_id) {
      await query(
        "UPDATE music.videos SET is_featured = false WHERE artist_id = $1 AND is_featured = true",
        [fields.artist_id]
      );
    }

    const columns = entries.map(([key]) => key);
    const values = entries.map(([, value]) => value);
    const paramIndexes = values.map((_, i) => `$${i + 1}`);

    const sql = `
        INSERT INTO music.videos (${columns.join(", ")})
        VALUES (${paramIndexes.join(", ")})
        RETURNING *
        `;
    const result = await query(sql, values);
    return { success: true, video: result.rows[0] };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
