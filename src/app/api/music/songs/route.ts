import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

const ALLOWED_FIELDS = new Set([
  "artist_id",
  "title",
  "src",
  "img",
  "is_cover",
]);

export async function GET(_req: NextRequest) {
  const response = await query("SELECT * FROM music.songs");
  return NextResponse.json(response.rows);
}

export async function POST(req: NextRequest) {
  const fields = await req.json();

  const entries = Object.entries(fields).filter(
    ([key, value]) => value !== undefined && ALLOWED_FIELDS.has(key)
  );

  if (entries.length === 0) {
    return NextResponse.json(
      { error: "No valid fields provided" },
      { status: 400 }
    );
  }

  const columns = entries.map(([key]) => key);
  const values = entries.map(([, value]) => value);
  const paramIndexes = values.map((_, i) => `$${i + 1}`);

  const sql = `
    INSERT INTO music.songs (${columns.join(", ")})
    VALUES (${paramIndexes.join(", ")})
    RETURNING *
  `;

  const result = await query(sql, values);

  return NextResponse.json(result.rows[0], { status: 201 });
}

export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { id, ...fields } = body;

  if (!id) {
    return new Response("Missing id", { status: 400 });
  }

  const entries = Object.entries(fields).filter(
    ([key, value]) => value !== undefined && ALLOWED_FIELDS.has(fields[key])
  );

  if (entries.length === 0) {
    return new Response("No fields to update", { status: 400 });
  }

  const entryEqualsParamIndex = entries
    .map(([key], i) => `${key} = $${i + 1}`)
    .join(", ");

  const values = entries.map(([, value]) => value);

  await query(
    `
    UPDATE music.songs
    SET ${entryEqualsParamIndex}
    WHERE id = $${values.length + 1}
    `,
    [...values, id]
  );

  return Response.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const { body } = await req.json();
  const { id } = body;

  if (!id) {
    return new Response("Missing id", { status: 400 });
  }

  await query(
    `
    DELETE FROM music.songs
    WHERE id = $1
    `
  ),
    [id];

  return Response.json({ ok: true });
}
