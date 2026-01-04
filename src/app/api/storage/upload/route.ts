import { uploadFile } from "@/lib/r2";

export async function POST(req: Request) {
  // Parse the multipart/form-data from the request
  const formData = await req.formData();

  const file = formData.get("file") as File | null;
  const artist = formData.get("artist") as string | null;
  const title = formData.get("title") as string | null;

  if (!file) return new Response(JSON.stringify({ error: "No file uploaded" }), { status: 400 });
  if (!artist || !title) return new Response(JSON.stringify({ error: "Missing artist or title" }), { status: 400 });

  const key = `artists/${artist}/${title}`;

  // Read file content into ArrayBuffer
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer); // if your R2 helper expects Node Buffer

  const url = await uploadFile({
    key,
    buffer,
    bucket: "music",
    contentType: file.type || "audio/mpeg",
  });

  return new Response(JSON.stringify({ url, key }), { status: 200 });
}
